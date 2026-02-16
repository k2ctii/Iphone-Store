"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Lucas M.",
        role: "Filmmaker",
        text: "The M4 Max renders 8K video in real-time without breaking a sweat. It's an entire editing studio in my backpack.",
        rating: 5,
    },
    {
        name: "Sofia R.",
        role: "Developer",
        text: "Compiling my largest projects takes seconds on the MacBook Pro. The battery life is unbelievable for this much power.",
        rating: 5,
    },
    {
        name: "Daniel K.",
        role: "Photographer",
        text: "The Liquid Retina XDR display is a game changer for editing photos on the go. Perfect color accuracy right out of the box.",
        rating: 5,
    },
];

export function Testimonials() {
    return (
        <section className="py-32 bg-emerald-night relative overflow-hidden">
            {/* Decorative orbs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/[0.04] blur-[150px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/[0.03] blur-[120px] rounded-full" />

            <Container className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
                        <span className="gradient-text">Loved by millions.</span>
                    </h2>
                    <p className="text-lg text-white/40 max-w-md mx-auto">
                        Join the community. Hear what our customers have to say.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                        >
                            <div className="dark-glass-card rounded-2xl p-8 h-full flex flex-col">
                                {/* Stars */}
                                <div className="flex gap-1 mb-6">
                                    {Array.from({ length: t.rating }).map((_, j) => (
                                        <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="text-white/60 leading-relaxed flex-1 mb-6 text-[15px]">
                                    &ldquo;{t.text}&rdquo;
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-emerald-500/30 to-cyan-500/30 flex items-center justify-center ring-1 ring-emerald-400/20">
                                        <span className="text-sm font-semibold text-white/80">{t.name[0]}</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-white/90">{t.name}</p>
                                        <p className="text-xs text-white/40">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
