import React from "react";
import PromoCart from "../../components/home/PromoCart";

const Categories = () => {
  // src/data/products.js

  const bgColors = [
    "bg-orange-200",
    "bg-blue-200",
    "bg-purple-200",
    "bg-green-200",
    "bg-pink-200",
    "bg-yellow-200",
  ];

  const Products = [
    {
      id: 1,
      brand: "Apple",
      // Fix: Working Pexels Image (iPhone)
      image:
        "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 2,
      brand: "Samsung",
      // Fix: Working Pexels Image (Samsung Phone)
      image:
        "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 3,
      brand: "Apple Laptops",
      // Fix: Working Pexels Image (MacBook)
      image:
        "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 4,
      brand: "Dell",
      // Fix: Working Pexels Image (Windows Laptop)
      image:
        "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 5,
      brand: "Smartwatches",
      // Fix: Working Pexels Image (Smartwatch)
      image:
        "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 6,
      brand: "Sony Audio",
      // Fix: Working Pexels Image (Headphones)
      image:
        "https://images.pexels.com/photos/3394662/pexels-photo-3394662.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];
  return (
    <div className="w-full  mx-0.2  ">
      <div className="grid   mt-15 mb-25 gap-2">
        <h3 className="mx-6 font-bold text-2xl">All Category</h3>
        {Products.map((product) => (
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
