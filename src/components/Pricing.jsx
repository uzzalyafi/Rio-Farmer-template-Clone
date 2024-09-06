import { useState } from "react";
import Title from "./Title";
import Button from "./Button";

export default function Pricing() {
  const [billPlan, setBillPlan] = useState("monthly");

  const plans = [
    {
      price: {
        monthly: 29,
        annually: 29 * 12 - 199,
      },
      features: ["One project", "Your dashboard"],
    },
    {
      price: {
        monthly: 59,
        annually: 59 * 12 - 100,
      },
      features: [
        "Two projects",
        "Your dashboard",
        "Components included",
        "Advanced charts",
      ],
    },
    {
      name: "Custom",
      discretion: "Advanced features for pros who need more customization.",
      price: {
        monthly: 139,
        annually: 139 * 12 - 100,
      },
      features: [
        "Unlimited projects",
        "Your dashboard",
        "+300 Components",
        "Chat support",
      ],
    },
  ];

  return (
    <div className="container mx-auto antialiased bg-[#f6f6f6]">
      <main className="mx-4 my-16">
        {/* title */}

        <div className="text-center">
          <Title titles={"Pricing"} subTitle={"Plans to Fit Your Business"} />
        </div>

        {/* Plan switch */}
        <div className="flex items-center justify-center mt-10 space-x-4">
          <span className="text-[20px] font-bold leading-[24px] font-cabinet">
            Monthly
          </span>
          <button
            className="relative rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() =>
              setBillPlan(billPlan === "monthly" ? "annually" : "monthly")
            }
          >
            <div className="w-16 h-8 transition bg-[#1a5eff] rounded-full shadow-md"></div>
            <div
              className={`absolute inline-flex items-center justify-center w-6 h-6 transition-all duration-200 ease-in-out transform bg-white rounded-full shadow-sm top-1 left-1 ${
                billPlan === "monthly" ? "translate-x-0" : "translate-x-8"
              }`}
            ></div>
          </button>
          <span className="text-[20px] font-bold leading-[24px] font-cabinet">
            Yearly
          </span>
        </div>

        {/* Plans */}
        <div className="flex flex-col items-center justify-center mt-16 space-y-8 lg:flex-row lg:space-x-8 lg:space-y-0 ">
          {plans.map((plan, index) => (
            <section
              key={index}
              className="flex flex-col w-full max-w-sm p-12 space-y-6 bg-white rounded-[30px] shadow-md border-2"
            >
              {/* Price */}
              <p className="text-[20px] leading-[24px] font-bold text-[#333] font-cabinet">
                Pro
              </p>
              <div>
                <span
                  className={`text-[55px] font-bold leading-[50px] font-cabinet ${
                    plan.name === "Basic" ? "text-green-500" : ""
                  }`}
                >
                  $
                  {billPlan === "monthly"
                    ? plan.price.monthly
                    : plan.price.annually}
                </span>
                <span className="text-gray-400">
                  {billPlan === "monthly" ? "/month" : "/year"}
                </span>
              </div>

              {/* Plan Description */}
              <div className="pb-6 space-y-2 border-b">
                <h2 className="text-lg font-bold leading-[22px] text-[#333] mb-3">
                  Price breakdown here
                </h2>

                <Button
                  className="text-[18px] leading-[22px] w-full"
                  title="Get Started"
                  padding="14px 85px"
                  fontSize="18px"
                  lineHeight="22px"
                />

                <p className="text-lg leading-[24px] mt-4 text-gray-400 hover:text-[#1a5eff]">
                  Got questions? Talk to an expert.
                </p>
              </div>

              {/* Features  */}
              <ul className="flex-1 space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-[#1a5eff]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-3 text-sm">Feature here</span>
                  </li>
                ))}
              </ul>

              {/* Call to Action */}
              <div>
                <a
                  href="#"
                  className={`inline-flex justify-center px-4 py-2 text-sm font-medium border border-transparent rounded-full shadow-sm focus:ring-2 focus:ring-offset-2 ${
                    plan.name === "Basic"
                      ? "text-white bg-green-500 hover:bg-green-600 focus:ring-green-500"
                      : "text-indigo-500 bg-red-50 hover:bg-indigo-100 focus:ring-indigo-500"
                  }`}
                >
                  Get Started
                </a>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
