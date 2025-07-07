import Image from "next/image";
import aboutVector from "../public/icons/aboutVector.svg";

export default function About() {
  return (
    <section id="about" className="relative bg-black text-white px-6 md:px-40 py-16 md:py-24 overflow-hidden">
      
   
      <div className="absolute md:right-40 top-2 md:block opacity-100">
        <Image src={aboutVector} alt="Vector" className="w-[500px] h-auto" />
      </div>

    
    <div className="text-center relative z-10 max-w-5xl mx-auto">
  <h2 className="text-2xl md:text-5xl font-semibold mb-3">About Us</h2>
  <div className="flex justify-center mb-6">
    <span className="block h-1 w-40 md:w-52 bg-green-10 rounded-full"></span>
  </div>
  <p className="text-center">
    GroowByTech was founded with a simple mission: to eliminate the technical and time-consuming challenges of going digital.
    We provide custom-built software solutions — pre-developed with your industry&apos;s needs in mind — so that you can focus on
    running your institution or business while we take care of your online presence.
  </p>
</div>

    </section>
  );
}
