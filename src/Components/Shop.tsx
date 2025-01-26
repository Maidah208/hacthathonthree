import Image from "next/image";
import Card from "@/Components/Card"

const Shop = () => {

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
          <h1 className="text-5xl font-bold">Shop</h1>
          <p className="text-md sm:text-2xl font-semibold">
            <a href="/" className="text-black hover:underline">
              Home
            </a>{" "}
            <span className="mx-2">&gt;</span> Shop
          </p>
        </div>
      </div>
      <div>
        <Card/>
      </div>
    </div>
  );
};

export default Shop;
