import Image from "next/image";

export default function Team() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Visionary leader with 10+ years in web development and business strategy.",
      image: "/images/team/sarah.jpg", // Placeholder
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Full-stack developer passionate about creating scalable web solutions.",
      image: "/images/team/michael.jpg", // Placeholder
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Emily Rodriguez",
      role: "Lead Designer",
      bio: "Creative designer focused on user experience and modern web aesthetics.",
      image: "/images/team/emily.jpg", // Placeholder
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "David Kim",
      role: "Project Manager",
      bio: "Experienced project manager ensuring timely delivery and client satisfaction.",
      image: "/images/team/david.jpg", // Placeholder
      linkedin: "#",
      twitter: "#"
    }
  ];

  return (
    <section id="team" className="py-16 px-6 md:px-40 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-bold mb-4">Meet Our Team</h2>
          <div className="flex justify-center mb-6">
            <span className="block h-1 w-64 md:w-96 bg-green-10 rounded-full"></span>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our dedicated team of professionals brings together expertise in technology,
            design, and business to deliver exceptional web solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="relative mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-green-10 to-green-20 rounded-full mx-auto flex items-center justify-center">
                  {/* Placeholder for team member image */}
                  <div className="text-white text-4xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-green-10 font-semibold mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm mb-4">{member.bio}</p>

              <div className="flex justify-center space-x-3">
                <a href={member.linkedin} className="w-8 h-8 bg-green-10 rounded-full flex items-center justify-center text-white hover:bg-opacity-80 transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href={member.twitter} className="w-8 h-8 bg-green-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-80 transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Join Our Team CTA */}
        <div className="mt-16 text-center">
          <div className="bg-darkblue-10 text-white p-8 rounded-3xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Join Our Growing Team</h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for
              creating exceptional web solutions. Explore career opportunities with us.
            </p>
            <a href="/careers" className="bg-green-10 text-white px-6 py-3 rounded-full text-lg hover:bg-opacity-90 transition-all inline-block">
              View Open Positions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}