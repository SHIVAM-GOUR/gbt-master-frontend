import Image from "next/image";
import hero from "../public/icons/hero.png";
import play from "../public/icons/play.svg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-40 md:h-[90vh] bg-black text-white"
    >
      <div className="absolute w-[600px] h-[600px] bg-green-20 rounded-full blur-[100px] opacity-20 bottom-0 left-0 z-0"></div>

      <div className="max-w-xl z-10">
        <h1 className="text-2xl md:text-6xl font-bold relative inline-block mt-8 md:mt-0">
          Reliable websites, <br />
          Ready for You.
          <span className="block w-full h-1 bg-green-10 mt-2 md:mt-4"></span>
        </h1>

        <p className="mt-8 text-base md:text-lg">
          At GroowByTech, we build pre-designed, ready-to-deploy website
          software tailored for schools and businesses. No hiring. No Coding. No
          Deploys.
        </p>

        <p className="italic my-6 text-base md:text-lg">
          Grow Your Business or School with us –{" "}
          <strong>Without Hassle.</strong>
        </p>

        <div className="flex items-center gap-4 z-10 ">
          <button className="bg-green-10 text-white px-2 md:px-4 py-1 md:py-2 rounded-full text-sm md:text-lg">
            Contact Us
          </button>

          <button className="flex items-center gap-2">
            <Image src={play} alt="play" className="w-6 md:w-8" />
            <span className="text-sm md:text-base text-gray-300"> Schedule Free Demo</span>
          </button>
        </div>
      </div>

      <div className="z-10">
        <Image src={hero} alt="laptop" className="w-72 md:w-xl mt-12 md:mt-0 mr-8 md:mr-0" />
      </div>
    </section>
  );
}
