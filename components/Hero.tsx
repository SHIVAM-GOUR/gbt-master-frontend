// import Image from "next/image";
// import hero from "../public/icons/hero.png";
// import play from "../public/icons/play.svg";
// import Link from "next/link";

// export default function Hero() {
//   return (
//     <section
//       id="hero"
//       className="relative pt-32 md:pt-0 flex flex-col md:flex-row items-center justify-between px-6 md:px-48 h-auto md:h-[100vh] bg-black text-white"
//     >

//       <div className="absolute w-[600px] h-[600px] bg-green-20 rounded-full blur-[100px] opacity-20 bottom-0 left-0 z-0"></div>

//       <div className="max-w-xl z-10">
//         <h1 className="text-2xl md:text-6xl font-bold relative inline-block">

//           Reliable websites, <br />
//           Ready for You.
//           <span className="block w-full h-1 bg-green-10 mt-2 md:mt-4"></span>
//         </h1>

//         <p className="mt-8 text-base md:text-lg">
//           At GroowByTech, we build pre-designed, ready-to-deploy website
//           software tailored for schools and businesses. No hiring. No Coding. No
//           Deploys.
//         </p>

//         <p className="italic my-6 text-base md:text-lg">
//           Grow Your Business or School with us –{" "}
//           <strong>Without Hassle.</strong>
//         </p>

//         <div className="flex items-center gap-4 z-10 ">
//           <Link href="#footer"
//             className="bg-green-10 text-white px-2 md:px-4 py-1 md:py-2 rounded-full text-sm md:text-lg">
//             Contact Us
//           </Link>

//           <button className="flex items-center gap-2">
//             <Image src={play} alt="play" className="w-6 md:w-8" />
//             <span className="text-sm md:text-base text-gray-300"> Schedule Free Demo</span>
//           </button>
//         </div>
//       </div>

//       <div className="z-10">
//         <Image src={hero} alt="laptop" className="w-72 md:w-xl py-8 md:py-0" />
//       </div>
//     </section>
//   );
// }
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import hero from "../public/icons/hero.png";
import play from "../public/icons/play.svg";
import Link from "next/link";

const MotionDiv = motion.div;
const MotionH1 = motion.h1;
const MotionP = motion.p;
const MotionImage = motion(Image);

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-32 md:pt-0 flex flex-col md:flex-row items-center justify-between px-6 md:px-48 h-auto md:h-[100vh] bg-black text-white"
    >
      <div className="absolute w-[600px] h-[600px] bg-green-20 rounded-full blur-[100px] opacity-20 bottom-0 left-0 z-0"></div>

      {/* LEFT SIDE */}
      <MotionDiv
        className="max-w-xl z-10"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <MotionH1
          className="text-2xl md:text-6xl font-bold relative inline-block"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Reliable websites, <br />
          Ready for You.
          <span className="block w-full h-1 bg-green-10 mt-2 md:mt-4"></span>
        </MotionH1>

        <MotionP
          className="mt-8 text-base md:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          At GroowByTech, we build pre-designed, ready-to-deploy website
          software tailored for schools and businesses. No hiring. No Coding. No
          Deploys.
        </MotionP>

        <MotionP
          className="italic my-6 text-base md:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Grow Your Business or School with us –{" "}
          <strong>Without Hassle.</strong>
        </MotionP>

        <MotionDiv
          className="flex items-center gap-4 z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            href="#footer"
            className="bg-green-10 hover:bg-white hover:text-green-10 hover:border-2 border-green-10 text-white px-2 md:px-4 py-1 md:py-2 rounded-full text-sm md:text-lg"
          >
            Contact Us
          </Link>

          <button className="flex items-center gap-2">
            <Image src={play} alt="play" className="w-6 md:w-8" />
            <span className="text-sm md:text-base text-gray-300">
              Schedule Free Demo
            </span>
          </button>
        </MotionDiv>
      </MotionDiv>

      {/* RIGHT SIDE IMAGE */}
      <MotionDiv
        className="z-10"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <MotionImage
          src={hero}
          alt="laptop"
          className="w-72 md:w-xl py-8 md:py-0"
        />
      </MotionDiv>
    </section>
  );
}
