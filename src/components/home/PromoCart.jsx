import React from "react";
import { FiArrowRight } from "react-icons/fi";

const PromoCart = ({ brand, image, BackGroundColor }) => {
  return (
    // Main banner wrapper with dynamic background color and responsive heights
    <div
      className={`relative w-full h-30 md:h-60 rounded-2xl text-white shadow-md flex items-center justify-between p-3 overflow-hidden mx-5 ${BackGroundColor}`}
    >
      {/* Section 1: Content details side block layout */}
      <div className="z-10 flex flex-col justify-between h-full py-0.5">
        <div>
          <h3 className="text-base font-bold tracking-tight leading-tight md:text-4xl">
            {brand}
          </h3>
          <p className="text-[10px] text-slate-400 md:text-4xl">Get 30% off on comfort.</p>
        </div>

        {/* Call to action navigation button */}
        <button className="w-fit md:text-4xl flex items-center gap-1 bg-white text-slate-900 font-semibold px-2.5 py-1 text-[11px] rounded-md shadow hover:bg-slate-100 transition-all">
          <span>Shop Now</span>
          <FiArrowRight className="text-[10px] md:text-3xl" />
        </button>
      </div>

      {/* Section 2: Isolated rounded image container positioned absolute */}
      <div className="absolute right-0 top-0 bottom-0 w-[40%] flex items-center justify-end pr-3">
        <img
          src={image}
          alt="promo image"
          className="h-24 w-24 md:h-44 md:w-44 object-cover rounded-full shadow-sm border-2 border-white/50"
        />
      </div>
    </div>
  );
};

export default PromoCart;
