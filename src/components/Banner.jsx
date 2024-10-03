import React from "react";
import satelite1 from "../assets/satelite1.jpg";
import satelite2 from "../assets/satelite2.jpg";

const Banner = () => {
  return (
    <div className="bg-black text-white pb-12">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
          <div>
            <img data-aos="zoom-in" src={satelite1}  alt="" className="w-full object-cover"/>
          </div>
          <div className="flex flex-col  lg:gap-4 gap-8 border-r-2 border-b-2 border-blue-400 space-y-3 xl:pr-36 p-4 items-start">
            <p className="text-blue-500 text-xl" data-aos="fade-up">Our Mission</p>
            <h1 data-aos="fade-up" data-aos-delay="300" className="text-5xl font-bold">Rapidcast</h1>
            <p  data-aos="fade-up" data-aos-delay="500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequatur eveniet necessitatibus quae architecto reprehenderit
              veniam non, tenetur quasi ea, possimus, id vitae voluptate vero
              fugiat suscipit obcaecati! Omnis, quos quas?
            </p>
            <button data-aos="zoom-out" data-aos-delay="700" className=" bg-blue-400 hover:bg-blue-500 px-4 py-2 rounded-md text-xl duration-200">
              Learn More
            </button>
          </div>
          <div className="flex flex-col gap-6 border-l-2 border-b-2 border-blue-400 p-4 items-start">
            <p  data-aos="fade-up" className="text-blue-500 text-xl">Our Mission</p>
            <h1  data-aos="fade-up" data-aos-delay="300" className="text-5xl font-bold">Rapidcast</h1>
            <p data-aos="fade-up" data-aos-delay="500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequatur eveniet necessitatibus quae architecto reprehenderit
              veniam non, tenetur quasi ea, possimus, id vitae voluptate vero
              fugiat suscipit obcaecati! Omnis, quos quas?
            </p>
            <button data-aos="zoom-out" data-aos-delay="700" className=" bg-blue-400 hover:bg-blue-500 px-4 py-2 rounded-md text-xl duration-200">
              Learn More
            </button>
          </div>
          <div>
            <img data-aos="zoom-in" src={satelite2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
