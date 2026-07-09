import React from "react";

const PromoCartSkeleton = () => {
  return (
    // 'animate-pulse' se hi aate-jaate waqt ka smooth fading animation banta hai
    <div className="relative w-full h-30 md:h-60 rounded-2xl bg-slate-200 shadow-md flex items-center justify-between p-3 overflow-hidden mx-5 animate-pulse">
      
      {/* Left Content Side Block */}
      <div className="z-10 flex flex-col justify-between h-full py-0.5 w-[50%]">
        <div className="space-y-2">
          {/* Brand Heading Ke Liye Skeleton Line */}
          <div className="h-4 bg-slate-300 rounded-md w-3/4 md:h-8"></div>
          {/* Subtitle Text Ke Liye Skeleton Line */}
          <div className="h-2.5 bg-slate-300 rounded-md w-full md:h-6"></div>
        </div>

        {/* Button Ke Liye Skeleton Block */}
        <div className="h-6 bg-slate-300 rounded-md w-24 md:h-12 md:w-40"></div>
      </div>

      {/* Right Side Image Block */}
      <div className="absolute right-0 top-0 bottom-0 w-[40%] flex items-center justify-end pr-3">
        {/* Asli Rounded Image Ki Tarah Gol Structure */}
        <div className="h-24 w-24 md:h-44 md:w-44 bg-slate-300 rounded-full border-2 border-white/20"></div>
      </div>
    </div>
  );
};

export default PromoCartSkeleton;
