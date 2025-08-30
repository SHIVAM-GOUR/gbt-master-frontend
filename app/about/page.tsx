import AboutHero from "../../components/about/AboutHero";
import Mission from "../../components/about/Mission";
import Team from "../../components/about/Team";
import Timeline from "../../components/about/Timeline";

export const metadata = {
  title: 'About Us - GroowByTech',
  description: 'Learn about GroowByTech\'s mission, vision, and the team behind reliable website solutions for schools and businesses.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen font-sans bg-background text-foreground overflow-x-hidden">
      <AboutHero />
      <Mission />
      <Team />
      <Timeline />
    </main>
  );
}