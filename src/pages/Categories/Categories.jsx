import React, { useState, useEffect } from "react";
import PromoCart from "../../components/home/PromoCart";
import { fetchProductsData } from "../../data/product";
import SkeletonCard from "../../components/Common/SkeletonCard/SkeletonCard";

const Categories = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [ProductsData, setProducts] = useState([]);
  // src/data/products.js

  const bgColors = [
    "bg-orange-200",
    "bg-blue-200",
    "bg-purple-200",
    "bg-green-200",
    "bg-pink-200",
    "bg-yellow-200",
  ];

  useEffect(() => {
    setIsLoading(true);
    fetchProductsData()
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="w-full mx-auto pb-24">
        <div className="grid grid-cols-1 mt-20 mb-10 gap-4 px-2">
          {/* Yahan hum 6 Dummy Skeleton Cards dikha rahe hain */}
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div className="flex justify-center w-full" key={n}>
              <SkeletonCard />
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="w-full  mx-0.2  ">
      <div className="grid   mt-15 mb-25 gap-2">
        <h3 className="mx-6 font-bold text-2xl">All Category</h3>
        {ProductsData.map((product) => (
          <div className="flex justify-center m-2" key={product.id}>
            <PromoCart
              brand={product.brand}
              image={product.image}
              BackGroundColor={bgColors[product.id % bgColors.length]}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
