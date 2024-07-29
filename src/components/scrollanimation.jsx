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
    <div
      div
      className=" relative flex flex-col-reverse w-[100%] md:h-[180vh] h-[50vh] overflow-hidden  "
    >
      <div className="relative bottom-12 w-full md:h-[70vh] h-[150vh]    overflow-hidden bg-[rgb(243,44,70)] ">
        <div
          data-aos="fade-up"
          className="absolute md:bottom-40 bottom-0  w-[200vw] md:h-[30vh] h-[30vh] flex items-center justify-around "
          style={{ transform: `translateX(${-moveDistance}px)` }}
        >
          <div
            data-aos="fade-up"
            className="w-[200vw] flex justify-around h-[40vh] items-center "
          >
            <img src={About} alt="" className="w-[30vw]" />
            <img src={Team} alt="" className="w-[30vw]" />
            <img src={About} alt="" className="w-[30vw]" />
            <img src={Shop} alt="" className="w-[30vw]" />
            <img src={Shop} alt="" className="w-[30vw]" />
            <img src={Shop} alt="" className="w-[30vw]" />
          </div>
        </div>
      </div>
      <div className=" bottom-12 w-full md:h-[50vh] h-[50vh]  overflow-hidden  bg-[rgb(243,44,70)]">
        <div
          data-aos="fade-up"
          className="absolute md:top-80 top-7 md:w-[250vw] w-[300vw] md:h-[50vh] h-[20vh] flex items-center justify-around  space-x-2 "
          style={{ transform: `translateX(${moveDistance}px)` }}
        >
          <div
            data-aos="fade-up"
            className="md:w-[260vw] w-[260vw] space-x-2 flex justify-around h-[40vh] items-center"
          >
            <img src={About} alt="" className="w-[30vw] " />
            <img src={Team} alt="" className="w-[30vw]" />
            <img src={About} alt="" className="w-[30vw]" />
            <img src={Shop} alt="" className="w-[30vw]" />
            <img src={Shop} alt="" className="w-[30vw]" />
            <img src={About} alt="" className="w-[30vw]" />
            <img src={About} alt="" className="w-[30vw]" />
            <img src={About} alt="" className="w-[30vw]" />
          </div>
        </div>
      </div>

      <div className="relative bottom-12 w-full h-[50vh] overflow-hidden">
        <div
          className="absolute bottom-10 w-[100%] h-[40vh] flex items-center justify-around"
          style={{ transform: `translateX(${-moveDistance}px)` }}
        >
          <div className="w-[20vw] h-[40vh] "></div>
        </div>
      </div>
    </div>
  );
};

export default ScrollAnimatedBox;