import Image from "next/image";
import footerLogo from "../../../public/images/footerLogo.svg";

const FooterLinks = () => (
  <div className="mt-16 border-gray-700 pt-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
    <div>
      <Image src={footerLogo} alt="logo" className="w-40" />
      <p className="text-gray-400 mt-4">
        Grow Your Business or School with us - <br /> Without Hassle.
      </p>
    </div>

    <div>
      <h5 className="font-semibold mb-2">Support</h5>
      <ul className="text-gray-300 space-y-1">
        <li>Help centre</li>
        <li>Account information</li>
        <li>About</li>
        <li>Contact us</li>
      </ul>
    </div>

    <div>
      <h5 className="font-semibold mb-2">Help and Solution</h5>
      <ul className="text-gray-300 space-y-1">
        <li>Talk to support</li>
        <li>Support docs</li>
      </ul>
    </div>

    <div>
      <h5 className="font-semibold mb-2">Products</h5>
      <ul className="text-gray-300 space-y-1">
        <li>GroowForEducation</li>
        <li>GroowForBusiness</li>
        <li>GroowForCelebs</li>
      </ul>
    </div>
  </div>
);

export default FooterLinks;
