import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMessage } from "react-icons/md";
import Title from "./../components/Title";
import logo from "./../assets/images/FLogo.png";
import Accordion from './../components/Accodrion';
import Testimonials_2 from "../components/Testimonials_2";
const Contract = () => {
  return (
    <section>
      <div className="container px-4 grid grid-cols-1 md:grid-cols-2 gap-10 pb-20">
      <div>
        <div>
          <Title titles={"Contact"} subTitle={"Get in Touch"} />
          <p className="text-lg font-normal font-inter leading-[27px] text-[#414244] mt-5">
            We help you automate your workflows, automate repetitive tasks, and
            elevate your business.
          </p>
        </div>
        <div className="flex gap-6 flex-col">
          <h5 className="text-[25px] leading-3[28px] font-[700] inline-flex gap-2 items-center mt-8 ">
            <FaLocationDot className="text-[22px]" /> Our office
          </h5>
          <h6 className="text-lg font-normal font-inter leading-[27px] text-[#414244]">
            1875 NewTown Ave 10th Floor, AW, Washington, District of America
          </h6>
        </div>
        <div>
          <h5 className="text-[25px] leading-3[28px] font-[700] inline-flex gap-2 items-center mt-8">
            <MdOutlineMessage className="text-[22px]" /> Get in touch
          </h5>
          <h6 className="text-lg mt-6 font-normal font-inter leading-[27px] text-[#414244]">
            {" "}
            +123 456 789 0245 hi@rio.co{" "}
          </h6>
        </div>
      </div>
      {/* from=contact */}
      <form>
      <div className="fles flex-col bg-slate-200 p-8 rounded-[30px]">
          <div>
            <img className="w-[75px] mb-8" src={logo} alt="logo" />
          </div>
          <div className="flex flex-col w-0-[90%] gap-6">
            <input className="p-4 rounded-lg" type="text" name="name" id=" name" placeholder="Name" />
            <input className="p-4 rounded-lg" type="email" name="email" id=" email" placeholder="Email"  />

            <textarea className="h-[150px] p-4 rounded-lg" name="message" id=" message" placeholder="Message" />
            <button className="bg-[#1a5eff] text-white  mt-4 rounded-3xl font-bold font-cabinet hover:bg-[#202b38] duration-300 px-4 py-4">Submit</button>
          </div>
        </div>
      </form>

    </div>

   <Accordion/>
   <Testimonials_2/>

    </section>
  );
};

export default Contract;
