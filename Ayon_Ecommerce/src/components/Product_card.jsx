import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import data from "../data.json";

const ProductDetails = () => {
  const { id } = useParams();
  console.log("URL ID:", id); // Debug log
  console.log("Available products:", data); // Debug log
  
  const product = data.find((item) => {
    console.log("Comparing:", item.id, parseInt(id)); // Debug log
    return item.id === parseInt(id);
  });

  const [quantity, setQuantity] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState({
    specifications: false,
    descriptions: false,
    manufactured: false,
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  // Check if product is found
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-500 mb-4">Product Not Found</h1>
          <p className="text-gray-600">The product you're looking for doesn't exist.</p>
          <p className="text-gray-600 mt-2">Product ID: {id}</p>
        </div>
      </div>
    );
  }

  // Calculate discount percentage
  const discountPercentage = product.oldprice 
    ? Math.round(((parseInt(product.oldprice) - parseInt(product.newprice)) / parseInt(product.oldprice)) * 100)
    : 0;

  // Increment and decrement quantity
  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  // Toggle dropdown open/close
  const toggleDropdown = (key) =>
    setDropdownOpen((prev) => ({ ...prev, [key]: !prev[key] }));

  // Modal actions
  const openModal = (image) => {
    setCurrentImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className="p-4 md:p-6 bg-gray-100 min-h-screen relative">
        {/* Modal for Image Preview */}
        {modalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div className="relative">
              <img
                src={currentImage}
                alt="Preview"
                className="w-auto h-auto max-w-3xl max-h-[80vh] rounded-lg shadow-lg"
              />
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-600 transition"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white rounded-lg shadow-md p-4 md:p-6">
          {/* Left Image Section */}
          <div className="flex">
            {/* Thumbnail Images */}
            <div className="space-y-2 mr-4">
              {[product.image2, product.image3, product.image4].map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg cursor-pointer border"
                  onClick={() => openModal(image)}
                />
              ))}
            </div>
            {/* Main Image */}
            <img
              src={product.image1}
              alt={product.name}
              className="w-full h-64 md:h-80 lg:h-96 object-contain rounded-lg mb-4 cursor-pointer"
              onClick={() => openModal(product.image1)}
            />
          </div>

          {/* Right Details Section */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-2 md:mb-4">PID: {product.id}</p>
            <div className="text-gray-600 mb-4 md:mb-6">Inclusive of all taxes</div>
            <div className="flex items-center space-x-2 md:space-x-4 mb-4 md:mb-6">
              <span className="text-lg md:text-2xl font-bold">₹{product.newprice}</span>
              {product.oldprice && (
                <span className="text-gray-400 line-through text-sm md:text-lg">₹{product.oldprice}</span>
              )}
              <span className="text-green-500 font-bold text-sm md:text-base">({discountPercentage}% OFF)</span>
            </div>
            <div className="mb-4 md:mb-6">
              <p className="text-base md:text-lg font-medium mb-2">Select Size</p>
              <div className="flex space-x-2 md:space-x-4">
                {["Small", "Medium", "Large", "X-Large"].map((size) => (
                  <button
                    key={size}
                    className="px-3 md:px-4 py-2 border rounded-full hover:bg-gray-200 focus:ring-2 focus:ring-black"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-4 md:mb-6">
              <div className="text-sm text-gray-600">Size Chart</div>
              <div className="mt-1 flex justify-between text-sm md:text-base">
                <p>Small - {product.small}</p>
                <p>Medium - {product.medium}</p>
                <p>Large - {product.large}</p>
                <p>X-Large - {product.xlarge}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 mb-4 md:mb-6">
              <p className="text-base md:text-lg">Quantity</p>
              <div className="flex items-center space-x-2">
                <button
                  onClick={decrementQuantity}
                  className="px-3 md:px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300"
                >
                  -
                </button>
                <span className="text-base md:text-lg">{quantity}</span>
                <button
                  onClick={incrementQuantity}
                  className="px-3 md:px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300"
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex space-x-2 md:space-x-4">
              <button className="bg-black text-white px-4 md:px-6 py-2 rounded-full hover:bg-gray-800 transition duration-300">
                Get Now
              </button>
              <button className="bg-gray-300 text-black px-4 md:px-6 py-2 rounded-full hover:bg-gray-400 transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* More Details Section */}
        <div className="max-w-6xl mx-auto mt-6 md:mt-10 bg-white rounded-lg shadow-md p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-bold mb-2 md:mb-4">More Details</h2>
          <div className="divide-y">
            {/* Specifications */}
            <div className="py-2 md:py-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleDropdown("specifications")}
              >
                <p className="font-bold">Specifications</p>
                <span>{dropdownOpen.specifications ? "▲" : "▼"}</span>
              </div>
              {dropdownOpen.specifications && <p className="text-gray-600 mt-2">{product.spec}</p>}
            </div>

            {/* Descriptions */}
            <div className="py-2 md:py-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleDropdown("descriptions")}
              >
                <p className="font-bold">Description</p>
                <span>{dropdownOpen.descriptions ? "▲" : "▼"}</span>
              </div>
              {dropdownOpen.descriptions && <p className="text-gray-600 mt-2">{product.desc}</p>}
            </div>

            {/* Stock Status */}
            <div className="py-2 md:py-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleDropdown("manufactured")}
              >
                <p className="font-bold">Stock Status</p>
                <span>{dropdownOpen.manufactured ? "▲" : "▼"}</span>
              </div>
              {dropdownOpen.manufactured && (
                <p className="text-gray-600 mt-2">
                  {product.stock === "yes" ? "In Stock" : "Out of Stock"}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
