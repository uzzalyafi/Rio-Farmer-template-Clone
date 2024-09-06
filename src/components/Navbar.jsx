import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import Button from "./Button";
import AOS from 'aos';


// eslint-disable-next-line no-unused-vars
const Navbar = (title, padding) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header data-aos="fade-up">
      {/* top bar */}
      <div>
        <p className="max-w-[1280px] mx-auto text-sm text-center font-inter leading-[21px] text-[#fff] py-2 bg-[#1a5eff]">
          Accepting 4 new clients.{" "}
          <span className="font-bold">Get started now.</span>
        </p>
      </div>
      {/* navbar */}
      <nav className="container h-[80px] flex justify-between items-center px-3">
        {/* logo */}
        <div>
       <img src={logo} alt="logo" />
          
        </div>
        {/* hamburger menu for small screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <span className="text-2xl">&#9776;</span> {/* Hamburger icon */}
          </button>
        </div>
        {/* links for larger screens */}
        <ul className="hidden md:flex gap-10 text-lg font-bold font-cabinet">
          <li className="cursor-pointer hover:text-[#1a5eff] duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-[#1a5eff] duration-300">
            <Link to="/about">About Us</Link>
          </li>
          <li className="cursor-pointer hover:text-[#1a5eff] duration-300">
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
        {/* button for larger screens */}
        <div className="hidden md:block">
          <Link to="/contact"><Button
            className=" text-base leading-6 "
            title="Get Started"
            padding="10px 20px"
          /></Link>
        </div>
      </nav>

      {/* mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col gap-5 text-lg font-bold font-cabinet text-center mt-4">
            <li className="cursor-pointer hover:text-[#1a5eff] duration-300">
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="cursor-pointer hover:text-[#1a5eff] duration-300">
              <Link to="/about" onClick={toggleMenu}>
                About Us
              </Link>
            </li>
            <li className="cursor-pointer hover:text-[#1a5eff] duration-300">
              <Link to="/blog" onClick={toggleMenu}>
                Blog
              </Link>
            </li>
            <li className="cursor-pointer">
              <Button data-aos="fade-up"
                className="text-base leading-6"
                title="Get Started"
                padding="10px 20px"
              />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
