import Image from "next/image";

const Freshsales = () => {
  return (
    <div className="my-8 sm:my-12 lg:my-16 mx-4 sm:mx-8 lg:mx-16">
      {/* Heading */}
      <div className="text-center mb-6 sm:mb-8 lg:mb-10">
        <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl">
          Browse the Range
        </h1>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Divs with Pictures and Labels */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mt-8 sm:mt-10 lg:mt-14">
        {/* Dining Section */}
        <div className="text-center">
          <div className="w-full h-70 bg-gray-200 flex items-center justify-center">
            <Image
              src="/images/dining.png"
              alt="Dining"
              width={500}
              height={500}
              className="w-full h-full object-contain"
            />
          </div>
          <p className="mt-2 text-sm sm:text-lg font-semibold">Dining</p>
        </div>

        {/* Living Section */}
        <div className="text-center">
          <div className="w-full h-70 bg-gray-200 flex items-center justify-center">
            <Image
              src="/images/living.png"
              alt="Living"
              width={500}
              height={500}
              className="w-full h-full object-contain"
            />
          </div>
          <p className="mt-2 text-sm sm:text-lg font-semibold">Living</p>
        </div>

        {/* Bedroom Section */}
        <div className="text-center">
          <div className="w-full h-70 bg-gray-200 flex items-center justify-center">
            <Image
              src="/images/bedroom.png"
              alt="Bedroom"
              width={500}
              height={500}
              className="w-full h-full object-contain"
            />
          </div>
          <p className="mt-2 text-sm sm:text-lg font-semibold">Bedroom</p>
        </div>
      </div>
    </div>
  );
};

export default Freshsales;
