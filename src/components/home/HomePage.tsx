"use client";

import { Hero } from "@/components/home/Hero";
import dynamic from "next/dynamic";

// Below-fold components — lazy loaded, code-split into separate chunks
const Features = dynamic(() => import("@/components/home/Features").then(m => m.Features), { ssr: false });
const ProductGrid = dynamic(() => import("@/components/products/ProductGrid").then(m => m.ProductGrid), { ssr: false });
const Testimonials = dynamic(() => import("@/components/home/Testimonials").then(m => m.Testimonials), { ssr: false });
const CTABanner = dynamic(() => import("@/components/home/CTABanner").then(m => m.CTABanner), { ssr: false });
const Footer = dynamic(() => import("@/components/layout/Footer").then(m => m.Footer), { ssr: false });

export function HomePage() {
    return (
        <main className="flex min-h-screen flex-col bg-cyberpunk">
            <Hero />
            <Features />
            <ProductGrid />
            <Testimonials />
            <CTABanner />
            <Footer />
        </main>
    );
}
