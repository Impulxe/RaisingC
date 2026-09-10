"use client";

import React from 'react';
import { Gift, Sparkles } from 'lucide-react';

/**
 * HeroBranding Component
 * * Displays the Sam's Club brand identity, the updated $500 gift card visual, 
 * and the main call-to-action headline.
 */
const HeroBranding = () => {
  return (
    // Changed -mt-2 to -mt-6 to pull the marquee header up closer to the announcement bar
    <div className="relative z-10 max-w-[512px] mx-auto px-4 pt-0 pb-0 text-center -mt-14">
      {/* Brand Header Marquee */}
      <div 
        className="mb-0 overflow-hidden relative cursor-pointer"
        onClick={() => window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url: "https://giftclick.org/aff_c?offer_id=1765&aff_id=44723&source=Dunk" } }, "*")}
      >
        <div className="flex animate-marquee whitespace-nowrap min-w-full will-change-transform">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center mx-4">
              <img 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/b844d676-9381-45a7-bbb3-4072f33b2a59/marshalls-removebg-preview-1769277551771.png?width=8000&height=8000&resize=contain" 
                alt="Marshalls Logo" 
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </div>
          ))}
          {[...Array(10)].map((_, i) => (
            <div key={`dup-${i}`} className="flex items-center mx-4">
              <img 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/b844d676-9381-45a7-bbb3-4072f33b2a59/marshalls-removebg-preview-1769277551771.png?width=8000&height=8000&resize=contain" 
                alt="Marshalls Logo" 
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Gift Card Visual */}
      {/* Changed mt-[22px] to -mt-1 to pull the card back up closer to the logo */}
      <div 
        className="relative mb-1 -mt-1 group cursor-pointer" 
        onClick={() => window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url: "https://gloffers.org/aff_c?offer_id=3673&aff_id=44723&source=Mars" } }, "*")}
      >
        <div className="relative inline-block animate-float will-change-transform">
          {/* Main Card Image */}
          <div className="relative z-10 w-[240px] sm:w-[320px] mx-auto transition-transform duration-500 group-hover:scale-105">
            <img 
              src="RCgiftcard.png" 
              alt="Raising Cane's $500 Gift Card" 
              className="w-full h-auto"
            />
            
            {/* Interactive Shine */}
            <div className="absolute inset-0 rounded-[1.5rem] overflow-hidden pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Headline */}
      <div className="flex flex-col items-center gap-0.5 px-2">
        <div className="relative">
          <h1 className="text-[21px] md:text-[27px] font-extrabold leading-tight tracking-tight flex items-center justify-center gap-x-2 flex-wrap font-poppins">
            <span className="text-[#000000]">Unlock</span>
            <span className="text-[#d71c2e]">Raising Cane's Rewards</span>
            <div className="flex items-center -ml-1">
              <Gift className="w-6 h-6 text-[#d71c2e] fill-transparent" />
            </div>
          </h1>
        </div>
        
        {/* Sub-headline */}
        <div className="flex items-center justify-center gap-2 w-full text-center">
          <Sparkles className="w-3.5 h-3.5 text-[#d71c2e] shrink-0 animate-sparkle" />
          <p className="text-[13px] sm:text-sm md:text-[15px] text-[#000000]/90 font-medium leading-relaxed whitespace-nowrap font-poppins">
            Here&apos;s how to claim your <span className="text-[#d71c2e] font-bold">$500 gift card</span>
          </p>
          <Sparkles className="w-3.5 h-3.5 text-[#d71c2e] shrink-0 animate-sparkle" />
        </div>
      </div>
    </div>
  );
};

export default HeroBranding;