import Button from "./Button";
import Title from "./Title";
import testi_bg from "../assets/images/testi_bg.svg";
import fLogo from "../assets/images/FLogo.png";
import { SiFacebook } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";

const Testimonials_2 = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${testi_bg})`,
      }}
      className="container bg-cover bg-center h-screen w-full bg-[#1f2b37] rounded-[30px] p-10"
    >
      {/* title */}
      <div className="text-center ">
        <Title
          titles={"Testimonials"}
          subTitle={
            <>
              <span className="text-[#fff]">Ready to Get</span>
              <span className="text-[#1a5eff]">Started?</span>
            </>
          }
        />
      </div>
      <div className=" text-center text-[#fff]">
        <p className="text-lg font-normal font-inter leading-[27px] mb-6">
          Experience the future of business operations with AI
          automation—increased <br /> speed, accuracy, and adaptability, driving
          overall productivity gains.
        </p>
        <Button
          className="text-[18px] leading-[22px]"
          title="Book Your Free Audit Call"
          padding="14px 24px"
          fontSize="18px"
          lineHeight="22px"
        />
      </div>

      <div className="text-[#fff] flex flex-col md:flex-row gap-4 justify-between place-items-center mt-[80px] text-center">
        {/* socal icon */}
        <div className="flex gap-4 text-[23px] ">
          <SiFacebook className="cursor-pointer "/>
          <CiLinkedin className="cursor-pointer "/>
          <FaTwitter className="cursor-pointer "/>
        </div>
        {/* logo text */}
        <div className="flex flex-col gap-3 items-center">
          <img className="w-[80px]" src={fLogo} alt="logo" />
          <p className="font-inter">
            Build a powerful agency site with <br className="hidden md:block" /> Framer.
          </p>
        </div>
        {/* link */}
        <div className="flex gap-10 font-inter "> 
          <a className="hover:text-[#1a5eff] duration-300" href="#"> About</a>
          <a className="hover:text-[#1a5eff] duration-300" href="#"> Contact</a>
          <a className="hover:text-[#1a5eff] duration-300" href="#"> Blog</a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials_2;
