import React from "react";

// 1. Props hata diye kyunki Dummy Card ko data nahi chahiye
const SkeletonCard = () => {
  return (
    // 2. Yahan 'BackGroundColor' hata kar 'bg-slate-200' aur 'animate-pulse' lagaya
    <div className="relative w-full h-[120px] rounded-2xl bg-slate-200 shadow-md flex items-center justify-between p-3 overflow-hidden mx-5 animate-pulse">
      <div className="z-10 flex flex-col justify-between h-full py-0.5">
        <div>
          {/* 3. Text ({brand}) hatakar uski jagah ek gray line bana di */}
          <div className="h-5 bg-slate-300 rounded w-24 mb-1"></div>

          {/* 4. Subtitle ki jagah ek patli gray line */}
          <div className="h-3 bg-slate-300 rounded w-32 mt-1.5"></div>
        </div>

        {/* 5. Asli Button hatakar, ek button ke shape ka gray dabba bana diya */}
        <div className="h-7 w-20 bg-slate-300 rounded-md mt-2"></div>
      </div>

      <div className="absolute right-0 top-0 bottom-0 w-[40%] flex items-center justify-end pr-3">
        {/* 6. Asli <img> hatakar, ek gol gray dabba bana diya */}
        <div className="h-24 w-24 bg-slate-300 rounded-full border-2 border-slate-200"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
