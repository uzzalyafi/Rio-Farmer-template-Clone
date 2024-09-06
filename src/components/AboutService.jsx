import Button from "./Button";
import Title from "./Title";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import { IoStarSharp } from "react-icons/io5";
import { PiUsersFill } from "react-icons/pi";

const AboutService = () => {
  return (
    <>
      <div>
        <div className="container px-4 grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 items-center justify-center ">
          <div>
            <Title
              titles={"Services"}
              subTitle={
                <>
                  <span className="text-[35px] md:text-[50px] leading-[55px] md:leading-[72px]  ">
                    Workflows with our AI automation
                    <span className="text-[#1a5eff]">expertise </span>
                  </span>
                </>
              }
            />
            <Button
              className="text-[18px] leading-[22px]"
              title="Book Your Free Audit Call"
              padding="14px 24px"
              fontSize="18px"
              lineHeight="22px"
            />
          </div>
          <div className="text-lg font-normal font-inter leading-[27px] text-[#414244]">
            <p className="mb-3">
              AI automation stands as the cornerstone of modern business
              evolution, leveraging artificial intelligence to revolutionize
              operational efficiency. Through intelligent algorithms and machine
              learning, organizations can reduce manual effort, minimize errors,
              and gain an unparalleled level of streamlined productivity.
            </p>
            <p>
              Beyond operational enhancements, AI automation offers a
              competitive advantage by ensuring 24/7 availability and providing
              data-driven insights for strategic decision-making. This
              transformative technology empowers businesses to thrive in a
              dynamic market, fostering adaptability and scalability while
              ushering in an era of unprecedented efficiency and agility.
            </p>
          </div>
        </div>
      </div>

      {/* values */}
      <div>
        <div className="text-center ">
          <Title
            titles={"Values"}
            subTitle={
              <>
                <span className="text-[#1a5eff]">AI-powered</span> automation
                <br className="hidden md:block" />
                services
              </>
            }
          />
        </div>
      </div>
      <div className="container px-4 grid grid-cols-1 md:grid-cols-3 gap-10 mt-14">
        <div className="p-[30px] bg-[#fff] rounded-[30px] shadow-sm text-center">
          <AiOutlineDeliveredProcedure className="text-[#1a5eff] text-[35px] inline-block " />
          <h5 className="text-[25px] leading-[28px] font-bold text-[#202b38] mt-5 mb-4">
            Innovation First
          </h5>
          <p className="text-[16px] leading-[24px] font-[400] text-[#414244] font-inter">
            Leading with AI-driven innovation for state-of-the-art automation
            solutions.
          </p>
        </div>
        <div className="p-[30px] bg-[#fff] rounded-[30px] shadow-sm text-center">
          <IoStarSharp className="text-[#1a5eff] text-[35px] inline-block " />
          <h5 className="text-[25px] leading-[28px] font-bold text-[#202b38] mt-5 mb-4">
            Precision Excellence
          </h5>
          <p className="text-[16px] leading-[24px] font-[400] text-[#414244] font-inter">
            Delivering flawless accuracy through advanced AI technology
          </p>
        </div>
        <div className="p-[30px] bg-[#fff] rounded-[30px] shadow-sm text-center">
          <PiUsersFill className="text-[#1a5eff] text-[35px] inline-block " />
          <h5 className="text-[25px] leading-[28px] font-bold text-[#202b38] mt-5 mb-4">
            Client-Centric Approach
          </h5>
          <p className="text-[16px] leading-[24px] font-[400] text-[#414244] font-inter">
            Tailored solutions and transparent partnerships for mutual success.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutService;
