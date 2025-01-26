"use client"; // Mark this file as a Client Component

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Features() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    { src: "/images/p4.png", alt: "Room 1", text: "Inner Peace" },
    { src: "/images/p3.png", alt: "Room 2", text: "Relax in Style" },
    { src: "/images/p2.png", alt: "Room 3", text: "Modern Vibes" },
    { src: "/images/p1.png", alt: "Room 4", text: "Serenity" },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const visibleImages = [
    images[currentImageIndex],
    images[(currentImageIndex + 1) % images.length],
  ];

  return (
    <div className="w-full flex flex-col lg:flex-row h-auto lg:h-[400px] mt-6 bg-gray-100">
      {/* Left Section */}
      <div className="w-full lg:w-1/3 flex justify-center items-center px-4 lg:px-8 py-6 lg:py-0">
        <div>
          <h2 className="font-semibold text-2xl lg:text-4xl mb-4 lg:mb-6">
            50+ Beautiful rooms inspiration
          </h2>
          <p className="text-base lg:text-lg text-gray-700 mb-4 lg:mb-6">
            Our designer already made a lot of beautiful prototype of rooms that
            inspire you.
          </p>
          <button className="px-4 lg:px-6 py-2 bg-yellow-600 text-white font-semibold border border-yellow-600 hover:bg-cream-300 transition duration-300">
            <Link href="/shop" className="hover:text-gray-400">
              Explore More
            </Link>
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-2/3 relative overflow-hidden bg-gray-200 h-[400px]">
        {/* Container for Images */}
        <div className="flex w-full h-full transition-transform duration-500">
          {visibleImages.map((image, index) => (
            <div
              key={index}
              className="w-1/2 relative h-full"
              style={{ flex: "0 0 50%" }} // Ensures only 2 images are visible
            >
              <Image
                src={image.src}
                width={500}
                height={400}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 text-white text-center flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                {image.text}
              </div>
            </div>
          ))}
        </div>

        {/* Arrow for Sliding */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-white bg-black bg-opacity-50 rounded-full p-2">
          <button onClick={nextImage}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
