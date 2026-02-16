"use client";

import Link from "next/link";
import { ShoppingBag, Menu, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { useCart } from "@/lib/store";
import { CartSheet } from "@/components/cart/CartSheet";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["Store", "iPhone", "Mac", "iPad", "Watch", "AirPods", "Support"];

export function Header() {
    const { toggleCart, items } = useCart();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? "dark-glass-header shadow-lg shadow-black/30"
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
        </>
    );
}
