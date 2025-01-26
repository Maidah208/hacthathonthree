"use client";

import React, { useState, useEffect } from "react";
import sanityClient from "@sanity/client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const sanity = sanityClient({
  projectId: "yavfxi9q",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});

export interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  dicountePercentage: number;
  productImage: string;
  tags: string[];
  slug: string;
  category: string;
}

interface ProductCardsProps {
  limit?: number;
}

const ProductCard: React.FC<ProductCardsProps> = ({ limit }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const query = `*[_type == "product"] {
        _id,
        title,
        price,
        description,
        dicountePercentage,
        "productImage": productImage.asset->url,
        tags,
        isNew,
        "slug": slug.current
      }`;
      const data = await sanity.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products: ", error);
    }
  };

  const addTocart = (product: Product) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.title} has been added to your cart.`);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Limit products if the limit prop is passed
  const displayedProducts = limit ? products.slice(0, limit) : products;

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 mt-8 mx-8 py-8">
        {displayedProducts.map((product) => (
          <div
            key={product._id}
            className="group bg-[#F4F5F7] w-full h-[350px] overflow-hidden transition-transform transform hover:scale-105 relative"
          >
            {/* Discount Badge */}
            {product.dicountePercentage > 0 && (
              <div className="absolute top-2 right-2 bg-pink-500 text-white text-center text-xs font-bold rounded-full w-12 h-12 flex items-center justify-center">
                -{product.dicountePercentage}% Off
              </div>
            )}

            {/* Product Image */}
            <div className="relative w-full h-3/5">
              <Image
                src={product.productImage}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="text-center mt-4 space-y-2">
              <p className="font-semibold text-lg text-left pl-3">
                {product.title}
              </p>
              <p className="text-gray-600 text-sm text-left pl-3">
                {product.description.length > 60
                  ? `${product.description.substring(0, 60)}...`
                  : product.description}
              </p>
              <p className="font-semibold text-base text-left pl-3 mb-6">
                ${product.price.toFixed(2)}{" "}
                {product.dicountePercentage > 0 && (
                  <span className="line-through text-gray-400 ml-4">
                    $
                    {(
                      product.price /
                      (1 - product.dicountePercentage / 100)
                    ).toFixed(2)}
                  </span>
                )}
              </p>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center flex-col space-y-4">
              <button
                className="py-2 px-6 bg-yellow-600 text-white font-semibold rounded-lg"
                onClick={() => addTocart(product)}
              >
                Add to Cart
              </button>
              <div className="flex space-x-4 text-white">
                <Link href={`/product/${product.slug}`}>
                  <FontAwesomeIcon icon={faEye} className="text-xl" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
