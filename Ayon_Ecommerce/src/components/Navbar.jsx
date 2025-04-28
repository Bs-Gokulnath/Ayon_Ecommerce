import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
        <nav className="flex items-center justify-between pr-8 pl-4 bg-[#F0F0F0] relative">
          {/* Logo Section */}
          <div className="flex items-center">
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
                  {/* Example Dropdown Items */}
                  <a href="/tshirts/men" className="block px-4 py-2 hover:bg-gray-100">
                    Men's T-Shirts
                  </a>
                  <a href="/tshirts/women" className="block px-4 py-2 hover:bg-gray-100">
                    Women's T-Shirts
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              <img src="/assets/menu.svg" alt="Menu" className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t z-40 flex flex-col items-start p-4 space-y-4 md:hidden">
              <a href="#" className="text-black text-base hover:underline">
                On Sale
              </a>
              <a href="#new-arrivals" className="text-black text-base hover:underline">
                New Arrivals
              </a>
              <div className="w-full">
                <button className="text-black text-base hover:underline w-full text-left">
                  T-Shirts
                </button>
                {/* Submenu for T-Shirts (if you want) */}
                <div className="ml-4 mt-2 flex flex-col space-y-2">
                  <a href="/tshirts/men" className="text-gray-700 text-sm hover:underline">
                    Men's T-Shirts
                  </a>
                  <a href="/tshirts/women" className="text-gray-700 text-sm hover:underline">
                    Women's T-Shirts
                  </a>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>

      {/* Add margin-top to push content below fixed header */}
      <div className="h-[140px]"></div>
    </>
  );
};

export default Navbar;

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

//   return (
//     <>
//       {/* Main Header Container (Top Bar + Navbar together) */}
//       <div
//         className={`w-full bg-white z-50 transition-all duration-300 ${
//           isScrolled ? "fixed top-0 left-0 shadow-md" : "relative"
//         }`}
//       >
//         {/* Top Sign In / Sign Up Bar */}
//         <div className="w-full bg-white py-2 px-4 flex justify-end items-center text-sm border-b">
//           {!isAuthenticated ? (
//             <>
//               <a href="/signin" className="text-black hover:underline mr-4">
//                 Sign In
//               </a>
//               <a href="/signup" className="text-black hover:underline">
//                 Sign Up
//               </a>
//             </>
//           ) : (
//             <>
//               <span className="mr-4">Hello, {userInfo?.name}</span>
//               <button onClick={handleLogout} className="text-black hover:underline">
//                 Logout
//               </button>
//             </>
//           )}
//         </div>

//         {/* Main Navbar */}
//         <nav className="flex items-center justify-between pr-8 pl-4 bg-[#F0F0F0] h-16">
//           {/* Logo Section */}
//           <div className="flex items-center">
//             <a href="/">
//               <img
//                 src="/assets/logo.svg"
//                 alt="Logo"
//                 width={150}
//                 height={100}
//                 className="object-contain cursor-pointer"
//               />
//             </a>
//           </div>

//           {/* Desktop Navigation Links */}
//           <div className="hidden md:flex items-center justify-center space-x-10 relative">
//             <a href="#" className="text-lg font-normal text-black relative group">
//               On Sale
//               <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
//             </a>
//             <a href="#new-arrivals" className="text-lg font-normal text-black relative group">
//               New Arrivals
//               <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
//             </a>

//             <div
//               className="relative group"
//               onMouseEnter={() => setIsDropdownOpen(true)}
//               onMouseLeave={() => setIsDropdownOpen(false)}
//             >
//               <button className="text-lg font-normal text-black relative">
//                 T-Shirts
//                 <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
//               </button>

//               {isDropdownOpen && (
//                 <div
//                   className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg z-50 border rounded-lg"
//                   onMouseEnter={() => setIsDropdownOpen(true)}
//                   onMouseLeave={() => setIsDropdownOpen(false)}
//                 >
//                   {/* Dropdown Items here */}
//                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">Printed</a>
//                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">Plain</a>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button onClick={toggleMenu}>
//               <img src="/assets/menu.svg" alt="Menu" className="w-6 h-6" />
//             </button>
//           </div>
//         </nav>
//       </div>

//       {/* Mobile Sidebar */}
//       <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
//         isMenuOpen ? 'translate-x-0' : '-translate-x-full'
//       } transition-transform duration-300 ease-in-out z-50`}>
//         <div className="flex flex-col p-6 space-y-6">
//           <button onClick={toggleMenu} className="self-end">
//             <img src="/assets/close.svg" alt="Close" className="w-6 h-6" />
//           </button>

//           <a href="#" className="text-lg font-semibold text-black" onClick={toggleMenu}>
//             On Sale
//           </a>
//           <a href="#new-arrivals" className="text-lg font-semibold text-black" onClick={toggleMenu}>
//             New Arrivals
//           </a>

//           {/* Dropdown inside Mobile */}
//           <div>
//             <button
//               className="text-lg font-semibold text-black w-full text-left"
//               onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
//             >
//               T-Shirts
//             </button>
//             {isMobileDropdownOpen && (
//               <div className="ml-4 mt-2 flex flex-col space-y-2">
//                 <a href="#" className="text-base text-gray-700" onClick={toggleMenu}>
//                   Printed
//                 </a>
//                 <a href="#" className="text-base text-gray-700" onClick={toggleMenu}>
//                   Plain
//                 </a>
//               </div>
//             )}
//           </div>

//           {/* Authentication Links inside mobile */}
//           {!isAuthenticated ? (
//             <>
//               <a href="/signin" className="text-lg font-semibold text-black" onClick={toggleMenu}>
//                 Sign In
//               </a>
//               <a href="/signup" className="text-lg font-semibold text-black" onClick={toggleMenu}>
//                 Sign Up
//               </a>
//             </>
//           ) : (
//             <>
//               <span className="text-black">Hello, {userInfo?.name}</span>
//               <button
//                 onClick={() => {
//                   handleLogout();
//                   toggleMenu();
//                 }}
//                 className="text-black hover:underline"
//               >
//                 Logout
//               </button>
//             </>
//           )}
//         </div>
//       </div>

//       {/* Add margin-top to push content below fixed header */}
//       <div className="h-[120px] md:h-[140px]"></div>
//     </>
//   );
// };

// export default Navbar;
