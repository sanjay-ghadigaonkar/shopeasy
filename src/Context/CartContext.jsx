import React, { createContext, useState } from "react";

// 1. Ek khali Context (Storage) banaya
export const CartContext = createContext();

// 2. Provider component banaya jo saare data ko baaki pages tak pahunchayega
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // Shuru me cart khali rahega
  const [alertMessage ,setAlertMessage]=useState("")


  // Kisi product ko cart me jodne ka function
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Check karo ki kya product pehle se cart me hai?
      const isExist = prevItems.find((item) => item.id === product.id);
      
      if (isExist) {
        // Agar hai, toh bas uski quantity +1 kar do
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // Agar naya product hai, toh use array me jod do aur quantity 1 set karo
      return [...prevItems, { ...product, quantity: 1 }];
    });
    setAlertMessage(`${product.name} added to cart!`);
    setTimeout(() => {
  setAlertMessage("");
},3000);
  };

  return (
    // Jo bhi cheezein hum 'value' me dalenge, wo poore app me kahin bhi use ho sakengi
    <CartContext.Provider value={{ cartItems, setCartItems, addToCart ,alertMessage ,setAlertMessage}}>
      {children}
    </CartContext.Provider>
  );
};