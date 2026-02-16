"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { X, Mail, Lock, User, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
    const { signIn, signUp } = useAuth();
    const [mode, setMode] = useState<"login" | "signup">("login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            if (mode === "signup") {
                const { error: err } = await signUp(email, password, fullName);
                if (err) {
                    setError(err);
                } else {
                    setSuccess(true);
                }
            } else {
                const { error: err } = await signIn(email, password);
                if (err) {
                    setError(err);
                } else {
                    onClose();
                    resetForm();
                }
            }
        } finally {
            setLoading(false);
        }
    };

    const resetForm = () => {
        setEmail("");
        setPassword("");
        setFullName("");
        setError(null);
        setSuccess(false);
    };

    const switchMode = () => {
        setMode(mode === "login" ? "signup" : "login");
        resetForm();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                >
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-md"
                    >
                        <div className="dark-glass-card rounded-3xl p-8 border border-white/[0.08]">
                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 text-white/40 hover:text-white/80 transition-colors rounded-full hover:bg-white/5"
                            >
                                <X className="h-5 w-5" />
                            </button>

                            {/* Header */}
                            <div className="text-center mb-8">
                                <h2 className="text-2xl font-bold text-white mb-2">
                                    {mode === "login" ? "Welcome back" : "Create account"}
                                </h2>
                                <p className="text-sm text-white/40">
                                    {mode === "login"
                                        ? "Sign in to access your account"
                                        : "Join us for a premium experience"}
                                </p>
                            </div>

                            {success ? (
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                                        <Mail className="h-8 w-8 text-emerald-400" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-2">Check your email</h3>
                                    <p className="text-sm text-white/40 mb-6">
                                        We sent a confirmation link to <br />
                                        <span className="text-white/60">{email}</span>
                                    </p>
                                    <Button
                                        onClick={() => {
                                            onClose();
                                            resetForm();
                                        }}
                                        className="rounded-full bg-white text-black hover:bg-white/90"
                                    >
                                        Got it
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {/* Name field (signup only) */}
                                    {mode === "signup" && (
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                                            <input
                                                type="text"
                                                placeholder="Full name"
                                                value={fullName}
                                                onChange={(e) => setFullName(e.target.value)}
                                                className="w-full h-12 pl-11 pr-4 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
                                            />
                                        </div>
                                    )}

                                    {/* Email */}
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                                        <input
                                            type="email"
                                            placeholder="Email address"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            className="w-full h-12 pl-11 pr-4 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
                                        />
                                    </div>

                                    {/* Password */}
                                    <div className="relative">
                                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                            minLength={6}
                                            className="w-full h-12 pl-11 pr-4 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
                                        />
                                    </div>

                                    {/* Error */}
                                    {error && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-sm text-red-400 bg-red-500/10 rounded-lg px-4 py-2"
                                        >
                                            {error}
                                        </motion.p>
                                    )}

                                    {/* Submit */}
                                    <Button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full h-12 rounded-full bg-white text-black hover:bg-white/90 font-medium text-sm transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                                    >
                                        {loading ? (
                                            <Loader2 className="h-4 w-4 animate-spin" />
                                        ) : mode === "login" ? (
                                            "Sign In"
                                        ) : (
                                            "Create Account"
                                        )}
                                    </Button>

                                    {/* Switch mode */}
                                    <p className="text-center text-sm text-white/40">
                                        {mode === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
                                        <button
                                            type="button"
                                            onClick={switchMode}
                                            className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                                        >
                                            {mode === "login" ? "Sign up" : "Sign in"}
                                        </button>
                                    </p>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
