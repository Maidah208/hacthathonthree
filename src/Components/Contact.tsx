import CustomerCare from "./CustomerCare";
import Image from "next/image";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

const Contact = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold">Contact</h1>
          <p className="text-md sm:text-2xl font-semibold">
            <a href="/" className="text-black hover:underline">
              Home
            </a>{" "}
            <span className="mx-2">&gt;</span> Contact
          </p>
        </div>
      </div>

      {/* contact us */}
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Get In Touch With Us
        </h1>
        <p className="text-sm text-zinc-600 text-center">
          For More Information About Our Product & Services, Please Feel Free To
          Drop Us
        </p>
        <p className="text-sm mb-12 text-zinc-600 text-center">
          An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>

        {/* Flex container for two columns */}
        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Left Column: Contact Info */}
          <div className="w-full md:w-2/5 space-y-6">
            {/* Address */}
            <div className="flex items-center mt-24 ml-14 space-x-4">
              <FaMapMarkerAlt className="text-3xl text-gray-600" />
              <div>
                <h3 className="text-xl font-semibold">Address</h3>
                <p className="text-gray-600">236 5th SE Avenue,</p>
                <p className="text-gray-600">New York NY10000, United States</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center mt-16 ml-14 space-x-4">
              <FaPhoneAlt className="text-3xl text-gray-600" />
              <div>
                <h3 className="text-xl font-semibold">Contact</h3>
                <p className="text-gray-600">Mobile: +(84) 546-6789</p>
                <p className="text-gray-600">Hotline: +(84) 456-6789</p>
              </div>
            </div>

            {/* Working Time */}
            <div className="flex items-center mt-16 ml-14 space-x-4">
              <FaClock className="text-3xl text-gray-600" />
              <div>
                <h3 className="text-xl font-semibold">Working Time</h3>
                <p className="text-gray-600">Monday–Friday: 9:00 – 22:00</p>
                <p className="text-gray-600">Saturday–Sunday: 9:00 – 21:00</p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="w-full md:w-3/5">
            <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
              <form action="#" method="POST">
                <div className="mb-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 border-2 border-brown-600 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    required
                    className="w-full px-4 py-3 border-2 border-brown-600 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    className="w-full px-4 py-3 border-2 border-brown-600 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                    className="w-full px-4 py-3 border-2 border-brown-600 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-[#B88E2F] text-white rounded-md hover:bg-brown-700 focus:outline-none focus:ring-2 focus:ring-brown-500"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    {/* customer care */}
      <div>
        <CustomerCare/>
      </div>
    </div>
  );
};

export default Contact;
