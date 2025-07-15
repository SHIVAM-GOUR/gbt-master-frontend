// import React from "react";
// import Image from "next/image";
// import laptop from "../public/icons/laptop.svg";
// import warning from "../public/icons/warning.svg";

// const problems = [
//   "Losing Customers and potential customers.",
//   "Losing credibility without a professional online presence.",
//   "Don't have time or knowledge to develop a website.",
//   "Struggling to find reliable developers or agencies.",
//   "Existing website is outdated or ineffective.",
// ];

// export default function BusinessProblems() {
//   return (
//     <section className="relative bg-black py-8 md:py-16 px-6 md:px-48 overflow-hidden">
    
//       <div className="absolute w-[600px] h-[600px] bg-green-20 rounded-full blur-[100px] opacity-20 z-0 bottom-0 left-0" />

     
//       <div className="relative z-10 text-center mb-16">
//         <h2 className="text-2xl md:text-5xl font-bold text-white">
//           Problems Businesses face
//         </h2>
//         <div className="mt-3 h-1 max-w-xs md:w-3xl bg-green-10 rounded-full mx-auto" />
//       </div>

  
//       <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between">
     
//         <div className="max-w-xl mb-12 md:mb-0 ">
//           <p className="text-white text-lg md:text-2xl my-8 md:my-8 ml-4 md:ml-6 font-bold">Major Problems Business face :-</p>
//           <ul className="space-y-5">
//             {problems.map((problem, index) => (
//               <li key={index} className="flex items-center gap-3 text-base md:text-xl text-white">
//                 <Image src={warning} alt="warning icon" className="w-6"/>
//                 {problem}
//               </li>
//             ))}
//           </ul>
//         </div>

       
//         <div>
//           <Image src={laptop} alt="Laptop"  className="w-72 md:w-[400px] rounded-lg" />
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import laptop from "../public/icons/laptop.svg";
import warning from "../public/icons/warning.svg";

const MotionDiv = motion.div;
const MotionH2 = motion.h2;
const MotionUl = motion.ul;
const MotionLi = motion.li;
const MotionImage = motion(Image);

const problems = [
  "Losing Customers and potential customers.",
  "Losing credibility without a professional online presence.",
  "Don't have time or knowledge to develop a website.",
  "Struggling to find reliable developers or agencies.",
  "Existing website is outdated or ineffective.",
];

export default function BusinessProblems() {
  return (
    <section className="relative bg-black py-8 md:py-16 px-6 md:px-48 overflow-hidden">
      <div className="absolute w-[600px] h-[600px] bg-green-20 rounded-full blur-[100px] opacity-20 z-0 bottom-0 left-0" />

      <MotionDiv
        className="relative z-10 text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <MotionH2 className="text-2xl md:text-5xl font-bold text-white">
          Problems Businesses face
        </MotionH2>
        <MotionDiv
          className="mt-3 h-1 max-w-xs md:w-3xl bg-green-10 rounded-full mx-auto"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          style={{ originX: 0 }}
        />
      </MotionDiv>

      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between">
        <MotionDiv
          className="max-w-xl mb-12 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-white text-lg md:text-2xl my-8 ml-4 md:ml-6 font-bold">
            Major Problems Businesses face:
          </p>
          <MotionUl
            className="space-y-5"
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {problems.map((problem, index) => (
              <MotionLi
                key={index}
                className="flex items-center gap-3 text-base md:text-xl text-white"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Image src={warning} alt="warning icon" className="w-6" />
                {problem}
              </MotionLi>
            ))}
          </MotionUl>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <MotionImage
            src={laptop}
            alt="Laptop"
            className="w-72 md:w-[400px] rounded-lg"
          />
        </MotionDiv>
      </div>
    </section>
  );
}
