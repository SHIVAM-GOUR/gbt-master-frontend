export default function ContactHero() {
  return (
    <section className="relative pt-32 md:pt-24 flex flex-col items-center justify-center px-6 md:px-48 h-auto md:h-[60vh] bg-black text-white">
      {/* Background blur effect */}
      <div className="absolute w-[600px] h-[600px] bg-green-10 rounded-full blur-[100px] opacity-20 bottom-0 left-0 z-0"></div>

      <div className="max-w-4xl text-center z-10">
        <h1 className="text-2xl md:text-6xl font-bold relative inline-block mb-8">
          Get In Touch
          <span className="block w-full h-1 bg-green-10 mt-2 md:mt-4 mx-auto"></span>
        </h1>

        <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto">
          Ready to transform your online presence? We're here to help you every step of the way.
          Contact us today to discuss your project and get a free consultation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact-form" className="bg-green-10 text-white px-6 py-3 rounded-full text-lg hover:bg-opacity-90 transition-all">
            Send Message
          </a>
          <a href="tel:+15551234567" className="border border-green-10 text-green-10 px-6 py-3 rounded-full text-lg hover:bg-green-10 hover:text-white transition-all">
            Call Now
          </a>
        </div>
      </div>

      {/* Contact methods preview */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-8 text-center z-10">
        <div>
          <div className="text-lg font-bold text-green-10">Email</div>
          <div className="text-sm opacity-80">support@groowbytech.com</div>
        </div>
        <div>
          <div className="text-lg font-bold text-green-10">Phone</div>
          <div className="text-sm opacity-80">+1 (555) 123-4567</div>
        </div>
        <div>
          <div className="text-lg font-bold text-green-10">Response</div>
          <div className="text-sm opacity-80">Within 2 hours</div>
        </div>
      </div>
    </section>
  );
}