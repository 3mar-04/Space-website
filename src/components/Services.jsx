import React from "react";
import { FaReact } from "react-icons/fa";
import { FaShuttleSpace, FaSpaceAwesome } from "react-icons/fa6";
import wave from "../assets/wave Gif.gif"
const Services = () => {
  const ServiceData = [
    {
      Title: "HST",
      Content: "300-1500km",
      description:
        "Used for astronomical observations, capturing stunning images of the universe.",
      icon: <FaReact className="text-7xl" />,
      aosDelay: "300",
    },
    {
      Title: "ISS",
      Content: "500-1500km",
      description:
        "It's a habitable artificial satellite orbiting Earth and serves as a space environment research laboratory.",
      icon: <FaShuttleSpace className="text-7xl" />,
      aosDelay: "500",
    },
    {
      Title: "GPS",
      Content: "300-1500km",
      description:
        "Part of the Global Positioning System (GPS) used for navigation.",
      icon: <FaSpaceAwesome className="text-7xl" />,
      aosDelay: "700",
    },
  ];

  return (
    <div className=" bg-black text-white relative z-50">
      <div className="container">
        <div className="min-h-[400px]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
            {ServiceData.map((data, index) => (
              <div
                key={index}
                className="min-h-[180px] flex gap-2 flex-col justify-center items-center rounded-xl bg-sky-900/60 backdrop-blur-sm text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto"
                data-aos="fade-up" data-aos-delay={data.aosDelay}
              >
                {data.icon}
                <h1>{data.Title}</h1>
                <p>{data.Content}</p>
                <p className="text-sm">{data.description}</p>
              </div>
            ))}
          </div>
          <div>
            <img src={wave} alt="gif" className="h-[200px] w-full object-cover mix-blend-screen -translate-y-24 relative z-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
