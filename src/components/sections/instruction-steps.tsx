"use client";

import React from "react";
import {
  ShoppingBag,
  UserPlus,
  ClipboardList,
  Gift,
  Unlock,
} from "lucide-react";

interface Step {
  icon: React.ReactNode;
  text: string | React.ReactNode;
}

const steps: Step[] = [
    {
    icon: <ShoppingBag className="w-3 h-3 sm:w-3.5 sm:h-3.5" />,
    text: 'Click the "Start Review" button',
  },
  {
    icon: <UserPlus className="w-3 h-3 sm:w-3.5 sm:h-3.5" />,
    text: "Enter your email and basic details",
  },
  {
    icon: <ClipboardList className="w-3 h-3 sm:w-3.5 sm:h-3.5" />,
    text: "Answer our quick shopper experience survey",
  },
  {
    icon: <Gift className="w-3 h-3 sm:w-3.5 sm:h-3.5" />,
    text: "Complete 4–5 featured partner offers",
  },
  {
    icon: <Unlock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />,
    text: "Unlock your Costco Rewards",
  },
];

export default function InstructionSteps() {
  const url = "https://linkthem.net/aff_c?offer_id=1323&aff_id=178160";

  const handleStepClick = (index: number) => {
    if (index !== 0) return;
    
    // For Orchids preview environment
    if (typeof window !== 'undefined' && window.parent) {
      window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url } }, "*");
    }
    
    // Fallback/standard redirect for all versions
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative w-full max-w-md mx-auto px-4 sm:px-5 mb-4 mt-3">
      <div className="relative rounded-[1.5rem] sm:rounded-[2rem] p-2 sm:p-4 bg-white/5 backdrop-blur-md border-2 border-[#005dab]/25 shadow-[0_8px_32_rgba(234, 108, 2)] overflow-hidden group/box transition-all duration-500 hover:border-[#005dab]/50 hover:scale-[1.01]">
        {/* Shimmer Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -left-full group-hover/box:animate-shine pointer-events-none" />
        
        {/* Decorative Glows */}
        <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#005dab]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#005dab]/8 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 space-y-0 sm:space-y-1">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center gap-1.5 sm:gap-2.5 group/item animate-in fade-in slide-in-from-left duration-500 fill-mode-both ${index === 0 ? 'cursor-pointer hover:bg-white/5 rounded-lg' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => handleStepClick(index)}
              >
              {/* Icon Container */}
              <div className="relative flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-lg sm:rounded-xl bg-white/40 border border-[#005dab]/15 text-[#005dab] group-hover/item:scale-110 group-hover/item:bg-white/60 transition-all duration-300 shadow-sm">
                {step.icon}
              </div>

                  {/* Text Container */}
                  <div className="flex-1 border-b border-[#005dab]/5 pb-0 last:border-0">
                    <p className="text-[#182C54] text-[13px] sm:text-[15px] font-semibold tracking-tight leading-tight py-1.5">
                      {step.text}
                    </p>
                  </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


