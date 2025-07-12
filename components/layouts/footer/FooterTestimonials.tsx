import Image from "next/image";
import aman from "../../../public/icons/aman.svg";
import quote from "../../../public/icons/quote.svg";

const FooterTestimonials = () => (
  <div>
    <h2 className="text-2xl md:text-4xl font-semibold mb-0 md:mb-6 text-center md:text-left">
      People are Saying About <br />
      GroowByTech
    </h2>
    <p className="text-gray-300 italic my-6">
      “We launched our school&apos;s new website in just a few days - no stress,
      <br /> no tech headaches.”
    </p>
    <Image src={quote} alt="" className="w-8 md:w-16" />
    <p className="text-gray-300 italic my-6">
      “GroowByTech gave our small business a professional online presence{" "}
      <br />
      without the usual delays or costs.”
    </p>
    <div className="flex items-center gap-6 md:gap-10 py-8 ">
      <span className="text-sm text-white">_ Shivam Gour</span>
      <div className="w-10 h-10 rounded-full overflow-hidden">
        <Image src={aman} alt="Aman Tiwari" width={60} height={60} />
      </div>
    </div>
  </div>
);

export default FooterTestimonials;
