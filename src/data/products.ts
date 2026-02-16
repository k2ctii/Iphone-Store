import type { Product, Accessory, ProtectionBundle } from "@/lib/types";

export const products: Product[] = [
    {
        id: "iphone-16-pro-max",
        slug: "iphone-16-pro-max",
        name: "iPhone 16 Pro Max",
        tagline: "The biggest upgrade to Pro.",
        price: 1199,
        priceFrom: true,
        category: "pro-max",
        badge: "New",
        colors: [
            { name: "Desert Titanium", hex: "#BFA48F", class: "bg-[#BFA48F]" },
            { name: "Natural Titanium", hex: "#C2BCB2", class: "bg-[#C2BCB2]" },
            { name: "White Titanium", hex: "#F2F0ED", class: "bg-[#F2F0ED]" },
            { name: "Black Titanium", hex: "#3C3B37", class: "bg-[#3C3B37]" },
        ],
        storageOptions: [256, 512, 1024],
        storagePricing: { 256: 0, 512: 200, 1024: 400 },
        specs: [
            { label: "Display", value: '6.9" Super Retina XDR - ProMotion' },
            { label: "Chip", value: "A18 Pro" },
            { label: "Camera", value: "48MP Main + 48MP Ultra Wide + 12MP 5x Telephoto" },
            { label: "Battery", value: "Up to 33 hours video playback" },
            { label: "Storage", value: "256GB / 512GB / 1TB" },
            { label: "Connectivity", value: "5G, Wi-Fi 7, USB-C 3" },
        ],
        compatibleAccessories: ["case-pro-max-titanium", "glass-pro-max", "magsafe-charger"],
        gradient: "from-amber-900/20 via-zinc-900 to-zinc-900",
    },
    {
        id: "iphone-16-pro",
        slug: "iphone-16-pro",
        name: "iPhone 16 Pro",
        tagline: "The ultimate iPhone.",
        price: 999,
        priceFrom: true,
        category: "pro",
        badge: "Popular",
        colors: [
            { name: "Desert Titanium", hex: "#BFA48F", class: "bg-[#BFA48F]" },
            { name: "Natural Titanium", hex: "#C2BCB2", class: "bg-[#C2BCB2]" },
            { name: "White Titanium", hex: "#F2F0ED", class: "bg-[#F2F0ED]" },
            { name: "Black Titanium", hex: "#3C3B37", class: "bg-[#3C3B37]" },
        ],
        storageOptions: [128, 256, 512, 1024],
        storagePricing: { 128: 0, 256: 100, 512: 300, 1024: 500 },
        specs: [
            { label: "Display", value: '6.3" Super Retina XDR - ProMotion' },
            { label: "Chip", value: "A18 Pro" },
            { label: "Camera", value: "48MP Main + 48MP Ultra Wide + 12MP 5x Telephoto" },
            { label: "Battery", value: "Up to 27 hours video playback" },
            { label: "Storage", value: "128GB / 256GB / 512GB / 1TB" },
            { label: "Connectivity", value: "5G, Wi-Fi 7, USB-C 3" },
        ],
        compatibleAccessories: ["case-pro-titanium", "glass-pro", "magsafe-charger"],
        gradient: "from-slate-800/30 via-zinc-900 to-zinc-900",
    },
    {
        id: "iphone-16",
        slug: "iphone-16",
        name: "iPhone 16",
        tagline: "A total powerhouse.",
        price: 799,
        priceFrom: true,
        category: "standard",
        badge: null,
        colors: [
            { name: "Ultramarine", hex: "#7A96D6", class: "bg-[#7A96D6]" },
            { name: "Teal", hex: "#B0D4C1", class: "bg-[#B0D4C1]" },
            { name: "Pink", hex: "#F2B8C6", class: "bg-[#F2B8C6]" },
            { name: "White", hex: "#F2F0ED", class: "bg-[#F2F0ED]" },
            { name: "Black", hex: "#3C3D41", class: "bg-[#3C3D41]" },
        ],
        storageOptions: [128, 256, 512],
        storagePricing: { 128: 0, 256: 100, 512: 300 },
        specs: [
            { label: "Display", value: '6.1" Super Retina XDR' },
            { label: "Chip", value: "A18" },
            { label: "Camera", value: "48MP Main + 12MP Ultra Wide" },
            { label: "Battery", value: "Up to 22 hours video playback" },
            { label: "Storage", value: "128GB / 256GB / 512GB" },
            { label: "Connectivity", value: "5G, Wi-Fi 7, USB-C 2" },
        ],
        compatibleAccessories: ["case-16-silicone", "glass-16", "magsafe-charger"],
        gradient: "from-blue-900/20 via-zinc-900 to-zinc-900",
    },
    {
        id: "iphone-15",
        slug: "iphone-15",
        name: "iPhone 15",
        tagline: "As amazing as ever.",
        price: 699,
        priceFrom: true,
        category: "previous",
        badge: null,
        colors: [
            { name: "Blue", hex: "#BECDE8", class: "bg-[#BECDE8]" },
            { name: "Pink", hex: "#F5D1D8", class: "bg-[#F5D1D8]" },
            { name: "Yellow", hex: "#F0E5C8", class: "bg-[#F0E5C8]" },
            { name: "Green", hex: "#D1E2D0", class: "bg-[#D1E2D0]" },
            { name: "Black", hex: "#3C3D41", class: "bg-[#3C3D41]" },
        ],
        storageOptions: [128, 256, 512],
        storagePricing: { 128: 0, 256: 100, 512: 300 },
        specs: [
            { label: "Display", value: '6.1" Super Retina XDR' },
            { label: "Chip", value: "A16 Bionic" },
            { label: "Camera", value: "48MP Main + 12MP Ultra Wide" },
            { label: "Battery", value: "Up to 20 hours video playback" },
            { label: "Storage", value: "128GB / 256GB / 512GB" },
            { label: "Connectivity", value: "5G, Wi-Fi 6, USB-C" },
        ],
        compatibleAccessories: ["case-15-silicone", "glass-15", "magsafe-charger"],
        gradient: "from-cyan-900/20 via-zinc-900 to-zinc-900",
    },
];

export const accessories: Accessory[] = [
    {
        id: "case-pro-max-titanium",
        name: "Titanium Shield Case",
        description: "Military-grade protection with titanium-brushed finish",
        price: 59,
        category: "case",
        compatibleWith: ["iphone-16-pro-max"],
    },
    {
        id: "case-pro-titanium",
        name: "Pro Titanium Case",
        description: "Slim titanium-brushed case for Pro",
        price: 49,
        category: "case",
        compatibleWith: ["iphone-16-pro"],
    },
    {
        id: "case-16-silicone",
        name: "Silicone Case with MagSafe",
        description: "Soft-touch silicone with built-in magnets",
        price: 49,
        category: "case",
        compatibleWith: ["iphone-16"],
    },
    {
        id: "case-15-silicone",
        name: "Silicone Case",
        description: "Classic silicone protection",
        price: 39,
        category: "case",
        compatibleWith: ["iphone-15"],
    },
    {
        id: "glass-pro-max",
        name: "Privacy Tempered Glass",
        description: "Anti-spy screen protector with 9H hardness",
        price: 29,
        category: "screen-protector",
        compatibleWith: ["iphone-16-pro-max"],
    },
    {
        id: "glass-pro",
        name: "Ceramic Shield Glass",
        description: "Edge-to-edge ceramic protection",
        price: 29,
        category: "screen-protector",
        compatibleWith: ["iphone-16-pro"],
    },
    {
        id: "glass-16",
        name: "HD Tempered Glass",
        description: "Crystal-clear 9H tempered glass",
        price: 25,
        category: "screen-protector",
        compatibleWith: ["iphone-16"],
    },
    {
        id: "glass-15",
        name: "Tempered Glass",
        description: "Standard 9H protection",
        price: 19,
        category: "screen-protector",
        compatibleWith: ["iphone-15"],
    },
    {
        id: "magsafe-charger",
        name: "MagSafe Charger",
        description: "15W wireless charging with perfect alignment",
        price: 39,
        category: "charger",
        compatibleWith: ["iphone-16-pro-max", "iphone-16-pro", "iphone-16", "iphone-15"],
    },
    {
        id: "airpods-pro-2",
        name: "AirPods Pro 2",
        description: "Active Noise Cancellation with USB-C",
        price: 249,
        category: "audio",
        compatibleWith: ["iphone-16-pro-max", "iphone-16-pro", "iphone-16", "iphone-15"],
    },
    {
        id: "apple-watch-ultra-2",
        name: "Apple Watch Ultra 2",
        description: "The most capable Apple Watch",
        price: 799,
        category: "wearable",
        compatibleWith: ["iphone-16-pro-max", "iphone-16-pro", "iphone-16", "iphone-15"],
    },
];

export const protectionBundles: ProtectionBundle[] = [
    {
        id: "bundle-pro-max",
        name: "Essential Protection Kit",
        items: ["case-pro-max-titanium", "glass-pro-max"],
        discount: 20,
        tagline: "Protect your $1,199 investment",
    },
    {
        id: "bundle-pro",
        name: "Essential Protection Kit",
        items: ["case-pro-titanium", "glass-pro"],
        discount: 20,
        tagline: "Protect your $999 investment",
    },
    {
        id: "bundle-16",
        name: "Essential Protection Kit",
        items: ["case-16-silicone", "glass-16"],
        discount: 20,
        tagline: "Protect your $799 investment",
    },
    {
        id: "bundle-15",
        name: "Essential Protection Kit",
        items: ["case-15-silicone", "glass-15"],
        discount: 20,
        tagline: "Protect your $699 investment",
    },
];

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
