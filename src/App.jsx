import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
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

const App = () => {
  return (
    <div className=" gap-10  max-w-full  min-h-screen  ">
      <BrowserRouter>
        {/*top  Logo  navbar and cart navbar */}

        <div className="fixed top-0 left-0 right-0 z-50  flex justify-between items-center  border border-black  font-black text-2xl  p-2 px-1 bg-white">
          <Link to="/">
            <FiAlignLeft />
          </Link>
          <Link to="/">ShopEasy</Link>
          <Link to="/cart">
            <FaShoppingCart />
          </Link>
        </div>

        {/* bottom navbar spa for single page aplication */}
        <div className="fixed bottom-0 left-0 right-0 z-50  flex justify-between  shad gap-5  p-2 items-center  bg-white">
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
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
