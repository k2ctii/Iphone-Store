"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useCart } from "@/lib/store";
import { useProducts } from "@/hooks/useProducts";
import { useCallback } from "react";
import { ShoppingBag, ArrowRight, Loader2, RefreshCw } from "lucide-react";
import type { ProductWithColors } from "@/lib/database.types";

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7 } },
};

// Skeleton component for loading state
function ProductSkeleton() {
    return (
        <div className="dark-glass-card rounded-2xl overflow-hidden h-full flex flex-col animate-pulse">
            <div className="w-full aspect-[3/4] bg-white/[0.03]" />
            <div className="p-6 flex flex-col flex-1">
                <div className="flex gap-2 mb-4">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-4 h-4 rounded-full bg-white/[0.06]" />
                    ))}
                </div>
                <div className="h-5 bg-white/[0.06] rounded w-3/4 mb-2" />
                <div className="h-4 bg-white/[0.04] rounded w-1/2 mb-3" />
                <div className="h-5 bg-white/[0.06] rounded w-1/3 mb-6" />
                <div className="mt-auto space-y-2">
                    <div className="h-11 bg-white/[0.06] rounded-full" />
                    <div className="h-11 bg-white/[0.03] rounded-full" />
                </div>
            </div>
        </div>
    );
}

export function ProductGrid() {
    const { addItem } = useCart();
    const { products, loading, error, refetch } = useProducts();

    const handleAddToCart = useCallback((product: ProductWithColors) => {
        addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image_url ?? "/placeholder",
            quantity: 1,
        });
    }, [addItem]);

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

                {/* Error state */}
                {error && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-16"
                    >
                        <div className="dark-glass-card rounded-3xl p-8 max-w-md mx-auto">
                            <p className="text-white/40 text-sm mb-4">{error}</p>
                            <Button
                                onClick={refetch}
                                className="rounded-full bg-white text-black hover:bg-white/90"
                            >
                                <RefreshCw className="mr-2 h-4 w-4" />
                                Try again
                            </Button>
                        </div>
                    </motion.div>
                )}

                {/* Loading state */}
                {loading && !error && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map((i) => (
                            <ProductSkeleton key={i} />
                        ))}
                    </div>
                )}

                {/* Products grid */}
                {!loading && !error && (
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
                                    <div className={`relative w-full aspect-[3/4] bg-gradient-to-br ${product.gradient ?? 'from-zinc-800 to-zinc-900'} flex items-center justify-center overflow-hidden`}>
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
                                            {product.product_colors.map((color) => (
                                                <button
                                                    key={color.id}
                                                    title={color.name}
                                                    className="w-4 h-4 rounded-full ring-1 ring-white/10 hover:ring-white/30 transition-all duration-200 hover:scale-110"
                                                    style={{ backgroundColor: color.hex_color }}
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
                )}

                {/* Empty state */}
                {!loading && !error && products.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-white/40">No products available at the moment.</p>
                    </div>
                )}
            </Container>
        </section>
    );
}
