import Image from "next/image";
import cross from "../../../public/icons/cross.svg";
import NavLinksMobile from "./NavLinksMobile";

export default function MobileMenu({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
      <div className="absolute right-0 top-0 h-full w-[80vw] max-w-xs bg-white text-black shadow-lg p-6 flex flex-col space-y-6">
        <div className="flex justify-end">
          <button onClick={onClose}>
            <Image src={cross} alt="Close" width={20} height={20} />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 text-sm font-medium">
          <NavLinksMobile />
        </nav>
      </div>
    </div>
  );
}
