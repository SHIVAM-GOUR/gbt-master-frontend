import Image from "next/image";
import footerLogo from "../../../public/images/footerLogo.svg";
import logo from "../../../public/images/logo.svg";

const FooterLinks = () => (
  <div className="mt-16 border-gray-700 pt-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
    <div>
      {/* Light mode logo */}
      <Image 
        src={footerLogo} 
        alt="Footer Logo" 
        className="w-40 dark:hidden" 
      />
      {/* Dark mode logo */}
      <Image 
        src={logo} 
        alt="Dark Mode Logo" 
        className="w-40 hidden dark:block" 
      />

      <p className="text-gray-400 dark:text-black mt-4">
        Grow Your Business or School with us - <br /> Without Hassle.
      </p>
    </div>

    <div>
      <h5 className="font-semibold mb-2">Support</h5>
      <ul className="text-gray-300 dark:text-black space-y-1">
        <li><a href="#footer">Help centre</a></li>
        <li><a href="#footer">Account information</a></li>
        <li><a href="#about" className="hover:underline">About</a></li>
        <li>Contact us</li>
      </ul>
    </div>

    <div>
      <h5 className="font-semibold mb-2">Help and Solution</h5>
      <ul className="text-gray-300 dark:text-black space-y-1">
        <li><a href="#footer">Talk to support</a></li>
        <li><a href="#footer">Support docs</a></li>
      </ul>
    </div>

    <div>
      <h5 className="font-semibold mb-2">Products</h5>
      <ul className="text-gray-300 dark:text-black space-y-1">
        <li>GroowForEducation</li>
        <li>GroowForBusiness</li>
        <li>GroowForCelebs</li>
      </ul>
    </div>
  </div>
);

export default FooterLinks;
