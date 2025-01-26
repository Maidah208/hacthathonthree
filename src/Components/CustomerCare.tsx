import {
  FaTrophy,
  FaShieldAlt,
  FaShippingFast,
  FaHeadset,
} from "react-icons/fa";

const CustomerCare = () => {
  return (
    <div className="h-auto w-full bg-[#FAF3EA] flex flex-wrap justify-around items-center py-10 mt-40">
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
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-2 max-w-[200px] p-4 md:max-w-[150px] lg:max-w-[200px]"
              >
                <item.icon className="text-4xl text-[#B88E2F]" />
                <h3 className="font-bold text-md sm:text-md text-lg">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
  )
}

export default CustomerCare