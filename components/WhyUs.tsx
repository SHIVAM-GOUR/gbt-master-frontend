// import React from "react";


// type Feature = {
//   icon: string; 
//   title: string;
//   description: string;
// };

// const features: Feature[] = [
//   {
//     icon: "🧠",
//     title: "Industry Research Done",
//     description:
//       "We know what works for your field. Our solutions are built on extensive research and proven best practices.",
//   },
//   {
//     icon: "🚀",
//     title: "Speed & Simplicity",
//     description:
//       "Launch in days, not weeks or months. Our pre-built solutions eliminate lengthy development cycles.",
//   },
//   {
//     icon: "💼",
//     title: "Professional Results",
//     description:
//       "Clean, modern designs with full functionality. Every solution is production-ready and professional-grade.",
//   },
//   {
//     icon: "🤝",
//     title: "Dedicated Support",
//     description:
//       "We're here from onboarding to post-launch. Continuous support ensures your success.",
//   },
//   {
//     icon: "🔄",
//     title: "Scalable Solutions",
//     description:
//       "Easily upgrade as your needs grow. Our solutions are built to scale with your business.",
//   },
// ];

// export default function WhyUs () {
//   return (
//     <section className="relative bg-black text-white py-16 px-6 md:px-40">
//          <div className="absolute w-[600px] h-[600px] bg-green-20 rounded-full blur-[100px] opacity-20  z-0 bottom-0 left-0 max-w-3xl"></div>
//       <div className="max-w-3xl mx-auto text-center relative z-10">
        
//         <h2 className="text-2xl md:text-5xl font-bold mb-4">
//           Why We&apos;re the Best
//         </h2>
      
//          <div className="flex justify-center mb-6">
//         <span className="block h-1 w-64 md:w-lg bg-green-10 rounded-full"></span>
//         </div>
//         <p className="text-gray-200 max-w-xl mx-auto mb-12">
//           What sets us apart from traditional development agencies
//         </p>

//         <div className="space-y-6 text-left ">
//           {features.map(({ icon, title, description }, index) => (
//             <div
//               key={index}
//               className="flex items-start bg-white text-black rounded-xl shadow-sm p-4 hover:shadow-lg transition"
//             >
//               <div className="text-2xl mr-4">{icon}</div>
//               <div>
//                 <h3 className="text-lg font-semibold">{title}</h3>
//                 <p className="text-sm text-gray-600 mt-1">{description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

"use client";
import React from "react";
import { motion } from "framer-motion";

type Feature = {
  icon: string;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: "🧠",
    title: "Industry Research Done",
    description:
      "We know what works for your field. Our solutions are built on extensive research and proven best practices.",
  },
  {
    icon: "🚀",
    title: "Speed & Simplicity",
    description:
      "Launch in days, not weeks or months. Our pre-built solutions eliminate lengthy development cycles.",
  },
  {
    icon: "💼",
    title: "Professional Results",
    description:
      "Clean, modern designs with full functionality. Every solution is production-ready and professional-grade.",
  },
  {
    icon: "🤝",
    title: "Dedicated Support",
    description:
      "We're here from onboarding to post-launch. Continuous support ensures your success.",
  },
  {
    icon: "🔄",
    title: "Scalable Solutions",
    description:
      "Easily upgrade as your needs grow. Our solutions are built to scale with your business.",
  },
];

export default function WhyUs() {
  return (
    <section className="relative bg-black text-white py-16 px-6 md:px-40 overflow-hidden">
      {/* Animated background blob */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-green-20 rounded-full blur-[120px] opacity-20 z-0 bottom-0 left-0"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Heading with fade-up */}
        <motion.h2
          className="text-2xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why We&apos;re the Best
        </motion.h2>

        <div className="flex justify-center mb-6">
          <span className="block h-1 w-64 bg-green-10 rounded-full"></span>
        </div>

        <motion.p
          className="text-gray-200 max-w-xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          What sets us apart from traditional development agencies
        </motion.p>

        {/* Features with staggered animation */}
        <motion.div
          className="space-y-6 text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {features.map(({ icon, title, description }, index) => (
            <motion.div
              key={index}
              className="flex items-start bg-white text-black rounded-xl shadow-sm p-4 hover:shadow-xl hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 transform hover:-translate-y-1 hover:scale-105 transition duration-300"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {/* Bouncy icon */}
              <motion.div
                className="text-3xl mr-4"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                {icon}
              </motion.div>
              <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-gray-600 mt-1">{description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
