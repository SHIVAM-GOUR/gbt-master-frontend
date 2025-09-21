


import Image from "next/image";
import { useTheme } from "next-themes";
import logo from "../../../public/images/logo.svg";
import footerLogo from "../../../public/images/footerLogo.svg";

export default function Logo({ isScrolled }) {
  const { theme } = useTheme();

  const imageSrc =
    theme === "dark"
      ? isScrolled
        ? logo
        : footerLogo
      : isScrolled
      ? footerLogo
      : logo;

  return (
    <Image
      src={imageSrc}
      alt="logo"
      className="w-24 sm:w-38 transition-all duration-300"
      priority
    />
  );
}
