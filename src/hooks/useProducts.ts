"use client";

import { useState, useEffect, useRef } from "react";
import { getSupabase } from "@/lib/supabase";
import type { ProductWithColors } from "@/lib/database.types";

interface UseProductsReturn {
    products: ProductWithColors[];
    loading: boolean;
    error: string | null;
    refetch: () => Promise<void>;
}

// Module-level SWR cache — survives component remounts
let cachedProducts: ProductWithColors[] | null = null;
let cacheTimestamp = 0;
const CACHE_TTL_MS = 60_000; // 60 seconds

export function useProducts(): UseProductsReturn {
    const [products, setProducts] = useState<ProductWithColors[]>(cachedProducts ?? []);
    const [loading, setLoading] = useState(cachedProducts === null);
    const [error, setError] = useState<string | null>(null);
    const isMounted = useRef(true);

    const fetchProducts = async (background = false) => {
        try {
            if (!background) {
                setLoading(true);
            }
            setError(null);

            const supabase = getSupabase();
            const { data, error: fetchError } = await supabase
                .from("products")
                .select(`
          *,
          product_colors (
            id,
            name,
            hex_color,
            display_order
          )
        `)
                .eq("is_active", true)
                .order("price", { ascending: false });

            if (fetchError) {
                throw fetchError;
            }

            // Sort colors by display_order
            const rawProducts = (data ?? []) as unknown as ProductWithColors[];
            const sorted = rawProducts.map((p) => ({
                ...p,
                product_colors: [...(p.product_colors ?? [])].sort(
                    (a, b) => a.display_order - b.display_order
                ),
            }));

            // Update module-level cache
            cachedProducts = sorted;
            cacheTimestamp = Date.now();

            if (isMounted.current) {
                setProducts(sorted);
            }
        } catch (err) {
            const message = err instanceof Error ? err.message : "Failed to load products";
            if (isMounted.current) {
                setError(message);
            }
            console.error("useProducts error:", err);
        } finally {
            if (isMounted.current) {
                setLoading(false);
            }
        }
    };

    useEffect(() => {
        isMounted.current = true;

        if (cachedProducts !== null) {
            // Serve cached data immediately (0ms)
            setProducts(cachedProducts);
            setLoading(false);

            // Revalidate in background if stale
            if (Date.now() - cacheTimestamp > CACHE_TTL_MS) {
                fetchProducts(true);
            }
        } else {
            fetchProducts();
        }

        return () => {
            isMounted.current = false;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { products, loading, error, refetch: () => fetchProducts(false) };
}
