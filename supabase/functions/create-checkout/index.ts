import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
        "authorization, x-client-info, apikey, content-type",
};

interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    color?: string;
    storage?: string;
}

interface CheckoutRequest {
    items: CartItem[];
    shipping_address?: Record<string, string>;
}

Deno.serve(async (req: Request) => {
    // Handle CORS preflight
    if (req.method === "OPTIONS") {
        return new Response("ok", { headers: corsHeaders });
    }

    try {
        // Get auth token from request
        const authHeader = req.headers.get("Authorization");
        if (!authHeader) {
            return new Response(
                JSON.stringify({ error: "Missing authorization header" }),
                { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
            );
        }

        // Create Supabase client with user's auth
        const supabase = createClient(
            Deno.env.get("SUPABASE_URL") ?? "",
            Deno.env.get("SUPABASE_ANON_KEY") ?? "",
            {
                global: { headers: { Authorization: authHeader } },
            }
        );

        // Get authenticated user
        const { data: { user }, error: userError } = await supabase.auth.getUser();
        if (userError || !user) {
            return new Response(
                JSON.stringify({ error: "Unauthorized" }),
                { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
            );
        }

        // Parse request body
        const { items, shipping_address } = (await req.json()) as CheckoutRequest;

        if (!items || items.length === 0) {
            return new Response(
                JSON.stringify({ error: "Cart is empty" }),
                { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
            );
        }

        // Validate products exist and prices match
        const productIds = items.map((item) => item.id);
        const { data: products, error: productsError } = await supabase
            .from("products")
            .select("id, name, price")
            .in("id", productIds);

        if (productsError) {
            throw productsError;
        }

        // Build validated items and calculate total
        const productMap = new Map(products?.map((p) => [p.id, p]) ?? []);
        let total = 0;

        const validatedItems = items.map((item) => {
            const product = productMap.get(item.id);
            if (!product) {
                throw new Error(`Product not found: ${item.id}`);
            }
            // Use server-side price (security!)
            const itemTotal = product.price * item.quantity;
            total += itemTotal;

            return {
                product_id: product.id,
                product_name: product.name,
                product_price: product.price,
                quantity: item.quantity,
                color: item.color ?? null,
                storage: item.storage ?? null,
            };
        });

        // Create order
        const { data: order, error: orderError } = await supabase
            .from("orders")
            .insert({
                user_id: user.id,
                total,
                status: "pending",
                shipping_address: shipping_address ?? null,
            })
            .select()
            .single();

        if (orderError) {
            throw orderError;
        }

        // Create order items
        const orderItems = validatedItems.map((item) => ({
            ...item,
            order_id: order.id,
        }));

        const { error: itemsError } = await supabase
            .from("order_items")
            .insert(orderItems);

        if (itemsError) {
            throw itemsError;
        }

        return new Response(
            JSON.stringify({
                success: true,
                order: {
                    id: order.id,
                    status: order.status,
                    total: order.total,
                    created_at: order.created_at,
                    items: validatedItems,
                },
            }),
            {
                status: 200,
                headers: { ...corsHeaders, "Content-Type": "application/json" },
            }
        );
    } catch (error) {
        const message = error instanceof Error ? error.message : "Unknown error";
        return new Response(
            JSON.stringify({ error: message }),
            {
                status: 500,
                headers: { ...corsHeaders, "Content-Type": "application/json" },
            }
        );
    }
});
