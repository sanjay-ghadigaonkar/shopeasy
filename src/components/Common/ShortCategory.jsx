import React from "react";
import { FiSmartphone, FiWatch, FiTv } from "react-icons/fi";

const ShortCategory = () => {
  const categoriesList = [
    {
      id: 1,
      name: "Mobiles",
      icon: <FiSmartphone />,
      color:
        "from-amber-500/10 to-orange-500/10 text-orange-600 border-orange-500/20",
    },
    {
      id: 2,
      name: "Watches",
      icon: <FiWatch />,
      color:
        "from-blue-500/10 to-indigo-500/10 text-indigo-600 border-indigo-500/20",
    },
    {
      id: 3,
      name: "TVs",
      icon: <FiTv />,
      color: "from-rose-500/10 to-pink-500/10 text-rose-600 border-pink-500/20",
    },
  ];

  return (
    // 1. h-full lagaya hai taaki yeh parent ke 120px ke andar hi rahe.
    // 2. Padding aur margins ko bilkul minimum kar diya hai.
    <div className="w-full h-full max-w-screen-xl mx-auto px-4 flex flex-col justify-between py-1 overflow-hidden">
      {/* Header Section (Size Chota Kiya Aur Margin Kam Kiya) */}
      <div className="flex items-center justify-between shrink-0 mb-1">
        <h2 className="text-xs font-bold tracking-tight text-slate-800">
          Shop by Category
        </h2>
        <button className="text-[10px] font-semibold text-blue-600">
          See All
        </button>
      </div>

      {/* Row Layout - Fixed height for items */}
      {/* 
        - md:grid-cols-3 kiya hai kyunki aapke paas ab sirf 3 items hain.
        - pb-1 tight rakha hai taaki niche se space waste na ho.
      */}
      <div className="flex overflow-x-auto pb-1 gap-2.5 scrollbar-none snap-x snap-mandatory md:grid md:grid-cols-3 md:pb-0 md:gap-4 flex-1 min-h-0 items-center">
        {categoriesList.map((item) => (
          <div
            key={item.id}
            // Height ko h-[76px] lock kiya hai taaki heading ke sath milkar total 120px se bahar na jaye
            className={`snap-center shrink-0 w-[100px] md:w-full h-[74px] bg-gradient-to-br ${item.color} border p-2 rounded-xl flex flex-col items-center justify-center text-center cursor-pointer transition-all hover:shadow-xs`}
          >
            {/* Icon Box Compact Kiya (p-1.5 aur text-lg) */}
            <div className="text-lg p-1.5 bg-white rounded-lg shadow-2xs mb-1 shrink-0">
              {item.icon}
            </div>

            {/* Text Information (Micro Font Lock) */}
            <h3 className="font-bold text-[11px] text-slate-800 leading-none">
              {item.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShortCategory;
