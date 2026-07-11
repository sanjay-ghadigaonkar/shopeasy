import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import React from "react";
import { FiShoppingCart, FiHeart, FiStar } from "react-icons/fi";
import { trendingSection } from "../../data/product";
import {Link} from "react-router-dom";

const TrendingProducts = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    // Outer responsive framework layout for product feeds container
    <div className="w-full h-full flex flex-col overflow-hidden">
      
      {/* Section 1: Dashboard header control trigger elements */}
      <div className="flex items-center justify-between mb-4 shrink-0 mx-2 md:mx-4">
        <h2 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-slate-800 tracking-tight">
          Trending Electronics
        </h2>
        <button className="text-[10px] sm:text-xs md:text-sm font-semibold text-blue-600 hover:underline">
          See All
        </button>
      </div>

      {/* Section 2: Carousel row container swapping into flex grids dynamically */}
      <div className="flex {{h-auto}} md:h-auto overflow-x-auto gap-3 pb-6 scrollbar-none w-full snap-x snap-mandatory md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-4 md:overflow-visible border border-slate-200 rounded-xl p-3 bg-slate-50/50 shadow-xs">
        {trendingSection.map((product) => (
          <Link to={`/product/${product.id}`}
            key={product.id}
            className="snap-center shrink-0 w-[140px] md:w-full bg-white border border-slate-100 rounded-xl overflow-hidden shadow-xs hover:shadow-md flex flex-col justify-between h-[195px] sm:h-[210px] md:h-[280px] lg:h-[300px] group transition-all duration-300"
          >
            {/* Image viewport box rendering section controls */}
            <div className="relative h-20 sm:h-28 md:h-40 lg:h-44 w-full bg-slate-50 overflow-hidden border-b border-slate-100 shrink-0">
              <button className="absolute top-1.5 right-1.5 z-10 p-1 md:p-1.5 bg-white/90 rounded-full text-slate-400 hover:text-rose-500 shadow-xs transition-colors">
                <FiHeart className="w-2.5 h-2.5 md:w-3.5 md:h-3.5" />
              </button>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Section 3: Typography metadata layout padding context block */}
            <div className="p-2 md:p-3 flex flex-col justify-between flex-1 gap-1 md:gap-2">
              <div className="space-y-0.5 md:space-y-1">
                <div className="flex items-center gap-0.5 text-amber-500 text-[9px] sm:text-top md:text-xs font-medium">
                  <FiStar className="fill-amber-500 w-2.5 h-2.5 md:w-3.5 md:h-3.5" />
                  <span>{product.rating}</span>
                </div>
                <h3 className="font-bold text-slate-700 text-[10px] sm:text-xs md:text-sm line-clamp-1 md:line-clamp-2">
                  {product.name}
                </h3>
              </div>

              {/* Section 4: Pricing metric wrapper with target action buttons */}
              <div className="flex items-center justify-between mt-auto pt-1">
                <span className="text-[10px] sm:text-xs md:text-sm lg:text-base font-black text-slate-900 line-clamp-1">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>
                <button
                  onClick={() => {
                    addToCart(product);
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white p-1 md:p-2 rounded-md lg:rounded-lg transition active:scale-95 shadow-xs shrink-0 cursor-pointer"
                  title="Add to Cart"
                >
                  <FiShoppingCart className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-4 lg:h-4" />
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
