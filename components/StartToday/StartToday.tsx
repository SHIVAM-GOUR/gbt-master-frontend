import ContactOptions from "./ContactOptions";
import InquiryForm from "./InquiryForm";


export default function StartToday() {
  return (
    <section className= "relative bg-black text-white py-16 px-6 md:px-40">
          <div className="absolute w-[600px] h-[600px] bg-green-20 rounded-full blur-[100px] opacity-20  z-0 bottom-0 left-0 top-40 max-w-3xl"></div>
      <div className="max-w-6xl mx-auto px-4 py-20 text-center relative z-20">
        <h2 className="font-bold mb-4 text-2xl md:text-5xl " >Get Started Today</h2>
         <div className="flex justify-center mb-6">
        <span className="block h-1 w-64 md:w-md bg-green-10 rounded-full"></span>
        </div>
        <p className="mb-12 max-w-xl mx-auto">
          Tell us about your needs and we&apos;ll provide a customized solution for your business or school
        </p>

        <InquiryForm />
        <ContactOptions />
      </div>
    </section>
  );
}
