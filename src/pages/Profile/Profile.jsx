import React from "react";
import {
  FiChevronRight,
  FiBox,
  FiMapPin,
  FiCreditCard,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

const Profile = () => {
  // Menu items ka data array (List render karne ke liye)
  const menuItems = [
    { id: 1, title: "My Orders", icon: <FiBox />, link: "/orders" },
    { id: 2, title: "My Addresses", icon: <FiMapPin />, link: "#" },
    { id: 3, title: "Payment Methods", icon: <FiCreditCard />, link: "#" },
    { id: 4, title: "Settings", icon: <FiSettings />, link: "#" },
  ];

  return (
    // Main Container: pb-24 zaroori hai taaki bottom navbar menu ko na chhipaye
    <div className="min-h-screen bg-slate-50 pb-24 font-sans w-full" >
      
      {/* 1. Clean Header */}
      <header className="flex items-center justify-center px-4 py-4 bg-white shadow-sm sticky top-0 z-20">
        <h1 className="text-lg font-bold text-slate-900 tracking-tight">Profile</h1>
      </header>

      {/* 2. User Info Section */}
      <div className="flex flex-col items-center mt-8 mb-8 px-4">
        {/* Avatar Placeholder */}
        <div className="h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shadow-sm border-4 border-white mb-3 relative">
          <span className="text-4xl font-black">S</span>
        </div>
        
        {/* Name & Subtext */}
        <h2 className="text-xl font-bold text-slate-900">Sanjay</h2>
        <p className="text-sm text-slate-500 font-medium mt-0.5">sanjay@example.com</p>
        <p className="text-xs text-slate-400 mt-1">+91 XXXXXXXXXX</p>
      </div>

      {/* 3. Menu List Options */}
      <div className="px-4 space-y-4">
        
        {/* Main Menu Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          {menuItems.map((item, index) => (
            <div
              key={item.id}
              className={`flex items-center justify-between p-4 cursor-pointer hover:bg-slate-50 transition-colors ${
                index !== menuItems.length - 1 ? "border-b border-slate-100" : ""
              }`}
            >
              <div className="flex items-center gap-3 text-slate-700">
                <span className="text-lg text-slate-400">{item.icon}</span>
                <span className="font-semibold text-sm">{item.title}</span>
              </div>
              <FiChevronRight className="text-slate-300 text-lg" />
            </div>
          ))}
        </div>

        {/* 4. Logout Button (Alag Card me highlight karne ke liye) */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-red-50 transition-colors group">
            <div className="flex items-center gap-3 text-red-600">
              <span className="text-lg group-hover:scale-110 transition-transform">
                <FiLogOut />
              </span>
              <span className="font-bold text-sm">Logout</span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Profile;