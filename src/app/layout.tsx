import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { SupabaseProvider } from "@/components/providers/SupabaseProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Mac Store | Premium Reseller",
  description: "Experience the latest Mac models in a premium digital store. MacBook Pro, MacBook Air, and more.",
  keywords: ["MacBook", "Mac", "Apple", "MacBook Pro", "MacBook Air", "Premium Store"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.variable} font-sans antialiased bg-black text-white`}>
        <SupabaseProvider>
          <Header />
          {children}
        </SupabaseProvider>
      </body>
    </html>
  );
}
