import About from "../components/About";
import BusinessProblems from "../components/BusinessProblems";
import Header from "../components/Header";
import Hero from "../components/Hero";



export default function HomePage() {
  return (
    <main className="min-h-screen font-sans bg-background text-foreground">
     
      <Header />
      <Hero />
      <About />
      <BusinessProblems />
      {/* <OnlinePresence />
      <Solutions />
      <Products /> */}
     
    </main>
  );
}
