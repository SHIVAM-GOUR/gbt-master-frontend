import Link from "next/link";

export default function NavLinksMobile() {
  const linkClasses = `border-b border-gray-200 pb-2`;

  return (
    <>
      <Link href="#hero" className={linkClasses}>Home</Link>
      <Link href="#services" className={linkClasses}>Products</Link>
      <Link href="#projects" className={linkClasses}>FAQ</Link>
      <Link href="#about" className={linkClasses}>About Us</Link>
      <Link
        href="#footer"
        className="mt-4 bg-green-10 text-white px-4 py-2 rounded-md text-center transition"
      >
        Contact Us
      </Link>
    </>
  );
}
