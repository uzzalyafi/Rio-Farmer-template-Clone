/* eslint-disable react/prop-types */
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const ServicesCard = ({ icon, title, description }) => {
  return (
    <div className="w-[552px] p-[30px] bg-[#fff] rounded-[30px] hover:rotate-1 transition-transform duration-300">
      <span className="text-[#1a5eff] text-[40px]">{icon}</span>
      <h3 className="text-[25px] font-bold font-cabinet leading-[28px] text-[#202b38]  mt-5 mb-[10px]">
        {title}
      </h3>
      <p className="text-base font-normal font-inter leading-[24px] text-[#414244]">
        {description}
      </p>
      <a
        href="#"
        className="inline-flex items-center text-lg font-bold leading-[22px] font-cabinet gap-2 text-[#1a5eff] my-[14px]"
      >
        Learn more <BsFillArrowRightCircleFill />
      </a>
    </div>
  );
};

export default ServicesCard;
