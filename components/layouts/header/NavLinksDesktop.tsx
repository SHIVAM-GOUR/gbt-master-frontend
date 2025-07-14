import Link from "next/link";

export default function NavLinksDesktop({ isScrolled }) {
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
        className="px-4 py-2 rounded-md font-bold bg-green-10 text-white hover:bg-white hover:text-green-10 hover:border-2 border-green-10 transition"
      >
        Contact Us
      </Link>
    </>
  );
}
