import React from 'react';
import Image from 'next/image';
import onlinePresence from '../public/icons/onlinePresence.svg';
import greenVector from '../public/icons/greenVector.svg';

export default function OnlinePresence() {
  return (
    <section className="relative bg-white py-8 px-6 md:px-20 overflow-hidden">
      <div className="relative z-10">

        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Do You Have an Online Presence?
          </h2>
          <div className="flex justify-center mt-2">
            <Image src={greenVector} alt="underline" className="w-72" />
          </div>
          <p className="text-gray-600 mt-4">
            Evaluate your current digital footprint and discover what you might be missing
          </p>
        </div>
<div className='mb-4'><span className='font-bold'>Consider These Key Points: </span></div>
       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
      
          <div className="space-y-4">
            {[
              "Can your customers or students find you online easily?",
              "Is your website optimized for mobile and speed?",
              "Do you offer online registration, payments, or communication?",
              "Are you still relying on paper or outdated systems?",
            ].map((point, index) => (
              <div key={index} className="flex items-start space-x-3 bg-white shadow rounded-lg p-4 max-w-lg">
                <div className="mt-1 w-4 h-4 bg-green-10 rounded-full flex-shrink-0" />
                <p className="text-gray-700">{point}</p>
              </div>
            ))}

            
            <div className="bg-green-10 text-white px-6 py-4 rounded-md w-fit font-medium shadow-md mt-4">
              If any of these points concern you,<br />
              it&apos;s time to let us help you establish a strong online presence.
            </div>
          </div>

         
          <div className="flex justify-center lg:justify-end">
            <Image
              src={onlinePresence}
              alt="Online Presence Graphic"
              className="w-[80%] max-w-md h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
