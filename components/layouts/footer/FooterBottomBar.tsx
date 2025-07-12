const FooterBottomBar = () => {
  const year = new Date().getFullYear();

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mt-4 md:mt-16">
      <p className="mb-2 sm:mb-0">© {year} GroowByTech Inc. All rights reserved.</p>
      <p>Terms and Conditions</p>
      <p>Privacy Policy</p>
    </div>
  );
};

export default FooterBottomBar;
