import FAQHero from "../../components/faq/FAQHero";
import FAQAccordion from "../../components/faq/FAQAccordion";
import FAQContact from "../../components/faq/FAQContact";

export const metadata = {
  title: 'FAQ - GroowByTech',
  description: 'Find answers to frequently asked questions about our website solutions, pricing, and services.',
};

export default function FAQPage() {
  return (
    <main className="min-h-screen font-sans bg-background text-foreground overflow-x-hidden">
      <FAQHero />
      <FAQAccordion />
      <FAQContact />
    </main>
  );
}