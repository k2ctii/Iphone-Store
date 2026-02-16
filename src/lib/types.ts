/* ========================================
   Shared TypeScript Types
   ======================================== */

// --- Product Types ---

export interface ProductColor {
    name: string;
    hex: string;
    class: string;
}

export interface ProductSpec {
    label: string;
    value: string;
}

export interface Product {
    id: string;
    slug: string;
    name: string;
    tagline: string;
    price: number;             // base price in USD
    priceFrom: boolean;        // "From $999" vs "$999"
    category: "pro-max" | "pro" | "standard" | "previous";
    badge: string | null;
    colors: ProductColor[];
    storageOptions: number[];  // GB values: [128, 256, 512, 1024]
    storagePricing: Record<number, number>; // { 128: 0, 256: 100, ... } — add-on price
    specs: ProductSpec[];
    compatibleAccessories: string[]; // accessory IDs
    gradient: string;          // tailwind gradient classes
}

export interface Accessory {
    id: string;
    name: string;
    description: string;
    price: number;
    category: "case" | "screen-protector" | "charger" | "audio" | "wearable";
    compatibleWith: string[];  // product IDs
    image?: string;
}

export interface ProtectionBundle {
    id: string;
    name: string;
    items: string[];           // accessory IDs
    discount: number;          // percentage discount (e.g., 20)
    tagline: string;
}

// --- Trade-In Types ---

export interface TradeInModel {
    id: string;
    name: string;
    baseValues: Record<number, number>; // storage → base value in USD
}

export interface TradeInCondition {
    id: string;
    question: string;
    description: string;
    deductionPercent: number;
    icon: string;
}

export interface TradeInValuation {
    model: TradeInModel | null;
    storage: number | null;
    conditions: Record<string, boolean>; // condition id → true if issue exists
    baseValue: number;
    totalDeduction: number;
    finalOffer: number;
}

// --- Cart Extensions ---

export interface CartTradeIn {
    modelName: string;
    storage: number;
    credit: number;
}
