import React from "react";
import Image from "next/image";
import laptop from "../public/icons/laptop.svg";
import greenVector from "../public/icons/greenVector.svg";

const problems = [
  "Loosing Customers and potential customers",
  "Losing credibility without a professional online presence.",
  "Don't have time or knowledge to develop a website.",
  "Struggling to find reliable developers or agencies.",
  "Existing website is outdated or ineffective.",
];

export default function BusinessProblems() {
  return (
    <section className="bg-gradient-to-l from-white to-green-100 py-8 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
     
      <div className="mb-12 md:mb-0">
        <h2 className="text-5xl font-bold text-gray-900 ">
          Problems your <br /> <span>Business facing</span>
        </h2>
         <div className="mt-2">
        <Image src={greenVector} alt="underline" className="w-60" />
      </div>
        <ul className=" mt-12 space-y-4">
          {problems.map((problem, index) => (
            <li key={index} className="flex items-start gap-3 text-lg">
              <span className="text-red-500 text-xl">❗</span>
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
          className="rounded-xl"
        />
      </div>
    </section>
  );
}
