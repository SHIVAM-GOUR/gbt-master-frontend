"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import arrow from "../public/icons/arrow.svg";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
 <button
  onClick={scrollToTop}
  className={`fixed bottom-5 right-5 z-50 w-8 h-8 flex items-center justify-center rounded-full bg-white text-black shadow-lg transition-opacity duration-300 ${
    visible ? "opacity-100" : "opacity-0 pointer-events-none"
  }`}
  aria-label="Scroll to top"
>
  <Image
    src={arrow}
    alt="Scroll to top"
    className="w-4 h-4"
  />
</button>


  );
};

export default ScrollToTopButton;
