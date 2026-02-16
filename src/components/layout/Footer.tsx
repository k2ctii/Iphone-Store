"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";

const footerLinks = [
    {
        title: "Shop and Learn",
        links: ["Store", "Mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Home", "AirTag", "Accessories"],
    },
    {
        title: "Services",
        links: ["Apple Music", "Apple TV+", "Apple Fitness+", "Apple News+", "Apple Arcade", "iCloud"],
    },
    {
        title: "Account",
        links: ["Manage Your ID", "Apple Store Account", "iCloud.com"],
    },
    {
        title: "About Apple",
        links: ["Newsroom", "Careers", "Investors", "Ethics & Compliance", "Events"],
    },
];

export function Footer() {
    return (
        <footer className="bg-[#080808] border-t border-white/[0.04] relative overflow-hidden">
            {/* Decorative subtle glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <Container>
                {/* Links Grid */}
                <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
                    {footerLinks.map((section, i) => (
                        <motion.div
                            key={section.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                        >
                            <h3 className="text-xs font-semibold text-white/70 uppercase tracking-wider mb-5">
                                {section.title}
                            </h3>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-sm text-white/30 hover:text-white/70 transition-colors duration-300"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom */}
                <div className="py-6 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-white/20">
                        &copy; {new Date().getFullYear()} iPhone Store. All rights reserved. Not affiliated with Apple Inc.
                    </p>
                    <div className="flex gap-6">
                        {["Privacy Policy", "Terms of Use", "Sales Policy"].map((link) => (
                            <a key={link} href="#" className="text-xs text-white/20 hover:text-white/50 transition-colors">
                                {link}
                            </a>
                        ))}
                    </div>
                </div>
            </Container>
        </footer>
    );
}
