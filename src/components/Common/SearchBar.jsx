import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className="w-full mx-5    ">
      <div className="relative   ">
        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />

        <input
          type="search"
          placeholder="Search Products"
          className=" w-full  h-10 pl-12 pr-4 my-5 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
      </div>
    </div>
  );
};
export default SearchBar;
