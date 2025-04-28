import React from "react";
import "@fontsource/lexend";
import CountUp from "react-countup";

const HeroSection = ({
  title = "WEAR YOUR CONFIDENCE DAILY",
  description = "Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.",
  stats = {
    brands: 200,
    products: 2000,
    customers: 30000,
  },
}) => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 mt-[-300px]">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16">
        {/* Left Section */}
        <div className="w-full lg:max-w-[529px]">
          <h1
            className="text-[24px] sm:text-[32px] lg:text-[52px] leading-tight font-bold tracking-tight mb-4 sm:mb-6 lg:mb-8"
            style={{ fontFamily: "'Lexend', cursive" }}
          >
            {title}
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-4 sm:mb-6 lg:mb-8 leading-relaxed">
            {description}
          </p>

          <button
            className="bg-black text-white px-6 sm:px-10 lg:px-12 py-2 sm:py-3 lg:py-4 rounded-full 
            font-medium hover:bg-gray-800 transition-colors text-sm sm:text-base lg:text-lg"
          >
            Shop Now
          </button>

          {/* Stats Section */}
          <div className="flex flex-wrap sm:flex-nowrap items-center mt-8 sm:mt-12 lg:mt-16 gap-4 sm:gap-6 lg:gap-8">
            <div className="flex flex-col items-center sm:items-start">
              <span className="text-2xl sm:text-4xl lg:text-5xl font-bold">
                <CountUp start={0} end={stats.brands} duration={2} />+
              </span>
              <span className="text-xs sm:text-sm lg:text-base text-gray-600 mt-1">
                Brands
              </span>
            </div>

            <div className="hidden sm:block w-px h-10 sm:h-12 lg:h-16 bg-[#0000001a]"></div>

            <div className="flex flex-col items-center sm:items-start">
              <span className="text-2xl sm:text-4xl lg:text-5xl font-bold">
                <CountUp start={0} end={stats.products} duration={2} />+
              </span>
              <span className="text-xs sm:text-sm lg:text-base text-gray-600 mt-1">
                High-Quality Products
              </span>
            </div>

            <div className="hidden sm:block w-px h-10 sm:h-12 lg:h-16 bg-[#0000001a]"></div>

            <div className="flex flex-col items-center sm:items-start">
              <span className="text-2xl sm:text-4xl lg:text-5xl font-bold">
                <CountUp start={0} end={stats.customers} duration={2} />+
              </span>
              <span className="text-xs sm:text-sm lg:text-base text-gray-600 mt-1">
                Happy Customers
              </span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:flex-1 lg:max-w-[655px]">
          <img
            src="/assets/hero.svg"
            alt="Fashion Models"
            className="w-full h-[250px] sm:h-[350px] lg:h-[500px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
