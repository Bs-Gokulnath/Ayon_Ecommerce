import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Top Sign In / Sign Up Bar */}
      <div className="w-full bg-white py-2 px-4 flex justify-end items-center text-sm">
        <a href="/signin" className="text-black hover:underline mr-4">
          Sign In
        </a>
        <a href="/signup" className="text-black hover:underline">
          Sign Up
        </a>
      </div>

      {/* Main Navbar */}
      <nav
        className={`flex items-center justify-between pr-8 pl-4 border-b bg-[#F0F0F0] transition-all duration-300 z-50 ${
          isScrolled ? "fixed top-0 left-0 w-full shadow-md mt-[40px]" : "relative"
        }`}
      >
        {/* Logo Section */}
        <div className="hidden md:block">
          <a href="/">
            <img
              src="/assets/logo.svg"
              alt="Logo"
              width={150}
              height={100}
              className="object-contain cursor-pointer"
            />
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center justify-center space-x-10 relative">
          <a href="#" className="text-lg font-normal text-black relative group">
            On Sale
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#new-arrivals" className="text-lg font-normal text-black relative group">
            New Arrivals
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
          <div
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="text-lg font-normal text-black relative">
              T-Shirts
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </button>
            {isDropdownOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg z-50 border rounded-lg"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-200">
                  Round Neck
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-200">
                  Polo Shirts
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-200">
                  OverSized
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-200">
                  Hoodie
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-200">
                  SweatShirts
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons (Cart and Profile) */}
        <div className="hidden md:flex items-center space-x-8">
          <button className="text-black hover:scale-110 transition-transform">
            <img
              src="/assets/cart.svg"
              alt="Cart"
              width={24}
              height={24}
              className="object-contain"
            />
          </button>
          <button className="text-black hover:scale-110 transition-transform">
            <a href="/profile">
            <img
              src="/assets/profile.svg"
              alt="Profile"
              width={24}
              height={24}
              className="object-contain"
            />
            </a>
          </button>
        </div>

        {/* Mobile View */}
        <div className="flex items-center justify-between w-full md:hidden">
          <button className="text-black" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>

          <a href="/">
            <img
              src="/assets/logo.svg"
              alt="Logo"
              width={120}
              height={80}
              className="mx-auto object-contain cursor-pointer"
            />
          </a>

          <div className="flex space-x-4">
            <button className="text-black hover:scale-110 transition-transform">
              <img
                src="/assets/cart.svg"
                alt="Cart"
                width={24}
                height={24}
                className="object-contain"
              />
            </button>
            <button className="text-black hover:scale-110 transition-transform">
              <img
                src="/assets/profile.svg"
                alt="Profile"
                width={24}
                height={24}
                className="object-contain"
              />
            </button>
          </div>
        </div>

        {/* Mobile Sliding Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-3/4 max-w-sm bg-[#F0F0F0] shadow-lg z-50 transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b">
            <span className="text-lg font-bold text-black">Menu</span>
            <button className="text-black" onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col space-y-4 p-4">
            <a href="#" className="text-lg font-normal text-black" onClick={toggleMenu}>
              On Sale
            </a>
            <a href="#" className="text-lg font-normal text-black" onClick={toggleMenu}>
              New Arrivals
            </a>
            <div className="flex flex-col">
              <button
                className="text-lg font-normal text-black flex justify-between items-center"
                onClick={toggleMobileDropdown}
              >
                T-Shirts
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      isMobileDropdownOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M12 4l6 6H6z"
                    }
                  />
                </svg>
              </button>
              {isMobileDropdownOpen && (
                <div className="pl-4 flex flex-col space-y-2">
                  <a href="#" className="text-sm text-black hover:bg-gray-200 px-2 py-1" onClick={toggleMenu}>
                    Round Neck
                  </a>
                  <a href="#" className="text-sm text-black hover:bg-gray-200 px-2 py-1" onClick={toggleMenu}>
                    Polo T-Shirts
                  </a>
                  <a href="#" className="text-sm text-black hover:bg-gray-200 px-2 py-1" onClick={toggleMenu}>
                    OverSized
                  </a>
                  <a href="#" className="text-sm text-black hover:bg-gray-200 px-2 py-1" onClick={toggleMenu}>
                    Hoodie
                  </a>
                  <a href="#" className="text-sm text-black hover:bg-gray-200 px-2 py-1" onClick={toggleMenu}>
                    SweatShirts
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleMenu}
          ></div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
