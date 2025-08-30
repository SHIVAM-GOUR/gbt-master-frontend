export default function FAQHero() {
  return (
    <section className="relative pt-32 md:pt-24 flex flex-col items-center justify-center px-6 md:px-48 h-auto md:h-[60vh] bg-black text-white">
      {/* Background blur effect */}
      <div className="absolute w-[600px] h-[600px] bg-green-20 rounded-full blur-[100px] opacity-20 top-0 right-0 z-0"></div>

      <div className="max-w-4xl text-center z-10">
        <h1 className="text-2xl md:text-6xl font-bold relative inline-block mb-8">
          Frequently Asked Questions
          <span className="block w-full h-1 bg-green-10 mt-2 md:mt-4 mx-auto"></span>
        </h1>

        <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto">
          Find answers to common questions about our services, pricing, and processes.
          Can&apos;t find what you&apos;re looking for? We&apos;re here to help.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#faq-section" className="bg-green-10 text-white px-6 py-3 rounded-full text-lg hover:bg-opacity-90 transition-all">
            Browse Questions
          </a>
          <a href="/contact" className="border border-green-10 text-green-10 px-6 py-3 rounded-full text-lg hover:bg-green-10 hover:text-white transition-all">
            Contact Support
          </a>
        </div>
      </div>

      {/* Quick stats */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-8 text-center z-10">
        <div>
          <div className="text-2xl font-bold text-green-10">24/7</div>
          <div className="text-sm opacity-80">Support</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-green-10">2hrs</div>
          <div className="text-sm opacity-80">Response Time</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-green-10">98%</div>
          <div className="text-sm opacity-80">Satisfaction</div>
        </div>
      </div>
    </section>
  );
}