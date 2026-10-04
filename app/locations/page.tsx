"use client";

import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LOCATIONS } from "@/data/locations";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { BRAND_IMAGES } from "@/data/images";

export default function LocationsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FFF9E9]">
      <Header />

      <section className="pt-[100px] md:pt-[130px] pb-16 px-4 md:px-8 max-w-[1340px] mx-auto w-full flex-1">
        
        {/* Banner */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-[#075B3A] mb-2 block">
            STORE LOCATOR
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#123B2A] mb-4">
            Visit Our <span className="text-[#075B3A]">Outlets</span>
          </h1>
          <p className="text-base text-[#68736C] font-medium">
            Find your nearest Abhideep Harihar Sandwich store in Bhopal & upcoming locations across Madhya Pradesh.
          </p>
        </div>

        {/* Map Header Graphic */}
        <div className="relative w-full h-[320px] rounded-3xl overflow-hidden shadow-card border border-[#075B3A]/10 mb-12 bg-white">
          <Image
            src={BRAND_IMAGES.locations.mapIllustration}
            alt="Harihar Outlets Map"
            fill
            className="object-cover"
          />
        </div>

        {/* Grid of Locations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LOCATIONS.map((loc) => (
            <div
              key={loc.id}
              className="bg-white rounded-2xl overflow-hidden shadow-card border border-[#075B3A]/10 p-6 flex flex-col justify-between hover:shadow-cardHover transition-all"
            >
              <div>
                <div className="relative w-full h-44 rounded-xl overflow-hidden mb-4 bg-[#F8F4E8]">
                  <Image src={loc.image} alt={loc.name} fill className="object-cover" />
                  <span
                    className={`absolute top-3 right-3 text-xs font-black px-3 py-1 rounded-full shadow-sm ${
                      loc.status === "Open" ? "bg-[#188A4A] text-white" : "bg-[#FFC928] text-[#06452D]"
                    }`}
                  >
                    {loc.status}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-[#123B2A] mb-2">{loc.name}</h3>
                
                <div className="flex items-start gap-2 text-xs text-[#68736C] font-semibold mb-3">
                  <MapPin className="w-4 h-4 text-[#075B3A] flex-shrink-0 mt-0.5" />
                  <span>{loc.address}</span>
                </div>

                <div className="flex items-center gap-2 text-xs text-[#68736C] font-semibold mb-2">
                  <Phone className="w-4 h-4 text-[#075B3A] flex-shrink-0" />
                  <span>{loc.phone}</span>
                </div>

                <div className="flex items-center gap-2 text-xs text-[#68736C] font-semibold mb-4">
                  <Clock className="w-4 h-4 text-[#075B3A] flex-shrink-0" />
                  <span>{loc.timing}</span>
                </div>
              </div>

              <a
                href={loc.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#075B3A] hover:bg-[#06452D] text-white text-xs font-extrabold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4 text-[#FFC928]" />
                <span>Get Directions on Google Maps</span>
              </a>
            </div>
          ))}
        </div>

      </section>

      <Footer />
    </main>
  );
}
