import React from "react";
import bgVideo from "./assets/earth-bg.mp4";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import "aos/dist/aos.css"
import Aos from "aos";
const App = () => {

  React.useEffect(()=>{
    Aos.init(
      {
        duration:1200 ,
        easing:"ease-in-out",
      }
    )
  })
  return (
    <>
    <div className="w-full h-[700px] relative">
      <video
        autoPlay 
        muted
        loop 
        className="fixed top-0 left-0 w-full h-[700px] object-cover z-[-1]" 
      >
        <source src={bgVideo}  type="video/mp4"/>
      </video>
      <Navbar/>
      <Hero />
    </div>
    {/* services section */}

    <Services/>
    <Banner/>
    <Footer/>
    </>
  );
};

export default App;
