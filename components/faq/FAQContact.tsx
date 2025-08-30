export default function FAQContact() {
  return (
    <section className="py-16 px-6 md:px-40 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Can&apos;t find the answer you&apos;re looking for? Our support team is here to help you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email Support */}
          <div className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-green-10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Email Support</h3>
            <p className="text-gray-600 mb-4">Get detailed answers to your questions via email.</p>
            <p className="text-green-10 font-semibold mb-4">support@groowbytech.com</p>
            <p className="text-sm text-gray-500">Response within 2 hours</p>
          </div>

          {/* Live Chat */}
          <div className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-green-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Live Chat</h3>
            <p className="text-gray-600 mb-4">Chat with our support team in real-time.</p>
            <button className="bg-green-20 text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all">
              Start Chat
            </button>
            <p className="text-sm text-gray-500 mt-4">Available 24/7</p>
          </div>

          {/* Phone Support */}
          <div className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-darkblue-10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Phone Support</h3>
            <p className="text-gray-600 mb-4">Speak directly with our technical experts.</p>
            <p className="text-darkblue-10 font-semibold mb-4">+1 (555) 123-4567</p>
            <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM EST</p>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-16 bg-darkblue-10 text-white rounded-3xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Additional Resources</h3>
            <p className="text-lg opacity-90">Explore more ways to get help and learn about our services.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="/docs" className="bg-white bg-opacity-10 rounded-2xl p-6 text-center hover:bg-opacity-20 transition-all">
              <svg className="w-8 h-8 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
              <h4 className="font-semibold mb-2">Documentation</h4>
              <p className="text-sm opacity-80">Detailed guides and tutorials</p>
            </a>

            <a href="/tutorials" className="bg-white bg-opacity-10 rounded-2xl p-6 text-center hover:bg-opacity-20 transition-all">
              <svg className="w-8 h-8 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
              <h4 className="font-semibold mb-2">Video Tutorials</h4>
              <p className="text-sm opacity-80">Step-by-step video guides</p>
            </a>

            <a href="/community" className="bg-white bg-opacity-10 rounded-2xl p-6 text-center hover:bg-opacity-20 transition-all">
              <svg className="w-8 h-8 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
              </svg>
              <h4 className="font-semibold mb-2">Community</h4>
              <p className="text-sm opacity-80">Connect with other users</p>
            </a>

            <a href="/contact" className="bg-white bg-opacity-10 rounded-2xl p-6 text-center hover:bg-opacity-20 transition-all">
              <svg className="w-8 h-8 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clipRule="evenodd" />
              </svg>
              <h4 className="font-semibold mb-2">Contact Us</h4>
              <p className="text-sm opacity-80">Get in touch directly</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}