"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, Heart } from "lucide-react";
import { HandwrittenDoodle } from "./BrandMascot";
import { BRAND_IMAGES } from "@/data/images";

interface HeroProps {
  onOpenFranchise?: () => void;
}

export default function Hero({ onOpenFranchise }: HeroProps) {
  return (
    <section className="relative pt-[95px] md:pt-[115px] pb-12 md:pb-20 overflow-hidden bg-[#FFF9E9]">
      {/* Top Left Yellow Paint Wash / Brush Texture Background Accent */}
      <div className="absolute top-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-[#FFC928]/25 rounded-br-[100%] blur-2xl pointer-events-none -z-0" />

      {/* Background Dots Pattern */}
      <div className="absolute inset-0 bg-pattern-cream opacity-40 pointer-events-none" />

      <div className="max-w-[1340px] mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* LEFT COLUMN: Typography & Content matching reference image exactly */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            {/* Eyebrow: CLEAN TEXT WITH PIPE SEPARATORS */}
            <div className="text-xs sm:text-sm font-extrabold tracking-[0.2em] text-[#06452D]/80 uppercase mb-4 font-sans">
              FRESH &nbsp;|&nbsp; LOADED &nbsp;|&nbsp; DESI
            </div>

            {/* Main Heading matching reference image */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[66px] font-black text-[#06452D] tracking-tight leading-[1.05] mb-5">
              Bhopal’s
              <br />
              <span className="relative inline-block font-handwriting text-[#F5B91E] text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold tracking-normal leading-none my-1">
                Sandwich
                {/* Yellow Brush Underline */}
                <svg
                  viewBox="0 0 240 24"
                  className="absolute -bottom-2 left-0 w-full h-4 sm:h-5 text-[#F5B91E]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 4 14 C 45 4, 130 18, 235 8 C 170 19, 85 14, 15 16"
                    stroke="currentColor"
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <br />
              Obsession.
            </h1>

            {/* Supporting Copy matching exact text */}
            <p className="text-sm sm:text-base md:text-[17px] text-[#4A5550] font-medium leading-relaxed max-w-lg mb-8">
              Crispy. Fresh. Loaded with flavours that hit different. Harihar Sandwich brings you the perfect blend of quality ingredients and desi taste in every bite.
            </p>

            {/* Buttons: Explore Menu (Yellow Pill) & Become a Franchise Partner (White Pill) */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-8">
              <Link
                href="/menu"
                className="bg-[#FFC928] hover:bg-[#F5B91E] text-[#06452D] font-extrabold px-7 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base transition-all shadow-md hover:shadow-gold flex items-center justify-center gap-2 group"
              >
                <span>Explore Menu</span>
                <span className="text-base group-hover:translate-x-1 transition-transform">→</span>
              </Link>

              <button
                onClick={onOpenFranchise}
                className="bg-white hover:bg-[#F8F4E8] text-[#06452D] font-bold px-6 py-3.5 sm:px-7 sm:py-4 rounded-full text-sm sm:text-base border border-[#06452D]/40 transition-all flex items-center justify-center shadow-sm"
              >
                Become a Franchise Partner
              </button>
            </div>

            {/* Subtle Trust Indicator */}
            <div className="flex items-center gap-3 pt-2 border-t border-[#06452D]/10 w-full sm:w-auto">
              <div className="flex -space-x-2 overflow-hidden">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-[#06452D] text-[#FFC928] flex items-center justify-center text-xs font-black">
                    <Heart className="w-3.5 h-3.5 fill-[#FFC928]" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-0.5 text-[#F5B91E]">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-[#F5B91E]" />
                  ))}
                </div>
                <span className="text-xs font-bold text-[#06452D]">
                  Loved by sandwich lovers in Bhopal
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Direct Hero Sandwich Visual (No box, no bg frame) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 relative flex items-center justify-center mt-6 lg:mt-0"
          >
            {/* Soft Ambient Radial Glow behind direct PNG image */}
            <div className="absolute w-[360px] h-[360px] sm:w-[540px] sm:h-[540px] lg:w-[600px] lg:h-[600px] bg-[#FFC928]/30 rounded-full blur-3xl -z-10" />

            {/* Founders Mascot Accent Illustration (Top Right of Hero) */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="absolute -top-6 sm:-top-10 right-1 sm:right-4 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl shadow-md border border-[#075B3A]/20 flex items-center gap-2.5"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FFC928] border-2 border-[#075B3A] overflow-hidden relative flex-shrink-0">
                <Image
                  src={BRAND_IMAGES.logo}
                  alt="Harihar Founders"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col text-left leading-tight">
                <span className="font-handwriting text-sm sm:text-base font-bold text-[#075B3A]">
                  Original Recipe
                </span>
                <span className="font-handwriting text-lg sm:text-xl font-bold text-[#123B2A] -mt-0.5">
                  Abhideep & Harihar
                </span>
              </div>
            </motion.div>

            {/* Direct Image Display - Enlarged Visual */}
            <div className="relative w-full flex items-center justify-center py-2">
              <Image
                src={BRAND_IMAGES.heroSandwich}
                alt="Freshly Grilled Harihar Loaded Sandwich"
                width={800}
                height={680}
                priority
                className="w-full max-w-[650px] sm:max-w-[700px] lg:max-w-[740px] h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 z-10"
              />
            </div>

            {/* Subtle Floating Handwritten Badges */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 left-2 sm:left-4 bg-[#075B3A] text-[#FFF9E9] px-4 py-1.5 rounded-full font-handwriting text-xl font-bold shadow-md flex items-center gap-1.5 border border-[#FFC928] z-20"
            >
              <HandwrittenDoodle type="sparkle" className="text-[#FFC928]" />
              <span>Fresh</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              className="absolute top-[62%] sm:top-[65%] -right-2 sm:right-0 bg-[#FFC928] text-[#06452D] px-4 py-1.5 rounded-full font-handwriting text-2xl font-bold shadow-lg border-2 border-white z-20"
            >
              <span>Loaded!</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="absolute -bottom-6 left-6 sm:left-12 bg-white text-[#075B3A] px-4 py-1.5 rounded-full font-handwriting text-2xl font-bold shadow-md border border-[#075B3A]/20 flex items-center gap-1 z-20"
            >
              <span>Desi Flavour</span>
              <HandwrittenDoodle type="chilli" className="text-red-500" />
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
