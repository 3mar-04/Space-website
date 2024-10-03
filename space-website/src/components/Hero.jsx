import React from "react";
import moon from "../assets/moon.png";
const Hero = () => {
  return (
    <div className="w-full flex bg-black/20 h-full text-white">
      <div className="h-full w-full flex justify-center items-center p-4 relative z-50">
        <div className="container grid grid-cols-1  sm:grid-cols-2 gap-4">
          <div className="space-y-4 lg:pr-36 ml-14">
            <h1 data-aos="fade-up" className="text-5xl font-bold uppercase">Orbite The Earth</h1>
            <p data-aos="fade-up" data-aos-delay="300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ea
              dolorem eius accusamus beatae. Nulla quis beatae quo, possimus
              tempora similique dignissimos repellat aperiam veniam culpa
              consequatur repudiandae asperiores saepe.
            </p>
            <button data-aos="fade-up" data-aos-delay="500" className=" bg-blue-400 hover:bg-blue-500 px-4 py-2 rounded-md text-xl duration-200">
              Learn More
            </button>
          </div>
          <div></div>
        </div>
      </div>
      <img
        src={moon}
        alt="moon"
        className="w-full object-cover absolute bottom-0 right-0 brightness-50 z-10 "
      />
      <div className="w-full absolute bottom-0 bg-gradient-to-b from-transparent  from-10% to-black to-90%  h-[20px] sm:h-[50px] md:h-[60px] z-30"></div>
    </div>
  );
};

export default Hero;
