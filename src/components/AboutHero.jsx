import Title from "./../components/Title";
// import button
import Button from "./../components/Button";
// import image
import hero_1 from "../assets/images/hero_1.jpg";
import hero_2 from "../assets/images/hero_2.jpg";
import hero_3 from "../assets/images/hero_3.jpg";
import about_photo from "../assets/images/about_photo.avif";

// import react icon
import { BsArrowRight } from "react-icons/bs";

const AboutHero = () => {
  return (
    <>
      <div>
        <div className="container flex flex-col md:flex-row px-4 items-center justify-between mb-5">
          <div className="max-w-[700px] ">
            <Title
              titles={"About"}
              subTitle={
                <>
                  <span className="text-[40px] md:text-[80px] leading-[40px] md:leading-[72px]  ">
                    Share your
                    <span className="text-[#1a5eff]">mission </span> & company
                    info
                  </span>
                </>
              }
            />
            <p>
              We help you automate your workflows, automate repetitive{" "}
              <br className="hidden md:block" /> tasks, and elevate your
              business.
            </p>
          </div>
          <div className="text-center mt-[30px]">
            <Button
              className="text-[18px] leading-[22px]"
              title="Book Your Free Audit Call"
              padding="14px 24px"
              fontSize="18px"
              lineHeight="22px"
            />

            <div className="flex gap-4 mt-[10px] cursor-pointer aitems-center justify-center">
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
                <p className="text-[16px] leading-[18px] text-[#414244] inline-flex items-center gap-2 ">
                  Join Them Now <BsArrowRight />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[300px] md:h-[500px]">
        <div className="container px-4 h-[300px]  ">
          <img
            className="w-full h-[300px] md:h-[450px] object-cover object-center rounded-[30px] my-10"
            src={about_photo}
            alt="about_photo"
          />
        </div>
      </div>
    </>
  );
};

export default AboutHero;
