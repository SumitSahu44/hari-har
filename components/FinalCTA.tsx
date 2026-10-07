"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, MapPin, ArrowRight } from "lucide-react";
import { BRAND_IMAGES } from "@/data/images";

interface FinalCTAProps {
  onOpenOrder?: () => void;
}

export default function FinalCTA({ onOpenOrder }: FinalCTAProps) {
  return (
    <section className="py-16 md:py-20 bg-[#FFC928] relative overflow-hidden text-[#06452D]">
      <div className="max-w-[1340px] mx-auto px-4 md:px-8">
        <div className="bg-[#FFF9E9] rounded-3xl p-8 sm:p-12 md:p-16 border-4 border-[#075B3A] shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Text & Buttons */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-10 max-w-xl">
            <span className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-[#075B3A] mb-2 block">
              SATISFY YOUR CRAVINGS
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#123B2A] tracking-tight mb-4">
              Hungry Yet?
            </h2>

            <p className="text-base sm:text-xl text-[#68736C] font-semibold mb-8">
              Your next favourite loaded Harihar sandwich is just a bite away.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenOrder}
                className="w-full sm:w-auto bg-[#075B3A] hover:bg-[#06452D] text-[#FFF9E9] font-extrabold px-8 py-4 rounded-full text-base transition-all shadow-lg flex items-center justify-center gap-2 group"
              >
                <ShoppingBag className="w-5 h-5 text-[#FFC928]" />
                <span>Order Now</span>
                <ArrowRight className="w-4 h-4 text-[#FFC928] group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                href="/locations"
                className="w-full sm:w-auto bg-white hover:bg-[#F8F4E8] text-[#075B3A] border-2 border-[#075B3A] font-bold px-7 py-4 rounded-full text-base transition-all flex items-center justify-center gap-2"
              >
                <MapPin className="w-5 h-5 text-[#075B3A]" />
                <span>Find a Store</span>
              </Link>
            </div>
          </div>

          {/* Appetizing Sandwich Graphic - Clean floating PNG image */}
          <div className="relative w-64 h-52 sm:w-96 sm:h-72 flex-shrink-0 z-10 transform hover:scale-105 transition-transform">
            <Image
              src={BRAND_IMAGES.heroSandwich}
              alt="Harihar Grilled Sandwich"
              fill
              className="object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
