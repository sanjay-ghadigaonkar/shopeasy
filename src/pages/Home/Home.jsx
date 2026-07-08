import React from "react";
import PromoCart from "../../components/home/PromoCart";
import SearchBar from "../../components/Common/SearchBar";
import ShortCategory from "../../components/Common/ShortCategory";
import TrendingProducts from "../../components/Common/TrendingProducts";

const Home = () => {
  const bgColors = ["bg-orange-200"];

  return (
    <div className=" w-full max-h-screen ">
      {/* hompage strucher */}
      {/* input for search bar */}
      <div className="w-full   h-15 mt-12 my-5  flex items-center justify-center gap-5">
        <SearchBar />
      </div>
      {/* promotion poster */}

      <div className="   h-30 my-5 flex items-center justify-center">
        <PromoCart
          brand="Super Sale"
          image="https://images.pexels.com/photos/3394662/pexels-photo-3394662.jpeg?auto=compress&cs=tinysrgb&w=400"
          BackGroundColor="bg-indigo-200"
        />
      </div>
      <div className="w-full h-30 my-5  ">
        <ShortCategory />
      </div>

      <div className="w-full h-65 my-5  px-5 ">
        <TrendingProducts />
      </div>
    </div>
  );
};

export default Home;
