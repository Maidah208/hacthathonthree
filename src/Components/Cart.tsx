"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import CustomerCare from "./CustomerCare";
import { calculateTotal } from "./CartUtils";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Define the type for the CartItem
interface CartItem {
  _id: string;
  title: string;
  price: string;
  quantity: number;
  productImage: string;
  size: string;
}

const Cart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Fetch cart data from localStorage when the component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  // Handle adding an item quantity
  const handleAddItem = (itemId: string) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item._id === itemId) {
          return { ...item, quantity: item.quantity + 1 }; // Increase the quantity
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
      return updatedCart; // Directly return updatedCart to trigger a re-render
    });
  };

  // Handle removing an item quantity
  const handleRemoveItem = (itemId: string) => {
    setCart((prevCart) => {
      const updatedCart = prevCart
        .map((item) => {
          if (item._id === itemId && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0); // Filter out items with 0 quantity

      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
      return updatedCart;
    });
  };

  // Function to update the cart in localStorage and state
  const updateCart = (updatedCart: CartItem[]) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    console.log("Updated Cart:", updatedCart); // Debugging line
  };

  // Handle item removal from the cart
  const handleRemoveFromCart = (itemId: string) => {
    const updatedCart = cart.filter((item) => item._id !== itemId); // Remove item from cart
    updateCart(updatedCart); // Update cart and localStorage immediately
  };

  // Inside Cart.tsx
const handleCheckout = () => {
  const subtotal = calculateTotal(cart);
  const total = subtotal * 1.05; // Adding tax (5%)
  
  // Save to localStorage
  localStorage.setItem("subtotal", subtotal.toString());
  localStorage.setItem("total", total.toString());
};


  return (
    <div>
      <div className="w-full h-[250px] relative flex justify-center items-center">
        <Image
          src="/images/shop.png"
          alt="Shop"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center space-y-3 text-center text-black">
          <h1 className="text-4xl md:text-5xl font-bold">Cart</h1>
          <p className="text-md sm:text-2xl font-semibold">
            <a href="/" className="text-black hover:underline">
              Home
            </a>{" "}
            <span className="mx-2">&gt;</span> Cart
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row justify-between items-start p-8">
        {/* First Section */}
        <div className="w-full lg:w-2/3">
          <div className="border-b border-[#F9F1E7] pb-4 bg-[#F9F1E7]">
            {/* Headings and Pricing - Stacked in Mobile, Grid in Larger Screens */}
            <div className="grid grid-cols-1 lg:grid-cols-4 text-center font-bold text-lg py-4">
              <div className="text-gray-800">Product</div>
              <div className="text-gray-800">Price</div>
              <div className="text-gray-800">Quantity</div>
              <div className="text-gray-800">Sub-total</div>
            </div>
          </div>

          {/* Product Information */}
          {cart.length > 0 ? (
            cart.map((item) => (
              <div
                key={item._id}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center items-center mt-4 mr-12"
              >
                {/* Product */}
                <div className="flex flex-col items-center">
                  <Image
                    src={item.productImage}
                    alt={item.title}
                    width={120}
                    height={120}
                    className="rounded"
                  />
                  <p className="mt-2 text-gray-700 font-medium">{item.title}</p>
                </div>
                {/* Price */}
                <div className="flex justify-center items-center text-gray-700">
                  ${parseFloat(item.price).toFixed(2)}
                </div>
                {/* Quantity */}
                <div className="flex justify-center items-center text-gray-700">
                  <button
                    onClick={() => handleRemoveItem(item._id)}
                    className="px-2 py-1 bg-gray-200 text-black rounded-lg"
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity || 1}</span>
                  <button
                    onClick={() => handleAddItem(item._id)}
                    className="px-2 py-1 bg-gray-200 text-black rounded-lg"
                  >
                    +
                  </button>
                </div>
                <div className="flex justify-center items-center">
                  {/* Sub-total */}
                  <div className="flex justify-center items-center text-gray-700">
                    $
                    {(parseFloat(item.price) * (item.quantity || 1)).toFixed(2)}
                  </div>
                  {/* Remove Item Button */}
                  <div className="flex justify-center items-center">
                    <button
                      onClick={() => handleRemoveFromCart(item._id)}
                      className="px-2 py-1 text-white rounded-lg"
                    >
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="w-6 h-6 text-red-500 hover:text-red-700"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-700">Your cart is empty.</p>
          )}
        </div>

        {/* Second Section - Cart Total */}
        <div className="w-full lg:w-1/4 bg-[#F9F1E7] mt-6 lg:mt-0 lg:mr-10 p-6 lg:p-12 rounded-lg text-white">
          <h2 className="text-2xl lg:text-3xl text-black font-bold text-center mb-6">
            Cart Total
          </h2>
          <div className="text-lg text-black mb-4">
            <div className="flex justify-between text-black border-b pb-2">
              <span>Subtotal:</span>
              <span>${calculateTotal(cart).toFixed(2)}</span>
            </div>
            <div className="flex justify-between mt-4 text-black">
              <span>Tax (5%):</span>
              <span>${(calculateTotal(cart) * 0.05).toFixed(2)}</span>
            </div>
            <div className="flex justify-between mt-4 text-black">
              <span>Total:</span>
              <span>${(calculateTotal(cart) * 1.05).toFixed(2)}</span>
            </div>
          </div>

          <div>
            <button
              className="w-full mt-6 py-3 border border-black text-black rounded-lg text-lg transition-all"
              onClick={handleCheckout}
            >
              <Link href="/checkout" className="hover:text-gray-400">
                Proceed to Checkout
              </Link>
            </button>
          </div>
        </div>
      </div>

      {/* Customer Care */}
      <div>
        <CustomerCare />
      </div>
    </div>
  );
};

export default Cart;
