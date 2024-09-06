import TestiminialCard from "./TestiminialCard";
import Title from "./Title";
import tastimonial_1 from "../assets/images/tastimonial_1.jpg";
import tastimonial_2 from "../assets/images/tastimonial_2.jpg";
import tastimonial_3 from "../assets/images/tastimonial_3.jpg";

const Testimonial = () => {
  return (
    <div className="container">
      {/* Title */}
      <div className="max-w-[600px] mx-auto text-center ">
        <Title
          titles={"Testimonials"}
          subTitle={" Leading the way in AI automation"}
        />
      </div>
      {/* slider */}
      <div className=" relative flex overflow-x-hidden">
        <div className="py-12 animate-marquee whitespace-nowrap flex">
          <span className="mx-4 text-4xl">
          <TestiminialCard image={tastimonial_1} name={"John Doe"} />
          </span>
          <span className="mx-4 text-4xl">
          <TestiminialCard image={tastimonial_2} name={"Alex James"} />
          </span>
          <span className="mx-4 text-4xl">
          <TestiminialCard image={tastimonial_3} name={"John Doe"} />
          </span>
          <span className="mx-4 text-4xl">
          <TestiminialCard image={tastimonial_1} name={"Alex James"} />
          </span>
          <span className="mx-4 text-4xl">
          <TestiminialCard image={tastimonial_2} name={"John Doe"} />
          </span>
        </div>

        <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex">
          <span className="mx-4 text-4xl">
          <TestiminialCard image={tastimonial_1} name={"John Doe"} />
          </span>
          <span className="mx-4 text-4xl">
          <TestiminialCard image={tastimonial_2} name={"JAlex James"} />
          </span>
          <span className="mx-4 text-4xl">
          <TestiminialCard image={tastimonial_3} name={"John Doe"} />
          </span>
          <span className="mx-4 text-4xl">
          <TestiminialCard image={tastimonial_1} name={"Alex James"} />
          </span>
          <span className="mx-4 text-4xl">
          <TestiminialCard image={tastimonial_2} name={"John Doe"} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

{/* <TestiminialCard image={tastimonial_1} name={"John Doe"} /> */}
