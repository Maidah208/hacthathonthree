"use client";
import React, { useState, useEffect } from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import ProductCard, { Product } from "@/Components/Card";

const ProductPage = ({ params: { slug } }: { params: { slug: string } }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [, setRelatedProducts] = useState<Product[]>([]);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "product" && slug.current == "${slug}"] {
        _id,
        title,
        price,
        description,
        dicountePercentage,
        "productImage": productImage.asset->url,
        tags,
        category
      }`;

      const data = await client.fetch(query);
      const product = data[0];

      const relatedProductsQuery = `*[_type == "product" && slug.current != "${slug}"][0...4] {
        _id,
        title,
        price,
        "productImage": productImage.asset->url
      }`;
      const relatedProducts: Product[] =
        await client.fetch(relatedProductsQuery);

      setProduct(product);
      setRelatedProducts(relatedProducts);
    };

    fetchData();
  }, [slug]);

  const addTocart = (product: Product) => {
    if (!selectedSize || !selectedColor) {
      alert("Please select a size and color before adding to the cart.");
      return;
    }

    const cartItem = {
      ...product,
      size: selectedSize,
      color: selectedColor,
      quantity: 1,
    };
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    // Check if the product already exists in the cart
    const existingProductIndex = cart.findIndex(
      (item: { _id: string; size: string; color: string }) =>
        item._id === product._id &&
        item.size === selectedSize &&
        item.color === selectedColor
    );
    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += 1; // Increase the quantity of the existing product
    } else {
      cart.push(cartItem); // Add new product
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.title} has been added to your cart.`);
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb Section */}
      <div className="bg-[#FAF3EA] py-2 px-12">
        <span className="text-gray-600">Home</span> &gt;{" "}
        <span className="text-gray-600">Shop</span> &gt;{" "}
        <span className="text-gray-800 font-semibold">{product.title}</span>
      </div>

      {/* Product Section */}
      <div className="container mx-auto border-b px-4 py-8">
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="flex w-full md:w-1/2 space-x-4">
            {/* Main Image */}
            <div className="flex-1">
              <Image
                src={product.productImage}
                alt="Main Sofa"
                className="w-full h-96"
                width={500}
                height={500}
              />
            </div>
          </div>

          {/* Product Details Section */}
          <div className="w-full md:w-1/2 md:pl-8 mt-6 md:mt-0">
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-gray-700 mt-2">{product.price}</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500">★★★★★</span>
              <span className="ml-2 text-gray-500">(1 Customer Review)</span>
            </div>
            <p className="text-gray-700 mt-4">
              {product.description.length > 200
                ? `${product.description.substring(0, 180)}...`
                : product.description}
            </p>

            {/* Size Selection */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Size</h3>
              <div className="flex space-x-4 mt-2">
                {["S", "M", "L"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)} // Set the selected size on click
                    className={`border border-gray-300 px-4 py-2 rounded-lg 
              ${selectedSize === size ? "bg-yellow-600 text-white" : "hover:bg-yellow-600"}`} // Conditional class
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Color</h3>
              <div className="flex space-x-4 mt-2">
                {[
                  { name: "Blue", class: "bg-blue-500" },
                  { name: "Yellow", class: "bg-yellow-500" },
                  { name: "Brown", class: "bg-red-500" },
                ].map(({ name, class: colorClass }) => (
                  <span
                    key={name}
                    onClick={() => setSelectedColor(name)} // Set the selected color
                    className={`w-8 h-8 rounded-full ${colorClass} border cursor-pointer
          ${selectedColor === name ? "ring-4 ring-yellow-500" : ""}`} // Highlight selected color
                  ></span>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex items-center mt-4 border-b-0">
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="w-20 border border-gray-300 px-4 py-3 rounded-lg"
              />
              <button
                className="bg-gray-100 text-black px-9 py-3 rounded-lg ml-4 hover:bg-yellow-600"
                onClick={() => addTocart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 sm:p-6 lg:p-8 text-gray-700">
        <div className="space-y-4">
          {/* Product ID */}
          <div className="flex flex-wrap sm:flex-nowrap items-start sm:items-center">
            <span className="w-24 text-gray-500">Product ID</span>
            <span className="flex-1">: {product._id}</span>
          </div>

          {/* Category */}
          <div className="flex flex-wrap sm:flex-nowrap items-start sm:items-center">
            <span className="w-24 text-gray-500">Category</span>
            <span className="flex-1">: {product.category}</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap sm:flex-nowrap items-start sm:items-center">
            <span className="w-24 text-gray-500">Tags</span>
            <span className="flex-1">: {product.tags.join(", ")}</span>
          </div>

          {/* Share */}
          <div className="flex flex-wrap sm:flex-nowrap items-start sm:items-center">
            <span className="w-24 text-gray-500">Share</span>
            <span className="flex-1 flex gap-2 sm:gap-4 text-gray-600">
              <FaFacebookF className="cursor-pointer hover:text-black" />
              <FaLinkedinIn className="cursor-pointer hover:text-black" />
              <FaTwitter className="cursor-pointer hover:text-black" />
            </span>
          </div>
        </div>
      </div>

      <div className="p-8 font-sans text-gray-700 border-t">
        {/* Tabs */}
        <div className="flex gap-8 pb-3 mb-6 justify-center">
          <span className="text-black font-semibold border-b-2 border-black pb-2">
            Description
          </span>
          <span className="text-gray-500 cursor-pointer hover:text-black">
            Additional Information
          </span>
          <span className="text-gray-500 cursor-pointer hover:text-black">
            Reviews [5]
          </span>
        </div>

        {/* Description Section */}
        <div className="space-y-4 mr-28 ml-28 font-normal text-left mx-auto ">
          <p>{product.description}</p>
        </div>
      </div>
      <div className="mx-4 py-10">
        {/* Heading */}
        <div>
          <h1 className="text-center text-4xl font-bold">Explore More</h1>
          <ProductCard limit={4} />
        </div>
      </div>
      <div className="flex justify-center mb-20">
        <a
          href="/shop"
          className="py-1 px-10 border border-yellow-600 bg-white text-yellow-600 text-center text-lg font-semibold"
        >
          See More
        </a>
      </div>
    </div>
  );
};

export default ProductPage;
