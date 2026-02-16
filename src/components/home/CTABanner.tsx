"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTABanner() {
    return (
        <section className="py-32 bg-galaxy relative overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0">
                <motion.div
                    animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 opacity-40"
                    style={{
                        background: "linear-gradient(135deg, #1e3a5f 0%, #2d1b4e 25%, #1a1a2e 50%, #16213e 75%, #0f3460 100%)",
                        backgroundSize: "400% 400%",
                    }}
                />
            </div>

            <Container className="relative z-10">
                <div className="dark-glass-card luminous-border rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
                    {/* Inner decorative orbs */}
                    <div className="absolute -top-20 -left-20 w-60 h-60 bg-blue-500/12 blur-[100px] rounded-full" />
                    <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-purple-500/12 blur-[100px] rounded-full" />

                    <div className="relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <p className="text-sm font-medium text-cyan-400 uppercase tracking-widest mb-4">
                                Ready to upgrade?
                            </p>
                            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                                <span className="gradient-text">Trade in your old iPhone.</span>
                                <br />
                                <span className="text-white/90">Get credit toward a new one.</span>
                            </h2>
                            <p className="text-lg text-white/40 max-w-lg mx-auto mb-10">
                                With Apple Trade In, you can get a great value for your current device and apply it toward a new one.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    size="lg"
                                    className="rounded-full px-10 h-13 text-base bg-white text-black hover:bg-white/90 transition-all duration-300 shadow-lg shadow-white/10 hover:shadow-white/20 hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    Get your estimate
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="rounded-full px-10 h-13 text-base border-white/10 text-white/80 hover:text-white hover:bg-white/5 hover:border-white/20 transition-all duration-300"
                                >
                                    Visit a store
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
