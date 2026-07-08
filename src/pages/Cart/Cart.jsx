import React, { useContext } from "react"; // ✅ Ek hi line me dono sahi se import hain
import { FiChevronLeft, FiTrash2, FiMinus, FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext"; // Path ek baar check kar lein

const Cart = () => {
  // ✅ Pehle chal raha useState yahan se poori tarah hata diya hai
  const { cartItems, setCartItems } = useContext(CartContext);

  const increaseQuantity = (id) => {
    const UpdateCard = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(UpdateCard);
  };

  const decreaseQuantity = (id) => {
    const UpdateCard = cartItems.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(UpdateCard);
  };

  const removeItem = (id) => {
    const UpdateCard = cartItems.filter((item) => item.id !== id);
    setCartItems(UpdateCard);
  };

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const discount = cartItems.length > 0 ? 1500 : 0;
  const finalAmount = totalPrice > 0 ? totalPrice - discount : 0;

  return (
    <div className="min-h-screen bg-slate-50 pb-32 font-sans w-full">
      {/* HEADER */}
      <header className="flex items-center justify-between px-4 py-4 bg-white shadow-sm sticky top-0 z-20">
        <Link
          to="/"
          className="p-2 -ml-2 text-slate-800 hover:bg-slate-100 rounded-full transition-all"
        >
          <FiChevronLeft size={24} />
        </Link>
        <h1 className="text-lg font-bold text-slate-900 tracking-tight">
          My Cart
        </h1>
        <div className="w-8"></div>
      </header>

      <div className="p-4 space-y-6">
        {/* CART ITEMS LIST */}
        <div className="space-y-4">
          {/* ✅ Yahan cartItem.map ko cartItems.map kiya hai */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 p-3 bg-white rounded-2xl shadow-sm border border-slate-100"
            >
              {/* Product Image */}
              <div className="h-24 w-24 bg-slate-100 rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Product Details */}
              <div className="flex flex-col justify-between flex-1 py-1">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs text-slate-500 font-medium">
                      {item.brand}
                    </p>
                    <h3 className="font-bold text-slate-900 text-sm leading-tight">
                      {item.name}
                    </h3>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:bg-red-50 p-1.5 rounded-md transition-colors"
                  >
                    <FiTrash2 size={16} />
                  </button>
                </div>

                {/* Price & Quantity Controls */}
                <div className="flex justify-between items-center mt-2">
                  <span className="font-bold text-slate-900">
                    ₹{item.price.toLocaleString()}
                  </span>

                  <div className="flex items-center gap-3 bg-slate-100 px-2 py-1 rounded-lg">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="p-1 hover:bg-white rounded-md transition-colors text-slate-700"
                    >
                      <FiMinus size={14} />
                    </button>
                    <span className="text-sm font-bold text-slate-900 w-4 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="p-1 hover:bg-white rounded-md transition-colors text-slate-700"
                    >
                      <FiPlus size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BILL DETAILS SECTION */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 space-y-3">
          <h3 className="font-bold text-slate-900 mb-2">Price Details</h3>

          <div className="flex justify-between text-sm text-slate-600">
            <span>Price ({totalItems} items)</span>
            <span>₹{totalPrice.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm text-slate-600">
            <span>Discount</span>
            <span className="text-green-600">- ₹{discount.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm text-slate-600">
            <span>Delivery Charges</span>
            <span className="text-green-600">Free</span>
          </div>

          <div className="pt-3 border-t border-slate-100 flex justify-between items-center">
            <span className="font-bold text-slate-900">Total Amount</span>
            <span className="font-black text-lg text-slate-900">
              ₹{finalAmount.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* FIXED CHECKOUT BUTTON AT BOTTOM */}
      <div className="fixed bottom-[68px] left-0 right-0 p-4 bg-white border-t border-slate-100 z-10">
        <button className="w-full bg-blue-600 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 transition-colors">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
