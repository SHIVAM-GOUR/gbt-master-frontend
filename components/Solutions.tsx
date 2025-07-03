import Image from "next/image";
import greenVector from "../public/icons/greenVector.svg";

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
    <section className="bg-white py-8 px-6 md:px-20 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold mb-2">How We Solve These Problems</h2>
          <div className="flex justify-center mt-2">
            <Image src={greenVector} alt="underline" className="w-60"/>
          </div>
        <p className="text-gray-600 my-10">
          <span>Ready-to-deploy solutions that eliminate technical challenges</span><br /><span>and get you online fast</span> 
        </p>
        <div className="space-y-6">
          {solutions.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 p-6 rounded-md shadow-sm text-left"
            >
              <div className="flex items-start space-x-3">
                <div className="mt-1 w-4 h-4 bg-green-10 rounded-full flex-shrink-0" />
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
