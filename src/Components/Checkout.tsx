"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  FaTrophy,
  FaShieldAlt,
  FaShippingFast,
  FaHeadset,
} from "react-icons/fa"; 

type CartItem = {
  name: string;
  quantity: number;
  price: number;
};

interface CheckoutProps {
  cartItems: CartItem[];
  total: number;
}

const Checkout: React.FC<CheckoutProps> = ({ cartItems = [] }) => {

  const handleClick = () => {
    alert("Your order has been successfully placed!");
  };
  const [subtotal, setSubtotal] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    // Get the data from localStorage when the component mounts
    const storedSubtotal = localStorage.getItem("subtotal");
    const storedTotal = localStorage.getItem("total");

    if (storedSubtotal && storedTotal) {
      setSubtotal(parseFloat(storedSubtotal));
      setTotal(parseFloat(storedTotal));
    }
  }, []);
  
  return (
    <div>
      {/* Background Image */}
      <div className="w-full h-[250px] relative">
        <Image
          src="/images/shop.png"
          fill
          style={{ objectFit: "cover" }}
          alt="Hero"
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center space-y-3 text-center text-black">
          <h1 className="text-3xl sm:text-5xl font-bold">Checkout</h1>
          <p className="text-sm sm:text-md md:text-xl font-normal">
            <a href="/" className="text-black hover:underline">
              Home
            </a>{" "}
            <span className="mx-2">&gt;</span> Checkout
          </p>
        </div>
      </div>

      <div className="min-h-screen bg-gray-100 flex items-center justify-center py-6 sm:py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Billing Details */}
            <div className="p-4 sm:p-6 bg-white rounded shadow">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                Billing details
              </h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700">First Name</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Last Name</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700">
                    Company Name (Optional)
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">
                    Country / Region
                  </label>
                  <select className="w-full p-2 border border-gray-300 rounded">
                    <option>Sri Lanka</option>
                    <option>Pakistan</option>
                    <option>India</option>
                    <option>Turkey</option>
                    <option>Canada</option>
                    <option>Dubai</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700">Street address</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Town / City</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Province</label>
                  <select className="w-full p-2 border border-gray-300 rounded">
                    <option>Western</option>
                    <option>Eastern</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700">ZIP code</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Contact</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Email Address</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-gray-700"></label>
                  <input
                    type="text"
                    placeholder="Additional Information"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              </form>
            </div>

            {/* Product Summary */}
            <div className="p-4 sm:p-6 bg-white rounded shadow">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                Product
              </h2>
              {/* Product pricing */}
              <div className="p-4 sm:p-6 bg-white rounded shadow">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                  Product
                </h2>
                <div className="space-y-2">
                  {cartItems.map((item, index: number) => (
                    <div key={index} className="flex justify-between">
                      <span>
                        {item.name} × {item.quantity}
                      </span>
                      <span>
                        Rs. {item.price ? item.price.toLocaleString() : "N/A"}
                      </span>
                    </div>
                  ))}
                  <div className="flex justify-between">
                    <span className="font-normal">Subtotal</span>
                    <p>Subtotal: ${subtotal.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between text-lg sm:text-xl font-semibold">
                    <span>Total</span>
                    <p>Total: ${total.toFixed(2)}</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <h3 className="text-lg font-medium">Payment Method</h3>
                <div>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="payment"
                      className="h-4 w-4 text-yellow-600"
                      defaultChecked
                    />
                    <span>Direct Bank Transfer</span>
                  </label>
                  <p className="text-gray-500 text-sm">
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account.
                  </p>
                </div>
                <div>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="payment"
                      className="h-4 w-4 text-yellow-600"
                    />
                    <span>Cash On Delivery</span>
                  </label>
                </div>
                <p className="text-gray-500 text-sm">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our{" "}
                  <a href="#" className="text-blue-500">
                    privacy policy
                  </a>
                  .
                </p>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={handleClick}
                  className="w-full lg:w-40 mt-6 p-3 bg-yellow-600 text-white border border-black rounded-md shadow hover:bg-yellow-700"
                >
                  Place order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Service */}
      <div className="h-[200px] w-full bg-[#FAF3EA] flex flex-wrap justify-around items-center py-10 mt-16">
        {[
          {
            icon: FaTrophy,
            title: "High Quality",
            desc: "Crafted from top materials",
          },
          {
            icon: FaShieldAlt,
            title: "Warranty Protection",
            desc: "Over 2 years",
          },
          {
            icon: FaShippingFast,
            title: "Free Shipping",
            desc: "Order over $150",
          },
          {
            icon: FaHeadset,
            title: "24 / 7 Support",
            desc: "Dedicated support",
          },
        ].map((item, index: number) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-2 max-w-[200px] p-4"
          >
            <item.icon className="text-4xl text-[#B88B4A]" />
            <h3 className="text-sm sm:text-base text-[#B88B4A] font-semibold">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checkout;
