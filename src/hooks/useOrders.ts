"use client";

import { useState, useEffect, useCallback } from "react";
import { getSupabase } from "@/lib/supabase";
import type { Order, OrderItem } from "@/lib/database.types";

interface OrderWithItems extends Order {
    order_items: OrderItem[];
}

interface UseOrdersReturn {
    orders: OrderWithItems[];
    loading: boolean;
    error: string | null;
    createOrder: (
        items: Array<{
            id: string;
            name: string;
            price: number;
            quantity: number;
            color?: string;
            storage?: string;
        }>
    ) => Promise<{ success: boolean; orderId?: string; error?: string }>;
    refetch: () => Promise<void>;
}

export function useOrders(): UseOrdersReturn {
    const [orders, setOrders] = useState<OrderWithItems[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchOrders = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);

            const supabase = getSupabase();
            const { data: { user } } = await supabase.auth.getUser();

            if (!user) {
                setOrders([]);
                return;
            }

            const { data, error: fetchError } = await supabase
                .from("orders")
                .select(`
          *,
          order_items (*)
        `)
                .order("created_at", { ascending: false });

            if (fetchError) throw fetchError;

            setOrders((data ?? []) as OrderWithItems[]);
        } catch (err) {
            const message = err instanceof Error ? err.message : "Failed to load orders";
            setError(message);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchOrders();
    }, [fetchOrders]);

    const createOrder = useCallback(
        async (
            items: Array<{
                id: string;
                name: string;
                price: number;
                quantity: number;
                color?: string;
                storage?: string;
            }>
        ) => {
            try {
                const supabase = getSupabase();
                const { data: { session } } = await supabase.auth.getSession();

                if (!session) {
                    return { success: false, error: "Please sign in to checkout" };
                }

                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/create-checkout`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${session.access_token}`,
                        },
                        body: JSON.stringify({ items }),
                    }
                );

                const data = await response.json();

                if (!response.ok) {
                    return { success: false, error: data.error ?? "Checkout failed" };
                }

                // Refetch orders after successful checkout
                await fetchOrders();

                return { success: true, orderId: data.order?.id };
            } catch (err) {
                const message = err instanceof Error ? err.message : "Checkout failed";
                return { success: false, error: message };
            }
        },
        [fetchOrders]
    );

    return { orders, loading, error, createOrder, refetch: fetchOrders };
}
