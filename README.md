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

---

## 🚀 Aage Kya Karna Hai? (Next Steps)
- [ ] Navbar ke Cart Icon ke upar total items ka dynamic count badge lagana.
- [ ] Category page ke clicks par products ko dynamic filter karna.
