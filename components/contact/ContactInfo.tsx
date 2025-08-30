export default function ContactInfo() {
  const contactMethods = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      ),
      title: "Email Us",
      details: "support@groowbytech.com",
      description: "Send us an email and we'll respond within 2 hours",
      action: "mailto:support@groowbytech.com"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ),
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri 9AM-6PM EST",
      action: "tel:+15551234567"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      ),
      title: "Visit Us",
      details: "123 Tech Street, Suite 100",
      description: "San Francisco, CA 94105",
      action: "#map"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
        </svg>
      ),
      title: "Live Chat",
      details: "Available 24/7",
      description: "Get instant help from our support team",
      action: "#chat"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Contact Information</h2>
          <p className="text-gray-600">
            Multiple ways to reach us. Choose what works best for you.
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.action}
              className="flex items-start p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all group"
            >
              <div className="w-16 h-16 bg-green-10 rounded-xl flex items-center justify-center text-white mr-4 group-hover:bg-green-20 transition-all">
                {method.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">{method.title}</h3>
                <p className="text-green-10 font-semibold mb-1">{method.details}</p>
                <p className="text-gray-600 text-sm">{method.description}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Business Hours */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <svg className="w-6 h-6 text-green-10 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            Business Hours
          </h3>
          <div className="space-y-2">
            {businessHours.map((schedule, index) => (
              <div key={index} className="flex justify-between">
                <span className="text-gray-600">{schedule.day}</span>
                <span className="font-semibold">{schedule.hours}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-8 bg-darkblue-10 text-white rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-2">Emergency Support</h3>
          <p className="mb-4 opacity-90">
            For critical issues outside business hours, call our emergency line:
          </p>
          <a href="tel:+15551234999" className="text-green-10 font-bold text-lg hover:underline">
            +1 (555) 123-4999
          </a>
        </div>

        {/* Social Media */}
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="w-12 h-12 bg-green-10 rounded-full flex items-center justify-center text-white hover:bg-green-20 transition-all">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="w-12 h-12 bg-green-10 rounded-full flex items-center justify-center text-white hover:bg-green-20 transition-all">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="w-12 h-12 bg-green-10 rounded-full flex items-center justify-center text-white hover:bg-green-20 transition-all">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}