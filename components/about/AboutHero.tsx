import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative pt-32 md:pt-24 flex flex-col md:flex-row items-center justify-between px-6 md:px-48 h-auto md:h-[80vh] bg-black text-white">
      {/* Background blur effect */}
      <div className="absolute w-[600px] h-[600px] bg-green-20 rounded-full blur-[100px] opacity-20 bottom-0 right-0 z-0"></div>

      <div className="max-w-2xl z-10">
        <h1 className="text-2xl md:text-6xl font-bold relative inline-block">
          About GroowByTech
          <span className="block w-full h-1 bg-green-10 mt-2 md:mt-4"></span>
        </h1>

        <p className="mt-8 text-base md:text-lg">
          We are passionate about empowering schools and businesses with reliable,
          ready-to-deploy website solutions. Our mission is to eliminate the complexity
          of web development while delivering exceptional digital experiences.
        </p>

        <p className="italic my-6 text-base md:text-lg">
          <strong>Building the future of web solutions</strong> – one website at a time.
        </p>

        <div className="flex items-center gap-4 z-10">
          <a href="#team" className="bg-green-10 text-white px-4 py-2 rounded-full text-lg hover:bg-opacity-90 transition-all">
            Meet Our Team
          </a>
          <a href="#mission" className="border border-green-10 text-green-10 px-4 py-2 rounded-full text-lg hover:bg-green-10 hover:text-white transition-all">
            Our Mission
          </a>
        </div>
      </div>

      <div className="z-10 mt-8 md:mt-0">
        <div className="w-72 md:w-96 h-72 md:h-96 bg-gradient-to-br from-green-10 to-green-20 rounded-3xl flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl md:text-6xl font-bold mb-4">5+</div>
            <div className="text-lg md:text-xl">Years of Excellence</div>
          </div>
        </div>
      </div>
    </section>
  );
}