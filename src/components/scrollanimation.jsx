import React, { useState, useEffect } from "react";
import About from "../assets/about.png";
import Shop from "../assets/shop.png";
import Team from "../assets/team.png";
import Aos from "aos";
import "aos/dist/aos.css";

const ScrollAnimatedBox = () => {
   useEffect(() => {
     Aos.init({ duration: 600, delay: 200 });
   }, []);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const moveDistance = (scrollPosition % 1000) - 800;

  return (
    <div className="relative flex flex-col w-full md:h-[100vh] h-[100vh] overflow-hidden ">
      <div
        data-aos="fade-up"
        className="relative   w-full xl:h-[90vh] md:h-[60vh] h-[40vh] overflow-hidden bg-[rgb(243,44,70)]  "
      >
        <div
          className="absolute md:w-[200vw] w-[300vw] md:h-[45vh] flex items-center justify-around  "
          style={{ transform: `translateX(${moveDistance}px)` }}
        >
          <div className="md:w-[200vw] w-[300vw] flex justify-around h-[50vh] items-center ">
            <img src={About} alt="" className="md:w-[30vw] w-[45vw]" />
            <img src={Team} alt="" className="md:w-[30vw] w-[45vw]" />
            <img src={About} alt="" className="md:w-[30vw] w-[45vw]" />
            <img src={Shop} alt="" className="md:w-[30vw] w-[45vw]" />
            <img src={Shop} alt="" className="md:w-[30vw] w-[45vw]" />
            <img src={Shop} alt="" className="md:w-[30vw] w-[45vw]" />
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        className=" w-full md:h-[70vh] h-[30vh] overflow-hidden bg-[rgb(243,44,70)]  "
      >
        <div
          className="absolute  md:w-[250vw] w-[400vw]  flex items-center justify-around "
          style={{ transform: `translateX(${-moveDistance}px)` }}
        >
          <div className="md:w-[250vw] w-[400vw] flex justify-around md:h-[50vh]  items-center  ">
            <img src={About} alt="" className="md:w-[30vw] w-[45vw] " />
            <img src={Team} alt="" className="md:w-[30vw] w-[45vw]" />
            <img src={About} alt="" className="md:w-[30vw] w-[45vw]" />
            <img src={Shop} alt="" className="md:w-[30vw] w-[45vw]" />
            <img src={Shop} alt="" className="md:w-[30vw] w-[45vw]" />
            <img src={About} alt="" className="md:w-[30vw] w-[45vw]" />
            <img src={About} alt="" className="md:w-[30vw] w-[45vw]" />
            <img src={About} alt="" className="md:w-[30vw] w-[45vw]" />
          </div>
        </div>
      </div>
      {/* 
      <div className="relative bottom-12 w-full h-[50vh] overflow-hidden">
        <div
          className="absolute bottom-10 w-full h-[40vh] flex items-center justify-around"
          style={{ transform: `translateX(${-moveDistance}px)` }}
        >
          <div className="w-[20vw] h-[40vh]"></div>
        </div>
      </div> */}
    </div>
  );
};

export default ScrollAnimatedBox;
