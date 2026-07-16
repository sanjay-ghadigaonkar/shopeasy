# 🛒 ShopEasy - My E-Commerce Project Journey

Yeh mera ek learning project hai jahan main step-by-step ek real-world e-commerce website banana seekh raha hoon.

---

## 📅 Day 1 se Day 4: UI Design aur Frontend Setup
Shuruat ke 3-4 din maine poora dhyan app ki look aur design par lagaya:
* **AI Prompting & UI Adjustment:** Maine AI prompting ka use kiya aur dher saara hands-on practice karke responsive mobile aur desktop UI layout taiyar kiya.
* **Component Architecture:** Poori app ke structure ko clean rakhne ke liye alag-alag components banaye (jaise `SearchBar`, `PromoCart`, `ShortCategory`, aur `TrendingProducts`).
* **Dummy Data UI:** Shuru me saare components ke andar hi local dummy data daal kar check kiya ki hamari custom product grids aur lists screen par kaisi dikh rahi hain.

---

## 📅 Day 5 (Aaj): State Management (`Context API`)
UI set hone ke baad, aaj maine app me real logic aur data sharing lagayi:
* **Global Storage (CartContext):** Ek alag Context component banaya taaki Cart ka data pure app me kahin se bhi access ho sake.
* **Add to Cart Logic:** Maine seekha ki jab user kisi card ke cart icon par click karega, tabhi wo product list me save hoga.
* **Bug Fixing & Debugging:** 
  * Vite ke import path errors (`../../` aur `./`) ko khud thik karna seekha.
  * React hooks ke rules seekhe ki `useContext` ko hamesha Provider ke andar (child component me) hi call karna chahiye, isiliye code ko `AppContent` me shift kiya.
* **User Feedback Popup:** Ek live alert notification banaya jo item add hote hi screen par aata hai aur `setTimeout` se 3 second baad apne aap gayab ho jata hai.
 ## day 6 
 Day 6: Refactored and optimized CSS utilities for better responsiveness and cleaned up component architecture for maintainability.
##  Day 7 
### 🚀 Recent Updates & Features
* **Dynamic Product Details:** Implemented a dedicated product page that dynamically fetches and displays item-specific data (images, accurate pricing, and user ratings) based on URL parameters using `react-router-dom`.
* **Smart UI Development:** Utilized advanced AI meta-prompting to generate a clean, responsive, mobile-first Tailwind CSS skeleton, significantly speeding up the development process.
* **Interactive Quantity Manager:** Built a robust local state quantity counter with logical boundaries (preventing negative values) to enhance the user experience before adding items to the global cart.
# Day 8
- Created a centralized product.js data file with 30 items (Mobiles, Laptops, Headphones) for better state management.
- Fixed the search input focus bug by restructuring the Home component to prevent unnecessary re-renders.
- Implemented z-index overlay logic for full-screen search results.
- Improved conditional rendering to seamlessly switch between the normal layout and search view.


