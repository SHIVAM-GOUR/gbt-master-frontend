import Image from 'next/image';
import greenVector from "../public/icons/greenVector.svg"
import laptop from "../public/icons/laptop.svg";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 md:h-[90vh] bg-gradient-to-br from-white to-green-100">
      <div className="max-w-xl">
        <h1 className="text-5xl font-bold">Reliable websites, <br /> Ready for You.</h1>
         <div className=" mt-2">
        <Image src={greenVector} alt="underline" className="w-60" />
      </div>
        <p className="mt-8">
          At GroowByTech, we build pre-designed, ready-to-deploy websites softwares tailored for schools and businesses. No hiring. No Coding. No Deploys. 
        </p>
        <p className="italic my-6">
          Grow Your Business or School with us - <strong>Without Hassle.</strong>
        </p>
        <div className="flex items-center gap-4">
               <button className="bg-[#54BD95] text-white px-4 py-2 rounded-full">Contact Us</button>
       
          <button className="text-sm underline text-gray-700">Schedule Free Demo</button>
        </div>
      </div>

      <div className="">
        <Image src={laptop} alt="laptop"  width={500}
          height={400}/>
       
      </div>
    </section>
  );
}
