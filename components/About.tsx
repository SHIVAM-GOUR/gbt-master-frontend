import Image from "next/image";
import greenVector from "../public/icons/greenVector.svg";

export default function About () {
  return (
    <section id="about" className="bg-black text-white px-6 md:px-32 py-24 text-center">
    
        <h2 className="text-3xl font-semibold mb-3">About Us</h2>
              <div className="flex justify-center mb-6">
        <Image src={greenVector} alt="underline" className="w-52" />
      </div>
        <p className="text-center max-w-5xl mx-auto">
          GroovyTech was founded with a simple mission: to eliminate the technical and time-consuming challenges of going digital.
          We provide custom-built software solutions — pre-developed with your industry&apos;s needs in mind — so that you can focus on running
          your business while we take care of your online presence.
        </p>
    
    </section>
  );
};


