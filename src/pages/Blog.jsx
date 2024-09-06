import BlogCard from "../components/BlogCard";
import Title from "../components/Title";
import Testimonials_2 from './../components/Testimonials_2';

const Blog = () => {
  return (
    <div>
      {/* title component */}
      <div className="text-center ">
        <Title
          titles={"Blog"}
          subTitle={"AI Automation Insights"}
        />
        {/* content */}
        <p className="text-lg font-normal font-inter leading-[27px] text-[#414244] mt-5 mb-6" >We help you automate your workflows, automate repetitive tasks, and <br className="hidden md:block" /> elevate your business.</p>
      </div>
      <div className="container px-4 grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
      </div>
      <div className="mt-20">
        <Testimonials_2/>
      </div>

    </div>
  );
};

export default Blog;
