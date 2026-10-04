"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BRAND_IMAGES } from "@/data/images";

export default function SignatureExperience() {
  const callouts = [
    { title: "Fresh Veggies", desc: "Crisp capsicum, onions & ripe farm tomatoes", position: "top-4 left-4 lg:-left-10" },
    { title: "Premium Bread", desc: "Artisanal butter-toasted sandwich loaf", position: "bottom-16 left-4 lg:-left-12" },
    { title: "Signature Sauce", desc: "Secret Harihar spiced mint & garlic chutney", position: "top-10 right-4 lg:-right-10" },
    { title: "Loaded Filling", desc: "100% real mozzarella cheese & paneer cubes", position: "bottom-8 right-4 lg:-right-8" },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FFF9E9] relative overflow-hidden border-y border-[#075B3A]/10">
      <div className="max-w-[1340px] mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-[#075B3A] mb-3 block">
            CRAFTED WITH OBSESSION
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#123B2A] tracking-tight leading-tight">
            Not Just A Sandwich. <br className="hidden sm:inline" />
            <span className="text-[#075B3A] underline decoration-[#FFC928] decoration-wavy decoration-2">
              It’s A Harihar.
            </span>
          </h2>
        </div>

        {/* Hero Editorial Display */}
        <div className="relative max-w-4xl mx-auto flex items-center justify-center my-6">
          
          {/* Main Large Close-Up Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#06452D]"
          >
            <Image
              src={BRAND_IMAGES.signatureCloseUp}
              alt="Harihar Signature Sandwich Close-up"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </motion.div>

          {/* Ingredient Callout Floating Badges */}
          {callouts.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className={`absolute hidden md:flex flex-col p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-[#075B3A]/15 max-w-[210px] z-20 ${c.position}`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFC928]" />
                <span className="text-sm font-black text-[#075B3A]">{c.title}</span>
              </div>
              <p className="text-xs text-[#68736C] font-semibold leading-snug">
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile Ingredient List */}
        <div className="grid grid-cols-2 gap-3 md:hidden mt-8">
          {callouts.map((c) => (
            <div key={c.title} className="p-3 bg-white rounded-xl border border-[#075B3A]/10 shadow-sm">
              <span className="text-xs font-black text-[#075B3A] block mb-0.5">{c.title}</span>
              <span className="text-[11px] text-[#68736C] font-medium leading-tight block">{c.desc}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
