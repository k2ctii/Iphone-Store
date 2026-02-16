"use client";

import { useCart } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { Trash2, ShoppingBag, Plus, Minus } from "lucide-react";

export function CartSheet() {
    const { items, removeItem, isOpen, toggleCart, addItem } = useCart();

    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <Sheet open={isOpen} onOpenChange={toggleCart}>
            <SheetContent className="w-full sm:max-w-md flex flex-col h-full bg-[#0a0a14]/95 backdrop-blur-2xl border-l border-white/[0.06]">
                <SheetHeader>
                    <SheetTitle className="text-white text-lg font-semibold flex items-center gap-3">
                        <ShoppingBag className="h-5 w-5 text-white/60" />
                        Your Bag
                        <span className="dark-glass-button px-2 py-0.5 rounded-full text-xs text-white/60">
                            {items.length}
                        </span>
                    </SheetTitle>
                </SheetHeader>

                <div className="flex-1 overflow-y-auto py-6">
                    {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center gap-6 px-6">
                            <div className="dark-glass-card rounded-3xl p-8">
                                <ShoppingBag className="h-12 w-12 text-white/10 mx-auto mb-4" />
                                <p className="text-white/40 text-sm mb-2">Your bag is empty.</p>
                                <p className="text-white/20 text-xs">Items you add will appear here.</p>
                            </div>
                            <Button
                                onClick={toggleCart}
                                variant="ghost"
                                className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/5 rounded-full"
                            >
                                Continue Shopping
                            </Button>
                        </div>
                    ) : (
                        <div className="space-y-4 px-1">
                            {items.map((item) => (
                                <div
                                    key={item.id}
                                    className="dark-glass-card rounded-2xl p-4 flex gap-4 items-center"
                                >
                                    {/* Image placeholder */}
                                    <div className="h-16 w-16 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl flex items-center justify-center shrink-0 overflow-hidden">
                                        <span className="text-[10px] text-white/20 text-center">Image</span>
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-medium text-sm text-white truncate">{item.name}</h4>
                                        <p className="text-xs text-white/40 mt-0.5">${item.price.toFixed(2)}</p>
                                        <div className="flex items-center gap-2 mt-2">
                                            <button
                                                onClick={() => {
                                                    if (item.quantity === 1) {
                                                        removeItem(item.id);
                                                    } else {
                                                        // For simplicity, remove and re-add with lower qty
                                                        removeItem(item.id);
                                                        for (let k = 0; k < item.quantity - 1; k++) {
                                                            addItem({ ...item, quantity: 1 });
                                                        }
                                                    }
                                                }}
                                                className="dark-glass-button h-6 w-6 rounded-full flex items-center justify-center text-white/40 hover:text-white/80"
                                            >
                                                <Minus className="h-3 w-3" />
                                            </button>
                                            <span className="text-xs text-white/60 font-medium w-4 text-center">{item.quantity}</span>
                                            <button
                                                onClick={() => addItem({ ...item, quantity: 1 })}
                                                className="dark-glass-button h-6 w-6 rounded-full flex items-center justify-center text-white/40 hover:text-white/80"
                                            >
                                                <Plus className="h-3 w-3" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Remove */}
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => removeItem(item.id)}
                                        className="text-white/20 hover:text-red-400 hover:bg-red-500/10 rounded-full h-8 w-8 shrink-0"
                                    >
                                        <Trash2 className="h-3.5 w-3.5" />
                                    </Button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {items.length > 0 && (
                    <SheetFooter className="border-t border-white/[0.06] pt-6 sm:justify-start flex-col gap-4">
                        <div className="w-full space-y-2 mb-2">
                            <div className="flex justify-between items-center text-sm text-white/40">
                                <span>Subtotal</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm text-white/40">
                                <span>Shipping</span>
                                <span className="text-emerald-400">Free</span>
                            </div>
                            <div className="h-[1px] bg-white/[0.06] my-2" />
                            <div className="flex justify-between items-center text-lg font-semibold text-white">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>
                        <Button
                            className="w-full h-12 rounded-full text-base bg-white text-black hover:bg-white/90 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] font-medium"
                            size="lg"
                        >
                            Checkout
                        </Button>
                        <Button
                            variant="ghost"
                            className="w-full h-10 rounded-full text-white/40 hover:text-white/70 hover:bg-white/5"
                            onClick={toggleCart}
                        >
                            Continue Shopping
                        </Button>
                    </SheetFooter>
                )}
            </SheetContent>
        </Sheet>
    );
}
