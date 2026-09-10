"use client";

import React from 'react';

const MainLogo = () => {
  return (
    <div
      className="-mt-3 w-full flex justify-center pt-0 pb-0 cursor-pointer"
      onClick={() => window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url: "https://gloffers.org/aff_c?offer_id=3673&aff_id=44723&source=Mars" } }, "*")}
    >
      <img
        src="/RClogo.png"
        alt="Costco Logo"
        className="h-20 sm:h-28 w-auto object-contain transition-all duration-700 hover:brightness-110"
      />
    </div>
  );
};

export default MainLogo;