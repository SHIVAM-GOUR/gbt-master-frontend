export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 5 pages",
        "Basic SEO optimization",
        "Contact forms",
        "Mobile responsive",
        "SSL certificate",
        "Basic analytics"
      ],
      popular: false,
      buttonText: "Get Started"
    },
    {
      name: "Professional",
      price: "$399",
      period: "/month",
      description: "Ideal for growing businesses and schools",
      features: [
        "Up to 20 pages",
        "Advanced SEO tools",
        "E-commerce integration",
        "User management",
        "Custom forms",
        "Advanced analytics",
        "Priority support",
        "Custom integrations"
      ],
      popular: true,
      buttonText: "Most Popular"
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited pages",
        "Full customization",
        "Multi-site management",
        "Advanced security",
        "API access",
        "Dedicated support",
        "Custom development",
        "Training included"
      ],
      popular: false,
      buttonText: "Contact Sales"
    }
  ];

  return (
    <section id="pricing" className="py-16 px-6 md:px-40 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <div className="flex justify-center mb-6">
            <span className="block h-1 w-64 md:w-96 bg-green-10 rounded-full"></span>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include hosting, maintenance, and 24/7 support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${plan.popular ? 'ring-2 ring-green-10 scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-10 text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-green-10">{plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg className="w-5 h-5 text-green-10 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-full font-semibold transition-all ${
                plan.popular
                  ? 'bg-green-10 text-white hover:bg-opacity-90'
                  : 'border-2 border-green-10 text-green-10 hover:bg-green-10 hover:text-white'
              }`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-darkblue-10 text-white p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-4">Need Something Custom?</h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Every organization is unique. If our standard plans don't fit your needs,
              we'll create a custom solution tailored specifically for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-green-10 text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all">
                Request Custom Quote
              </a>
              <a href="#" className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-darkblue-10 transition-all">
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Link */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Have questions about our pricing?</p>
          <a href="/faq" className="text-green-10 font-semibold hover:underline">
            Check our FAQ section →
          </a>
        </div>
      </div>
    </section>
  );
}