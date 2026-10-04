"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Clock, ChevronRight, Navigation } from "lucide-react";
import { LOCATIONS, StoreLocation } from "@/data/locations";
import { BRAND_IMAGES } from "@/data/images";

export default function Locations() {
  const [selectedLocation, setSelectedLocation] = useState<StoreLocation>(LOCATIONS[0]);

  return (
    <section className="py-16 md:py-24 bg-[#F8F4E8] relative">
      <div className="max-w-[1340px] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-[#075B3A] mb-2 block">
              OUR LOCATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#123B2A] tracking-tight leading-tight mb-4">
              Find a Harihar{" "}
              <span className="font-handwriting text-4xl sm:text-5xl md:text-6xl text-[#075B3A] underline decoration-[#FFC928]">
                Near You
              </span>
            </h2>
            <p className="text-base sm:text-lg text-[#68736C] font-medium max-w-xl">
              Fresh, hot, cheese-loaded sandwiches are always closer than you think in Bhopal & Madhya Pradesh.
            </p>
          </div>

          <Link
            href="/locations"
            className="inline-flex items-center gap-2 bg-white hover:bg-[#FFF9E9] text-[#075B3A] border-2 border-[#075B3A] font-extrabold px-6 py-3 rounded-full text-sm sm:text-base transition-all shadow-sm"
          >
            <span>View All Outlets</span>
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>

        {/* 2-Column Main Display: Interactive Map (Left/Center) + Location Cards (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* MAP ILLUSTRATION / INTERACTIVE DISPLAY */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-4 sm:p-6 shadow-card border border-[#075B3A]/10 flex flex-col justify-between">
            <div className="relative w-full h-[300px] sm:h-[380px] rounded-2xl overflow-hidden bg-[#F8F4E8] border border-[#075B3A]/5">
              <Image
                src={BRAND_IMAGES.locations.mapIllustration}
                alt="Bhopal Harihar Outlets Map"
                fill
                className="object-cover"
              />
            </div>

            {/* Selected Location Quick Detail Bar */}
            <div className="mt-4 pt-4 border-t border-[#075B3A]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FFC928] text-[#06452D] flex items-center justify-center font-black flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-[#123B2A] text-base">{selectedLocation.name}</h4>
                  <p className="text-xs text-[#68736C] font-medium leading-tight">{selectedLocation.address}</p>
                </div>
              </div>

              <a
                href={selectedLocation.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#075B3A] hover:bg-[#06452D] text-white text-xs font-extrabold px-4 py-2.5 rounded-full transition-colors flex-shrink-0"
              >
                <Navigation className="w-3.5 h-3.5 text-[#FFC928]" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* LOCATION CARDS STACK */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {LOCATIONS.map((loc) => {
              const isSelected = selectedLocation.id === loc.id;
              return (
                <div
                  key={loc.id}
                  onClick={() => setSelectedLocation(loc)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                    isSelected
                      ? "bg-white border-2 border-[#075B3A] shadow-card scale-[1.01]"
                      : "bg-white/80 hover:bg-white border-[#075B3A]/10 shadow-sm"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {/* Outlet Image Thumbnail */}
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-[#F8F4E8] flex-shrink-0">
                      <Image
                        src={loc.image}
                        alt={loc.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Outlet Details */}
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-extrabold text-[#123B2A] text-base sm:text-lg">
                          {loc.area}, {loc.city}
                        </h4>
                        <span
                          className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                            loc.status === "Open"
                              ? "bg-[#188A4A] text-white"
                              : "bg-[#FFC928] text-[#06452D]"
                          }`}
                        >
                          {loc.status}
                        </span>
                      </div>
                      <p className="text-xs text-[#68736C] font-medium line-clamp-1 mb-1">
                        {loc.address}
                      </p>
                      <div className="flex items-center gap-3 text-[11px] text-[#075B3A] font-bold">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {loc.timing}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ChevronRight className={`w-5 h-5 flex-shrink-0 ${isSelected ? "text-[#075B3A]" : "text-gray-400"}`} />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
