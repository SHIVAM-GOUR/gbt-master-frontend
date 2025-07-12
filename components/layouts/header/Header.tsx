"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import hamburger from "../../../public/icons/hamburger.svg";
import Logo from "./Logo";
import NavLinksDesktop from "./NavLinksDesktop";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md text-black" : "bg-black text-white"
      }`}
    >
      <div className="px-6 md:px-40 py-4 flex justify-between items-center transition-all duration-300">
        <Logo isScrolled={isScrolled} />

        <div className="flex items-center space-x-2 md:hidden">
          <button onClick={() => setMenuOpen(true)}>
            <Image
              src={hamburger}
              alt="Menu"
              width={22}
              height={15}
              className={isScrolled ? "invert" : ""}
            />
          </button>
        </div>

        <nav className="hidden md:flex space-x-6 md:space-x-10 text-sm font-medium items-center">
          <NavLinksDesktop isScrolled={isScrolled} />
        </nav>
      </div>

      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
    </header>
  );
}
