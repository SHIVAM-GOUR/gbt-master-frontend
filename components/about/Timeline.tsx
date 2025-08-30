export default function Timeline() {
  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description: "GroowByTech was established with a vision to simplify web development for schools and businesses.",
      icon: "🚀"
    },
    {
      year: "2020",
      title: "First 50 Clients",
      description: "Successfully delivered website solutions to our first 50 clients, establishing our reputation for reliability.",
      icon: "🎯"
    },
    {
      year: "2021",
      title: "Product Suite Expansion",
      description: "Launched comprehensive product suite including e-commerce, educational, and business website templates.",
      icon: "📈"
    },
    {
      year: "2022",
      title: "Team Growth",
      description: "Expanded our team to 15+ professionals across development, design, and customer success.",
      icon: "👥"
    },
    {
      year: "2023",
      title: "200+ Successful Projects",
      description: "Reached milestone of 200+ successful website deployments with 98% client satisfaction rate.",
      icon: "🏆"
    },
    {
      year: "2024",
      title: "Innovation & AI Integration",
      description: "Integrated AI-powered features and launched next-generation website building platform.",
      icon: "🤖"
    }
  ];

  return (
    <section className="py-16 px-6 md:px-40 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-bold mb-4">Our Growth Journey</h2>
          <div className="flex justify-center mb-6">
            <span className="block h-1 w-64 md:w-96 bg-green-10 rounded-full"></span>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From a small startup to a trusted partner for hundreds of organizations,
            here's how we've grown and evolved over the years.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-10 hidden md:block"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                  <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="text-3xl mb-3">{milestone.icon}</div>
                    <div className="text-green-10 font-bold text-xl mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold mb-3">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="w-6 h-6 bg-green-10 rounded-full border-4 border-white shadow-lg z-10 my-4 md:my-0 hidden md:block"></div>

                {/* Spacer for alternating layout */}
                <div className="w-full md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-green-10 to-green-20 text-white rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-4xl font-bold mb-4">Our Impact in Numbers</h3>
            <p className="text-lg opacity-90">The results speak for themselves</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-5xl font-bold mb-2">200+</div>
              <div className="text-sm md:text-base opacity-90">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-sm md:text-base opacity-90">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-sm md:text-base opacity-90">Team Members</div>
            </div>
            <div>
              <div className="text-3xl md:text-5xl font-bold mb-2">5+</div>
              <div className="text-sm md:text-base opacity-90">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}