"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Menu as MenuIcon, X, ArrowRight } from "lucide-react";
import { MascotLogo } from "./BrandMascot";

interface HeaderProps {
  onOpenOrder?: () => void;
}

export default function Header({ onOpenOrder }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Menu", href: "/menu" },
    { name: "Our Story", href: "/story" },
    { name: "Locations", href: "/locations" },
    { name: "Franchise", href: "/franchise" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[72px] md:h-[84px] flex items-center ${
          isScrolled
            ? "bg-[#FFF9E9]/90 backdrop-blur-md border-b border-[#075B3A]/10 shadow-soft"
            : "bg-[#FFF9E9]"
        }`}
      >
        <div className="max-w-[1340px] w-full mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center">
            <MascotLogo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 font-sans font-semibold text-[15px] text-[#123B2A]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative py-1 transition-colors hover:text-[#075B3A] ${
                    isActive ? "text-[#075B3A] font-bold" : ""
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#FFC928] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenOrder}
              className="bg-[#FFC928] hover:bg-[#F5B91E] text-[#06452D] font-extrabold px-5 py-2.5 md:px-6 md:py-3 rounded-full transition-all transform hover:-translate-y-0.5 shadow-sm flex items-center gap-2 text-sm md:text-[15px] tracking-wide"
              aria-label="Order Now"
            >
              <ShoppingBag className="w-4 h-4 text-[#06452D]" />
              <span>Order Now</span>
              <ArrowRight className="w-4 h-4 ml-0.5 text-[#06452D]" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-[#075B3A] hover:bg-[#075B3A]/5 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#06452D]/40 backdrop-blur-sm lg:hidden pt-[72px]">
          <div className="bg-[#FFF9E9] border-b border-[#075B3A]/10 p-6 shadow-2xl flex flex-col gap-4 animate-in slide-in-from-top duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-bold py-2 border-b border-[#075B3A]/5 ${
                  pathname === link.href ? "text-[#075B3A] pl-2 border-l-4 border-l-[#FFC928]" : "text-[#123B2A]"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenOrder) onOpenOrder();
                }}
                className="w-full bg-[#FFC928] text-[#06452D] font-black py-3.5 rounded-full text-center flex items-center justify-center gap-2 shadow-md"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Order Now</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
