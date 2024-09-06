import ServicesCard from "./ServicesCard";
import Title from "./Title";
// import react icon
import { TiMessages } from "react-icons/ti";

const Services = () => {
  return (
    <>
      {/*----- services section start -------*/}
      <section>
        {/* title component */}
       <div className="max-w-[600px] mx-auto text-center">
       <Title
          titles={"Services"}
          subTitle={
            <>
              <span className="text-[#1a5eff]">AI-powered</span> automation
              services
            </>
          }
        />
       </div>
       {/* services card */}
        <div className="container flex flex-wrap gap-5 items-center justify-center px-5">
          <ServicesCard
            icon={<TiMessages />}
            title="Chatbots for Internal Use"
            description="Automate tasks to ensure your business operates seamlessly around the clock."
          />
          <ServicesCard
            icon={<TiMessages />}
            title="Chatbots for Internal Use"
            description="Automate tasks to ensure your business operates seamlessly around the clock."
          />

          <ServicesCard
            icon={<TiMessages />}
            title="Chatbots for Internal Use"
            description="Automate tasks to ensure your business operates seamlessly around the clock."
          />
          <ServicesCard
            icon={<TiMessages />}
            title="Chatbots for Internal Use"
            description="Automate tasks to ensure your business operates seamlessly around the clock."
          />
        </div>
      </section>
      {/* ----- end services section ------ */}
    </>
  );
};

export default Services;
