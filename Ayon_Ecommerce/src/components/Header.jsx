import React from "react";
import "@fontsource/lexend";

const Header1 = ({ firstTitle = "NEW ARRIVALS" }) => {
  return (
    <div>
      {/* First Header */}
      <div id="new-arrivals">
        <div className="w-full bg-black flex items-center justify-center py-6 sm:py-8 lg:py-8">
          <h1
            className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wider"
            style={{ fontFamily: "'Lexend', cursive" }}
          >
            {firstTitle}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header1;
