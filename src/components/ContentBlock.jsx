import Button from "./Button";
import Title from "./Title";
import content_image_1 from "../assets/images/content_blog_1.png";
import content_image_2 from "../assets/images/content_blog_2.png";
import clint_1 from "../assets/images/clint_1.jpg";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { SlPicture } from "react-icons/sl";

const ContentBlock = () => {
  return (
    <>
      {/* ----- Content block section start------ */}
      <section className="container px-5">
        {/* item 1 */}
        <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-5 mt-[80px] md:mb-[20px] ">
          <div className="text-center md:text-left">
            {/* title component */}
            <div className="text-center md:text-left">
              <Title
                titles={"Content block"}
                subTitle={
                  <>
                    Workflows with our AI automation{" "}
                    <span className="text-[#1a5eff]">expertise</span>
                  </>
                }
              />
            </div>
            {/* content */}

            <p className="text-lg leading-[27px] font-normal font-inter text-[#414244]">
              Revolutionize tasks, reduce errors, and boost efficiency with
              intelligent technology, streamlining operations for unparalleled
              productivity.
            </p>

            <p className="flex items-center justify-center md:justify-start gap-2 text-lg leading-[27px] font-[500] font-inter text-[#414244 mt-[32px] mb-[25px]">
              <FaRegCheckCircle className="text-[20px]" />
              Functional sections
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2 text-lg leading-[27px] font-[500] font-inter text-[#414244] mb-[25px]">
              <FaRegCheckCircle className="text-[20px]" />
              Easy to customize
            </p>
            <Button
              className="text-[18px] leading-[22px]"
              title="Book Your Free Audit Call"
              padding="14px 24px"
              fontSize="18px"
              lineHeight="22px"
            />
          </div>
          {/* image */}
          <div>
            <img src={content_image_1} alt="content_image_1" />
          </div>
        </div>

        {/*--- item 2 ---*/}
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 my-[70px] ">
          {/* image */}
          <div className="mt-5">
            <img src={content_image_2} alt="content_image_1" />
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
      </section>
      {/* ----- Content block section End------ */}
    </>
  );
};

export default ContentBlock;
