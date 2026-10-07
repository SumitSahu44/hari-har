import React from "react";
import Image from "next/image";
import { BRAND_IMAGES } from "@/data/images";

export function MascotLogo({
  size = "md",
  variant = "default",
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "light";
  className?: string;
}) {
  const badgeDimensions = {
    sm: "w-9 h-9 md:w-10 md:h-10",
    md: "w-11 h-11 md:w-13 md:h-13",
    lg: "w-14 h-14 md:w-16 md:h-16",
  }[size];

  const textColors = {
    default: {
      sub1: "text-[#075B3A]",
      main: "text-[#075B3A]",
      sub2: "text-[#075B3A]",
    },
    light: {
      sub1: "text-[#FFC928]",
      main: "text-white",
      sub2: "text-[#FFC928]",
    },
  }[variant];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Mascot Circle Badge */}
      <div className="relative flex-shrink-0">
        <div className={`${badgeDimensions} rounded-full bg-[#FFC928] border-2 border-[#075B3A] p-0.5 shadow-sm flex items-center justify-center overflow-hidden relative`}>
          <Image
            src={BRAND_IMAGES.logo}
            alt="Abhideep Harihar Sandwich Logo"
            width={80}
            height={80}
            className="w-full h-full object-cover object-center rounded-full"
            priority
          />
        </div>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col leading-tight">
        <span className={`text-[10px] md:text-[11px] font-bold tracking-wider uppercase font-sans ${textColors.sub1}`}>
          Abhideep
        </span>
        <span className={`text-xl md:text-2xl font-black tracking-tight leading-none font-sans flex items-center gap-1 ${textColors.main}`}>
          Harihar
        </span>
        <span className={`text-[10px] md:text-[11px] font-extrabold tracking-widest uppercase font-sans -mt-0.5 ${textColors.sub2}`}>
          SANDWICH
        </span>
      </div>
    </div>
  );
}

export function DoodledUnderline({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 20" className={`w-full h-3 md:h-4 text-[#FFC928] ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M 5 12 C 40 4, 110 16, 195 8 C 140 18, 70 12, 15 15"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HandwrittenDoodle({ type = "sparkle", className = "" }: { type?: "sparkle" | "toast" | "chilli" | "arrow"; className?: string }) {
  if (type === "toast") {
    return (
      <svg viewBox="0 0 40 40" className={`w-8 h-8 ${className}`} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M 8 16 C 8 10, 32 10, 32 16 L 30 32 C 30 34, 10 34, 10 32 Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 14 20 Q 20 18 26 20 M 14 25 Q 20 23 26 25" strokeDasharray="2 2" />
      </svg>
    );
  }
  if (type === "chilli") {
    return (
      <svg viewBox="0 0 32 32" className={`w-6 h-6 ${className}`} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M 22 6 C 20 12, 10 16, 8 26 C 14 24, 24 20, 24 10 Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 22 6 C 24 4, 26 4, 28 2" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "arrow") {
    return (
      <svg viewBox="0 0 60 30" className={`w-12 h-6 ${className}`} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <path d="M 5 20 Q 30 5 50 15 M 40 10 L 52 16 L 44 24" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={`w-5 h-5 ${className}`} fill="currentColor">
      <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
    </svg>
  );
}
