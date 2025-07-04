import Image from "next/image";
import greenVector from "../public/icons/greenVector.svg";
import greenDots from "../public/icons/greenDots.svg";

const solutions = [
  {
    title: "Ready-to-launch software tailored for your needs",
    description: "Pre-built solutions designed specifically for your industry",
  },
  {
    title: "No need to hire designers, developers, or researchers",
    description: "Everything is already built and tested by our expert team",
  },
  {
    title: "Fast turnaround - get your product within days",
    description: "Launch your digital presence in days, not months",
  },
  {
    title: "Modern UI/UX with mobile responsiveness",
    description: "Beautiful, professional designs that work perfectly on all devices",
  },
  {
    title: "Support for upgrades, changes, and scaling",
    description: "Continuous support as your business grows and evolves",
  },
];

export default function Solutions() {
  return (
    <section className="relative bg-black py-8 px-6 md:px-20 text-center">
         <div className="absolute w-[500px] h-[600px] bg-[#00C2E9] rounded-full blur-[100px] opacity-20 top-20 z-0 bottom-0 left-0"></div>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl font-bold mb-2 text-white">How We Solve These Problems</h2>
          <div className="flex justify-center mt-2">
            <Image src={greenVector} alt="underline" className="w-60"/>
          </div>
        <p className="text-white my-10">
          <span>Ready-to-deploy solutions that eliminate technical challenges</span><br /><span>and get you online fast</span> 
        </p>
        <div className="space-y-6">
          {solutions.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm text-left"
            >
              <div className="flex items-center space-x-3">
              
                <div>
                  <Image src={greenDots} alt="bullet" className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
