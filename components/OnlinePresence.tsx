import React from "react";
import Image from "next/image";
import onlinePresence from "../public/icons/onlinePresence.svg";
import greenVector from "../public/icons/greenVector.svg";
import onlineVector from "../public/icons/onlineVector.svg";
import greenDots from "../public/icons/greenDots.svg";

export default function OnlinePresence() {
  return (
    <section className="relative bg-black py-8 px-6 md:px-40 overflow-hidden">
      <div className="absolute left-0 transform -translate-y-1/4 hidden md:block opacity-100 z-0">
        <Image src={onlineVector} alt="Vector" className="w-[600px] h-auto" />
      </div>
      <div className="relative z-10">
        <div className="text-center my-12">
          <h2 className="text--3xl md:text-5xl font-bold text-white">
            Do You Have an Online Presence?
          </h2>
          <div className="flex justify-center mt-2">
            <Image src={greenVector} alt="underline" className="w-72" />
          </div>
          <p className="text-white mt-4">
            Evaluate your current digital footprint and discover what you might
            be missing
          </p>
        </div>
        <div className="mb-4">
          <span className="font-bold text-white">
            Consider These Key Points:{" "}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            {[
              "Can your customers or students find you online easily?",
              "Is your website optimized for mobile and speed?",
              "Do you offer online registration, payments, or communication?",
              "Are you still relying on paper or outdated systems?",
            ].map((point, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white shadow rounded-lg p-4 max-w-lg"
              >
                <div>
                  <Image src={greenDots} alt="bullet" className="w-4 h-4" />
                </div>
                <p className="text-gray-700">{point}</p>
              </div>
            ))}

            <div className="bg-green-10 text-white p-4 rounded-md max-w-lg font-medium shadow-md mt-4">
              If any of these points concern you,
              <br />
              it&apos;s time to let us help you establish a strong online
              presence.
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src={onlinePresence}
              alt="Online Presence Graphic"
              className="w-[80%] max-w-sm h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
