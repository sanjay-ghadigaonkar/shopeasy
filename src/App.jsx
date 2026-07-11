import { useContext } from "react";
import { CartContext } from "./Context/CartContext";
import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import { FiAlignLeft } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "./pages/Cart/Cart";
import Categories from "./pages/Categories/Categories";
import Orders from "./pages/Orders/Orders";
import Profile from "./pages/Profile/Profile";
import { IoHomeOutline } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { TbBorderStyle } from "react-icons/tb";
import ProductDetail from "./components/Common/ProductDetail";
  

const App = () => {
  // YAHAN APNA NAYA FUNCTION (COMPONENT) LIKHNA HAI
  const AppContent = () => {
    const location = useLocation();
    const { alertMessage } = useContext(CartContext);
    const { cartItems } = useContext(CartContext);

    console.log("Current Alert Message in App:", alertMessage);
    return (
      <>
        {/*top  Logo  navbar and cart navbar */}

        {alertMessage && (
          <div className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-slate-950 text-white px-4 py-2.5 rounded-xl shadow-lg font-medium text-xs z-50 text-center whitespace-nowrap min-w-[200px]">
            {alertMessage}
          </div>
        )}

        {location.pathname !== "/orders" &&
          location.pathname !== "/profile" &&
          location.pathname !== "/cart" && 
          !location.pathname.startsWith("/product") &&(
            <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center shadow-md font-black text-2xl p-2 px-1 bg-white">
              <Link to="/">
                <FiAlignLeft  className="md:text-5xl"/>
              </Link>
              <Link to="/"  className="md:text-5xl">ShopEasy</Link>
              <Link to="/cart" className="relative p-1 md:text-5xl">
                <FaShoppingCart />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold h-4 w-4 md:h-8 md:w-8 rounded-full flex items-center justify-center">
                    {cartItems.reduce(
                      (total, item) => total + item.quantity,
                      0,
                    )}
                  </span>
                )}
              </Link>
            </div>
          )}

        {/* bottom navbar spa for single page aplication */}
        <div className="fixed bottom-0 left-0 right-0 z-50  flex justify-between  shad gap-5  p-2 items-center  bg-white shadow-md">
          <Link to="/" className="flex flex-col items-center">
            <IoHomeOutline size={30} />
            <span className="text-xs font-medium">Home</span>
          </Link>
          <Link to="/categories" className="flex flex-col items-center">
            <BiCategory size={30} />
            <span className="text-xs font-medium">Categories</span>
          </Link>
          <Link to="/orders" className="flex flex-col items-center">
            <TbBorderStyle size={30} />
            <span className="text-xs font-medium">Orders</span>
          </Link>
          <Link to="/cart" className="flex flex-col items-center">
            <FaShoppingCart size={30} />
            <span className="text-xs font-medium">Cart</span>
          </Link>
          <Link to="/profile" className="flex flex-col items-center">
            <CgProfile size={30} />
            <span className="text-xs font-medium">Profile</span>
          </Link>
        </div>
        {/* pages components */}
        <div className="flex flex-wrap">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/categories" element={<Categories />}></Route>
            <Route path="/orders" element={<Orders />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/product/:id" element={<ProductDetail />}></Route>
          </Routes>
        </div>
      </>
    );
  };

  return (
    <div className=" ">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
};

export default App;
