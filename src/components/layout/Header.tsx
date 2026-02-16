"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { ShoppingBag, Menu, Search, X, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { useCart } from "@/lib/store";
import { useAuth } from "@/hooks/useAuth";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Lazy-load heavy modals — only downloaded when user interacts
const CartSheet = dynamic(() => import("@/components/cart/CartSheet").then(m => m.CartSheet), { ssr: false });
const AuthModal = dynamic(() => import("@/components/auth/AuthModal").then(m => m.AuthModal), { ssr: false });

const navLinks = ["Store", "iPhone", "Mac", "iPad", "Watch", "AirPods", "Support"];

export function Header() {
    const { toggleCart, items } = useCart();
    const { user, loading: authLoading, signOut } = useAuth();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [authOpen, setAuthOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    // RAF-throttled scroll — max 1 setState per animation frame instead of 60/sec
    const rafRef = useRef<number>(0);
    const handleScroll = useCallback(() => {
        if (rafRef.current) return;
        rafRef.current = requestAnimationFrame(() => {
            setScrolled(window.scrollY > 20);
            rafRef.current = 0;
        });
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [handleScroll]);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? "frosted-medium shadow-lg shadow-black/30"
                    : "bg-transparent"
                    }`}
            >
                <Container>
                    <div className="flex h-14 items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="relative group">
                            <span className="text-lg font-bold tracking-tight text-white/90 group-hover:text-white transition-colors">
                                iPhone
                            </span>
                            <span className="text-lg font-light tracking-tight text-white/50 group-hover:text-white/70 transition-colors ml-1">
                                Store
                            </span>
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden lg:flex items-center gap-1">
                            {navLinks.map((item) => (
                                <Link
                                    key={item}
                                    href="#"
                                    className="relative px-4 py-2 text-[13px] font-medium text-white/60 hover:text-white transition-all duration-300 group"
                                >
                                    {item}
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gradient-to-r from-cyan-400/50 to-purple-400/50 group-hover:w-[60%] transition-all duration-300" />
                                </Link>
                            ))}
                        </nav>

                        {/* Actions */}
                        <div className="flex items-center gap-1">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="hidden sm:flex h-9 w-9 text-white/60 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300"
                            >
                                <Search className="h-4 w-4" />
                            </Button>

                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={toggleCart}
                                className="relative h-9 w-9 text-white/60 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300"
                            >
                                <ShoppingBag className="h-4 w-4" />
                                <AnimatePresence>
                                    {items.length > 0 && (
                                        <motion.span
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            exit={{ scale: 0 }}
                                            className="absolute -top-0.5 -right-0.5 h-4 w-4 bg-blue-500 text-white text-[9px] font-bold flex items-center justify-center rounded-full shadow-lg shadow-blue-500/30"
                                        >
                                            {items.length}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </Button>

                            {/* Auth button */}
                            {!authLoading && (
                                <>
                                    {user ? (
                                        <div className="relative">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={() => setUserMenuOpen(!userMenuOpen)}
                                                className="h-9 w-9 text-white/60 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300"
                                            >
                                                <div className="h-6 w-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                                                    <span className="text-[10px] font-bold text-white">
                                                        {user.email?.charAt(0).toUpperCase()}
                                                    </span>
                                                </div>
                                            </Button>

                                            {/* User dropdown */}
                                            <AnimatePresence>
                                                {userMenuOpen && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 5, scale: 0.95 }}
                                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                                        exit={{ opacity: 0, y: 5, scale: 0.95 }}
                                                        transition={{ duration: 0.15 }}
                                                        className="absolute right-0 top-12 w-56 dark-glass-card rounded-2xl p-2 border border-white/[0.08]"
                                                    >
                                                        <div className="px-3 py-2 border-b border-white/[0.06] mb-1">
                                                            <p className="text-xs text-white/40">Signed in as</p>
                                                            <p className="text-sm text-white/80 truncate">{user.email}</p>
                                                        </div>
                                                        <button
                                                            onClick={async () => {
                                                                await signOut();
                                                                setUserMenuOpen(false);
                                                            }}
                                                            className="w-full flex items-center gap-2 px-3 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                                                        >
                                                            <LogOut className="h-4 w-4" />
                                                            Sign out
                                                        </button>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ) : (
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => setAuthOpen(true)}
                                            className="h-9 w-9 text-white/60 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300"
                                        >
                                            <User className="h-4 w-4" />
                                        </Button>
                                    )}
                                </>
                            )}

                            <Button
                                variant="ghost"
                                size="icon"
                                className="lg:hidden h-9 w-9 text-white/60 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300"
                                onClick={() => setMobileOpen(!mobileOpen)}
                            >
                                {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                            </Button>
                        </div>
                    </div>
                </Container>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed inset-0 z-40 pt-14 lg:hidden"
                    >
                        <div className="absolute inset-0 dark-glass-strong" onClick={() => setMobileOpen(false)} />
                        <nav className="relative p-6 flex flex-col gap-1">
                            {navLinks.map((item, i) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <Link
                                        href="#"
                                        className="block py-3 text-2xl font-light text-white/70 hover:text-white border-b border-white/5 transition-colors"
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        {item}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>

            <CartSheet />
            <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
        </>
    );
}
