import Image from "next/image";
import aman from "../public/icons/aman.svg";
import getStarted from "../public/icons/getStarted.svg";
import footerLogo from "../public/images/footerLogo.svg";

const Footer = () => {
  return (
    <footer className="bg-darkblue-10 text-white px-6 md:px-40 py-16">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Left Section */}
        <div>
          <h2 className="text-4xl font-semibold mb-6">
            People are Saying About <br />
            GroowByTech
          </h2>
          <p className="text-gray-300 italic my-4">
            “We launched our school&apos;s new website in just a few days - no
            stress,
            <br /> no tech headaches.”
          </p>
          <p className="py-8">🤝</p>
          <p className="text-gray-300 italic mb-6">
            “GroowByTech gave our small business a professional online presence{" "}
            <br />
            without the usual delays or costs.”
          </p>
          <div className="flex items-center gap-10 py-8">
            <span className="text-sm text-white">_ Shivam Gour</span>
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image src={aman} alt="Aman Tiwari" width={60} height={60} />
            </div>
          </div>
        </div>

        {/* Right Section  */}
        <div className="bg-darkblue-20 p-8 rounded-lg shadow-md max-w-md w-full mx-auto">
          <div className="flex items-center justify-center">
            <Image src={getStarted} alt="image" />
          </div>

          <h3 className="text-xl font-semibold mt-2 mb-6 text-center">
            Get Started
          </h3>
          <form className="flex flex-col gap-4">
             <label className="text-white font-medium text-sm">
    Email Or Phone
  </label>
            <input
              type="email"
              placeholder="Enter your email or phone number"
              className="px-4 py-3 rounded-md bg-white text-black placeholder:text-gray-400"
              required
            />
             <label className="text-white font-medium text-sm">
   Query Message
  </label>
            <textarea
              placeholder="How can we help you ?"
              rows={3}
              className="px-4 py-3 rounded-md bg-white text-black placeholder:text-gray-400"
              required
            />
            <button
              type="submit"
              className="bg-green-10 transition text-white py-3 rounded-md font-semibold"
            >
              Request Guaranteed Callback
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-16 border-gray-700 pt-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
         <Image src= {footerLogo} alt="logo" className="w-40" />
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

     <div className="flex flex-col sm:flex-row justify-between items-center mt-8">
    <p className="mb-2 sm:mb-0">© 2025 GroowByTech Inc. All rights reserved.</p>
   
      <p>Terms and Conditions</p>
    
      <p>Privacy Policy</p>
   
  </div>
    </footer>
  );
};

export default Footer;
