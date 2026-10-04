"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OrderModal from "@/components/OrderModal";
import { MENU_ITEMS, CATEGORIES, MenuItem } from "@/data/menu";
import { Search, Flame, Sparkles, ArrowUpRight, Filter } from "lucide-react";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleOrder = (item: MenuItem) => {
    setSelectedItem(item);
    setOrderModalOpen(true);
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#FFF9E9]">
      <Header onOpenOrder={() => setOrderModalOpen(true)} />

      <section className="pt-[100px] md:pt-[130px] pb-16 px-4 md:px-8 max-w-[1340px] mx-auto w-full flex-1">
        
        {/* Page Banner */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-[#075B3A] mb-2 block">
            EXPLORE OUR COMPLETE MENU
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#123B2A] mb-4">
            Loaded. <span className="text-[#075B3A]">Grilled.</span> Delivered.
          </h1>
          <p className="text-base text-[#68736C] font-medium">
            Explore our wide variety of signature grilled sandwiches, loaded paneer blasts, cheesy delights & chicken specials.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 bg-white p-4 rounded-2xl border border-[#075B3A]/10 shadow-soft">
          
          {/* Search Box */}
          <div className="relative w-full sm:w-80">
            <Search className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search sandwiches, paneer, cheese..."
              className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#FFC928]"
            />
          </div>

          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all whitespace-nowrap ${
                    isActive
                      ? "bg-[#FFC928] text-[#06452D] shadow-sm"
                      : "bg-[#F8F4E8] text-[#123B2A] hover:bg-gray-100"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#075B3A]/10 p-8">
            <Filter className="w-12 h-12 text-[#075B3A] mx-auto mb-3" />
            <h3 className="text-xl font-bold text-[#123B2A]">No Sandwiches Found</h3>
            <p className="text-sm text-[#68736C]">Try adjusting your search query or selecting a different category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-[20px] overflow-hidden shadow-card border border-[#075B3A]/5 hover:shadow-cardHover transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative w-full aspect-[4/3] bg-[#F8F4E8] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      {item.spicy && (
                        <span className="bg-red-500 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full flex items-center gap-1">
                          <Flame className="w-3 h-3" /> Spicy
                        </span>
                      )}
                      {item.popular && (
                        <span className="bg-[#FFC928] text-[#06452D] text-[10px] font-black px-2 py-0.5 rounded-full flex items-center gap-1">
                          <Sparkles className="w-3 h-3" /> Best Seller
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-extrabold uppercase text-[#075B3A]">{item.category}</span>
                      {item.rating && (
                        <span className="text-xs font-bold text-[#F5B91E]">★ {item.rating}</span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-[#123B2A] mb-2">{item.name}</h3>
                    <p className="text-xs text-[#68736C] font-medium leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-[#075B3A]/5">
                  <span className="text-xl font-black text-[#075B3A]">₹{item.price}</span>
                  <button
                    onClick={() => handleOrder(item)}
                    className="bg-[#FFC928] hover:bg-[#F5B91E] text-[#06452D] font-extrabold px-4 py-2 rounded-full text-xs flex items-center gap-1 shadow-sm"
                  >
                    <span>Add to Order</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </section>

      <Footer />
      <OrderModal isOpen={orderModalOpen} onClose={() => setOrderModalOpen(false)} selectedItem={selectedItem} />
    </main>
  );
}
