import React from "react";
import PromoCart from "../../components/home/PromoCart";
import SearchBar from "../../components/Common/SearchBar";
import ShortCategory from "../../components/Common/ShortCategory";
import TrendingProducts from "../../components/Common/TrendingProducts";

const Home = () => {
  return (
    // Responsive outer frame with top/bottom safe zones for fixed navbars
    <div className="w-full min-h-screen pt-16 pb-24 md:pt-24 md:pb-28 bg-slate-50 overflow-x-hidden max-w-6xl mx-auto px-2 md:px-6">
      
      {/* Section 1: Search bar layout */}
      <div className="w-full md:my-6 flex items-center justify-center">
        <SearchBar />
      </div>

      {/* Section 2: Promotional discount poster banner */}
      <div className="w-full h-auto my-4 md:my-8 flex items-center justify-center px-2">
        <PromoCart
          brand="Super Sale"
          image="https://images.pexels.com/photos/3394662/pexels-photo-3394662.jpeg?auto=compress&cs=tinysrgb&w=400"
          BackGroundColor="bg-indigo-200"
        />
      </div>

      {/* Section 3: Shop by Category row carousel with bottom border divider */}
      <div className="w-full h-35 border-b border-slate-200 px-2">
        <ShortCategory className="w-full md:h-50" />
      </div>

      {/* Section 4: Dynamic responsive product display grid */}
      <div className="w-full h-auto my-5 md:my-8 px-4">
        <TrendingProducts />
      </div>

    </div>
  );
};

export default Home;
