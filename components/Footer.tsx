"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import { MascotLogo } from "./BrandMascot";

export default function Footer() {
  return (
    <footer className="bg-[#06452D] text-[#FFF9E9] pt-16 pb-8 border-t-4 border-[#FFC928]">
      <div className="max-w-[1340px] mx-auto px-4 md:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 flex flex-col items-start pr-0 lg:pr-6">
            <Link href="/" className="mb-4">
              <MascotLogo size="lg" className="bg-white/10 p-2 rounded-2xl backdrop-blur-sm" />
            </Link>
            <p className="text-sm text-white/80 font-medium mb-6 leading-relaxed max-w-sm">
              Freshly grilled, loaded with real cheese & signature spices. Bringing authentic Bhopal sandwich culture across India.
            </p>
            <div className="inline-flex items-center gap-2 bg-[#075B3A] px-4 py-2 rounded-full border border-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFC928] animate-pulse" />
              <span className="text-xs font-bold text-[#FFC928]">Fresh Sandwiches. Happier People.</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-base font-extrabold text-[#FFC928] uppercase tracking-wider mb-1">
              Quick Links
            </h4>
            <Link href="/menu" className="text-sm text-white/80 hover:text-[#FFC928] font-medium transition-colors">
              Menu
            </Link>
            <Link href="/story" className="text-sm text-white/80 hover:text-[#FFC928] font-medium transition-colors">
              Our Story
            </Link>
            <Link href="/locations" className="text-sm text-white/80 hover:text-[#FFC928] font-medium transition-colors">
              Locations
            </Link>
            <Link href="/franchise" className="text-sm text-white/80 hover:text-[#FFC928] font-medium transition-colors">
              Franchise
            </Link>
            <Link href="/contact" className="text-sm text-white/80 hover:text-[#FFC928] font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* Col 3: Outlets */}
          <div className="flex flex-col gap-3">
            <h4 className="text-base font-extrabold text-[#FFC928] uppercase tracking-wider mb-1">
              Our Locations
            </h4>
            <span className="text-sm text-white/80 font-medium">Bhopal (MP Nagar)</span>
            <span className="text-sm text-white/80 font-medium">Bhopal (TT Nagar)</span>
            <span className="text-sm text-white/80 font-medium">Bhopal (Kolar Road)</span>
            <span className="text-sm text-white/80 font-medium">Indore</span>
            <span className="text-xs text-[#FFC928] font-bold">Coming Soon...</span>
          </div>

          {/* Col 4: Contact & Social */}
          <div className="flex flex-col gap-3">
            <h4 className="text-base font-extrabold text-[#FFC928] uppercase tracking-wider mb-1">
              Contact Us
            </h4>
            <a href="tel:+919876543210" className="text-sm text-white/80 hover:text-[#FFC928] font-medium flex items-center gap-2 transition-colors">
              <Phone className="w-4 h-4 text-[#FFC928]" />
              <span>+91 98765 43210</span>
            </a>
            <a href="mailto:hello@harihar-sandwich.in" className="text-sm text-white/80 hover:text-[#FFC928] font-medium flex items-center gap-2 transition-colors">
              <Mail className="w-4 h-4 text-[#FFC928]" />
              <span>hello@harihar-sandwich.in</span>
            </a>
            <span className="text-sm text-white/80 font-medium flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#FFC928]" />
              <span>Bhopal, Madhya Pradesh</span>
            </span>

            {/* Social Icons */}
            <div className="pt-4 flex items-center gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FFC928] hover:text-[#06452D] flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FFC928] hover:text-[#06452D] flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FFC928] hover:text-[#06452D] flex items-center justify-center transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            <span className="font-handwriting text-2xl font-bold text-[#FFC928] pt-2">
              Good Food Good Vibes :)
            </span>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 font-medium">
          <p>© 2026 Abhideep Harihar Sandwich. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
