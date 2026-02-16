import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "iPhone Store | Premium Reseller",
  description: "Experience the latest iPhone models in a premium digital store. iPhone 16 Pro, iPhone 16, and more.",
  keywords: ["iPhone", "Apple", "iPhone 16 Pro", "iPhone Store", "Premium"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.variable} font-sans antialiased bg-black text-white`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
