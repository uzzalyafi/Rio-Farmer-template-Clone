import Title from "../components/Title";

export default function Accordion() {
  return (
    <>
      <section>
        <div>
          {/* title */}
          <div className="text-center ">
            <Title
              titles={"FAQ"}
              subTitle={
                <>
                  You’ve got questions, we’ve <br /> got
                  <span className="text-[#1a5eff]">answers</span>
                </>
              }
            />
          </div>
        </div>
        {/* accordion */}
        <div className="max-w-[700px] mx-auto bg-white divide-y rounded shadow-md divide-slate-200 shadow-slate-200 mb-[80px]">
          <details className="p-4 group ">
            <summary className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
              What do you mean by accessible components?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac08 desc-ac08"
              >
                <title id="title-ac08">Open icon</title>
                <desc id="desc-ac08">
                  icon that represents the state of the summary
                </desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </summary>
            <p className="mt-4 text-slate-500">
              All components come with proper attributes to ensure full
              accessibility with the WAI-ARIA standards. Web accessibility means
              that websites, tools, and technologies are designed and developed
              so that people with disabilities can use them. Web accessibility
              means that websites, tools, and technologies are designed and
              developed so that people with disabilities can use them.
            </p>
          </details>
          <details className="p-4 group">
            <summary className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
              What do you mean about fully responsive?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac10 desc-ac10"
              >
                <title id="title-ac10">Open icon</title>
                <desc id="desc-ac10">
                  icon that represents the state of the summary
                </desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </summary>
            <p className="mt-4 text-slate-500">
              Every component is fully responsive and implemented to look great
              at any screen size.
            </p>
          </details>
          <details className="p-4 group">
            <summary className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
              Which version of TailwindCSS are you using for the components?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac12 desc-ac12"
              >
                <title id="title-ac12">Open icon</title>
                <desc id="desc-ac12">
                  icon that represents the state of the summary
                </desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </summary>
            <p className="mt-4 text-slate-500">
              Our team has used the currently latest TailwindCSS version. The
              code is used in its original form without any customization or
              third party dependencies.
            </p>
          </details>
        </div>
      </section>
    </>
  );
}
