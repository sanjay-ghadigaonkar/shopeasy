// src/data/products.js

const ProductsData = [
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




 export const trendingSection = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      price: "₹1,39,900",
      rating: "4.9",
      image: "https://unsplash.com",
    },
    {
      id: 2,
      name: "MacBook Air M3",
      price: "₹1,14,900",
      rating: "4.8",
      image: "https://unsplash.com",
    },
    {
      id: 3,
      name: "Samsung Galaxy S24 Ultra",
      price: "₹1,24,999",
      rating: "4.7",
      image: "https://unsplash.com",
    },
    {
      id: 4,
      name: "Sony Bravia 4K TV",
      price: "₹54,999",
      rating: "4.6",
      image: "https://unsplash.com",
    },
  ];

// export const fetchProductsData = () => {
//   return new Promise((resolve, reject) => {
//     // setTimeout se hum 1.5 second ka delay (loading) daal rahe hain
//     setTimeout(() => {
//       resolve(ProductsData); // 1.5s baad Products array bhej dega
//     }, 1000);
//   });
// };

export const fetchProductsData = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ProductsData);
    }, 1000);
  });
};
