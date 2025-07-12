import Image from "next/image";
import getStarted from "../../../public/icons/getStarted.svg";

const FooterGetStartedForm = () => (
  <div className="bg-darkblue-20 p-8 rounded-lg shadow-md max-w-md w-full mx-auto">
    <div className="flex items-center justify-center">
      <Image src={getStarted} alt="Get Started" />
    </div>

    <h3 className="text-xl font-semibold mt-2 mb-6 text-center">
      Get Started
    </h3>

    <form className="flex flex-col gap-4">
      <label className="text-white font-medium text-sm">Email Or Phone</label>
      <input
        type="email"
        placeholder="Enter your email or phone number"
        className="px-4 py-3 rounded-md bg-white text-black placeholder:text-gray-400"
        required
      />
      <label className="text-white font-medium text-sm">Query Message</label>
      <textarea
        placeholder="How can we help you ?"
        rows={3}
        className="px-4 py-3 rounded-md bg-white text-black placeholder:text-gray-400"
        required
      />
      <button
        type="submit"
        className="bg-green-10 transition text-white py-3 rounded-md font-semibold"
      >
        Request Guaranteed Callback
      </button>
    </form>
  </div>
);

export default FooterGetStartedForm;
