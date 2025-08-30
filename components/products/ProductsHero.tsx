export default function ProductsHero() {
  return (
    <section className="relative pt-32 md:pt-24 flex flex-col md:flex-row items-center justify-between px-6 md:px-48 h-auto md:h-[80vh] bg-black text-white">
      {/* Background blur effect */}
      <div className="absolute w-[600px] h-[600px] bg-green-10 rounded-full blur-[100px] opacity-20 bottom-0 left-0 z-0"></div>

      <div className="max-w-2xl z-10">
        <h1 className="text-2xl md:text-6xl font-bold relative inline-block">
          Our Products & Services
          <span className="block w-full h-1 bg-green-10 mt-2 md:mt-4"></span>
        </h1>

        <p className="mt-8 text-base md:text-lg">
          Discover our comprehensive range of website solutions designed specifically
          for schools and businesses. From e-commerce platforms to educational portals,
          we have the perfect solution for your needs.
        </p>

        <p className="italic my-6 text-base md:text-lg">
          <strong>Ready-to-deploy solutions</strong> that grow with your organization.
        </p>

        <div className="flex items-center gap-4 z-10">
          <a href="#products" className="bg-green-10 text-white px-4 py-2 rounded-full text-lg hover:bg-opacity-90 transition-all">
            View Products
          </a>
          <a href="#pricing" className="border border-green-10 text-green-10 px-4 py-2 rounded-full text-lg hover:bg-green-10 hover:text-white transition-all">
            See Pricing
          </a>
        </div>
      </div>

      <div className="z-10 mt-8 md:mt-0">
        <div className="grid grid-cols-2 gap-4">
          <div className="w-32 h-32 bg-gradient-to-br from-green-10 to-green-20 rounded-2xl flex items-center justify-center">
            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="w-32 h-32 bg-gradient-to-br from-green-20 to-darkblue-10 rounded-2xl flex items-center justify-center">
            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
          </div>
          <div className="w-32 h-32 bg-gradient-to-br from-darkblue-10 to-green-10 rounded-2xl flex items-center justify-center">
            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 0a1 1 0 100 2h.01a1 1 0 100-2H9zm2 0a1 1 0 100 2h.01a1 1 0 100-2H11zm2 0a1 1 0 100 2h.01a1 1 0 100-2H13zm-4-3a1 1 0 100 2h.01a1 1 0 100-2H9zm2 0a1 1 0 100 2h.01a1 1 0 100-2H11zm2 0a1 1 0 100 2h.01a1 1 0 100-2H13z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="w-32 h-32 bg-gradient-to-br from-green-20 to-green-10 rounded-2xl flex items-center justify-center">
            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}