import React from "react";
import ProductCard from "./Card";

const OurProducts = () => {
  
  return (
    <div>
      <h1 className="text-center text-4xl font-bold">Our Products</h1>
      <ProductCard limit={6} />
    </div>
  );
};

export default OurProducts;
