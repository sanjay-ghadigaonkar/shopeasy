import React from "react";
import { FiSmartphone, FiWatch, FiTv } from "react-icons/fi";

const ShortCategory = () => {
  // Configuration data array for horizontal quick links configuration
  const categoriesList = [
    {
      id: 1,
      name: "Mobiles",
      icon: <FiSmartphone />,
      color: "from-amber-500/10 to-orange-500/10 text-orange-600 border-orange-500/20",
    },
    {
      id: 2,
      name: "Watches",
      icon: <FiWatch />,
      color: "from-blue-500/10 to-indigo-500/10 text-indigo-600 border-indigo-500/20",
    },
    {
      id: 3,
      name: "TVs",
      icon: <FiTv />,
      color: "from-rose-500/10 to-pink-500/10 text-rose-600 border-pink-500/20",
    },
  ];

  return (
    // Outer responsive frame wrapper for category section controls
    <div className="w-full h-auto max-w-6xl mx-auto px-4 flex flex-col py-1 overflow-hidden">
      
      {/* Section 1: Header metadata trigger information */}
      <div className="flex items-center justify-between shrink-0 mb-3 md:mb-4">
        <h2 className="text-xs sm:text-sm md:text-base font-bold tracking-tight text-slate-800">
          Shop by Category
        </h2>
        <button className="text-[10px] sm:text-xs md:text-sm font-semibold text-blue-600 hover:underline">
          See All
        </button>
      </div>

      {/* Section 2: Carousel view row rendering for device break targets */}
      <div className="flex overflow-x-auto pb-2 gap-3 scrollbar-none snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-4 md:pb-0">
        {categoriesList.map((item) => (
          <div
            key={item.id}
            className={`snap-center shrink-0 w-[110px] h-[64px] md:w-full md:h-20 bg-gradient-to-br ${item.color} border p-2 rounded-xl flex flex-col md:flex-row items-center justify-center md:justify-start md:px-6 gap-1 md:gap-4 cursor-pointer transition-all duration-300 hover:shadow-md hover:scale-[1.01]`}
          >
            {/* Visual element placeholder rendering container */}
            <div className="text-base md:text-2xl p-1.5 bg-white rounded-lg shadow-2xs shrink-0 flex items-center justify-center">
              {item.icon}
            </div>

            {/* Typography metadata header label locking */}
            <h3 className="font-bold text-[11px] sm:text-xs md:text-sm text-slate-800 leading-none">
              {item.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShortCategory;
