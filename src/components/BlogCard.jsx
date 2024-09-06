import { FaUser } from "react-icons/fa";
import blogCard from "../assets/images/blogCard.avif";

const BlogCard = () => {
  return (
    <div className="max-w-[466px] hover:rotate-1 duration-300">
      <img className="max-w-[466px] h-[280px] object-cover object-center rounded-lg" src={blogCard} alt="blog-image" />
      <div className="inline-flex gap-2 items-center my-4">
        <span className="text-[#1a5eff] text-[15px] font-bold leading-[15px]">Category</span>
        <span className="w-[100px] h-[2px] block bg-black"></span>
        <span className="font-[400] text-base leading-[24px] text-[#414244]">jun 21, 2022</span>
      </div>
      <h3 className="text-[25px] font-bold font-cabinet leading-[28px] text-[#202b38]">The Impact of AI Automation <br /> on Modern Business</h3>
      <div className="inline-flex gap-2 items-center my-4">
        <FaUser />
        <span className="ml-2 font-[400] text-base leading-[24px] text-[#414244]">Author Name</span>
      </div>
    </div>
  );
};

export default BlogCard;
