"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useCart } from "@/lib/store";
import { ShoppingBag, ArrowRight } from "lucide-react";

const products = [
    {
        id: "iphone-16-pro-max",
        name: "iPhone 16 Pro Max",
        price: 1199,
        tagline: "The biggest upgrade to Pro.",
        colors: [
            { name: "Desert Titanium", class: "bg-[#BFA48F]" },
            { name: "Natural Titanium", class: "bg-[#C2BCB2]" },
            { name: "White Titanium", class: "bg-[#F2F0ED]" },
            { name: "Black Titanium", class: "bg-[#3C3B37]" },
        ],
        badge: "New",
        gradient: "from-amber-900/20 via-zinc-900 to-zinc-900",
    },
    {
        id: "iphone-16-pro",
        name: "iPhone 16 Pro",
        price: 999,
        tagline: "The ultimate iPhone.",
        colors: [
            { name: "Desert Titanium", class: "bg-[#BFA48F]" },
            { name: "Natural Titanium", class: "bg-[#C2BCB2]" },
            { name: "White Titanium", class: "bg-[#F2F0ED]" },
            { name: "Black Titanium", class: "bg-[#3C3B37]" },
        ],
        badge: "Popular",
        gradient: "from-slate-800/30 via-zinc-900 to-zinc-900",
    },
    {
        id: "iphone-16",
        name: "iPhone 16",
        price: 799,
        tagline: "A total powerhouse.",
        colors: [
            { name: "Ultramarine", class: "bg-[#7A96D6]" },
            { name: "Teal", class: "bg-[#B0D4C1]" },
            { name: "Pink", class: "bg-[#F2B8C6]" },
            { name: "White", class: "bg-[#F2F0ED]" },
            { name: "Black", class: "bg-[#3C3D41]" },
        ],
        badge: null,
        gradient: "from-blue-900/20 via-zinc-900 to-zinc-900",
    },
    {
        id: "iphone-15",
        name: "iPhone 15",
        price: 699,
        tagline: "As amazing as ever.",
        colors: [
            { name: "Blue", class: "bg-[#BECDE8]" },
            { name: "Pink", class: "bg-[#F5D1D8]" },
            { name: "Yellow", class: "bg-[#F0E5C8]" },
            { name: "Green", class: "bg-[#D1E2D0]" },
            { name: "Black", class: "bg-[#3C3D41]" },
        ],
        badge: null,
        gradient: "from-cyan-900/20 via-zinc-900 to-zinc-900",
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7 } },
};

export function ProductGrid() {
    const { addItem } = useCart();

    const handleAddToCart = (product: typeof products[0]) => {
        addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            image: "/placeholder",
            quantity: 1,
        });
    };

    return (
        <section className="py-32 bg-carbon relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-zinc-950/50 to-transparent" />
            {/* Subtle ambient glow */}
            <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-500/[0.03] blur-[150px] rounded-full" />

            <Container className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6"
                >
                    <div>
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
                            <span className="gradient-text">The lineup.</span>
                        </h2>
                        <p className="text-lg text-white/40">
                            Which iPhone is right for you?
                        </p>
                    </div>
                    <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium flex items-center gap-1 group">
                        Compare all models
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            variants={cardVariants}
                            className="group"
                        >
                            <div className="dark-glass-card rounded-2xl overflow-hidden h-full flex flex-col">
                                {/* Product Image Area */}
                                <div className={`relative w-full aspect-[3/4] bg-gradient-to-br ${product.gradient} flex items-center justify-center overflow-hidden`}>
                                    {/* Badge */}
                                    {product.badge && (
                                        <div className="absolute top-4 left-4 z-10">
                                            <span className="dark-glass-button px-3 py-1 rounded-full text-[11px] font-medium text-white/80">
                                                {product.badge}
                                            </span>
                                        </div>
                                    )}

                                    {/* Hover glow */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Floating product name */}
                                    <motion.div
                                        className="text-center"
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <p className="text-3xl font-bold gradient-text">{product.name.split(" ").pop()}</p>
                                        <p className="text-white/20 text-sm mt-1">Product image</p>
                                    </motion.div>
                                </div>

                                {/* Product Info */}
                                <div className="p-6 flex flex-col flex-1">
                                    {/* Color swatches */}
                                    <div className="flex gap-2 mb-4">
                                        {product.colors.map((color) => (
                                            <button
                                                key={color.name}
                                                title={color.name}
                                                className={`w-4 h-4 rounded-full ${color.class} ring-1 ring-white/10 hover:ring-white/30 transition-all duration-200 hover:scale-110`}
                                            />
                                        ))}
                                    </div>

                                    <h3 className="text-lg font-semibold text-white mb-1">{product.name}</h3>
                                    <p className="text-sm text-white/40 mb-3">{product.tagline}</p>
                                    <p className="text-lg font-semibold text-white mb-6">
                                        From <span className="gradient-text-accent">${product.price}</span>
                                    </p>

                                    {/* Buttons */}
                                    <div className="mt-auto flex flex-col gap-2">
                                        <Button
                                            onClick={() => handleAddToCart(product)}
                                            className="w-full rounded-full h-11 bg-white text-black hover:bg-white/90 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] font-medium"
                                        >
                                            <ShoppingBag className="mr-2 h-4 w-4" />
                                            Buy
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            className="w-full rounded-full h-11 text-blue-400 hover:text-blue-300 hover:bg-blue-500/5"
                                        >
                                            Learn more
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </section>
    );
}
