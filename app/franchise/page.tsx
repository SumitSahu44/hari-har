"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FranchiseModal from "@/components/FranchiseModal";
import FranchiseSection from "@/components/FranchiseSection";
import { DollarSign, TrendingUp, ShieldCheck, CheckCircle2, ChevronDown } from "lucide-react";

export default function FranchisePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is the minimum investment required for a Harihar Sandwich franchise?",
      a: "The total setup cost ranges between ₹10 Lakhs to ₹15 Lakhs depending on location size and store format (Kiosk / Express QSR / Dine-in).",
    },
    {
      q: "What support does Harihar Sandwich provide to franchise partners?",
      a: "We provide end-to-end support including kitchen equipment setup, staff training, standardized secret sauces, marketing materials, billing software, and operational support.",
    },
    {
      q: "What is the expected ROI and payback period?",
      a: "Most Harihar franchise outlets achieve breakeven within 12 to 18 months due to low ingredient cost overhead and high sales velocity.",
    },
    {
      q: "Do I need prior food business experience?",
      a: "No prior QSR experience is needed! Our comprehensive SOPs and hands-on training program ensure easy management.",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#FFF9E9]">
      <Header onOpenOrder={() => setModalOpen(true)} />

      <section className="pt-[100px] md:pt-[130px] pb-16 px-4 md:px-8 max-w-[1340px] mx-auto w-full flex-1">
        
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-[#075B3A] mb-2 block">
            FRANCHISE PARTNER PORTAL
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#123B2A] mb-4">
            Build Your Own <br />
            <span className="text-[#075B3A]">Harihar Sandwich Outlet</span>
          </h1>
          <p className="text-base sm:text-lg text-[#68736C] font-medium leading-relaxed">
            Join MP’s fastest growing QSR sandwich brand. High profit margins, proven operational model, and complete guidance from day 1.
          </p>
        </div>

        {/* Highlight Stats / Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-2xl border border-[#075B3A]/10 shadow-card flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#FFC928]/20 text-[#075B3A] font-black flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-[#123B2A] text-lg mb-1">High Profit Margins</h3>
              <p className="text-xs text-[#68736C] font-medium">Low food cost ratio ensuring attractive net profit returns.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#075B3A]/10 shadow-card flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#188A4A]/10 text-[#188A4A] font-black flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-[#123B2A] text-lg mb-1">Full Brand Support</h3>
              <p className="text-xs text-[#68736C] font-medium">Raw material supply, marketing campaigns & staff training included.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#075B3A]/10 shadow-card flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#FFC928]/20 text-[#075B3A] font-black flex items-center justify-center flex-shrink-0">
              <DollarSign className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-[#123B2A] text-lg mb-1">Fast Payback</h3>
              <p className="text-xs text-[#68736C] font-medium">Estimated 12-18 months capital payback timeline.</p>
            </div>
          </div>
        </div>

        {/* 4-Step Process Section */}
        <FranchiseSection onOpenFranchise={() => setModalOpen(true)} />

        {/* FAQ Accordion */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-[#123B2A] text-center mb-8">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-white rounded-2xl border border-[#075B3A]/10 overflow-hidden shadow-sm">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left font-bold text-[#123B2A] text-base flex items-center justify-between gap-4 hover:bg-[#F8F4E8]/50 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-[#075B3A] transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-[#68736C] font-medium border-t border-[#075B3A]/5 pt-3 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </section>

      <Footer />
      <FranchiseModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
