// import React from "react";
// import { useNavigate } from "react-router-dom";
// import data from "../data.json";
// import ProductCard from '../components/ProductCard';
// import Navbar from '../components/Navbar';
// import HeroSection from '../components/Hero';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import BrowseByStyles from '../components/Bstyles';

// const ProductsPage = () => {
//   const navigate = useNavigate();

//   const handleProductClick = (product) => {
//     console.log("Product ID:", product.id); // Debug log
//     navigate(`/product/${product.id}`);
//   };

//   return (
//     <div>
//       <Navbar />

//       {/* Hero Section */}
//       <HeroSection />

//       {/* Header */}
//       <Header />

//       {/* Main product listing section */}
//       <div className="bg-white grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6">
//         {data && data.map((product) => (
//           <ProductCard
//             key={product.id}
//             record={product}
//             onClick={() => handleProductClick(product)}
//           />
//         ))}
//       </div>

//       {/* Browse By Styles Section */}
//       <BrowseByStyles />

//       {/* Footer at the bottom */}
//       <Footer />
//     </div>
//   );
// };

// export default ProductsPage;


import React from "react";
import { useNavigate } from "react-router-dom";
import data from "../data.json";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import HeroSection from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BrowseByStyles from "../components/Bstyles";

const ProductsPage = () => {
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    console.log("Product ID:", product.id); // Debug log
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Spacer after Navbar (adjust height as per your Navbar height) */}
      <div className="h-[120px] md:h-[140px]"></div>

      {/* Hero Section */}
      <HeroSection />

      {/* Header */}
      <Header />

      {/* Main product listing section */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6">
        {data && data.map((product) => (
          <ProductCard
            key={product.id}
            record={product}
            onClick={() => handleProductClick(product)}
          />
        ))}
      </div>

      {/* Browse By Styles Section */}
      <BrowseByStyles />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductsPage;
