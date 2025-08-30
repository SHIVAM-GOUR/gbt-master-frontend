export default function ProductGrid() {
  const products = [
    {
      name: "EduPortal Pro",
      category: "Educational",
      description: "Complete school management system with student portals, grade tracking, and parent communication.",
      price: "Starting at $299/month",
      features: ["Student Management", "Grade Tracking", "Parent Portal", "Event Calendar"],
      image: "/images/products/eduportal.jpg", // Placeholder
      popular: true
    },
    {
      name: "BusinessHub",
      category: "Business",
      description: "Professional business website with service showcase, team profiles, and contact management.",
      price: "Starting at $199/month",
      features: ["Service Pages", "Team Profiles", "Contact Forms", "SEO Ready"],
      image: "/images/products/businesshub.jpg", // Placeholder
      popular: false
    },
    {
      name: "ShopMaster",
      category: "E-commerce",
      description: "Full-featured e-commerce platform with inventory management and payment processing.",
      price: "Starting at $399/month",
      features: ["Product Catalog", "Payment Gateway", "Inventory Management", "Analytics"],
      image: "/images/products/shopmaster.jpg", // Placeholder
      popular: true
    },
    {
      name: "LearnSpace",
      category: "Educational",
      description: "Online learning platform with course creation, video hosting, and student progress tracking.",
      price: "Starting at $249/month",
      features: ["Course Builder", "Video Hosting", "Progress Tracking", "Certificates"],
      image: "/images/products/learnspace.jpg", // Placeholder
      popular: false
    },
    {
      name: "CorpSite Pro",
      category: "Business",
      description: "Enterprise-level corporate website with advanced features and custom integrations.",
      price: "Starting at $499/month",
      features: ["Custom Design", "API Integration", "Advanced Analytics", "Multi-language"],
      image: "/images/products/corpsite.jpg", // Placeholder
      popular: false
    },
    {
      name: "MarketPlace",
      category: "E-commerce",
      description: "Multi-vendor marketplace platform with vendor management and commission tracking.",
      price: "Starting at $599/month",
      features: ["Multi-vendor", "Commission System", "Vendor Dashboard", "Advanced Search"],
      image: "/images/products/marketplace.jpg", // Placeholder
      popular: true
    }
  ];

  return (
    <section id="products" className="py-16 px-6 md:px-40 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-bold mb-4">Our Products</h2>
          <div className="flex justify-center mb-6">
            <span className="block h-1 w-64 md:w-96 bg-green-10 rounded-full"></span>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from our range of pre-built solutions or let us create something custom for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative">
              {product.popular && (
                <div className="absolute -top-3 left-6 bg-green-10 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Popular
                </div>
              )}

              {/* Product Image Placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mb-6 flex items-center justify-center">
                <div className="text-gray-400 text-center">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm">{product.name}</p>
                </div>
              </div>

              <div className="mb-3">
                <span className="bg-green-10 bg-opacity-10 text-green-10 px-3 py-1 rounded-full text-sm font-semibold">
                  {product.category}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>

              <div className="space-y-2 mb-6">
                {product.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <svg className="w-4 h-4 text-green-10 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold text-green-10">{product.price}</span>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 bg-green-10 text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition-all">
                    Get Started
                  </button>
                  <button className="px-4 py-2 border border-green-10 text-green-10 rounded-full hover:bg-green-10 hover:text-white transition-all">
                    Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}