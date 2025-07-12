import FooterTestimonials from "./FooterTestimonials";
import FooterGetStartedForm from "./FooterGetStartedForm";
import FooterLinks from "./FooterLinks";
import FooterBottomBar from "./FooterBottomBar";

const Footer = () => (
  <footer id="footer" className="bg-darkblue-10 text-white px-6 md:px-40 py-16">
    <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
      <FooterTestimonials />
      <FooterGetStartedForm />
    </div>
    <FooterLinks />
    <FooterBottomBar />
  </footer>
);

export default Footer;
