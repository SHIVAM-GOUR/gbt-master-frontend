import About from "../components/About";
import BusinessProblems from "../components/BusinessProblems";
import Header from "../components/Header";
import Hero from "../components/Hero";
import OnlinePresence from "../components/OnlinePresence";
import Products from "../components/Products";
import Solutions from "../components/Solutions";
import WidthLayoutWrapper from "../components/WidthLayoutWrapper";


export default function HomePage() {
  return (
    <main className="min-h-screen font-sans bg-background text-foreground">
      <WidthLayoutWrapper>
      <Header />
      <Hero />
      <About />
      <BusinessProblems />
      <OnlinePresence />
      <Solutions />
      <Products />
      </WidthLayoutWrapper>
    </main>
  );
}
