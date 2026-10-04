"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ShoppingBag, Plus, Minus, CheckCircle, ArrowRight } from "lucide-react";
import { MENU_ITEMS, MenuItem } from "@/data/menu";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedItem?: MenuItem | null;
}

export default function OrderModal({ isOpen, onClose, selectedItem }: OrderModalProps) {
  const [cart, setCart] = useState<{ [id: string]: number }>(
    selectedItem ? { [selectedItem.id]: 1 } : { "tandoori-paneer-blast": 1 }
  );
  const [ordered, setOrdered] = useState(false);

  if (!isOpen) return null;

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) => {
      const current = prev[id] || 0;
      const updated = current + delta;
      if (updated <= 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: updated };
    });
  };

  const cartEntries = Object.entries(cart);
  const totalAmount = cartEntries.reduce((sum, [id, qty]) => {
    const item = MENU_ITEMS.find((m) => m.id === id);
    return sum + (item ? item.price * qty : 0);
  }, 0);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setOrdered(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FFF9E9] w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl border-4 border-[#075B3A] flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-[#075B3A] p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#FFC928] flex-shrink-0 relative">
              <Image
                src="/images/logo/profile.jpg"
                alt="Harihar Logo"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-black tracking-tight leading-tight">Order Online</h3>
              <p className="text-[11px] text-[#FFC928] font-bold">Abhideep Harihar Sandwich</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-white/10 transition-colors">
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Modal Content */}
        {ordered ? (
          <div className="p-8 text-center flex flex-col items-center justify-center">
            <CheckCircle className="w-16 h-16 text-[#188A4A] mb-4 animate-bounce" />
            <h4 className="text-2xl font-black text-[#123B2A] mb-2">Order Confirmed!</h4>
            <p className="text-sm text-[#68736C] font-medium mb-6 max-w-md">
              Your freshly grilled loaded sandwich order has been dispatched to the nearest Harihar outlet in Bhopal.
            </p>
            <button
              onClick={() => {
                setOrdered(false);
                onClose();
              }}
              className="bg-[#075B3A] text-white font-extrabold px-8 py-3 rounded-full text-sm"
            >
              Back to Website
            </button>
          </div>
        ) : (
          <div className="p-6 overflow-y-auto flex-1 flex flex-col gap-6">
            
            {/* Cart Items List */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-[#075B3A] mb-3">
                Selected Sandwiches
              </h4>
              {cartEntries.length === 0 ? (
                <p className="text-sm text-gray-500 italic">Your cart is empty. Select a sandwich from the menu!</p>
              ) : (
                <div className="flex flex-col gap-3">
                  {cartEntries.map(([id, qty]) => {
                    const item = MENU_ITEMS.find((m) => m.id === id);
                    if (!item) return null;
                    return (
                      <div key={id} className="p-3 bg-white rounded-2xl border border-[#075B3A]/10 flex items-center justify-between shadow-sm">
                        <div className="flex items-center gap-3">
                          <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                            <Image src={item.image} alt={item.name} fill className="object-cover" />
                          </div>
                          <div>
                            <h5 className="font-bold text-[#123B2A] text-sm">{item.name}</h5>
                            <span className="text-xs font-extrabold text-[#075B3A]">₹{item.price} each</span>
                          </div>
                        </div>

                        {/* Quantity Counter */}
                        <div className="flex items-center gap-2 bg-[#F8F4E8] p-1 rounded-full border border-[#075B3A]/10">
                          <button
                            onClick={() => updateQuantity(id, -1)}
                            className="w-7 h-7 rounded-full bg-white text-[#075B3A] font-bold flex items-center justify-center hover:bg-[#FFC928]"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-5 text-center font-extrabold text-sm text-[#123B2A]">{qty}</span>
                          <button
                            onClick={() => updateQuantity(id, 1)}
                            className="w-7 h-7 rounded-full bg-white text-[#075B3A] font-bold flex items-center justify-center hover:bg-[#FFC928]"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Quick Add Recommendations */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-[#075B3A] mb-3">
                Add More Favourites
              </h4>
              <div className="flex gap-3 overflow-x-auto pb-2">
                {MENU_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => updateQuantity(item.id, 1)}
                    className="flex-shrink-0 p-2 bg-white rounded-xl border border-[#075B3A]/10 hover:border-[#FFC928] text-left flex items-center gap-2 text-xs font-bold text-[#123B2A]"
                  >
                    <span>+ {item.name}</span>
                    <span className="text-[#075B3A]">₹{item.price}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Checkout Form */}
            <form onSubmit={handleCheckout} className="pt-4 border-t border-[#075B3A]/10 flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-3">
                <input
                  required
                  type="text"
                  placeholder="Your Name"
                  className="px-4 py-3 rounded-xl border border-[#075B3A]/20 bg-white text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#FFC928]"
                />
                <input
                  required
                  type="tel"
                  placeholder="Phone Number"
                  className="px-4 py-3 rounded-xl border border-[#075B3A]/20 bg-white text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#FFC928]"
                />
              </div>

              <input
                required
                type="text"
                placeholder="Delivery Address in Bhopal"
                className="px-4 py-3 rounded-xl border border-[#075B3A]/20 bg-white text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#FFC928]"
              />

              {/* Total & Submit */}
              <div className="flex items-center justify-between pt-2">
                <div>
                  <span className="text-xs font-bold text-gray-500 block">Total Amount</span>
                  <span className="text-2xl font-black text-[#075B3A]">₹{totalAmount}</span>
                </div>

                <button
                  type="submit"
                  disabled={cartEntries.length === 0}
                  className="bg-[#FFC928] hover:bg-[#F5B91E] disabled:opacity-50 text-[#06452D] font-extrabold px-8 py-3.5 rounded-full text-base flex items-center gap-2 shadow-md"
                >
                  <span>Confirm Order</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>

          </div>
        )}

      </div>
    </div>
  );
}
