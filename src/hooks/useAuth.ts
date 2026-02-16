"use client";

import { useCallback } from "react";
import { getSupabase } from "@/lib/supabase";
import { useAuthContext } from "@/components/providers/SupabaseProvider";
import type { User, Session } from "@supabase/supabase-js";

interface UseAuthReturn {
    user: User | null;
    session: Session | null;
    loading: boolean;
    signUp: (email: string, password: string, fullName?: string) => Promise<{ error: string | null }>;
    signIn: (email: string, password: string) => Promise<{ error: string | null }>;
    signOut: () => Promise<void>;
}

export function useAuth(): UseAuthReturn {
    // Consume auth state from SupabaseProvider — no duplicate subscription
    const { user, session, loading } = useAuthContext();

    const signUp = useCallback(
        async (email: string, password: string, fullName?: string) => {
            const supabase = getSupabase();
            const { error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: { full_name: fullName },
                },
            });
            return { error: error?.message ?? null };
        },
        []
    );

    const signIn = useCallback(async (email: string, password: string) => {
        const supabase = getSupabase();
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        return { error: error?.message ?? null };
    }, []);

    const signOut = useCallback(async () => {
        const supabase = getSupabase();
        await supabase.auth.signOut();
    }, []);

    return { user, session, loading, signUp, signIn, signOut };
}

