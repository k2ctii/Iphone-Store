export interface Database {
    public: {
        Tables: {
            products: {
                Row: {
                    id: string;
                    slug: string;
                    name: string;
                    price: number;
                    tagline: string | null;
                    badge: string | null;
                    gradient: string | null;
                    image_url: string | null;
                    description: string | null;
                    storage_capacity: string[] | null;
                    is_active: boolean;
                    created_at: string;
                    updated_at: string;
                };
                Insert: {
                    id?: string;
                    slug: string;
                    name: string;
                    price: number;
                    tagline?: string | null;
                    badge?: string | null;
                    gradient?: string | null;
                    image_url?: string | null;
                    description?: string | null;
                    storage_capacity?: string[] | null;
                    is_active?: boolean;
                    created_at?: string;
                    updated_at?: string;
                };
                Update: {
                    id?: string;
                    slug?: string;
                    name?: string;
                    price?: number;
                    tagline?: string | null;
                    badge?: string | null;
                    gradient?: string | null;
                    image_url?: string | null;
                    description?: string | null;
                    storage_capacity?: string[] | null;
                    is_active?: boolean;
                    updated_at?: string;
                };
            };
            product_colors: {
                Row: {
                    id: string;
                    product_id: string;
                    name: string;
                    hex_color: string;
                    display_order: number;
                };
                Insert: {
                    id?: string;
                    product_id: string;
                    name: string;
                    hex_color: string;
                    display_order?: number;
                };
                Update: {
                    id?: string;
                    product_id?: string;
                    name?: string;
                    hex_color?: string;
                    display_order?: number;
                };
            };
            profiles: {
                Row: {
                    id: string;
                    full_name: string | null;
                    avatar_url: string | null;
                    phone: string | null;
                    address_line1: string | null;
                    address_line2: string | null;
                    city: string | null;
                    state: string | null;
                    zip_code: string | null;
                    country: string | null;
                    created_at: string;
                    updated_at: string;
                };
                Insert: {
                    id: string;
                    full_name?: string | null;
                    avatar_url?: string | null;
                    phone?: string | null;
                    address_line1?: string | null;
                    address_line2?: string | null;
                    city?: string | null;
                    state?: string | null;
                    zip_code?: string | null;
                    country?: string | null;
                    created_at?: string;
                    updated_at?: string;
                };
                Update: {
                    full_name?: string | null;
                    avatar_url?: string | null;
                    phone?: string | null;
                    address_line1?: string | null;
                    address_line2?: string | null;
                    city?: string | null;
                    state?: string | null;
                    zip_code?: string | null;
                    country?: string | null;
                    updated_at?: string;
                };
            };
            orders: {
                Row: {
                    id: string;
                    user_id: string | null;
                    status: string;
                    total: number;
                    shipping_address: Record<string, unknown> | null;
                    payment_intent_id: string | null;
                    created_at: string;
                    updated_at: string;
                };
                Insert: {
                    id?: string;
                    user_id?: string | null;
                    status?: string;
                    total: number;
                    shipping_address?: Record<string, unknown> | null;
                    payment_intent_id?: string | null;
                    created_at?: string;
                    updated_at?: string;
                };
                Update: {
                    user_id?: string | null;
                    status?: string;
                    total?: number;
                    shipping_address?: Record<string, unknown> | null;
                    payment_intent_id?: string | null;
                    updated_at?: string;
                };
            };
            order_items: {
                Row: {
                    id: string;
                    order_id: string;
                    product_id: string | null;
                    product_name: string;
                    product_price: number;
                    quantity: number;
                    color: string | null;
                    storage: string | null;
                };
                Insert: {
                    id?: string;
                    order_id: string;
                    product_id?: string | null;
                    product_name: string;
                    product_price: number;
                    quantity?: number;
                    color?: string | null;
                    storage?: string | null;
                };
                Update: {
                    order_id?: string;
                    product_id?: string | null;
                    product_name?: string;
                    product_price?: number;
                    quantity?: number;
                    color?: string | null;
                    storage?: string | null;
                };
            };
            reviews: {
                Row: {
                    id: string;
                    user_id: string | null;
                    product_id: string;
                    rating: number;
                    title: string | null;
                    body: string | null;
                    author_name: string | null;
                    created_at: string;
                };
                Insert: {
                    id?: string;
                    user_id?: string | null;
                    product_id: string;
                    rating: number;
                    title?: string | null;
                    body?: string | null;
                    author_name?: string | null;
                    created_at?: string;
                };
                Update: {
                    user_id?: string | null;
                    product_id?: string;
                    rating?: number;
                    title?: string | null;
                    body?: string | null;
                    author_name?: string | null;
                };
            };
        };
        Views: Record<string, never>;
        Functions: Record<string, never>;
        Enums: Record<string, never>;
    };
}

// Convenience type aliases
export type Product = Database["public"]["Tables"]["products"]["Row"];
export type ProductColor = Database["public"]["Tables"]["product_colors"]["Row"];
export type Profile = Database["public"]["Tables"]["profiles"]["Row"];
export type Order = Database["public"]["Tables"]["orders"]["Row"];
export type OrderItem = Database["public"]["Tables"]["order_items"]["Row"];
export type Review = Database["public"]["Tables"]["reviews"]["Row"];

// Product with colors joined
export interface ProductWithColors extends Product {
    product_colors: ProductColor[];
}
