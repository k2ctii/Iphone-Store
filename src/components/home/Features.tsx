"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { Cpu, Camera, Battery, Wifi, Fingerprint, Sparkles } from "lucide-react";

const features = [
    {
        title: "M4 Chips",
        description: "The most advanced chips ever in a personal computer. M3, M3 Pro, and M3 Max.",
        icon: Cpu,
        colSpan: "md:col-span-2",
        gradient: "from-blue-500/20 to-cyan-500/20",
        iconColor: "text-blue-400",
        neonGlow: "group-hover:neon-glow-blue",
        borderColor: "group-hover:border-blue-500/20",
    },
    {
        title: "Liquid Retina XDR",
        description: "The best display ever in a laptop. Extreme Dynamic Range and 120Hz ProMotion.",
        gradient: "from-purple-500/20 to-pink-500/20",
        iconColor: "text-purple-400",
        neonGlow: "group-hover:neon-glow-purple",
        borderColor: "group-hover:border-purple-500/20",
    },
    {
        title: "Up to 22hrs Battery",
        description: "Go all day. And then some. The longest battery life ever in a Mac.",
        icon: Battery,
        colSpan: "md:col-span-1",
        gradient: "from-green-500/20 to-emerald-500/20",
        iconColor: "text-green-400",
        neonGlow: "group-hover:neon-glow-emerald",
        borderColor: "group-hover:border-green-500/20",
    },
    {
        title: "Ports & Connectivity",
        description: "MagSafe 3, three Thunderbolt 4 ports, HDMI, and SDXC card slot.",
        icon: Wifi,
        colSpan: "md:col-span-1",
        gradient: "from-orange-500/20 to-yellow-500/20",
        iconColor: "text-orange-400",
        neonGlow: "group-hover:neon-glow-pink",
        borderColor: "group-hover:border-orange-500/20",
    },
    {
        title: "Magic Keyboard",
        description: "A comfortable, quiet typing experience with a full-height function row and Touch ID.",
        icon: Fingerprint,
        colSpan: "md:col-span-1",
        gradient: "from-rose-500/20 to-red-500/20",
        iconColor: "text-rose-400",
        neonGlow: "group-hover:neon-glow-pink",
        borderColor: "group-hover:border-rose-500/20",
    },
    {
        title: "Apple Intelligence",
        description: "Personal intelligence at your fingertips. Writing tools, Image Playground, and more.",
        icon: Sparkles,
        colSpan: "md:col-span-1",
        gradient: "from-violet-500/20 to-indigo-500/20",
        iconColor: "text-violet-400",
        neonGlow: "group-hover:neon-glow-purple",
        borderColor: "group-hover:border-violet-500/20",
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function Features() {
    return (
        <section className="py-32 bg-deep-ocean relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-500/[0.04] blur-[150px] rounded-full" />

            <Container className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        <span className="gradient-text">Get to know</span>
                        <br />
                        <span className="gradient-text-accent">MacBook Pro.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-white/40 max-w-xl">
                        The ultimate pro laptop. Groundbreaking performance and amazing battery life.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                    {features.map((feature) => {
                        const Icon = feature.icon as React.ElementType;
                        return (
                            <motion.div
                                key={feature.title}
                                variants={itemVariants}
                                className={`${feature.colSpan} group`}
                            >
                                <div className={`dark-glass-card rounded-2xl p-8 h-full relative overflow-hidden transition-all duration-500`}>
                                    {/* Gradient background on hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <div className={`inline-flex p-3 rounded-2xl dark-glass-button mb-6 ${feature.iconColor}`}>
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                                        <p className="text-white/40 leading-relaxed group-hover:text-white/60 transition-colors duration-500">
                                            {feature.description}
                                        </p>
                                    </div>

                                    {/* Neon shimmer line at top */}
                                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </Container>
        </section>
    );
}
