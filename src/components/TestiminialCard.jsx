/* eslint-disable react/prop-types */

import { IoStar } from "react-icons/io5";

const TestiminialCard = ({ image, name }) => {
  return (
    <div className="flex flex-col gap-4 max-w-[380px] p-[30px] bg-[#fff] rounded-[30px] shadow-sm">
      <div className="flex gap-4">
        <img
          className="w-[70px] h-[70px] rounded-full object-cover object-top"
          src={image}
          alt="image"
        />
        <div>
          <p className="text-lg leading-[27px] font-[600] text-[#202b38] font-inter">
            {name}
          </p>
          <span className="text-base leading-[21px] font-normal text-[#414244] font-inter">
            Marketing Director @ ABC
          </span>
        </div>
      </div>
      <div>
        <p className="text-[16px] leading-[24px] font-[400] text-[#414244] font-inter">
          &quot;Our chatbot has taken over more than <br /> 60% of our support
          tickets, and <br /> customers are not even noticing they <br /> are
          talking to AI&quot;
        </p>
      </div>
      <div className="flex gap-2 text-[23px] text-[#1a5eff] mt-[45px]">
        <IoStar />
        <IoStar />
        <IoStar />
        <IoStar />
        <IoStar />
      </div>
    </div>
  );
};

export default TestiminialCard;
