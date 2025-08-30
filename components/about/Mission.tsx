export default function Mission() {
  return (
    <section id="mission" className="py-16 px-6 md:px-40 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-bold mb-4">Our Mission & Vision</h2>
          <div className="flex justify-center mb-6">
            <span className="block h-1 w-64 md:w-96 bg-green-10 rounded-full"></span>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Empowering organizations with cutting-edge web solutions that drive growth and success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-gradient-to-br from-green-10 to-green-20 text-white p-8 rounded-3xl">
            <div className="mb-6">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            </div>
            <p className="text-lg leading-relaxed">
              To provide reliable, pre-designed website solutions that eliminate the complexity
              of web development for schools and businesses. We believe technology should empower,
              not overwhelm.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-darkblue-10 text-white p-8 rounded-3xl">
            <div className="mb-6">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            </div>
            <p className="text-lg leading-relaxed">
              To become the leading provider of ready-to-deploy web solutions, enabling
              organizations worldwide to establish powerful online presences without
              technical barriers.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-4xl font-bold text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">Reliability</h4>
              <p className="text-gray-600">Delivering consistent, dependable solutions that our clients can trust.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">Innovation</h4>
              <p className="text-gray-600">Continuously evolving our solutions to meet modern digital demands.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-darkblue-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">Excellence</h4>
              <p className="text-gray-600">Striving for the highest quality in every project we deliver.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}