// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import footerLogo from "../public/images/footerLogo.svg";
// import hamburger from "../public/icons/hamburger.svg";
// import cross from "../public/icons/cross.svg";

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="bg-black text-white px-6 md:px-40 pt-6 relative">
//       <div className="flex justify-between items-center">
//         <Image src={footerLogo} alt="logo" className="w-20 sm:w-38" />

//         <div className="flex items-center space-x-2 md:space-x-4 md:hidden">
//           <button onClick={() => setMenuOpen(true)}>
//             <Image src={hamburger} alt="Menu" width={22} height={15} />
//           </button>
//         </div>

//         <nav className="hidden md:flex space-x-6 md:space-x-10 text-sm font-medium items-center">
//           <NavLinks />
//         </nav>
//       </div>

//       {menuOpen && (
//         <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
//           <div className="absolute right-0 top-0 h-full w-64 bg-white text-black shadow-lg p-6 flex flex-col space-y-6">
//             <div className="flex justify-end">
//               <button onClick={() => setMenuOpen(false)}>
//                 <Image src={cross} alt="Close" width={20} height={20} />
//               </button>
//             </div>

//             <nav className="flex flex-col space-y-4 text-sm font-medium">
//               <NavLinksMobile />
//             </nav>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// function NavLinks() {
//   const linkClasses = `font-bold text-base border-b-2 border-transparent hover:border-white transition duration-300 pb-1`;

//   return (
//     <>
//       <Link href="#hero" className={linkClasses}>
//         Home
//       </Link>
//       <Link href="#services" className={linkClasses}>
//         Services
//       </Link>
//       <Link href="#projects" className={linkClasses}>
//         Projects
//       </Link>
//       <Link href="#about" className={linkClasses}>
//         About Us
//       </Link>
//       <Link
//         href="#footer"
//         className=" bg-green-10 text-white px-4 py-2 rounded-md  font-bold transition"
//       >
//         Contact Us
//       </Link>
//     </>
//   );
// }

// function NavLinksMobile() {
//   const linkClasses = `border-b border-gray-200 pb-2`;

//   return (
//     <>
//       <Link href="#hero" className={linkClasses}>
//         Home
//       </Link>
//       <Link href="#services" className={linkClasses}>
//         Services
//       </Link>
//       <Link href="#projects" className={linkClasses}>
//         Projects
//       </Link>
//       <Link href="#about" className={linkClasses}>
//         About Us
//       </Link>
//       <Link
//         href="#contact"
//         className="mt-4 bg-green-10 text-white px-4 py-2 rounded-md text-center transition"
//       >
//         Contact Us
//       </Link>
//     </>
//   );
// }
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import footerLogo from "../public/images/footerLogo.svg";
import hamburger from "../public/icons/hamburger.svg";
import cross from "../public/icons/cross.svg";
import logo from "../public/images/logo.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md text-black" : "bg-black text-white"
      }`}
    >
      <div className="px-6 md:px-40 py-4 flex justify-between items-center transition-all duration-300 ">
      
        <Image
  src={isScrolled ? logo : footerLogo}
  alt="logo"
  className="w-24 sm:w-38 transition-all duration-300"
  priority
/>


        
        <div className="flex items-center space-x-2 md:hidden">
          <button onClick={() => setMenuOpen(true)}>
            <Image
              src={hamburger}
              alt="Menu"
              width={22}
              height={15}
              className={`${isScrolled ? "invert" : ""}`} 
            />
          </button>
        </div>

      
        <nav className="hidden md:flex space-x-6 md:space-x-10 text-sm font-medium items-center">
          <NavLinks isScrolled={isScrolled} />
        </nav>
      </div>

     
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="absolute right-0 top-0 h-full w-64 bg-white text-black shadow-lg p-6 flex flex-col space-y-6">
            <div className="flex justify-end">
              <button onClick={() => setMenuOpen(false)}>
                <Image src={cross} alt="Close" width={20} height={20} />
              </button>
            </div>
            <nav className="flex flex-col space-y-4 text-sm font-medium">
              <NavLinksMobile />
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
function NavLinks({ isScrolled }) {
  const linkClasses = `font-bold text-base border-b-2 border-transparent hover:border-current transition duration-300 pb-1 ${
    isScrolled ? "text-black hover:border-black" : "text-white hover:border-white"
  }`;

  return (
    <>
      <Link href="#hero" className={linkClasses}>Home</Link>
      <Link href="#products" className={linkClasses}>Products</Link>
      <Link href="#products" className={linkClasses}>FAQ</Link>
      <Link href="#about" className={linkClasses}>About Us</Link>
      <Link
        href="#footer"
        className={`px-4 py-2 rounded-md font-bold transition ${
          isScrolled
            ? "bg-green-10 text-white"
            : "bg-green-10 text-white"
        }`}
      >
        Contact Us
      </Link>
    </>
  );
}
function NavLinksMobile() {
  const linkClasses = `border-b border-gray-200 pb-2`;

  return (
    <>
      <Link href="#hero" className={linkClasses}>
        Home
      </Link>
      <Link href="#services" className={linkClasses}>
        Products
      </Link>
      <Link href="#projects" className={linkClasses}>
        FAQ
      </Link>
      <Link href="#about" className={linkClasses}>
        About Us
      </Link>
      <Link
        href="#footer"
        className="mt-4 bg-green-10 text-white px-4 py-2 rounded-md text-center transition"
      >
        Contact Us
      </Link>
    </>
  );
}