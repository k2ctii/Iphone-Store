"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ChevronRight, Play } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-galaxy flex items-center justify-center">
            {/* Animated background orbs — neon-colored */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Top-left orb */}
                <motion.div
                    animate={{
                        x: [0, 30, 0],
                        y: [0, -20, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-500/15 blur-[120px]"
                />
                {/* Bottom-right orb */}
                <motion.div
                    animate={{
                        x: [0, -30, 0],
                        y: [0, 20, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-purple-500/15 blur-[120px]"
                />
                {/* Center orb — breathing glow */}
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.06, 0.12, 0.06]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cyan-400/5 blur-[100px]"
                />
            </div>

            {/* Subtle grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: "80px 80px",
                }}
            />

            <Container className="relative z-10 flex flex-col items-center text-center py-32">
                {/* Announcement badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="dark-glass-button inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 cursor-pointer group">
                        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                        <span className="text-xs font-medium text-white/70 group-hover:text-white/90 transition-colors">
                            New Arrival — iPhone 16 Pro Max
                        </span>
                        <ChevronRight className="h-3 w-3 text-white/40 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                </motion.div>

                {/* Main headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-6"
                >
                    <span className="gradient-text-titanium">Titanium.</span>
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="text-3xl md:text-5xl font-semibold tracking-tight text-white/90 mb-4"
                >
                    So strong. So light. So Pro.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-lg md:text-xl text-white/40 max-w-lg mb-12"
                >
                    iPhone 16 Pro Max. Forged in titanium. Powered by the A18 Pro chip.
                    The thinnest borders ever on iPhone.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.65 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Button
                        size="lg"
                        className="rounded-full px-10 h-13 text-base bg-white text-black hover:bg-white/90 transition-all duration-300 shadow-lg shadow-white/10 hover:shadow-white/20 hover:scale-[1.02] active:scale-[0.98]"
                    >
                        Buy Now
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className="rounded-full px-10 h-13 text-base border-white/10 text-white/80 hover:text-white hover:bg-white/5 hover:border-white/20 transition-all duration-300 group"
                    >
                        <Play className="mr-2 h-4 w-4 group-hover:text-cyan-400 transition-colors" />
                        Watch the film
                    </Button>
                </motion.div>

                {/* Product Showcase */}
                <motion.div
                    initial={{ opacity: 0, y: 60, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-20 w-full max-w-5xl relative"
                >
                    {/* Neon glow behind product */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500/12 via-purple-500/8 to-cyan-500/5 blur-3xl rounded-3xl" />

                    {/* Product dark glass container */}
                    <div className="relative dark-glass-card rounded-[2rem] p-1 luminous-border">
                        <div className="w-full h-72 md:h-[480px] rounded-[1.75rem] bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 flex items-center justify-center overflow-hidden relative">
                            {/* Subtle inner reflections */}
                            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/[0.03] to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />

                            {/* Floating elements */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="text-center"
                            >
                                <p className="text-5xl md:text-7xl font-bold gradient-text-neon mb-2">iPhone 16 Pro</p>
                                <p className="text-white/30 text-lg">Product image placeholder</p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Bottom gradient fade */}
                    <div className="absolute -bottom-20 left-0 right-0 h-20 bg-gradient-to-t from-[#1a0033] to-transparent" />
                </motion.div>
            </Container>
        </section>
    );
}
