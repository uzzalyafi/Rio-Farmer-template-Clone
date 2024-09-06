import Button from "./Button";
import Title from "./Title";
import contentBlog from "../assets/images/contentBlog.avif";
import team1 from "../assets/images/team1.avif";

import content_image_2 from "../assets/images/contentBlogg.avif";
import clint_1 from "../assets/images/clint_1.jpg";

import { FaArrowCircleRight } from "react-icons/fa";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { SlPicture } from "react-icons/sl";

const ContentBlog = () => {
  return (
    <>
      <div className="container px-4 py-[80px] flex flex-col md:flex-row gap-4">
        <div className="flex-basis-1/2">
          <div>
            {/* title */}
            <div>
              <Title
                titles={"content block"}
                subTitle={"AI-driven analytics for smarter decision-making"}
              />
            </div>
          </div>
          <p className="text-lg font-normal font-inter leading-[27px] text-[#414244] mb-5">
            AI automation redefines efficiency: minimize manual efforts, enhance
            precision, and stay ahead in a rapidly evolving market with
            advanced, adaptable solutions.
          </p>
          <Button
            className="text-[18px] leading-[22px]"
            title="Book Your Free Audit Call"
            padding="14px 24px"
            fontSize="18px"
            lineHeight="22px"
          />
        </div>
        <div>
          <img
            className="h-[400px] w-[900px] object-cover object-center rounded-[30px]"
            src={contentBlog}
            alt="content"
          />
        </div>
      </div>


      {/*--- team ----*/}
      <div className="container px-4 ">
        <div>
          <Title titles={"Our team"} subTitle={"Meet the team"} />
        </div>
        <div className=" grid grid-col-1 md:grid-cols-3 gap-4">
          <div className=" hover:rotate-1 transition-transform duration-300">
            <div className="w-[350px] md:w-[376px] h-[340px] bg-[#1a5eff] rounded-[30px] overflow-hidden">
              <img
                className="w-[350px] md:w-[376px] h-[340px] object-cover rounded-[30px]"
                src={team1}
                alt="team-peho"
              />
            </div>
            <h6 className="text-[25px] leading-[28px] font-700 text-[#202b38] font-inter">
              Person name
            </h6>
            <p className="text-[16px] font-normal font-inter leading-[24px] text-[#414244]">
              Position
            </p>
          </div>
          <div className=" hover:rotate-1 transition-transform duration-300">
            <div className="w-[350px] md:w-[376px] h-[340px] bg-[#1a5eff] rounded-[30px] overflow-hidden">
              <img
                className="w-[350px] md:w-[376px] h-[340px] object-cover rounded-[30px]"
                src={team1}
                alt="team-peho"
              />
            </div>
            <h6 className="text-[25px] leading-[28px] font-700 text-[#202b38] font-inter">
              Person name
            </h6>
            <p className="text-[16px] font-normal font-inter leading-[24px] text-[#414244]">
              Position
            </p>
          </div>
          <div className=" hover:rotate-1 transition-transform duration-300">
            <div className="w-[350px] md:w-[376px] h-[340px] bg-[#1a5eff] rounded-[30px] overflow-hidden">
              <img
                className="w-[350px] md:w-[376px] h-[340px] object-cover rounded-[30px]"
                src={team1}
                alt="team-peho"
              />
            </div>
            <h6 className="text-[25px] leading-[28px] font-700 text-[#202b38] font-inter">
              Person name
            </h6>
            <p className="text-[16px] font-normal font-inter leading-[24px] text-[#414244]">
              Position
            </p>
          </div>
        </div>
      </div>

      {/* ---       -----*/}
      <div className="container px-4 py-18 flex flex-col md:flex-row justify-center items-center gap-5 my-[70px] ">
          {/* image */}
          <div className="mt-5">
            <img className=" md:max-w-[550px] xs:w-[400px] h-[350px] md:h-screen object-cover object-center rounded-[30px] " src={content_image_2} alt="content_image_1" />
          </div>

          <div>
            {/* title component */}
            <div className="text-center md:text-left">
              <Title
                titles={"Content block"}
                subTitle={"Harnessing AI for business success"}
              />
              {/* content */}
            </div>

            <a
              href="#"
              className="flex items-center justify-center md:justify-start gap-2 text-[20px] leading-[24px] font-bold font-cabinet text-[#414244] my-6 hover:bg-[#1a5eff] hover:text-[#fff] duration-300 border px-4 rounded-md flex-col md:flex-row shadow-sm"
            >
              <span>
                <AiOutlineMenuUnfold className="rounbed-lg text-[40px] my-3 text-[#1a5eff] bg-[#fff] p-2" />
              </span>
              <span>
                Optimize operations, minimize errors, and save resources
              </span>
              <span>
                <FaArrowCircleRight className="text-[#414244] text-[30px]" />
              </span>
            </a>
            <a
              href="#"
              className="flex items-center justify-center md:justify-start gap-2 text-[20px] leading-[24px] font-bold font-cabinet text-[#414244] my-6 hover:bg-[#1a5eff] hover:text-[#fff] duration-300 border px-4 rounded-md flex-col md:flex-row shadow-sm"
            >
              <span>
                {" "}
                <SlPicture className="rounbed-lg text-[40px] my-3 text-[#1a5eff] bg-[#fff] p-2" />
              </span>
              <span>
                Optimize operations, minimize errors, and save resources
              </span>
              <span>
                <FaArrowCircleRight className="text-[#414244] text-[30px]" />
              </span>
            </a>
            <p className="text-lg leading-[27px] font-normal font-inter text-[#414244]">
              “Couldn’t be happier with the work the guys from XYZ Agency did
              for us. Made sales 10x more efficient.”
            </p>
            <div className="flex items-center gap-4 mt-6 justify-center md:justify-start">
              <img
                className="w-[70px] h-[70px] rounded-full object-cover"
                src={clint_1}
                alt="clint_1"
              />
              <div>
                <h4 className="text-lg leading-[27px] font-[500] font-inter text-[#414244] mb-1">
                  William James
                </h4>
                <span>CEO, XYZ</span>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default ContentBlog;
