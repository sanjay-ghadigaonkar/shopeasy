import React from "react";
import { FiArrowRight } from "react-icons/fi";

const PromoCart = ({ brand, image, BackGroundColor }) => {
  return (
    // 1. h-[120px] se exact h-30 (120px) size lock ho jayega.
    // 2. Padding ko p-3 kiya hai taaki andar space bache.
    <div
      className={`relative w-full h-[120px] rounded-2xl  text-white shadow-md flex items-center justify-between p-3 overflow-hidden mx-5 
       ${BackGroundColor}`}
    >
      {/* h-full dene se yeh parent ki height (120px) ke andar hi perfectly stretch hoga */}
      <div className="z-10 flex flex-col justify-between h-full py-0.5">
        <div>
          {/* leading-tight se text ki line height kam hogi aur space bachega */}
          <h3 className="text-base font-bold tracking-tight leading-tight">
            {brand}
          </h3>
          <p className="text-[10px] text-slate-400">Get 30% off on comfort.</p>
        </div>

        {/* Left Bottom Button (Padding tight ki hai taaki h-30 me fit baithe) */}
        <button className="w-fit flex items-center gap-1 bg-white text-slate-900 font-semibold px-2.5 py-1 text-[11px] rounded-md shadow hover:bg-slate-100 transition-all">
          <span>Shop Now</span>
          <FiArrowRight className="text-[10px]" />
        </button>
      </div>

      {/* Right side price automatically adjusted */}
      <div className="absolute right-0 top-0 bottom-0 w-[40%] flex items-center justify-end pr-3">
        <img
          src={image}
          alt="img"
          className="h-24 w-24 object-cover rounded-full shadow-sm border-2 border-white/50"
        />
      </div>
    </div>
  );
};

export default PromoCart;
