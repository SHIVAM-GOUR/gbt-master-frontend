import Image from 'next/image';
import greenVector from "../public/icons/greenVector.svg"
import hero from "../public/icons/hero.png";

export default function Hero () {
  return (
    <section id="hero" className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-40 md:h-[90vh] bg-black  text-white">
        <div className="absolute w-[600px] h-[600px] bg-[#00C2E9] rounded-full blur-[100px] opacity-20 bottom-0 left-0 z-0"></div>
      <div className="max-w-xl">
       
          <h1 className="text-3xl md:text-5xl font-bold">Reliable websites, <br />Ready for You.</h1>
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
               <button className="bg-green-10 text-white px-4 py-2 rounded-full">Contact Us</button>
       
           <button className="text-sm underline text-gray-700">Schedule Free Demo</button>
        </div>
      </div>

       <div className="">
         <Image src={hero} alt="laptop"  width={500}
          height={400}/>
       
      </div>
    </section>
  );
}

