import type { Product, Accessory, ProtectionBundle } from "@/lib/types";

export const products: Product[] = [
    {
        id: "c0a80121-7ac0-4b1c-9b1c-123456789001",
        slug: "macbook-air-13-m3",
        name: 'MacBook Air 13"',
        tagline: "Lean. Mean. M3 machine.",
        price: 1099,
        priceFrom: true,
        category: "macbook-air",
        badge: "Best Seller",
        colors: [
            { name: "Midnight", hex: "#2E3642", class: "bg-[#2E3642]" },
            { name: "Starlight", hex: "#F0E5D3", class: "bg-[#F0E5D3]" },
            { name: "Space Gray", hex: "#7D7E80", class: "bg-[#7D7E80]" },
            { name: "Silver", hex: "#E3E4E5", class: "bg-[#E3E4E5]" },
        ],
        storageOptions: [256, 512, 1024, 2048],
        storagePricing: { 256: 0, 512: 200, 1024: 400, 2048: 800 },
        specs: [
            { label: "Display", value: '13.6" Liquid Retina' },
            { label: "Chip", value: "Apple M3" },
            { label: "Memory", value: "Up to 24GB unified memory" },
            { label: "Battery", value: "Up to 18 hours battery life" },
            { label: "Weight", value: "2.7 pounds (1.24 kg)" },
            { label: "Touch ID", value: "Included" },
        ],
        compatibleAccessories: ["usb-c-hub", "magic-mouse", "sleeve-13"],
        gradient: "from-blue-500/20 to-purple-500/20",
    },
    {
        id: "c0a80121-7ac0-4b1c-9b1c-123456789002",
        slug: "macbook-air-15-m3",
        name: 'MacBook Air 15"',
        tagline: "Impressively big. Impossibly thin.",
        price: 1299,
        priceFrom: true,
        category: "macbook-air",
        badge: "New",
        colors: [
            { name: "Midnight", hex: "#2E3642", class: "bg-[#2E3642]" },
            { name: "Starlight", hex: "#F0E5D3", class: "bg-[#F0E5D3]" },
            { name: "Space Gray", hex: "#7D7E80", class: "bg-[#7D7E80]" },
            { name: "Silver", hex: "#E3E4E5", class: "bg-[#E3E4E5]" },
        ],
        storageOptions: [256, 512, 1024, 2048],
        storagePricing: { 256: 0, 512: 200, 1024: 400, 2048: 800 },
        specs: [
            { label: "Display", value: '15.3" Liquid Retina' },
            { label: "Chip", value: "Apple M3" },
            { label: "Memory", value: "Up to 24GB unified memory" },
            { label: "Battery", value: "Up to 18 hours battery life" },
            { label: "Weight", value: "3.3 pounds (1.51 kg)" },
            { label: "Touch ID", value: "Included" },
        ],
        compatibleAccessories: ["usb-c-hub", "magic-mouse", "sleeve-15"],
        gradient: "from-orange-500/20 to-red-500/20",
    },
    {
        id: "c0a80121-7ac0-4b1c-9b1c-123456789003",
        slug: "macbook-pro-14-m4",
        name: 'MacBook Pro 14"',
        tagline: "Mind-blowing. Head-turning.",
        price: 1599,
        priceFrom: true,
        category: "macbook-pro-14",
        badge: "Pro Performance",
        colors: [
            { name: "Space Black", hex: "#2E2E2E", class: "bg-[#2E2E2E]" },
            { name: "Silver", hex: "#E3E4E5", class: "bg-[#E3E4E5]" },
        ],
        storageOptions: [512, 1024, 2048, 4096, 8192],
        storagePricing: { 512: 0, 1024: 200, 2048: 600, 4096: 1200, 8192: 2400 },
        specs: [
            { label: "Display", value: '14.2" Liquid Retina XDR' },
            { label: "Chip", value: "M4, M4 Pro, or M4 Max" },
            { label: "Memory", value: "Up to 128GB unified memory" },
            { label: "Battery", value: "Up to 24 hours battery life" },
            { label: "Ports", value: "3x Thunderbolt 4, HDMI, SDXC, MagSafe 3" },
        ],
        compatibleAccessories: ["usb-c-hub", "magic-mouse", "sleeve-14", "pro-display"],
        gradient: "from-cyan-500/20 to-blue-500/20",
    },
    {
        id: "c0a80121-7ac0-4b1c-9b1c-123456789004",
        slug: "macbook-pro-16-m4",
        name: 'MacBook Pro 16"',
        tagline: "The ultimate pro laptop.",
        price: 2499,
        priceFrom: true,
        category: "macbook-pro-16",
        badge: "Ultimate",
        colors: [
            { name: "Space Black", hex: "#2E2E2E", class: "bg-[#2E2E2E]" },
            { name: "Silver", hex: "#E3E4E5", class: "bg-[#E3E4E5]" },
        ],
        storageOptions: [512, 1024, 2048, 4096, 8192],
        storagePricing: { 512: 0, 1024: 200, 2048: 600, 4096: 1200, 8192: 2400 },
        specs: [
            { label: "Display", value: '16.2" Liquid Retina XDR' },
            { label: "Chip", value: "M4 Pro or M4 Max" },
            { label: "Memory", value: "Up to 128GB unified memory" },
            { label: "Battery", value: "Up to 24 hours battery life" },
            { label: "Ports", value: "3x Thunderbolt 5, HDMI, SDXC, MagSafe 3" },
        ],
        compatibleAccessories: ["usb-c-hub", "magic-mouse", "sleeve-16", "pro-display"],
        gradient: "from-purple-500/20 to-pink-500/20",
    },
];

export const accessories: Accessory[] = [
    {
        id: "magic-mouse",
        name: "Magic Mouse",
        description: "Wireless, rechargeable, Multi-Touch surface.",
        price: 79,
        category: "case", // approximate mapping
        compatibleWith: ["c0a80121-7ac0-4b1c-9b1c-123456789001", "c0a80121-7ac0-4b1c-9b1c-123456789002", "c0a80121-7ac0-4b1c-9b1c-123456789003", "c0a80121-7ac0-4b1c-9b1c-123456789004"],
    },
    // ... reduced accessories for length, can add more if needed
];

export const protectionBundles: ProtectionBundle[] = [];

export function getProductBySlug(slug: string): Product | undefined {
    return products.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
    return products.find((p) => p.id === id);
}

export function getAccessoriesForProduct(productId: string): Accessory[] {
    return accessories.filter((a) => a.compatibleWith.includes(productId));
}

export function getBundleForProduct(productId: string): ProtectionBundle | undefined {
    return protectionBundles.find((b) => {
        const bundleAccessories = b.items.map((itemId) =>
            accessories.find((a) => a.id === itemId)
        );
        return bundleAccessories.some((a) => a?.compatibleWith.includes(productId));
    });
}

export function calculateBundlePrice(bundle: ProtectionBundle): {
    original: number;
    discounted: number;
    saved: number;
} {
    const original = bundle.items.reduce((total, itemId) => {
        const accessory = accessories.find((a) => a.id === itemId);
        return total + (accessory?.price ?? 0);
    }, 0);
    const discounted = Math.round(original * (1 - bundle.discount / 100));
    return { original, discounted, saved: original - discounted };
}

export function calculateInstallment(price: number, months: number = 12): number {
    return Math.ceil((price / months) * 100) / 100;
}
