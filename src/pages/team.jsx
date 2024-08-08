import { useEffect, useState } from "react";
import Button from "../components/button";
import Aos from "aos";
import "aos/dist/aos.css";

import Music from "../assets/music.svg";
import Music2 from "../assets/music2.svg";
import Music3 from "../assets/music3.jpg";
import Music4 from "../assets/music4.jpg";

import John from "/John.png";
import Dan from "/Dan Clark.png";
import Cannon from "/Cannon.png";
import John2 from "/John2.jpg";
import Dan2 from "/Dan Clark2.jpg";
import Cannon2 from "/Cannon2.jpg";

import { IoLogoTwitch } from "react-icons/io5";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram, FaYoutube } from "react-icons/fa";

const Icons = ({ icon }) => (
  <div
   className="icon md:w-[2.7vw] w-[8vw] bg-[var(--primary-1)] h-[6vh] flex justify-center items-center">
    <p className="text-2xl">{icon}</p>
  </div>
);
const Teams = ({ image2, image, name }) => {
  const [display, setDisplay] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => {
          setTimeout(() => {
            setDisplay(true);
          }, 200);
        }}
        onMouseLeave={() => {
          setTimeout(() => {
            setDisplay(false);
          }, 200);
        }}
        className="relative"
      >
        <div className="relative flex justify-center items-center">
          {" "}
          <img
            src={image}
            data-aos="zoom-in"
            className="object-cover filter-grayscale  xl:w-[28.5vw] lg:w-[28vw] md:w-[28.5vw] w-[80.5vw] xl:h-[57vh] lg:h-[50vh] md:h-[50vh] h-[57vh]   "
          />
          <div className="flex justify-between w-[60%] items-center absolute z-30 bottom-[5%]">
            ,<Icons icon={<TiSocialFacebook />} />
            <Icons icon={<FaInstagram />} />
            <Icons icon={<FaYoutube />} />
            <Icons icon={<IoLogoTwitch />} />
          </div>
        </div>
        <div
          className={`absolute z-30 bottom-0 ${
            display ? "hidden" : "flex"
          } cursor-pointer`}
        >
          <img
            src={image2}
            data-aos="zoom-in"
            className=" filter-grayscale object-cover  absolute bottom-0  xl:w-[28.5vw] lg:w-[28vw] md:w-[28.5vw] w-[80.5vw] xl:h-[57vh] lg:h-[50vh] md:h-[50vh] h-[57vh]  z-30 opacity-40"
          />
          <div
           
            className="bg-[#11161e]   xl:w-[28.5vw] lg:w-[28vw] md:w-[28.5vw] w-[80.5vw] xl:h-[57vh] lg:h-[50vh] md:h-[50vh] h-[57vh] flex justify-center items-center"
          >
            <p className="text-[33px] font-bold z-40 ">{name}</p>
          </div>
        </div>
      </div>
    </>
  );
};

const Team = () => {
  useEffect(() => {
    Aos.init({ duration: 600, delay: 300 });
  }, []);

  const Instagram = ({ image }) => (
    <div className="relative">
      <img
        src={image}
        className="  
    hover:opacity-10"
      />
      <div
        className="absolute cursor-pointer inset-0 flex items-center justify-center bg-[#11161e] bg-opacity-75 
    opacity-0 hover:opacity-100 transition-opacity duration-500
    "
      >
        {/* <FaInstagram className="text-[85px] text-white" /> */}
      </div>
    </div>
  );
  return (
    <div className="w-[100%] h-fit space-y-20 flex flex-col items-center justify-around">
      {/* frist............ */}
      <div className=' w-[100%] h-[90vh] flex items-start justify-center flex-col bg-[url("./assets/bg2.jpeg")]  bg-cover bg-center  '>
        <div
          data-aos="fade-left"
          className="w-[90vw] md:w-[70vw] lg:w-[55vw] h-auto flex flex-col  text-justify items-start justify-end py-6  pt-[25vh] pl-14 "
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold pb-5 text-white">
            Team
          </h1>
          <p className="md:text-2xl text-sm text-white/70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et quis
            odio vestibulum nunc, neque integer purus.
          </p>
        </div>
      </div>

      {/* meet the team............ */}

      <div className=" flex flex-col items-center justify-evenly w-[95vw] h-fit space-y-20">
        <div className=" w-[90vw] flex items-center justify-between">
          <h2 data-aos=" fade-up" 
          className="font-bold  md:text-6xl text-4xl">
            DRAGON TEAM
          </h2>
          <Button text="Join Our Team" />
        </div>

        <div className=" flex flex-col items-center justify-evenly space-y-10 h-fit">
          <div className="flex justify-around w-[95vw] flex-wrap  items-center md:flex-row flex-colxl:space-x-10 lg:space-x-10 md:space-y-5 space-y-10">
            <Teams image={John} name="JOHN CARTER" image2={John2} />
            <Teams image={Dan} name="JOHN CARTER" image2={Dan2} />
            <Teams image={Cannon} name="JOHN CARTER" image2={Cannon2} />
          </div>
          <div className="flex justify-around w-[100%] flex-wrap  items-center md:flex-row flex-colxl:space-x-10 lg:space-x-10 md:space-y-5 space-y-10 ">
            <Teams image={John} name="JOHN CARTER" image2={John2} />
            <Teams image={Dan} name="JOHN CARTER" image2={Dan2} />
            <Teams image={Cannon} name="JOHN CARTER" image2={Cannon2} />
          </div>
        </div>
      </div>

      {/* last guy */}

      <div className="flex flex-col items-center justify-around h-auto py-20   ">
        <h3
          data-aos="fade-up"
          className="text-2xl md:text-3xl lg:text-4xl font-bold"
        >
          FOLLOW US ON <span className="text-[#f32c46]">INSTAGRAM</span>
        </h3>
        <div className="flex flex-wrap justify-center items-center   pt-10 lg:space-y-0 space-y-5  lg:space-x-0 space-x-5 ">
          <div
            data-aos="zoom-in"
            className="  w-[20rem] sm:w-[18rem] md:w-[23rem] lg:w-[24vw] xl:w-[24.5vw]  x"
          >
            <Instagram image={Music3} className="w-full h-full object-cover" />
            {/* <img
                src={Music3}
                alt="Music3"
                className="w-full h-full object-cover"
              /> */}
            <div
              data-aos="zoom-in"
              className="w-full h-0 g absolute bottom-0 left-0 group-hover:h-full transition-all duration-300 flex items-center justify-center "
            >
              <img src="" alt="" />
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="   w-[20rem] sm:w-[18rem] md:w-[23rem] lg:w-[24vw] xl:w-[24.5vw]  x relative lg:bottom-0 bottom-2 flex items-center justify-center"
          >
            <Instagram image={Music4} className="w-full h-full object-cover" />
            {/* <img
                src={Music4}
                alt="Music4"
                className="w-full h-full object-cover"
              /> */}
            <div
              data-aos="zoom-in"
              className="w-full h-0 g absolute bottom-0 left-0 group-hover:h-full transition-all duration-300 flex items-center justify-center "
            >
              <img src="" alt="" />
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="  w-[20rem] sm:w-[18rem] md:w-[23rem] lg:w-[24vw] xl:w-[24.5vw]  x"
          >
            <Instagram image={Music3} className="w-full h-full object-cover" />
            {/* <img
                src={Music3}
                alt="Music3"
                className="w-full h-full object-cover  "
              /> */}
            <div
              data-aos="zoom-in"
              className="w-full h-0 g absolute bottom-0 left-0 group-hover:h-full transition-all duration-300 flex items-center justify-center"
            >
              <img src="" alt="" />
            </div>
          </div>

          <div
            data-aos="zoom-in"
            className="  w-[20rem] sm:w-[18rem]  md:w-[23rem] lg:w-[24vw] xl:w-[24.5vw] x"
          >
            <Instagram image={Music4} className="w-full h-full object-cover" />
            {/* <img
                src={Music4}
                alt="Music4"
                className="w-full h-full object-cover"
              /> */}
            <div
              data-aos="zoom-in"
              className="w-full h-0 g absolute bottom-0 left-0 group-hover:h-full transition-all duration-300 flex items-center justify-center "
            >
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
