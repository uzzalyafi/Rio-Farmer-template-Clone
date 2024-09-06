import Button from "./Button";
import ProcessCrad from "./ProcessCrad";
import Title from "./Title";

const Process = () => {
  return (
    <div className="container flex flex-col md:flex-row gap-4 px-4">
      {/* title */}
      <div className="flex-basis-1 text-center md:text-left md:sticky top-4 h-max self-start">
        <Title
          titles={"Process"}
          subTitle={
            <>
              How to get started
              <span className="text-[#1a5eff]">expertise</span>
            </>
          }
        />
        <p className="text-lg font-normal font-inter leading-[27px] text-[#414244]">
          Unleash the power of AI automation to transform routine processes,
          ensuring precision, 24/7 availability, and significant cost savings.
        </p>
        <Button
          className="text-[18px] leading-[22px]"
          title="Book Your Free Audit Call"
          padding="14px 24px"
          fontSize="18px"
          lineHeight="22px"
        />
      </div>
      {/* cards */}
      <div className="flex flex-col">
        <ProcessCrad
          id="01"
          title="Book a discovery call"
          description="Book your free discovery call by clicking one of the buttons on this page."
        />
        <ProcessCrad
          id="02"
          title="Get a personal growth strategy"
          description="On this call, we'll assess your business and start working on your personal growth strategy."
        />
        <ProcessCrad
          id="03"
          title="Onboarding"
          description="After the strategy is complete, we will onboard you onto our softwares to ensure a smooth process."
        />
        <ProcessCrad
          id="04"
          title="Implementation & results"
          description="And finally, we get to implementing the growth strategy and working to see results."
        />
      </div>
    </div>
  );
};

export default Process;
