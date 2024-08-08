




import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Polo from "../assets/polo.png";
import Polo2 from "../assets/polo2.png";
import Polo3 from "../assets/polo3.png";
import Polo4 from "../assets/polo4.png";

import Aos from "aos";
import "aos/dist/aos.css";


import Music from "../assets/music.svg";
import Music2 from "../assets/music2.svg";
import Music3 from "../assets/music3.jpg";
import Music4 from "../assets/music4.jpg";


import Cap1 from "../assets/cap1.png";
import Cap2 from "../assets/cap2.png";
import Bag1 from "../assets/bag1.png";
import Bag2 from "../assets/bag2.png";

const Shop = () => {
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
    <>
      <div className="w-full h-auto flex flex-col items-center justify-around">
        <div className="w-full h-[90vh] flex items-center bg-[url('./assets/bg3.jpeg')] bg-cover bg-center justify-start  ">
          <div
            data-aos="fade-left"
            className="w-[90vw] md:w-[70vw] lg:w-[55vw] h-auto flex flex-col  text-justify items-start justify-end py-6  pt-[25vh] pl-14 "
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

        <section className="py-16 w-[95vw] flex items-center justify-center">
          <div className="container mx-auto text-center">
            <h2 data-aos="fade-up" className="text-4xl font-bold mb-12 ">
              LATEST MERCH
            </h2>
            <div className="flex flex-wrap justify-center items-center   ">
              <div className=" sh  rounded-lg shadow-lg max-w-[18rem] mx-3">
                <img
                  data-aos="zoom-in"
                  src={Polo}
                  alt="Esports Team Shirt"
                  className=" sh w-full h-auto mb-4"
                />
                <h3
                  data-aos="fade-up"
                  className="text-xl font-bold mb-2 text-center"
                >
                  ESPORTS TEAM SHIRT <br />
                  Black Line <br />
                  <span className="tw">$19.99 USD</span>
                </h3>
              </div>
              <div className=" sh rounded-lg shadow-lg max-w-[18rem] mx-3">
                <img
                  data-aos="zoom-in"
                  src={Polo2}
                  alt="Esports Team Shirt"
                  className="w-full h-auto mb-4 sh"
                />
                <h3
                  data-aos="fade-up"
                  className=" text-xl font-bold mb-2 text-center"
                >
                  ESPORTS TEAM SHIRT <br />
                  White Line <br />
                  <span className="tw">$19.99 USD</span>
                </h3>
              </div>
              <div className=" sh  rounded-lg shadow-lg max-w-[18rem] mx-3">
                <img
                  data-aos="zoom-in"
                  src={Polo3}
                  alt="Esports Team Hoodie"
                  className="w-full h-auto mb-4 sh"
                />
                <h3
                  data-aos="fade-up"
                  className="text-xl font-bold mb-2 text-center"
                >
                  ESPORTS TEAM HOOIE <br />
                  Black Line <br />
                  <span className="tw">$59.99 USD</span>
                </h3>
              </div>
              <div className=" sh rounded-lg shadow-lg max-w-[18rem] mx-3">
                <img
                  data-aos="zoom-in"
                  src={Polo4}
                  alt="Esports Team Hoodie"
                  className="w-full h-auto mb-4 sh"
                />
                <h3
                  data-aos="fade-up"
                  className="text-xl font-bold mb-2 text-center"
                >
                  ESPORTS TEAM HOOIE <br />
                  white Line <br />
                  <span className="tw">$59.99 USD</span>
                </h3>
              </div>
            </div>

            <div className="flex flex-wrap justify-center items-center  pt-10  ">
              <div className=" sh  rounded-lg shadow-lg max-w-[18rem] mx-3">
                <img
                  data-aos="zoom-in"
                  src={Cap1}
                  alt="Esports Team Shirt"
                  className=" sh w-full h-auto mb-4"
                />
                <h3
                  data-aos="fade-up"
                  className="text-xl font-bold mb-2 text-center"
                >
                  ESPORTS TEAM SHIRT <br />
                  BACKPACK Black Line <br />
                  <span className="tw">$9.99 USD</span>
                </h3>
              </div>
              <div className=" sh rounded-lg shadow-lg max-w-[18rem] mx-3">
                <img
                  data-aos="zoom-in"
                  src={Cap2}
                  alt="Esports Team Shirt"
                  className="w-full h-auto mb-4 sh"
                />
                <h3
                  data-aos="fade-up"
                  className=" text-xl font-bold mb-2 text-center"
                >
                  ESPORTS TEAM SHIRT <br />
                  WhitePACK White Line <br />
                  <span className="tw">$99.99 USD</span>
                </h3>
              </div>
              <div className=" sh  rounded-lg shadow-lg max-w-[18rem] mx-3">
                <img
                  data-aos="zoom-in"
                  src={Bag1}
                  alt="Esports Team Hoodie"
                  className="w-full h-auto mb-4 sh"
                />
                <h3
                  data-aos="fade-up"
                  className="text-xl font-bold mb-2 text-center"
                >
                  ESPORTS TEAM HOOIE <br />
                  Black Line <br />
                  <span className="tw">$99.99 USD</span>
                </h3>
              </div>
              <div className=" sh rounded-lg shadow-lg max-w-[18rem] mx-3">
                <img
                  data-aos="zoom-in"
                  src={Bag2}
                  alt="Esports Team Hoodie"
                  className="w-full h-auto mb-4 sh"
                />
                <h3
                  data-aos="fade-up"
                  className="text-xl font-bold mb-2 text-center"
                >
                  ESPORTS TEAM HOOIE <br />
                  white Line <br />
                  <span className="tw">$99.99 USD</span>
                </h3>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className=" py-16 h-[100vh]  w-[95vw] flex items-center justify-center">
            <div
              data-aos="zoom-in"
              className="w-full h-[60vh] flex items-center bg-[url('./assets/across.jpeg')] bg-cover bg-center justify-center   "
            >
              <section>
                <div className="py-16 h-[100vh] w-[95vw] flex items-center justify-center">
                  <div className="w-full h-[60vh] flex items-center bg-[url('./assets/across.jpeg')] bg-cover bg-center justify-center">
                    <div className="w-[90vw] flex flex-col xl:flex-row items-center justify-between">
                      <h1
                        data-aos="fade-up"
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold pb-5 text-white w-full md:w-[50vw] xl:w-[35vw] text-center xl:text-left"
                      >
                        SUBSCRIBE TO RECEIVE NEW MERCH RELEASES!
                      </h1>
                      <form
                        data-aos="fade-up"
                        action=""
                        className="w-full md:w-[50vw] xl:w-[600px] flex flex-col xl:flex-row items-center justify-center"
                      >
                        <input
                          className="w-full xl:w-[420px] px-4 py-3 md:px-8 md:py-5 xl:py-7 mb-4 xl:mb-0 focus:outline-none"
                          type="email"
                          name=""
                          id=""
                          placeholder="ENTER EMAIL"
                        />
                        <Link className="w-full xl:w-auto text-center border-4 border-[#f32c46] bg-[#f32c46] px-4 py-3 xl:px-8 xl:py-6">
                          SUBSCRIBE
                        </Link>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>

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
              className="   w-[20rem] sm:w-[18rem] md:w-[23rem] lg:w-[24vw] xl:w-[24.5vw]  x relative lg:bottom-0 bottom-2 flex items-center justify-center"
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
              className="  w-[20rem] sm:w-[18rem] md:w-[23rem] lg:w-[24vw] xl:w-[24.5vw]  x"
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
              className="  w-[20rem] sm:w-[18rem]  md:w-[23rem] lg:w-[24vw] xl:w-[24.5vw] x"
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
      {/* mx-auto px-4 py-16  container*/}
    </>
  );
}

export default Shop;
