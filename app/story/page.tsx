"use client";

import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MascotLogo } from "@/components/BrandMascot";
import { BRAND_IMAGES } from "@/data/images";
import { Heart, ShieldCheck, Flame, Award } from "lucide-react";

export default function StoryPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FFF9E9]">
      <Header />

      <section className="pt-[100px] md:pt-[130px] pb-16 px-4 md:px-8 max-w-[1340px] mx-auto w-full flex-1">
        
        {/* Story Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-[#075B3A] mb-2 block">
            OUR JOURNEY & PASSION
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#123B2A] mb-6">
            The Story Behind <br />
            <span className="text-[#075B3A]">Harihar Sandwich</span>
          </h1>
          <p className="text-base sm:text-lg text-[#68736C] font-medium leading-relaxed">
            From a passionate street-side food concept in Bhopal to one of MP’s most loved QSR sandwich brands, here is how Abhideep & Harihar transformed Bhopal's sandwich culture.
          </p>
        </div>

        {/* 2-Column Brand Story Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#06452D]">
            <Image
              src={BRAND_IMAGES.gallery[1].src}
              alt="Harihar Sandwich Outlet in Bhopal"
              fill
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <MascotLogo size="md" />
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-black text-[#123B2A]">
              Born in Bhopal. Loved by Sandwich Obsessors.
            </h2>
            
            <p className="text-base text-[#68736C] font-medium leading-relaxed">
              Abhideep Harihar Sandwich was founded with a single mission: to create generously loaded, butter-grilled sandwiches that fuse traditional Indian spice blends with premium cheese and farm-fresh vegetables.
            </p>

            <p className="text-base text-[#68736C] font-medium leading-relaxed">
              What started as a small outlet in Bhopal’s vibrant food district quickly turned into a daily obsession for students, families, and food lovers. Every sandwich is grilled to golden perfection on order.
            </p>

            <div className="p-4 rounded-2xl bg-[#F8F4E8] border border-[#075B3A]/10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#FFC928] text-[#06452D] font-black flex items-center justify-center text-xl flex-shrink-0">
                ★
              </div>
              <div>
                <span className="font-bold text-[#123B2A] block text-sm">100% Quality & Hygiene Promise</span>
                <span className="text-xs text-[#68736C] font-medium">No compromise on butter, cheese, or fresh ingredients.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Core Pillars */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#075B3A]/10 shadow-card">
          <h3 className="text-2xl font-black text-[#123B2A] text-center mb-10">Our 4 Core Brand Pillars</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#FFF9E9] border border-[#075B3A]/10 text-center flex flex-col items-center">
              <Heart className="w-10 h-10 text-[#075B3A] mb-3" />
              <h4 className="font-bold text-lg text-[#123B2A] mb-2">Made with Love</h4>
              <p className="text-xs text-[#68736C] font-medium">Handcrafted recipes passed down and perfected daily.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFF9E9] border border-[#075B3A]/10 text-center flex flex-col items-center">
              <ShieldCheck className="w-10 h-10 text-[#188A4A] mb-3" />
              <h4 className="font-bold text-lg text-[#123B2A] mb-2">100% Fresh</h4>
              <p className="text-xs text-[#68736C] font-medium">Daily sourced vegetables and zero stale ingredients.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFF9E9] border border-[#075B3A]/10 text-center flex flex-col items-center">
              <Flame className="w-10 h-10 text-[#F5B91E] mb-3" />
              <h4 className="font-bold text-lg text-[#123B2A] mb-2">Signature Grill</h4>
              <p className="text-xs text-[#68736C] font-medium">Hot, crispy & loaded with melted cheese in every bite.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFF9E9] border border-[#075B3A]/10 text-center flex flex-col items-center">
              <Award className="w-10 h-10 text-[#075B3A] mb-3" />
              <h4 className="font-bold text-lg text-[#123B2A] mb-2">Franchise Standard</h4>
              <p className="text-xs text-[#68736C] font-medium">Standardized taste and fast QSR service model across all outlets.</p>
            </div>
          </div>
        </div>

      </section>

      <Footer />
    </main>
  );
}
