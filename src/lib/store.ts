import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
    color?: string;
}

interface CartStore {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    decrementItem: (id: string) => void;
    clearCart: () => void;
    isOpen: boolean;
    toggleCart: () => void;
}

export const useCart = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],
            isOpen: false,
            addItem: (newItem) => {
                const currentItems = get().items;
                const existingItem = currentItems.find((item) => item.id === newItem.id);

                if (existingItem) {
                    set({
                        items: currentItems.map((item) =>
                            item.id === newItem.id
                                ? { ...item, quantity: item.quantity + 1 }
                                : item
                        ),
                        isOpen: true,
                    });
                } else {
                    set({ items: [...currentItems, { ...newItem, quantity: 1 }], isOpen: true });
                }
            },
            removeItem: (id) => {
                set({ items: get().items.filter((item) => item.id !== id) });
            },
            updateQuantity: (id, quantity) => {
                if (quantity <= 0) {
                    set({ items: get().items.filter((item) => item.id !== id) });
                } else {
                    set({
                        items: get().items.map((item) =>
                            item.id === id ? { ...item, quantity } : item
                        ),
                    });
                }
            },
            decrementItem: (id) => {
                const currentItems = get().items;
                const item = currentItems.find((i) => i.id === id);
                if (!item) return;
                if (item.quantity <= 1) {
                    set({ items: currentItems.filter((i) => i.id !== id) });
                } else {
                    set({
                        items: currentItems.map((i) =>
                            i.id === id ? { ...i, quantity: i.quantity - 1 } : i
                        ),
                    });
                }
            },
            clearCart: () => set({ items: [] }),
            toggleCart: () => set({ isOpen: !get().isOpen }),
        }),
        {
            name: "cart-storage",
        }
    )
);
