import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-white py-10 px-4 md:px-20 border-t-4">
        {/* Footer Content Divided into 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {/* First Column */}
          <div>
            <h1 className="text-2xl font-bold mb-12 ">Furino</h1>
            <p className="text-gray-700">
              400 University Drive Suite 200 <br />
              Coral Gables, 
            </p>
            <p>FL 33134 USA</p>
          </div>

          {/* Second Column */}
          <div>
            <h1 className="text-xl font-bold mb-4  text-zinc-600">Links</h1>
            <ul className=" text-gray-700 space-y-6">
              <li>
                <Link href="/" className="hover:text-gray-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-gray-500">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-500">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Third Column */}
          <div>
            <h1 className="text-xl font-bold mb-4 text-zinc-600">Help</h1>
            <ul className=" text-gray-700 space-y-7">
              <li>
                <Link href="/payment-options" className="hover:text-gray-500">
                  Payment Option
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-gray-500">
                  Return
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-gray-500">
                  Privacy Policies
                </Link>
              </li>
            </ul>
          </div>

          {/* Fourth Column */}
          <div>
            <h1 className="text-xl font-bold mb-4  text-zinc-600">Newsletter</h1>
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border-b-2 border-gray-700 outline-none py-1 mb-4 text-gray-700"
              />
              <button className="text-gray-700 underline hover:text-gray-500">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-gray-300 pt-4 text-left">
          <p className="text-sm text-gray-600">2023 Furino. All rights reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
