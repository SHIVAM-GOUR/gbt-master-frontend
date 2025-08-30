import ContactHero from "../../components/contact/ContactHero";
import ContactForm from "../../components/contact/ContactForm";
import ContactInfo from "../../components/contact/ContactInfo";
import ContactMap from "../../components/contact/ContactMap";

export const metadata = {
  title: 'Contact Us - GroowByTech',
  description: 'Get in touch with GroowByTech. Contact our team for website solutions, support, or any questions about our services.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen font-sans bg-background text-foreground overflow-x-hidden">
      <ContactHero />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <ContactForm />
        <ContactInfo />
      </div>
      <ContactMap />
    </main>
  );
}