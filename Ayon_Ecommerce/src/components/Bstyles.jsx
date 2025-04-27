import React from 'react';
import { Link } from 'react-router-dom'; // Use react-router-dom for navigation

const Header = () => (
  <div className="flex justify-center items-center py-4">
    <h1 className="text-3xl font-bold" style={{ fontFamily: "'Lexend', cursive" }}>
      BROWSE BY STYLES
    </h1>
  </div>
);

const StyleCard = ({ imageUrl, label, href }) => (
  <Link to={href}>  {/* Use `to` for navigation */}
    <div className="flex flex-col items-start bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
      <img src={imageUrl} alt={label} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{label}</h2>
      </div>
    </div>
  </Link>
);

const BrowseByStyles = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="flex flex-col items-center bg-gray-100 p-8 rounded-lg w-full lg:w-[900px] lg:h-[700px]">
      <Header />
      <div className="grid grid-cols-2 gap-4 max-w-4xl">
        <StyleCard imageUrl="/assets/tshirts.svg" label="T-Shirts" href="/tshirts" />
        <StyleCard imageUrl="/assets/polo.svg" label="Polo" href="/polo" />
        <StyleCard imageUrl="/assets/oversized.svg" label="Over-Sized" href="/oversized" />
        <StyleCard imageUrl="/assets/hoodie.svg" label="Hoodies" href="/hoodies" />
      </div>
    </div>
  </div>
);

export default BrowseByStyles;
