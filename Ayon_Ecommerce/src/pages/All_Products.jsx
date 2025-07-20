import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import productsData from "../data.json";

export default function AllProduct() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const navigate = useNavigate();

  // Get unique categories from products
  const categories = [
    "All",
    ...Array.from(new Set(productsData.map((p) => p.category)))
  ];

  // Filter products based on selected filters
  const filteredProducts = productsData.filter((product) => {
    const inCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const price = parseInt(product.newprice);
    const inPrice = price >= priceRange[0] && price <= priceRange[1];
    return inCategory && inPrice;
  });

  // Handler for clicking a product card
  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa]">
      <Navbar />
      <div className="flex flex-1 max-w-10xl mx-auto  w-full gap-8 mt-[-100px]">
        {/* Sidebar Filters */}
        <aside className="w-64 h-100 bg-white rounded-lg shadow-md p-6 hidden md:block">
          <h2 className="text-xl font-semibold mb-6">Filters</h2>
          {/* Category Filter */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Category</h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat}>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      value={cat}
                      checked={selectedCategory === cat}
                      onChange={() => setSelectedCategory(cat)}
                      className="mr-2 accent-black"
                    />
                    {cat}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          {/* Price Range Filter */}
          <div>
            <h3 className="font-medium mb-2">Price Range</h3>
            <div className="flex items-center space-x-4">
              <input
                type="number"
                // min="0"
                max="2000"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                className="w-18 border rounded px-2 py-1"
              />
              <span>-</span>
              <input
                type="number"
                // min="0"
                max="2000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="w-20 border rounded px-2 py-1"
              />
            </div>
          </div>
        </aside>
        {/* Product Grid */}
        <main className="flex-1 mb-[50px]">
          <h1 className="text-2xl font-bold mb-6">All Products</h1>
          {filteredProducts.length === 0 ? (
            <div className="text-gray-500">No products found.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} record={product} onClick={() => handleProductClick(product)} />
              ))}
            </div>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
}