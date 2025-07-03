"use client";
import React, { useState } from "react";
import Image from "next/image";
import onlinePresence from "../public/icons/onlinePresence.svg";

const ProductSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"schools" | "business">("schools");

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-20">
     
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Our Products</h2>
        <div className="w-24 h-1 bg-green-10 mx-auto mt-2 mb-6" />
        <p className="text-gray-600">
          Choose the perfect solution for your industry needs
        </p>
      </div>

  
      <div className="flex justify-center mb-10">
        <div className="bg-gray-100 rounded-full p-1 flex">
          <button
            onClick={() => setActiveTab("schools")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition ${
              activeTab === "schools"
                ? "bg-green-10 text-white"
                : "text-gray-600"
            }`}
          >
            GroowForSchools
          </button>
          <button
            onClick={() => setActiveTab("business")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition ${
              activeTab === "business"
                ? "bg-green-500 text-white"
                : "text-gray-600"
            }`}
          >
            GroowForBusiness
          </button>
        </div>
      </div>

      {activeTab === "schools" && (
        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col lg:flex-row items-center gap-10">
         
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-900">
              GroowForSchools
            </h3>
            <p className="text-gray-600 mt-2 mb-6">
              A complete digital solution for schools
            </p>
            <ul className="space-y-4 text-gray-700 text-sm">
              <li className="flex items-start gap-3">
                <div className="mt-1 w-4 h-4 bg-green-10 rounded-full flex-shrink-0" />
                <p>
                  <strong>Student & staff management</strong> — Complete
                  database for all school members
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-4 h-4 bg-green-10 rounded-full flex-shrink-0" />
                <p>
                  <strong>Online fee collection</strong> — Secure payment
                  gateway integration
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-4 h-4 bg-green-10 rounded-full flex-shrink-0" />
                <p>
                  <strong>Class scheduling & announcements</strong> — Automated
                  scheduling and communication
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-4 h-4 bg-green-10 rounded-full flex-shrink-0" />
                <p>
                  <strong>Parent-teacher communication tools</strong> — Direct
                  messaging and progress tracking
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-4 h-4 bg-green-10 rounded-full flex-shrink-0" />
                <p>
                  <strong>Mobile-ready and admin dashboard</strong> — Access
                  from anywhere, anytime
                </p>
              </li>
            </ul>
          </div>

          
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-md rounded-lg overflow-hidden">
              <Image
                src={onlinePresence}
                alt="School dashboard illustration"
                className="w-full h-auto"
                priority
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
