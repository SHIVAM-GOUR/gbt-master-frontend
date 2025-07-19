// import Image from "next/image";
// import aboutVector from "../public/icons/aboutVector.svg";

// export default function About() {
//   return (
//     <section id="about" className="relative bg-black text-white px-6 md:px-40 py-16 md:py-24 overflow-hidden">
      
   
//       <div className="absolute md:right-40 top-2 md:block opacity-100">
//         <Image src={aboutVector} alt="Vector" className="w-[500px] h-auto" />
//       </div>

    
//     <div className="text-center relative z-10 max-w-5xl mx-auto">
//   <h2 className="text-2xl md:text-5xl font-semibold mb-3">About Us</h2>
//   <div className="flex justify-center mb-6">
//     <span className="block h-1 w-40 md:w-52 bg-green-10 rounded-full"></span>
//   </div>
//   <p className="text-center">
//     GroowByTech was founded with a simple mission: to eliminate the technical and time-consuming challenges of going digital.
//     We provide custom-built software solutions — pre-developed with your industry&apos;s needs in mind — so that you can focus on
//     running your institution or business while we take care of your online presence.
//   </p>
// </div>

//     </section>
//   );
// }
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import aboutVector from "../public/icons/aboutVector.svg";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-black text-white px-6 md:px-40 py-16 md:py-32 overflow-hidden"
    >
      {/* Image: slide in left to right */}
      <motion.div
        className="absolute md:right-40 top-2 md:block opacity-100"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Image src={aboutVector} alt="Vector" className="w-[500px] h-auto" />
      </motion.div>

      <div className="text-center relative z-10 max-w-5xl mx-auto">
        {/* About Us heading: slide in top to bottom */}
        <motion.h2
          className="text-2xl md:text-5xl font-semibold mb-3"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </motion.h2>

        {/* Underline: no animation */}
        <div className="flex justify-center mb-6">
          <span className="block h-1 w-40 md:w-52 bg-green-10 rounded-full"></span>
        </div>

        {/* Paragraph: no animation */}
        <p className="text-center">
          GroowByTech was founded with a simple mission: to eliminate the technical and time-consuming challenges of going digital.
          We provide custom-built software solutions — pre-developed with your industry&apos;s needs in mind — so that you can focus on
          running your institution or business while we take care of your online presence.
        </p>
      </div>
    </section>
  );
}
