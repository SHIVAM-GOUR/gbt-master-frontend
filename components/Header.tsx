import Link from 'next/link';
import Image from 'next/image';
import logo from "../public/images/logo.svg"

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <Image src ={logo} alt = "" className=""/>
      <nav className="space-x-6 text-sm font-medium">
        <Link href="/">Home</Link>
        <Link href="/product">Product</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/about">About Us</Link>
        <Link href="/contact">
          <button className="bg-[#54BD95] text-white px-4 py-2 rounded-md">Contact Us</button>
        </Link>
      </nav>
    </header>
  );
}
