import { useEffect, useState } from "react";
import Foot2 from "../assets/foot2.svg";
import Foot2ii from "../assets/foot2ii.svg";
import Foot2iii from "../assets/foot2iii.svg";
import { FaTwitch, FaInstagram } from "react-icons/fa";
import Foot2iv from "../assets/foot2iv.svg";
import Aos from "aos";
import "aos/dist/aos.css";

import Foot from "../assets/foot.svg";
import Footii from "../assets/footii.svg";
import Footiii from "../assets/footiii.svg";
import Footiv from "../assets/footiv.svg";

import Music from "../assets/music.svg";
import Music2 from "../assets/music2.svg";
import Music3 from "../assets/music3.jpg";
import Music4 from "../assets/music4.jpg";

const Partner = () => {
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
        <FaInstagram className="text-[85px] text-white" />
      </div>
    </div>
  );
  return (
    <>
      <div className="w-full h-auto flex flex-col items-center justify-around">
        <div className="w-full h-[90vh] flex items-center bg-[url('./assets/bg2.jpeg')] bg-cover bg-center justify-center">
          <div
            data-aos="fade-left"
            className="w-[90vw] md:w-[70vw] lg:w-[50vw] h-auto flex flex-col text-center items-center justify-end py-6  pt-[25vh] "
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold pb-5 text-white">
              SPONSORS
            </h1>
            <p className="md:text-2xl text-sm text-white/70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et quis
              odio vestibulum nunc, neque integer purus.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-around items-center xl:h-[100vh] xl:w-full my-14">
          <div data-aos="fade-up" className="flex flex-col items-center">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
              GOLD SPONSORS
            </h1>
            <div className="py-12 px-6 w-[90vw] md:w-[80vw] flex flex-wrap items-center justify-around space-y-6 md:space-y-0">
              <img
                data-aos="zoom-in"
                src={Footii}
                alt="Footii"
                className="w-24 md:w-36 lg:w-48"
              />
              <img
                data-aos="zoom-in"
                src={Footiii}
                alt="Footiii"
                className="w-24 md:w-36 lg:w-48"
              />
              <img
                data-aos="zoom-in"
                src={Foot}
                alt="Foot"
                className="w-24 md:w-36 lg:w-48"
              />
              <img
                data-aos="zoom-in"
                src={Footiv}
                alt="Footiv"
                className="w-24 md:w-36 lg:w-48"
              />
            </div>
          </div>
          <div data-aos="fade-up" className="flex flex-col items-center mt-10">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
              GOLD SPONSORS
            </h1>
            <div className="py-12 px-6 w-[90vw] md:w-[80vw] flex flex-wrap items-center justify-around space-y-6 md:space-y-0">
              <img
                data-aos="zoom-in"
                src={Foot2ii}
                alt="Foot2ii"
                className="w-24 md:w-36 lg:w-48"
              />
              <img
                data-aos="zoom-in"
                src={Foot2iii}
                alt="Foot2iii"
                className="w-24 md:w-36 lg:w-48"
              />
              <img
                data-aos="zoom-in"
                src={Foot2}
                alt="Foot2"
                className="w-24 md:w-36 lg:w-48"
              />
              <img
                data-aos="zoom-in"
                src={Foot2iv}
                alt="Foot2iv"
                className="w-24 md:w-36 lg:w-48"
              />
            </div>
          </div>
        </div>
        {/* py-14 space-y-6 md:space-y-0 */}
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
              <Instagram
                image={Music3}
                className="w-full h-full object-cover"
              />
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
              className=" sm:relative sm:right-0 right-2  w-[20rem] sm:w-[18rem] md:w-[23rem] lg:w-[24vw] xl:w-[24.5vw]  x relative lg:bottom-0 bottom-2 flex items-center justify-center"
            >
              <Instagram
                image={Music4}
                className="w-full h-full object-cover"
              />
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
              className="  sm:relative sm:right-0 right-2 w-[20rem] sm:w-[18rem] md:w-[23rem] lg:w-[24vw] xl:w-[24.5vw]  x"
            >
              <Instagram
                image={Music3}
                className="w-full h-full object-cover"
              />
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
              className=" sm:relative sm:right-0 right-2  w-[20rem] sm:w-[18rem]  md:w-[23rem] lg:w-[24vw] xl:w-[24.5vw] x"
            >
              <Instagram
                image={Music4}
                className="w-full h-full object-cover"
              />
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
    </>
  );
};

export default Partner;
