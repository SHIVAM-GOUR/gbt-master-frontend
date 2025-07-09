"use client";
import React, { useState } from "react";
import Image from "next/image";
import products from "../public/icons/products.svg";
import greenDots from "../public/icons/greenDots.svg";

const ProductSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"schools" | "business">("schools");

  return (
    <section id="products" className="bg-black py-16 px-4 md:px-48 ">
      <div className="text-center mb-12">
        <h2 className="text-white text-3xl md:text-5xl font-bold">
          Our Products
        </h2>
        <div className="w-60 md:w-72 h-1 bg-green-10 mx-auto my-4 rounded" />
        <p className="text-gray-200 text-sm md:text-base">
          Choose the perfect solution for your industry needs
        </p>
      </div>

      <div className="flex justify-center mb-10">
        <div className="bg-gray-100 rounded-full p-1 flex gap-1">
          {["schools", "business"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as "schools" | "business")}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                activeTab === tab
                  ? "bg-green-10 text-white"
                  : "text-gray-700 hover:text-black"
              }`}
            >
              {tab === "schools" ? "GroowForSchools" : "GroowForBusiness"}
            </button>
          ))}
        </div>
      </div>

     
      {activeTab === "schools" && (
        <div className="bg-white rounded-xl shadow-lg py-8 md:py-20 px-8 md:px-40 flex flex-col lg:flex-row items-center">
        
          <div className="w-full lg:w-1/2">
            <h3 className="text-3xl font-semibold text-gray-900">
              GroowForSchools
            </h3>
            <p className="text-gray-600 my-4">
              A complete digital solution for schools
            </p>

            <ul className="space-y-6 md:space-y-8 text-sm md:text-lg leading-relaxed">
              {[
                {
                  title: "Student & staff management",
                  desc: "Complete database for all school members",
                },
                {
                  title: "Online fee collection",
                  desc: "Secure payment gateway integration",
                },
                {
                  title: "Class scheduling & announcements",
                  desc: "Automated scheduling and communication",
                },
                {
                  title: "Parent-teacher communication tools",
                  desc: "Direct messaging and progress tracking",
                },
                {
                  title: "Mobile-ready and admin dashboard",
                  desc: "Access from anywhere, anytime",
                },
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                <div>
                  <Image src={greenDots} alt="bullet" className="w-4 h-4" />
                </div>
                  <p>
                    <strong className="text-gray-700">{item.title}</strong> <br />
                    <span className="text-gray-500">{item.desc}</span> 
                  </p>
                </li>
              ))}
            </ul>
          </div>

        
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="max-w-xs md:max-w-md w-full rounded-lg overflow-hidden mt-4 md:mt-0">
              <Image
                src={products}
                alt="School dashboard illustration"
                className="w-80 md:w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {activeTab === "business" && (
        <div className="text-center text-gray-400 mt-10">
          <p>Business content coming soon...</p>
        </div>
      )}
    </section>
  );
};

export default ProductSection;
