import About from "../components/About";
import BusinessProblems from "../components/BusinessProblems";

import Hero from "../components/Hero";
import OnlinePresence from "../components/OnlinePresence";
import Products from "../components/Products";
import Solutions from "../components/Solutions";
import StartToday from "../components/StartToday/StartToday";
import WhyUs from "../components/WhyUs";



export default function HomePage() {
  return (
    <main className="min-h-screen font-sans bg-background text-foreground overflow-x-hidden">
     
      {/* <Header /> */}
      <Hero />
      <About />
      <BusinessProblems />
      <OnlinePresence />
      <Solutions />
      <Products />
      <WhyUs />
      <StartToday />
      {/* <Footer /> */}
     
    </main>
  );
}
