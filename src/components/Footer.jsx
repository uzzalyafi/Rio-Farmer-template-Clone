const Footer = () => {
  return (
    <footer className="container flex gap-4 flex-col md:flex-row justify-between items-center px-[20px] py-[30px]">
      <p className="text-[16px] leading-[24px] text-[#414244] font-inter">
        © Mont Limited 2023. All rights reserved.
      </p>
      <a
        className="text-[16px] leading-[24px] text-[#414244] font-inter"
        href="https://www.linkedin.com/in/uzzalyafi/?originalSubdomain=bd"
      >
        Designed by : Uzzal Yafi
      </a>
    </footer>
  );
};

export default Footer;
