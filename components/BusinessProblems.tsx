import React from "react";
import Image from "next/image";
import laptop from "../public/icons/laptop.svg";
import greenVector from "../public/icons/greenVector.svg";
import warning from "../public/icons/warning.svg";

const problems = [
  "Loosing Customers and potential customers",
  "Losing credibility without a professional online presence.",
  "Don't have time or knowledge to develop a website.",
  "Struggling to find reliable developers or agencies.",
  "Existing website is outdated or ineffective.",
];

export default function BusinessProblems() {
  return (
    <section className="relative bg-black py-8 px-6 md:px-40 flex flex-col md:flex-row items-center justify-between">
       <div className="absolute w-[600px] h-[600px] bg-[#00C2E9] rounded-full blur-[100px] opacity-20  z-0 bottom-0 left-0 max-w-3xl"></div>
      <div className="mb-12 md:mb-0">
        <h2 className="text-5xl font-bold text-white">
          Problems your <br /> <span>Business facing</span>
        </h2>
         <div className="mt-2">
        <Image src={greenVector} alt="underline" className="w-60" />
      </div>
        <ul className=" mt-12 space-y-4">
          {problems.map((problem, index) => (
            <li key={index} className="flex items-start gap-3 text-lg text-white">
            <Image src={warning} alt="warning" className="" />
              {problem}
            </li>
          ))}
        </ul>
      </div>

     
      <div className="">
        <Image
          src={laptop}
          alt="Laptop"
          width={500}
          height={400}
          className=""
        />
      </div>
    </section>
  );
}
