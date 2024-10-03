import React from "react";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div
      data-aos="fade-down"
      className="fixed top-0 right-0 w-full bg-black/10 backdrop-blur-sm py-4 sm:py-4 z-[9999]"
    >
      <div className="container">
        <div className="flex justify-between items-start">
          <div className="flex text-white items-center gap-4 font-bold text-2xl">
            <img src={logo} alt="logo" className="w-10" />
            <span>TCJ-SPACE</span>
          </div>
          <div className="hidden md:block">
          <ul className="flex list-none text-white items-center gap-6 py-4 sm:py-0 h-full text-xl">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#technology">Technology</a>
            </li>
            <li>
              <a href="#galaxy">Galaxy</a>
            </li>
            <li>
              <a href="#satelite">Satelite</a>
            </li>
          </ul>
          </div>
          <div>
            <button className="text-white border-2 border-e-white px-3 py-1 rounded-md ">
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
