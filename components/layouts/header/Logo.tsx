import Image from "next/image";
import logo from "../../../public/images/logo.svg";
import footerLogo from "../../../public/images/footerLogo.svg";

export default function Logo({ isScrolled }) {
  return (
    <Image
      src={isScrolled ? logo : footerLogo}
      alt="logo"
      className="w-24 sm:w-38 transition-all duration-300"
      priority
    />
  );
}
