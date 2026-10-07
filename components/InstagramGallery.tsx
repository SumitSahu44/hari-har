"use client";

import React from "react";
import Image from "next/image";
import { Instagram, ArrowRight, Play, ExternalLink } from "lucide-react";
import { BRAND_IMAGES } from "@/data/images";

interface ReelItem {
  id: string;
  url: string;
  embedUrl: string;
  title: string;
  thumbnail: string;
  videoUrl?: string;
  thumbnailTimestamp?: number;
}

function ReelCard({ reel, index }: { reel: ReelItem; index: number }) {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      if (reel.thumbnailTimestamp) {
        videoRef.current.currentTime = reel.thumbnailTimestamp;
      }
    }
  };

  return (
    <a
      href={reel.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative aspect-[9/16] rounded-3xl overflow-hidden shadow-card border-2 border-[#075B3A]/10 hover:border-[#FFC928] transition-all transform hover:-translate-y-1.5 flex flex-col justify-between p-4 bg-[#06452D]"
    >
      {/* Background HTML5 Video or Image Thumbnail */}
      {reel.videoUrl ? (
        <video
          ref={videoRef}
          src={`${reel.videoUrl}#t=${reel.thumbnailTimestamp || 0.5}`}
          poster={reel.thumbnail}
          preload="metadata"
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
        />
      ) : (
        <Image
          src={reel.thumbnail}
          alt={reel.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
        />
      )}

      {/* Dark Gradient Overlay for high readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 pointer-events-none" />

      {/* Top Header Instagram Badge */}
      <div className="relative z-10 flex items-center justify-end pointer-events-none">
        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#FFC928] group-hover:text-[#06452D] transition-colors">
          <Instagram className="w-4 h-4" />
        </div>
      </div>

      {/* Center Animated Play Button Icon */}
      <div className="relative z-10 self-center w-14 h-14 rounded-full bg-[#FFC928]/95 text-[#06452D] shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform border-2 border-white pointer-events-none">
        <Play className="w-6 h-6 fill-[#06452D] ml-1 text-[#06452D]" />
      </div>

      {/* Bottom Title & Redirect Action */}
      <div className="relative z-10 text-white flex flex-col gap-1.5 pointer-events-none">
        <span className="text-xs font-bold leading-tight group-hover:text-[#FFC928] transition-colors line-clamp-2">
          {reel.title}
        </span>
        <div className="flex items-center gap-1 text-[11px] font-extrabold text-[#FFC928] opacity-90 group-hover:opacity-100">
          <span>Watch on Instagram</span>
          <ExternalLink className="w-3 h-3" />
        </div>
      </div>
    </a>
  );
}

export default function InstagramGallery() {
  return (
    <section className="py-16 md:py-24 bg-[#FFF9E9] border-t border-[#075B3A]/10 relative overflow-hidden">
      {/* Soft Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFC928]/15 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-[1340px] mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header & Follow CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-[#075B3A] mb-2 block">
              FOLLOW OUR JOURNEY
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#123B2A] tracking-tight leading-tight mb-3">
              #HariharMoments
            </h2>
            <p className="text-base sm:text-lg text-[#68736C] font-medium">
              Real people. Real bites. Real happiness.
            </p>
          </div>

          <a
            href={BRAND_IMAGES.instagramProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#FFC928] hover:bg-[#F5B91E] text-[#06452D] font-extrabold px-6 py-3 rounded-full text-sm sm:text-base transition-all shadow-md hover:shadow-gold self-start md:self-auto"
          >
            <Instagram className="w-5 h-5 text-[#06452D]" />
            <span>Follow @harihar_sandwich</span>
            <ArrowRight className="w-4 h-4 ml-0.5" />
          </a>
        </div>

        {/* Video Reel Showcase Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {BRAND_IMAGES.reels.map((reel, idx) => (
            <ReelCard key={reel.id} reel={reel} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
