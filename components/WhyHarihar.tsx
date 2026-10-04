"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf, Star, Zap, Store } from "lucide-react";
import { BRAND_IMAGES } from "@/data/images";

export default function WhyHarihar() {
  const features = [
    {
      id: 1,
      icon: Leaf,
      title: "Fresh Ingredients",
      description: "Farm fresh veggies, premium breads & quality sauces.",
      image: BRAND_IMAGES.featureIngredients,
      iconBg: "bg-[#188A4A]/10 text-[#188A4A]",
    },
    {
      id: 2,
      icon: Star,
      title: "Signature Taste",
      description: "Our special recipes make every bite unforgettable.",
      image: BRAND_IMAGES.featureTaste,
      iconBg: "bg-[#FFC928]/20 text-[#075B3A]",
    },
    {
      id: 3,
      icon: Zap,
      title: "Fast Service",
      description: "Quick, hot & fresh — because your time matters.",
      image: BRAND_IMAGES.featureService,
      iconBg: "bg-[#FFC928]/20 text-[#075B3A]",
    },
    {
      id: 4,
      icon: Store,
      title: "Franchise Ready",
      description: "Join a trusted brand with proven success & full support.",
      image: BRAND_IMAGES.featureFranchise,
      iconBg: "bg-[#075B3A]/10 text-[#075B3A]",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F8F4E8] relative overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Section Copy */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-[#075B3A] mb-3">
              THE HARIHAR ADVANTAGE
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#123B2A] tracking-tight leading-tight mb-6">
              Why <span className="text-[#075B3A]">Harihar?</span>
            </h2>

            <p className="text-base sm:text-lg text-[#68736C] font-medium leading-relaxed mb-8">
              More than just a sandwich. It’s a promise of freshness, taste and happiness — every single time.
            </p>

            {/* Handwritten Doodle Accent */}
            <div className="relative p-4 rounded-2xl bg-[#FFF9E9] border border-[#075B3A]/10 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FFC928] flex items-center justify-center font-black text-[#06452D] text-lg">
                ✓
              </div>
              <div className="flex flex-col">
                <span className="font-handwriting text-2xl font-bold text-[#075B3A] leading-tight">
                  Good Food. Good Mood.
                </span>
                <span className="text-xs font-semibold text-[#68736C]">
                  Guaranteed satisfaction in every bite
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: 4 Premium Feature Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {features.map((feature, idx) => {
              const IconComp = feature.icon;
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-white p-6 rounded-[20px] shadow-soft border border-[#075B3A]/5 hover:shadow-cardHover transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Icon Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${feature.iconBg} transition-transform group-hover:scale-110`}>
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-[#075B3A]/40 uppercase tracking-wider">
                        0{feature.id}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-[#123B2A] mb-2 group-hover:text-[#075B3A] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#68736C] font-medium leading-relaxed mb-4">
                      {feature.description}
                    </p>
                  </div>

                  {/* Feature Image Thumbnail */}
                  <div className="relative w-full h-24 rounded-xl overflow-hidden mt-2 bg-[#F8F4E8]">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
