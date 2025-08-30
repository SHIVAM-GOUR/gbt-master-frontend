export default function ServiceCategories() {
  const categories = [
    {
      title: "Educational Websites",
      description: "Complete website solutions for schools, colleges, and educational institutions.",
      features: ["Student Portals", "Course Management", "Online Learning", "Event Calendar"],
      icon: "🎓",
      color: "from-green-10 to-green-20"
    },
    {
      title: "Business Websites",
      description: "Professional websites that help businesses establish strong online presence.",
      features: ["Corporate Pages", "Service Showcase", "Contact Forms", "SEO Optimized"],
      icon: "💼",
      color: "from-green-20 to-darkblue-10"
    },
    {
      title: "E-commerce Solutions",
      description: "Full-featured online stores with payment integration and inventory management.",
      features: ["Product Catalog", "Payment Gateway", "Order Management", "Analytics"],
      icon: "🛒",
      color: "from-darkblue-10 to-green-10"
    },
    {
      title: "Custom Development",
      description: "Tailored solutions built specifically for your unique business requirements.",
      features: ["Custom Features", "API Integration", "Database Design", "Scalable Architecture"],
      icon: "⚙️",
      color: "from-green-10 to-darkblue-20"
    }
  ];

  return (
    <section className="py-16 px-6 md:px-40 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-bold mb-4">Service Categories</h2>
          <div className="flex justify-center mb-6">
            <span className="block h-1 w-64 md:w-96 bg-green-10 rounded-full"></span>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We specialize in creating website solutions across different industries and use cases.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center text-3xl mb-6`}>
                {category.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
              <p className="text-gray-600 mb-6">{category.description}</p>

              <div className="space-y-2 mb-6">
                {category.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <svg className="w-5 h-5 text-green-10 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="bg-green-10 text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}