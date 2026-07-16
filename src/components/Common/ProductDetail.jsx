import React, { useState } from "react";
import { trendingSection } from "../../data/product";
import {
  FiChevronLeft,
  FiStar,
  FiShoppingCart,
  FiMinus,
  FiPlus,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const [count ,setCount]=useState(1)
  const { id } = useParams();
  const navigate = useNavigate();
  const selectedProduct =trendingSection.find((p)=>p.id === parseInt(id))

  function handleDecrement() {
    
     if (count > 1) {
       setCount(count -1)
     }
   
  }
   function handleIncrement() {
    setCount(count +1)
  }
  console.log(handleIncrement)
  return (
    <div className=" w-full min-h-screen bg-slate-50 text-slate-800 pb-25 antialiased selection:bg-blue-100">
      {/* 1. TOP STICKY HEADER & COMPONENT NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 px-4 py-3.5 backdrop-blur-md">
        <div className="mx-auto flex max-w-md items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-transform active:scale-95 hover:bg-slate-50"
            aria-label="Go back"
          >
            <FiChevronLeft className="h-6 w-6" />
          </button>
          <span className="text-sm font-semibold tracking-wide text-slate-800 uppercase">
            Configure Device
          </span>
          <div className="w-10" /> {/* Visual layout balancer */}
        </div>
      </header>

      {/* CORE CONTAINER */}
      <main className="mx-auto max-w-md bg-white shadow-sm ring-1 ring-slate-100 min-h-[calc(100vh-73px)]">
        {/* 2. PRIMARY HERO IMAGE DISPLAY */}
        <section className="relative p-4" aria-label="Product Gallery">
          <div className="aspect-square w-full rounded-2xl bg-gradient-to-br from-zinc-50 to-zinc-100 border border-slate-100 flex items-center justify-center overflow-hidden">
            {/* Clean geometric-patterned visual placeholder frame */}
            <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
            <span className="text-xs font-semibold tracking-widest text-slate-400 uppercase relative z-10">
             <img src={selectedProduct.image} alt="samsung s24 ultra"/>
            </span>
          </div>
        </section>

        {/* 3. DYNAMIC COLOR-VARIANT SWATCH TRACK */}
        <section className="px-4 pb-2" aria-label="Color Variants">
          <div className="flex gap-3 overflow-x-auto no-scrollbar py-2">
            {/* Selected Thumbnail Variant */}
            <button
              type="button"
              className="aspect-square w-16 flex-shrink-0 rounded-xl bg-zinc-50 border border-slate-200 p-1 transition-all hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-300"
              aria-label="Select Deep Blue Variant"
            >
              <div className="h-full w-full rounded-lg bg-blue-900/10 flex items-center justify-center text-[10px] font-bold text-blue-900">
                V1
              </div>
            </button>

            {/* Inactive Thumbnail Variant 2 */}
            <button
              type="button"
              className="aspect-square w-16 flex-shrink-0 rounded-xl bg-zinc-50 border border-slate-200 p-1 transition-all hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-300"
              aria-label="Select Charcoal Variant"
            >
              <div className="h-full w-full rounded-lg bg-zinc-900/10 flex items-center justify-center text-[10px] font-bold text-zinc-700">
                V2
              </div>
            </button>

            {/* Inactive Thumbnail Variant 3 */}
            <button
              type="button"
              className="aspect-square w-16 flex-shrink-0 rounded-xl bg-zinc-50 border border-slate-200 p-1 transition-all hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-300"
              aria-label="Select Titanium Variant"
            >
              <div className="h-full w-full rounded-lg bg-orange-900/10 flex items-center justify-center text-[10px] font-bold text-orange-900">
                V3
              </div>
            </button>

            {/* Inactive Thumbnail Variant 4 */}
            <button
              type="button"
              className="aspect-square w-16 flex-shrink-0 rounded-xl bg-zinc-50 border border-slate-200 p-1 transition-all hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-300"
              aria-label="Select Sage Variant"
            >
              <div className="h-full w-full rounded-lg bg-emerald-900/10 flex items-center justify-center text-[10px] font-bold text-emerald-900">
                V4
              </div>
            </button>
          </div>
        </section>

        {/* METRICS & CONFIGURATION COMPARTMENT */}
        <div className="p-4 space-y-6">
          {/* 4. PRODUCT METRICS (RATING, PRICE & STOCK STATUS) */}
          <section
            className="space-y-2"
            aria-label="Product Pricing and Rating"
          >
            {/* Inline Row 1: Rating Metric */}
            <div className="flex items-center gap-1.5">
               <span>{selectedProduct.name}</span>
               
              <div className="flex items-end text-amber-500">
                <FiStar className="fill-current h-4 w-4" />
                <FiStar className="fill-current h-4 w-4" />
                <FiStar className="fill-current h-4 w-4" />
                <FiStar className="fill-current h-4 w-4" />
                <FiStar className="fill-current h-4 w-4" />
              </div>
             
              <span className="text-xs font-bold text-slate-700">{selectedProduct.rating}</span>
              <span className="text-xs text-slate-400 tracking-tight">
                (124 reviews)
              </span>
            </div>

            {/* Inline Row 2: Price & Stock Synergy */}
            <div className="flex items-end justify-between pt-1">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-extrabold tracking-tight text-slate-900">
                  ₹{selectedProduct.price.toLocaleString()}
                </span>
                <span className="text-sm text-slate-400 line-through tracking-tight">
                  ₹1,38,888
                </span>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">
                  10% OFF
                </span>
              </div>

              {/* Dynamic Conditional Stock Status Pill */}
              <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700 ring-1 ring-inset ring-emerald-600/10">
                In Stock
              </span>
            </div>
          </section>

          {/* 5. SPECIFICATION CONTEXT (STORAGE CAPACITY) */}
          <section aria-labelledby="storage-selection-title">
            <h3
              id="storage-selection-title"
              className="text-xs font-bold uppercase tracking-widest text-slate-400"
            >
              Select Storage
            </h3>
            <div className="mt-2.5 grid grid-cols-3 gap-3">
              {/* Active Chip */}
              <button
                type="button"
                className="flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-3 text-slate-800 transition-all hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300"
              >
                <span className="text-sm font-bold">128 GB</span>
                <span className="text-[10px] text-slate-400 mt-0.5">Base</span>
              </button>

              {/* Inactive Chip 1 */}
              <button
                type="button"
                className="flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-3 text-slate-800 transition-all hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300"
              >
                <span className="text-sm font-bold">256 GB</span>
                <span className="text-[10px] text-slate-400 mt-0.5">
                  {/* +₹10,000 */}not availeble
                </span>
              </button>

              {/* Inactive Chip 2 */}
              <button 
                type="button"
                className="flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-3 text-slate-800 transition-all hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300"
              >
                <span className="text-sm font-bold">512 GB</span>
                <span className="text-[10px] text-slate-400 mt-0.5">
                  {/* +₹20,000 */}not availeble
                </span>
              </button>
            </div>
          </section>

          {/* 6. QUANTITY INCREMENTOR */}
          <section aria-labelledby="quantity-stepper-title" className="pb-8">
            <h3
              id="quantity-stepper-title"
              className="text-xs font-bold uppercase tracking-widest text-slate-400"
            >
              Quantity
            </h3>
            <div className="mt-2.5 inline-flex items-center rounded-xl bg-zinc-100 p-1 border border-zinc-200/60">
              <button onClick={handleDecrement}
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-slate-600 shadow-sm transition-transform active:scale-90 hover:bg-slate-50"
                aria-label="Decrease quantity"
              >
                <FiMinus className="h-3.5 w-3.5" />
              </button>

              <span
                className="w-12 text-center text-sm font-bold text-slate-800"
                aria-live="polite"
              >
               {count}
              </span>

              <button onClick={handleIncrement}
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-slate-600 shadow-sm transition-transform active:scale-90 hover:bg-slate-50"
                aria-label="Increase quantity"
              >
                <FiPlus className="h-3.5 w-3.5" />
              </button>
            </div>
          </section>
        </div>
      </main>

      {/* 7. EXCLUSIVE CALL-TO-ACTION BUTTON */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-100 bg-white p-4 shadow-[0_-4px_16px_rgba(0,0,0,0.04)]">
        <div className="mx-auto max-w-md">
          <button
            type="button"
            className="w-full bg-blue-600 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </footer>
    </div>
  );
}
