import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import {CartContext} from "../../Context/CartContext";
import React from "react";
import { FiShoppingCart, FiHeart, FiStar } from "react-icons/fi";
import { trendingSection } from "../../data/product";


const TrendingProducts = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  // 1. Clean Electronics Dummy Data
  

  return (
    <div className="w-full h-full flex flex-col overflow-hidden ">
      {/* Mini Header */}
      <div className="flex items-center justify-between mb-2 shrink-0 mx-5">
        <h2 className="text-xs font-bold text-slate-800 tracking-tight">
          Trending Electronics
        </h2>
        <button className="text-[10px] font-semibold text-blue-600">
          See All
        </button>
      </div>

      {/* 2. Modern Horizontal Row Layout */}
      {/* 
        - flex overflow-x-auto: Se saare cards ek hi row line me left-right scroll honge.
        - scrollbar-none: Faltu ki scrollbar ko chupa dega taaki clean app look aaye.
        - md:grid md:grid-cols-4: Badi screen par ye automatic split hokar fix ho jayega.
      */}
      <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-none w-full snap-x snap-mandatory md:grid md:grid-cols-4 md:gap-4 border border-slate-200 rounded-xl p-2">
        {trendingSection.map((product) => (
          <div
            key={product.id}
            className="snap-center shrink-0 w-[140px] md:w-full bg-white border border-slate-100 rounded-xl overflow-hidden shadow-xs flex flex-col justify-between h-[155px] md:h-auto group "
          >
            {/* Super Small Image Window */}
            <div className="relative h-20 w-full bg-slate-50 overflow-hidden shrink-0">
              <button className="absolute top-1 right-1 z-10 p-1 bg-white/90 rounded-full text-slate-400 hover:text-rose-500 shadow-xs">
                <FiHeart className="w-2.5 h-2.5" />
              </button>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Tight Content Padding */}
            <div className="p-1.5 flex flex-col justify-between flex-1 gap-1">
              <div>
                {/* Micro Rating */}
                <div className="flex items-center gap-0.5 text-amber-500 text-[9px] font-medium">
                  <FiStar className="fill-amber-500 w-2.5 h-2.5" />
                  <span>{product.rating}</span>
                </div>
                {/* 1 Line Text Lock for trendingSection Name */}
                <h3 className="font-bold text-slate-700 text-[10px] sm:text-xs line-clamp-1">
                  {product.name}
                </h3>
              </div>

              {/* Price & Action Mini Row */}
              <div className="flex items-center justify-between mt-auto">
                <span className="text-[10px] sm:text-xs font-black text-slate-900 line-clamp-1">
                  ₹{product.price.toLocaleString()}
                </span>
                <button onClick={()=>{
                  addToCart(product);
                  // navigate("/cart");
                }}
                
                className="bg-blue-600 hover:bg-blue-700 text-white p-1 rounded-md transition active:scale-95 shadow-xs shrink-0">
                  <FiShoppingCart className="w-2.5 h-2.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
