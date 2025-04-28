// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [userInfo, setUserInfo] = useState(null);

//   useEffect(() => {
//     const tokenData = localStorage.getItem('token');
//     const storedUserInfo = localStorage.getItem('userInfo');

//     if (tokenData && storedUserInfo) {
//       setIsAuthenticated(true);
//       setUserInfo(JSON.parse(storedUserInfo));
//     }

//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('userInfo');
//     setIsAuthenticated(false);
//     setUserInfo(null);
//     navigate('/signin');
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const toggleMobileDropdown = () => {
//     setIsMobileDropdownOpen(!isMobileDropdownOpen);
//   };

//   return (
//     <>
//       {/* Top Sign In / Sign Up Bar */}
//       {!isAuthenticated ? (
//         <div className="w-full bg-white py-2 px-4 flex justify-end items-center text-sm">
//           <a href="/signin" className="text-black hover:underline mr-4">
//             Sign In
//           </a>
//           <a href="/signup" className="text-black hover:underline">
//             Sign Up
//           </a>
//         </div>
//       ) : (
//         <div className="w-full bg-white py-2 px-4 flex justify-end items-center text-sm">
//           <span className="mr-4">Hello, {userInfo?.name}</span>
//           <button onClick={handleLogout} className="text-black hover:underline">
//             Logout
//           </button>
//         </div>
//       )}

//       {/* Main Navbar */}
//       <nav
//         className={`flex items-center justify-between pr-8 pl-4 border-b bg-[#F0F0F0] transition-all duration-300 z-50 ${
//           isScrolled ? "fixed top-0 left-0 w-full shadow-md mt-[40px]" : "relative"
//         }`}
//       >
//         {/* Logo Section */}
//         <div className="hidden md:block">
//           <a href="/">
//             <img
//               src="/assets/logo.svg"
//               alt="Logo"
//               width={150}
//               height={100}
//               className="object-contain cursor-pointer"
//             />
//           </a>
//         </div>

//         {/* Desktop Navigation Links */}
//         <div className="hidden md:flex items-center justify-center space-x-10 relative">
//           <a href="#" className="text-lg font-normal text-black relative group">
//             On Sale
//             <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
//           </a>
//           <a href="#new-arrivals" className="text-lg font-normal text-black relative group">
//             New Arrivals
//             <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
//           </a>

//           <div
//             className="relative group"
//             onMouseEnter={() => setIsDropdownOpen(true)}
//             onMouseLeave={() => setIsDropdownOpen(false)}
//           >
//             <button className="text-lg font-normal text-black relative">
//               T-Shirts
//               <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
//             </button>

//             {isDropdownOpen && (
//               <div
//                 className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg z-50 border rounded-lg"
//                 onMouseEnter={() => setIsDropdownOpen(true)}
//                 onMouseLeave={() => setIsDropdownOpen(false)}
//               >
//                 {/* Add Dropdown Items Here */}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <div className="md:hidden">
//           <button onClick={toggleMenu}>
//             <img src="/assets/menu.svg" alt="Menu" className="w-6 h-6" />
//           </button>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const tokenData = localStorage.getItem('token');
    const storedUserInfo = localStorage.getItem('userInfo');

    if (tokenData && storedUserInfo) {
      setIsAuthenticated(true);
      setUserInfo(JSON.parse(storedUserInfo));
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    setIsAuthenticated(false);
    setUserInfo(null);
    navigate('/signin');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  return (
    <>
      {/* Main Header Container (Top Bar + Navbar together) */}
      <div
        className={`w-full bg-white z-50 transition-all duration-300 ${
          isScrolled ? "fixed top-0 left-0 shadow-md" : "relative"
        }`}
      >
        {/* Top Sign In / Sign Up Bar */}
        <div className="w-full bg-white py-2 px-4 flex justify-end items-center text-sm border-b">
          {!isAuthenticated ? (
            <>
              <a href="/signin" className="text-black hover:underline mr-4">
                Sign In
              </a>
              <a href="/signup" className="text-black hover:underline">
                Sign Up
              </a>
            </>
          ) : (
            <>
              <span className="mr-4">Hello, {userInfo?.name}</span>
              <button onClick={handleLogout} className="text-black hover:underline">
                Logout
              </button>
            </>
          )}
        </div>

        {/* Main Navbar */}
        <nav className="flex items-center justify-between pr-8 pl-4 bg-[#F0F0F0]">
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
                  {/* Dropdown Items here */}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              <img src="/assets/menu.svg" alt="Menu" className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </div>

      {/* Add margin-top to push content below fixed header */}
      <div className="h-[120px] md:h-[140px]"></div> {/* Adjust height based on your header height */}
    </>
  );
};

export default Navbar;
