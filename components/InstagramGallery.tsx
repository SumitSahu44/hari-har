"use client";

import React from "react";
import Image from "next/image";
import { Instagram, ArrowRight } from "lucide-react";
import { BRAND_IMAGES } from "@/data/images";

export default function InstagramGallery() {
  return (
    <section className="py-16 md:py-24 bg-[#FFF9E9] border-t border-[#075B3A]/10">
      <div className="max-w-[1340px] mx-auto px-4 md:px-8">
        
        {/* Section Header & Follow CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-[#075B3A] mb-2 block">
              FOLLOW OUR JOURNEY
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#123B2A] tracking-tight leading-tight mb-3">
              #HariharMoments
            </h2>
            <p className="text-base sm:text-lg text-[#68736C] font-medium">
              Real people. Real bites. Real happiness.
            </p>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#FFC928] hover:bg-[#F5B91E] text-[#06452D] font-extrabold px-6 py-3.5 rounded-full text-sm sm:text-base transition-all shadow-md hover:shadow-gold self-start md:self-auto"
          >
            <Instagram className="w-5 h-5 text-[#06452D]" />
            <span>Follow @harihar_sandwich</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>

        {/* Curated Controlled Photo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {BRAND_IMAGES.gallery.map((item) => (
            <div
              key={item.id}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-card border border-[#075B3A]/10 group cursor-pointer bg-[#06452D]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-[#075B3A]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center text-white">
                <Instagram className="w-8 h-8 text-[#FFC928] mb-2" />
                <span className="text-xs font-bold leading-snug">{item.alt}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
