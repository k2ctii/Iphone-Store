import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Testimonials } from "@/components/home/Testimonials";
import { CTABanner } from "@/components/home/CTABanner";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
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
