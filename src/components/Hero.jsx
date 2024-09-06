/* eslint-disable no-unused-vars */
// import button
import Button from "./Button";
// import image
import hero_1 from "../assets/images/hero_1.jpg";
import hero_2 from "../assets/images/hero_2.jpg";
import hero_3 from "../assets/images/hero_3.jpg";
import bg_image from "../assets/images/bg-image.svg";
import AOS from 'aos';

// import react icon
import { BsArrowRight } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
const Hero = ({ padding, fontSize, lineHeight }) => {
  return (
    <>
      <div data-aos="zoom-in"
        className="container bg-cover bg-center"
        style={{ backgroundImage: `url(${bg_image})` }}
      >
        <div className="flex flex-col items-center gap-5 pt-[80px] pb-[40px]">
          <h1 className="text-[40px] md:text-[80px] font-bold leading-[40px] md:leading-[72px] text-[#202b38] text-center md:px-16 font-cabinet">
            Save time & <span className="text-[#1a5eff]">work smarter</span>{" "}
            with AI Automation
          </h1>
          <p className="text-lg font-normal font-inter leading-[27px] text-[#414244] max-w-[500px] text-center mb-[10px]">
            We help you automate your workflows, automate repetitive tasks, and
            elevate your business.
          </p>

          <Button
            className="text-[18px] leading-[22px]"
            title="Book Your Free Audit Call"
            padding="14px 24px"
            fontSize="18px"
            lineHeight="22px"
          />

          <div data-aos="fade-up" className="flex gap-4 mt-[10px] cursor-pointer">
            <div className="flex relative">
              <img
                className="w-[58px] h-[58px] object-cover object-center rounded-full border-2 border-[#fff] ring-1 ring-[#1a5eff] absolute top-[0px] right-[70px] z-10"
                src={hero_1}
                alt="hero-image"
              />
              <img
                className="w-[58px] h-[58px] object-cover object-center rounded-full border-2 border-[#fff] ring-1 ring-[#1a5eff]  absolute top-[0px] right-[35px] z-20"
                src={hero_2}
                alt="hero-image"
              />
              <img
                className="w-[58px] h-[58px] object-cover object-top rounded-full border-2 border-[#fff] ring-1 ring-[#1a5eff]  z-30"
                src={hero_3}
                alt="hero-image"
              />
            </div>
            <div>
              <p className="text-lg font-bold font-cabinet leading-[27px] text-[#202b38] hover:text-[#1a5eff] duration-300">
                200+ Happy Clients!
              </p>
              <p className="text-[16px] leading-[18px] text-[#414244] inline-flex items-center gap-2">
                Join Them Now <BsArrowRight />
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* bg video */}
    </>
  );
};

export default Hero;
