"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import footerLogo from "../public/images/footerLogo.svg";
import hamburger from "../public/icons/hamburger.svg";
import cross from "../public/icons/cross.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white px-6 md:px-40 pt-6 relative">
      <div className="flex justify-between items-center">
        <Image src={footerLogo} alt="logo" className="w-20 sm:w-38" />

        <div className="flex items-center space-x-2 md:space-x-4 md:hidden">
          <button onClick={() => setMenuOpen(true)}>
            <Image src={hamburger} alt="Menu" width={22} height={15} />
          </button>
        </div>

        <nav className="hidden md:flex space-x-6 md:space-x-10 text-sm font-medium items-center">
          <NavLinks />
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

function NavLinks() {
  const linkClasses = `font-bold text-base border-b-2 border-transparent hover:border-white transition duration-300 pb-1`;

  return (
    <>
      <Link href="#hero" className={linkClasses}>
        Home
      </Link>
      <Link href="#services" className={linkClasses}>
        Services
      </Link>
      <Link href="#projects" className={linkClasses}>
        Projects
      </Link>
      <Link href="#about" className={linkClasses}>
        About Us
      </Link>
      <Link
        href="#footer"
        className=" bg-green-10 text-white px-4 py-2 rounded-md  font-bold transition"
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
        Services
      </Link>
      <Link href="#projects" className={linkClasses}>
        Projects
      </Link>
      <Link href="#about" className={linkClasses}>
        About Us
      </Link>
      <Link
        href="#contact"
        className="mt-4 bg-green-10 text-white px-4 py-2 rounded-md text-center transition"
      >
        Contact Us
      </Link>
    </>
  );
}
