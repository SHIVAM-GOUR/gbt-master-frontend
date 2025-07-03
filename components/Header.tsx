import Link from "next/link";
import Image from "next/image";
import whiteLogo from "../public/images/white-logo.svg";

export default function Header() {
  return (
    <header className="bg-black text-white flex justify-between items-center px-6 md:px-20 pt-4">
      <Image src={whiteLogo} alt="" className="" />
      <nav className="space-x-20 text-sm font-medium">
        <Link href="#hero" className="">
          Home
        </Link>
        <Link href="#about" className="">
          About
        </Link>
        <Link href="#services" className="">
          Product
        </Link>
        <Link href="#faq" className="">
          FAQ
        </Link>

        <Link href="#contact">
          <button className="bg-green-10 text-white px-4 py-2 rounded-md">
            Contact Us
          </button>
        </Link>
      </nav>
    </header>
  );
}
