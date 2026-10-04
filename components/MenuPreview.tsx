"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Flame, Sparkles } from "lucide-react";
import { MENU_ITEMS, CATEGORIES, MenuItem } from "@/data/menu";

interface MenuPreviewProps {
  onSelectItem?: (item: MenuItem) => void;
}

export default function MenuPreview({ onSelectItem }: MenuPreviewProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredItems = activeCategory === "All"
    ? MENU_ITEMS.slice(0, 4)
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section className="py-16 md:py-24 bg-[#FFF9E9] relative">
      <div className="max-w-[1340px] mx-auto px-4 md:px-8">
        
        {/* Header & Filter Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-[#075B3A] mb-2 block">
              OUR FAVOURITES
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#123B2A] tracking-tight leading-tight mb-4">
              Loaded.{" "}
              <span className="bg-[#FFC928] text-[#06452D] px-2 py-0.5 rounded-lg inline-block transform -rotate-1">
                Grilled.
              </span>{" "}
              Loved.
            </h2>

            <p className="text-base sm:text-lg text-[#68736C] font-medium max-w-xl">
              Handcrafted sandwiches with bold flavours, fresh ingredients and that signature Harihar touch.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-extrabold transition-all whitespace-nowrap shadow-sm ${
                    isActive
                      ? "bg-[#FFC928] text-[#06452D] scale-105 shadow-gold"
                      : "bg-white text-[#123B2A] hover:bg-[#F8F4E8] border border-[#075B3A]/10"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Cards Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                onClick={() => onSelectItem && onSelectItem(item)}
                className="bg-white rounded-[20px] overflow-hidden shadow-card hover:shadow-cardHover border border-[#075B3A]/5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative w-full aspect-[4/3] bg-[#F8F4E8] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Badge Overlay */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      {item.spicy && (
                        <span className="bg-red-500 text-white text-[11px] font-extrabold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                          <Flame className="w-3 h-3 fill-white" /> Spicy
                        </span>
                      )}
                      {item.popular && (
                        <span className="bg-[#FFC928] text-[#06452D] text-[11px] font-black px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                          <Sparkles className="w-3 h-3" /> Best Seller
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Details */}
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-[#123B2A] mb-2 group-hover:text-[#075B3A] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#68736C] font-medium leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Footer / Price & Order Circle Button */}
                <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-[#075B3A]/5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-[#075B3A]">₹{item.price}</span>
                    <span className="text-[11px] text-[#68736C] font-bold">inclusive taxes</span>
                  </div>

                  <button
                    aria-label={`Order ${item.name}`}
                    className="w-10 h-10 rounded-full bg-[#FFC928] group-hover:bg-[#F5B91E] text-[#06452D] flex items-center justify-center transition-transform group-hover:rotate-45 shadow-sm"
                  >
                    <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View Full Menu CTA Banner */}
        <div className="mt-12 text-center">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 bg-[#075B3A] hover:bg-[#06452D] text-[#FFF9E9] font-extrabold px-8 py-4 rounded-full text-base transition-all shadow-md hover:shadow-lg"
          >
            <span>Explore Full Menu ({MENU_ITEMS.length}+ Items)</span>
            <ArrowUpRight className="w-5 h-5 text-[#FFC928]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
