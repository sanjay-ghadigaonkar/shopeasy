import React from "react";
import PromoCart from "../../components/home/PromoCart";
import SearchBar from "../../components/Common/Searchbar";
import ShortCategory from "../../components/Common/ShortCategory";
import TrendingProducts from "../../components/Common/TrendingProducts";

const Home = () => {
  return (
    <div className=" w-full max-h-screen ">
      {/* hompage strucher */}
      {/* input for search bar */}
      <div className="w-full   h-15 mt-12 my-5  flex items-center justify-center gap-5">
        <SearchBar />
      </div>
      {/* promotion poster */}

      <div className="   h-30 my-5 flex items-center justify-center">
        <PromoCart />
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
