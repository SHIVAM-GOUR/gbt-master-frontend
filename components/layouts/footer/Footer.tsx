import FooterTestimonials from "./FooterTestimonials";
import FooterGetStartedForm from "./FooterGetStartedForm";
import FooterLinks from "./FooterLinks";
import FooterBottomBar from "./FooterBottomBar";

const Footer = () => (
  <footer id="footer" className="dark:bg-darkblue-10 bg-white text-darkblue-10 dark:text-white px-6 md:px-40 py-16">
    <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
      <FooterTestimonials />
      <FooterGetStartedForm />
    </div>
    <FooterLinks />
    <FooterBottomBar />
  </footer>
);

export default Footer;
