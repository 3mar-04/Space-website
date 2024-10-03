import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import {HiLocationMarker} from "react-icons/hi";
import {MdCall , MdMessage} from "react-icons/md";


const Footer = () => {
  return (
    <div className="bg-gray-800 text-white px-5">
      <section className="max-w-[1200px] mx-auto text-white">
        <div className="grid md:grid-cols-3 py-5">
          {/* Subscribe Section */}
          <div>
            <h1 className="font-bold text-xl sm:text-3xl sm:text-left text-justify mb-3">Be Ready To Grow</h1>
            <p>
              Get Exclusive <strong>Updates</strong> straight to your inbox.
            </p>
            <br />
            <div className="flex items-center h-10">
              <input
                type="email"
                placeholder="Email"
                className="px-3 py-1 border-2 w-full h-[100%] focus:border-sky-500 focus:ring-sky-500 focus:ring-2 focus:outline-none border-gray-200 bg-gray-800 inline-block"
              />
              <button className="bg-blue-400 hover:bg-blue-500 px-4 py-2 rounded-md text-xl duration-200">
                OK
              </button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold mb-3">Quick Links</h1>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#login">Login</a></li>
              </ul>
            </div>
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold mb-3">Other Links</h1>
              <ul>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
                <li><a href="#support">Support</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="py-8 px-4 ">
              <h1 className="text-xl font-bold mb-3">Contact Us</h1>
                <div className="space-y-4 mt-8">
                    <div className="flex items-center gap-2">
                        <HiLocationMarker/>
                        <p className="text-xs">Noida, Uttar Pradesh</p>
                    </div>
                    
                    <div className="flex items-center gap-2 ">
                        <MdMessage/>
                        <p className="text-xs">abc@gmail.com</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <MdCall/>
                        <p className="text-xs">+91 123456789</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hidden md:block">
        <div className="flex justify-between px-36 items-center border-t-2 pt-4">
            <span className="text-sm text-gray-400">copyright © 2024 by TCJ</span>
        
        <div className=" flex items-center justify-center gap-4 pb-4">
            <a href="">
                <FaInstagram  className="text-4xl"/>
            </a>
            <a href="">
                <FaFacebook  className="text-4xl"/>
            </a>
            <a href="">
                <FaLinkedin className="text-4xl"/>
            </a>
        </div>
        <div className=" flex gap-4">
            <p className="text-gray-400">Privacy Policy
            </p>
            <p className="text-gray-400">Terms & Conditions</p>
        </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
