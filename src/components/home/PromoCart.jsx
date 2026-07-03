import React from "react";
import { FiArrowRight } from "react-icons/fi";

const PromoCart = () => {
  return (
    // 1. h-[120px] se exact h-30 (120px) size lock ho jayega.
    // 2. Padding ko p-3 kiya hai taaki andar space bache.
    <div className="relative w-full h-[120px] rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-md flex items-center justify-between p-3 overflow-hidden mx-5">
      {/* h-full dene se yeh parent ki height (120px) ke andar hi perfectly stretch hoga */}
      <div className="z-10 flex flex-col justify-between h-full py-0.5">
        <div>
          <span className="inline-block bg-blue-600 text-[9px] font-bold uppercase px-1.5 py-0.5 rounded-md mb-0.5">
            Limited
          </span>
          {/* leading-tight se text ki line height kam hogi aur space bachega */}
          <h3 className="text-base font-bold tracking-tight leading-tight">
            Air Max Edition
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
      <div className="text-right z-10 self-end pb-0.5">
        <span className="block text-[9px] text-slate-500 line-through">
          ₹7,999
        </span>
        <span className="text-sm font-bold text-blue-400">₹5,599</span>
      </div>
    </div>
  );
};

export default PromoCart;
