import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="relative w-full h-[600px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px]">
      {/* Full-width background image */}
      <Image
        src="/images/hero.png"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        priority
        className="z-[-1]"
      />

      {/* Text content */}
      <div className="absolute top-28 right-0 p-8 bg-[#FFF3E3] w-[90%] max-w-[620px] h-[380px] text-black m-4 sm:top-24 sm:w-[80%] md:w-[75%] lg:w-[60%] xl:w-[620px] xl:top-28">
        <p className="uppercase text-xs sm:text-sm font-semibold">
          New Arrival
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-2 text-[#B88E2F]">
          Discover Our
          <br />
          New Collection
        </h1>
        <p className="text-xs sm:text-sm mt-3 md:mt-4 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="bg-[#B88E2F] text-white py-2 px-10 sm:px-12 sm:py-3 md:px-14 md:py-3 hover:bg-[#a0522d] transition mt-6 sm:mt-7 md:mt-9">
        <Link href="/shop" className="hover:text-gray-400">
          Buy now
        </Link>
        </button>
      </div>
    </div>
  );
}

export default Hero;
