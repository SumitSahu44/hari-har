"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Users, Wrench, Rocket } from "lucide-react";
import { MascotLogo } from "./BrandMascot";

interface FranchiseSectionProps {
  onOpenFranchise?: () => void;
}

export default function FranchiseSection({ onOpenFranchise }: FranchiseSectionProps) {
  const steps = [
    { number: "01", icon: FileText, title: "Apply", desc: "Fill the form & tell us about your city." },
    { number: "02", icon: Users, title: "Meet", desc: "Discuss plans, location & opportunities." },
    { number: "03", icon: Wrench, title: "Setup", desc: "Get setup with training, branding & support." },
    { number: "04", icon: Rocket, title: "Launch", desc: "Start your Harihar journey with us!" },
  ];

  return (
    <section className="bg-gradient-to-b from-[#075B3A] to-[#06452D] text-[#FFF9E9] py-16 md:py-24 relative overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#FFC928]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1340px] mx-auto px-4 md:px-8 relative z-10">
        
        {/* Top Header Block: Mascot + Title + CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Left Mascot Circle Graphic */}
          <div className="lg:col-span-4 flex items-center justify-center lg:justify-start">
            <div className="relative group">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-[#FFC928] p-3 shadow-2xl flex flex-col items-center justify-center text-center transform group-hover:scale-105 transition-transform">
                <MascotLogo size="lg" className="flex-col gap-1 text-center scale-90" />
                <span className="font-handwriting text-2xl font-black text-[#06452D] mt-1 leading-tight">
                  Bigger Dreams <br /> Bigger Bites
                </span>
              </div>
            </div>
          </div>

          {/* Center/Right Heading & Copy */}
          <div className="lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-[#FFC928] mb-3">
              FRANCHISE OPPORTUNITY
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4">
              Turn Your City Into <br />
              The Next{" "}
              <span className="text-[#FFC928] font-handwriting text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                Harihar.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-white/80 font-medium max-w-2xl mb-8 leading-relaxed">
              Be a part of the Harihar journey and build your own profitable QSR sandwich business with comprehensive brand support, menu training, and operational guidance.
            </p>

            <button
              onClick={onOpenFranchise}
              className="bg-[#FFC928] hover:bg-[#F5B91E] text-[#06452D] font-extrabold px-8 py-4 rounded-full text-base sm:text-lg transition-all shadow-xl hover:shadow-gold flex items-center gap-2 group"
            >
              <span>Become a Franchise Partner</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Horizontal / Vertical 4-Step Process Timeline */}
        <div className="pt-8 border-t border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            
            {/* Desktop Connecting Line */}
            <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-white/20 z-0" />

            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="relative z-10 flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
                >
                  {/* Step Circle */}
                  <div className="w-16 h-16 rounded-full bg-[#FFC928] text-[#06452D] font-black text-xl flex items-center justify-center mb-4 shadow-lg border-4 border-[#075B3A]">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <span className="text-xs font-bold text-[#FFC928] uppercase tracking-widest mb-1">
                    STEP {step.number}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-white/75 font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
