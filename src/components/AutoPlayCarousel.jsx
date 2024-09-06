/* eslint-disable no-unused-vars */
import brand_logo_1 from "../assets/images/brand_log0_1.png";
import brand_logo_2 from "../assets/images/brand_logo_2.png";
import brand_logo_3 from "../assets/images/brand_logo_3.png";
import brand_logo_4 from "../assets/images/brang_logo_4.png";
import brand_logo_5 from "../assets/images/brand_logo_5.png";
import AOS from 'aos';

const AutoPlayCarousel = () => {
  return (
    <div data-aos="fade-up" className="container">
      <p className="text-base font-bold leading-[14px] text-[#57575a] font-cabinet text-center mt-10">
        Trusted by 40+ worldwide clients
      </p>
      <div className=" relative flex overflow-x-hidden">
        <div className="py-12 animate-marquee whitespace-nowrap flex">
          <span className="mx-4 text-4xl">
            <img className="w-[150px]" src={brand_logo_1} alt="logo" />
          </span>
          <span className="mx-4 text-4xl">
            <img className="w-[150px]" src={brand_logo_2} alt="logo" />
          </span>
          <span className="mx-4 text-4xl">
            <img className="w-[150px]" src={brand_logo_3} alt="logo" />
          </span>
          <span className="mx-4 text-4xl">
            <img className="w-[150px]" src={brand_logo_4} alt="logo" />
          </span>
          <span className="mx-4 text-4xl">
            <img className="w-[150px]" src={brand_logo_5} alt="logo" />
          </span>
        </div>

        <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex">
          <span className="mx-4 text-4xl">
            <img className="w-[150px]" src={brand_logo_1} alt="logo" />
          </span>
          <span className="mx-4 text-4xl">
            <img className="w-[150px]" src={brand_logo_2} alt="logo" />
          </span>
          <span className="mx-4 text-4xl">
            <img className="w-[150px]" src={brand_logo_3} alt="logo" />
          </span>
          <span className="mx-4 text-4xl">
            <img className="w-[150px]" src={brand_logo_4} alt="logo" />
          </span>
          <span className="mx-4 text-4xl">
            <img className="w-[150px]" src={brand_logo_5} alt="logo" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default AutoPlayCarousel;
