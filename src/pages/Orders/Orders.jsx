import React, { useState } from "react";
import { FiChevronLeft, FiFilter } from "react-icons/fi";

// Dummy Data (Baad mein isko apne src/data/ordersData.js se import kar lena)
const OrdersData = [
  {
    id: 1,
    orderNumber: "Order #ORD123456",
    date: "12 May, 2024",
    status: "Delivered",
    totalAmount: "₹2,11,790",
  },
  {
    id: 2,
    orderNumber: "Order #ORD123455",
    date: "10 May, 2024",
    status: "Shipped",
    totalAmount: "₹41,900",
  },
  {
    id: 3,
    orderNumber: "Order #ORD123454",
    date: "08 May, 2024",
    status: "Pending",
    totalAmount: "₹29,990",
  },
  {
    id: 4,
    orderNumber: "Order #ORD123453",
    date: "05 May, 2024",
    status: "Cancelled",
    totalAmount: "₹64,099",
  },
];

// Tech Lead Trick: Dynamic colors ke liye object map
const statusStyles = {
  Delivered: "bg-green-100 text-green-700",
  Shipped: "bg-blue-100 text-blue-700",
  Pending: "bg-orange-100 text-orange-700",
  Cancelled: "bg-red-100 text-red-700",
};

const tabs = ["All", "Pending", "Shipped", "Delivered"];

const Orders = () => {
  // Tab switch karne ke liye state
  const [activeTab, setActiveTab] = useState("All");

  return (
    // Main Container: Soft light gray background
    <div className="max-h-screen bg-slate-50 pb-20 font-sans w-full   mb-35">
      {/* 1. Header Area */}
      <header className="flex items-center justify-between px-4 py-4 bg-white shadow-sm  top-0 z-20 fixed w-full">
        <button className="p-2 -ml-2 text-slate-800 hover:bg-slate-100 rounded-full transition-all">
          <FiChevronLeft size={24} />
        </button>
        <h1 className="text-lg font-bold text-slate-900 tracking-tight">
          My Orders
        </h1>
        <button className="p-2 -mr-2 text-slate-800 hover:bg-slate-100 rounded-full transition-all">
          <FiFilter size={20} />
        </button>
      </header>

      {/* 2. Scrollable Tab Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-18 mt-5 z-10">
        <div className="flex overflow-x-auto hide-scrollbar px-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-3 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors ${
                activeTab === tab
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Orders List Area */}
      <div className="p-4 space-y-4 mt-10 mb-35">
        {OrdersData.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100"
          >
            {/* Card - Top Row */}
            <div className="flex justify-between items-center mb-1">
              <span className="font-bold text-slate-900 text-sm">
                {order.orderNumber}
              </span>
              <span
                className={`px-2.5 py-1 text-[11px] font-bold rounded-full ${statusStyles[order.status]}`}
              >
                {order.status}
              </span>
            </div>

            {/* Card - Middle Row */}
            <div className="text-xs text-slate-500 mb-4 font-medium">
              {order.date}
            </div>

            {/* Card - Bottom Row */}
            <div className="flex justify-between items-center pt-3 border-t border-slate-100">
              <span className="font-bold text-slate-900">
                {order.totalAmount}
              </span>
              <button className="px-4 py-1.5 text-xs font-bold text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
