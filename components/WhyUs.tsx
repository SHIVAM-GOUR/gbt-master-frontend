import React from "react";


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

export default function WhyUs () {
  return (
    <section className="relative bg-black text-white py-16 px-6 md:px-40">
         <div className="absolute w-[600px] h-[600px] bg-green-20 rounded-full blur-[100px] opacity-20  z-0 bottom-0 left-0 max-w-3xl"></div>
      <div className="max-w-3xl mx-auto text-center relative z-10">
        
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Why We&apos;re the Best
        </h2>
      
         <div className="flex justify-center mb-6">
        <span className="block h-1 w-72 md:w-lg bg-green-10 rounded-full"></span>
        </div>
        <p className="text-gray-200 max-w-xl mx-auto mb-12">
          What sets us apart from traditional development agencies
        </p>

        <div className="space-y-6 text-left ">
          {features.map(({ icon, title, description }, index) => (
            <div
              key={index}
              className="flex items-start bg-white text-black rounded-xl shadow-sm p-4 hover:shadow-lg transition"
            >
              <div className="text-2xl mr-4">{icon}</div>
              <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-gray-600 mt-1">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

