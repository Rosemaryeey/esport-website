import { Link } from "react-router-dom";
import {useEffect} from "react";
import { LuClock3 } from "react-icons/lu";
import { FaTwitch  ,FaInstagram} from "react-icons/fa";
import "./home.css";


import Polo from "../assets/polo.png";
import Polo2 from "../assets/polo2.png";
import Polo3 from "../assets/polo3.png";
import Polo4 from "../assets/polo4.png";

import Music from "../assets/music.svg";
import Music2 from "../assets/music2.svg";
import Music3 from "../assets/music3.jpg";
import Music4 from "../assets/music4.jpg";

import Wo from "../assets/wo.jpeg";
import Isi from "../assets/isi.svg";
import Isi2 from "../assets/isi2.svg";
import Band from "../assets/band.jpeg";
import Button from "../components/button";
import Set from "../assets/set.jpeg";
import Sound from "../assets/sound.jpeg";
import Sound2 from "../assets/sound2.jpeg";
import Key from "../assets/key.jpeg";
import Key2 from "../assets/key2.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
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
      <div className="w-[100%] h-fit flex flex-col  justify-between items-center">
        {/* begin................ */}
        <div className="w-[100%] h-[140vh] flex items-center justify-center bg-[url('./assets/bg.jpeg')]  object-contain">
          <div className="w-[90vw] h-[140vh] flex items-center ">
            <div
              className="flex flex-col items-start justify-around h-[65vh] w-[60vw]"
              data-aos="fade-left"
            >
              <h1 className=" font-bold  md:text-7xl text-5xl">
                NEXT-GENERATION ESPORTS TEAM
              </h1>
              <p className="md:text-xl text-sm text-white/50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et quis
                odio vestibulum nunc, neque integer purus.
              </p>
              <div className="flex md:flex-row flex-col  items-start justify-between md:w-[40vw] w-[90vw] h-[20vh]">
                <Button text="   BUY MERCH" />

                <Link
                  to=""
                  className="btn  border-2  md:mt-0 mt-5  xl:ml-6 md:ml-10 ml-0 font-bold"
                >
                  MEET THE TEAM
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* about................ */}

        <div className="h-[150vh] w-[100%] lg:px-10 px-5 items-center relative md:flex hidden  ">
          <div className=" flex flex-col items-start justify-around h-[80vh] lg:w-[40vw] w-[35vw]  ">
            <h2
              data-aos="fade-up"
              className="xl:text-6xl lg:text-5xl text-5xl font-bold z-30 absolute  
              xl:w-[49vw] lg:w-[50vw] w-[60vw] lg:top-[32%] top-[28%]  "
            >
              ABOUT THE DRAGO ESPORTS TEAM
            </h2>
            <p
              data-aos="fade-up"
              className="xl:text-xl lg:text-lg xl:w-[33vw] 
          md:w-[45vw] h-fit z-30 relative  xl:top-[28%] lg:top-[25%] top-[20%] "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              convallis tortor, malesuada vitae tortor. Dignissim ac aliquam ut
              sed eu. Eget nulla elit, ac habitant.
            </p>
            <Button text=" MEET THE TEAM" />
          </div>

          <div className="relative xl:w-[60vw] lg:w-[50vw] xl:right-10 lg:right-0 right-0 top-20 ">
            <div
              data-aos="zoom-in "
              className="bg-[#11161e] h-[80vh] w-[54vw]   "
            ></div>
            <img
              data-aos="zoom-in"
              src={Wo}
              className="w-[55vw]  h-[80vh]  absolute z-10 xl:bottom-[30%]  lg:bottom-[30%] bottom-[20%] 
              xl:w-[80vw]     
              left-20 md:left-12 object-cover
                  "
            />
          </div>
        </div>

        {/* about md and sm */}

        <div className="h-[150vh] w-[100%]  items-start  justify-evenly relative  md:hidden flex  flex-col ">
          <div
            data-aos="zoom-in"
            className="bg-[#11161e] sm:h-[100vh] h-[80vh]  w-[65vw]   absolute  sm:bottom-[2%] bottom-[10%]  left-30 "
          ></div>
          <div className=" flex flex-col items-center justify-around h-fit space-y-5  w-[95vw]   absolute  ">
            <h2
              data-aos="fade-up"
              className=" sm:text-5xl text-4xl  font-bold
              text-center
            "
            >
              ABOUT THE DRAGO ESPORTS TEAM
            </h2>
            <p
              className=" sm:text-xl text-base 
           h-fit   text-center w-[90vw] "
              data-aos="fade-up"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              convallis tortor, malesuada vitae tortor. Dignissim ac aliquam ut
              sed eu. Eget nulla elit, ac habitant.
            </p>
            <Button text=" MEET THE TEAM" />
            <img
              data-aos="zoom in"
              src={Wo}
              className=" w-[90vw]
               relative sm:left-5 left-0
                 object-cover md:object-contain "
            />
          </div>
        </div>
        {/* upcoming.............. */}

        <div className="flex flex-col items-center justify-evenly xl:h-[180vh] lg:h-[180vh] md:h-[180vh] sm:h-[200vh] h-[250vh] w-[100%] relative">
          <div className="text-center  relative z-30 xl:w-[50vw] lg:w-[60vw] md:w-[80vw] sm:w-[80vw] w-[80vw]">
            <h1
              data-aos="fade-up"
              className=" md:text-6xl text-4xl  font-bold "
            >
              UPCOMING MATCHES
            </h1>
            <p
              data-aos="fade-up"
              className="md:text-[1.1rem] text-sm   text-center "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              convallis tortor, malesuada vitae tortor. Dignissim ac aliquam ut
              sed eu.
            </p>
          </div>

          <div
            data-aos="zoom-in"
            style={{
              backgroundColor: "var(--neutral-700)",
            }}
            className=" md:h-[145vh] h-[200vh] md:w-[38vw] w-[50vw]  absolute  md:left-[60vw] left-[45vw]  md:top-[7.3rem] top-[10rem]  "
          />
          <div className=" band  relative z-30">
            <div className="band1 b">
              <div className="flex flex-col  items-center justify-around w-[90vw]    absolute ">
                <div data-aos="zoom-in" className=" relative overflow-hidden">
                  <img
                    src={Band}
                    alt=""
                    className=" in xl:w-[85vw] lg:w-[90vw]  md:h-[35vh] h-[50vh] "
                  />
                </div>
                <div
                  className=" inner flex  items-center md:flex-row flex-col  justify-center relative z-30 
              md:bottom-[35vh] bottom-[50vh] 
             md:w-[85vw] w-[80vw]
               md:h-[35vh] h-[50vh]  "
                >
                  <div
                    data-aos="fade-up"
                    className="  

                md:text-left text-center 
                space-y-2 
                
                 xl:pr-[15vw]
                 lg:pr-[10vw] 
                 md:pr-[4vw] pr-0
                  "
                  >
                    <p className=" md:text-base text-lg  ">Terra</p>
                    <h1 className=" md:text-3xl text-2xl  font-bold  md:tracking-normal tracking-wider ">
                      INTERNATIONAL TOURNAMENT 2022
                    </h1>
                    <div
                      className="flex 
                    flex-wrap
                    lg:items-center 
                    md:items-start  
                    sm:items-start items-center
                   justify-between   
                   
                  lg:flex-row 
                  md:flex-col 
                  sm:flex-row flex-row
                  custom-300:flex-col"
                    >
                      <Link className=" flex justify-around items-center md:text-base  ">
                        <LuClock3 className="text-xl" />
                        <span className="pl-3">
                          {" "}
                          December 10, 2022, 12:00PM
                        </span>
                      </Link>
                      <Link className="md:text-base  flex justify-around items-center  ">
                        <FaTwitch className="text-xl  " />
                        <span className="pl-3"> Watch Stream</span>
                      </Link>
                    </div>
                  </div>
                  <div
                    data-aos="fade-up"
                    className="flex items-center justify-between md:text-6xl text-5xl 
                lg:w-[25vw] md:w-[35vw] sm:w-[35vw] w-[60vw]
                  "
                  >
                    <img src={Isi} alt="" className=" md:w-[100px] w-[90px]" />
                    <h2 className="text-2xl font-bold">VS</h2>
                    <img src={Isi2} alt="" className="md:w-[100px] w-[90px]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="band2 b">
              <div className=" flex flex-col items-center justify-around w-[90vw]    absolute">
                <div data-aos="zoom-in" className=" relative overflow-hidden">
                  <img
                    src={Band}
                    alt=""
                    className=" in xl:w-[85vw] lg:w-[90vw]  md:h-[35vh] h-[50vh] "
                  />
                </div>
                <div
                  className=" inner flex items-center md:flex-row flex-col  justify-center relative z-30 
              md:bottom-[35vh] bottom-[50vh] 
             md:w-[85vw] w-[80vw]
               md:h-[35vh] h-[50vh]  "
                >
                  <div
                    className="  

                md:text-left text-center 
                space-y-2 
                
                 xl:pr-[15vw]
                 lg:pr-[10vw] 
                 md:pr-[4vw] pr-0
                  "
                  >
                    <p className=" md:text-base text-lg  ">Solaris</p>
                    <h1 className=" md:text-3xl text-2xl  font-bold  md:tracking-normal tracking-wider ">
                      INTERNATIONAL TOURNAMENT 2022
                    </h1>
                    <div
                      className="flex 
                    flex-wrap
                    lg:items-center 
                    md:items-start  
                    sm:items-start items-center
                   justify-between   
                   
                  lg:flex-row 
                  md:flex-col 
                  sm:flex-row flex-row
                  custom-300:flex-col"
                    >
                      <Link className=" flex justify-around items-center md:text-base  ">
                        <LuClock3 className="text-xl" />
                        <span className="pl-3">
                          {" "}
                          December 15, 2022, 12:00PM
                        </span>
                      </Link>
                      <Link className="md:text-base  flex justify-around items-center  ">
                        <FaTwitch className="text-xl  " />
                        <span className="pl-3"> Watch Stream</span>
                      </Link>
                    </div>
                  </div>
                  <div
                    className="flex items-center justify-between md:text-6xl text-5xl 
                lg:w-[25vw] md:w-[35vw] sm:w-[35vw] w-[60vw]
                  "
                  >
                    <img src={Isi} alt="" className=" md:w-[100px] w-[90px]" />
                    <h2 className="text-2xl font-bold">VS</h2>
                    <img src={Isi2} alt="" className="md:w-[100px] w-[90px]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="band3  b">
              <div className=" flex flex-col items-center justify-around w-[90vw]      absolute">
                <div data-aos="zoom-in" className=" relative overflow-hidden">
                  <img
                    src={Band}
                    alt=""
                    className=" in xl:w-[85vw] lg:w-[90vw]  md:h-[35vh] h-[50vh] "
                  />
                </div>
                <div
                  className=" inner flex  items-center md:flex-row flex-col  justify-center relative z-30 
              md:bottom-[35vh] bottom-[50vh]
             md:w-[85vw] w-[80vw]
               md:h-[35vh] h-[50vh]  "
                >
                  <div
                    data-aos="fade-up"
                    className="  

                md:text-left text-center 
                space-y-2 
                
                 xl:pr-[15vw]
                 lg:pr-[10vw] 
                 md:pr-[4vw] pr-0
                  "
                  >
                    <p className=" md:text-base text-lg  ">Fire Attack</p>
                    <h1 className=" md:text-3xl text-2xl  font-bold  md:tracking-normal tracking-wider ">
                      INTERNATIONAL TOURNAMENT 2022
                    </h1>
                    <div
                      className="flex 
                    flex-wrap
                    lg:items-center 
                    md:items-start  
                    sm:items-start items-center
                   justify-between   
                   
                  lg:flex-row 
                  md:flex-col 
                  sm:flex-row flex-row
                  custom-300:flex-col"
                    >
                      <Link className=" flex justify-around items-center md:text-base  ">
                        <LuClock3 className="text-xl" />
                        <span className="pl-3">
                          {" "}
                          December 20, 2022, 12:00PM
                        </span>
                      </Link>
                      <Link className="md:text-base  flex justify-around items-center  ">
                        <FaTwitch className="text-xl  " />
                        <span className="pl-3"> Watch Stream</span>
                      </Link>
                    </div>
                  </div>
                  <div
                    data-aos="fade-up"
                    className="flex items-center justify-between md:text-6xl text-5xl 
                lg:w-[25vw] md:w-[35vw] sm:w-[35vw] w-[60vw]
                  "
                  >
                    <img src={Isi} alt="" className=" md:w-[100px] w-[90px]" />
                    <h2 className="text-2xl font-bold">VS</h2>
                    <img src={Isi2} alt="" className="md:w-[100px] w-[90px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-col items-center justify-around relative z-30  ">
            <h2
              data-aos="fade-up"
              className="md:w-[40vw] w-[90vw] text-center pb-5  font-bold"
            >
              FOLLOW US ON TWITCH TO GET NOTIFICATIONS ABOUT OUR UPCOMING
              MATCHES
            </h2>
            <Button text="Follow us" />
          </div>
        </div>

        {/* article &news................. */}
        <div className=" relative  xl:h-[200vh] lg:h-[200vh] md:h-[250vh] sm:h-[250vh] h-[300vh]  w-[100%] flex items-center   ">
          <div
            data-aos="zoom-in"
            style={{
              backgroundColor: "var(--neutral-700)",
            }}
            className=" h-[150vh] w-[50vw] 
            "
          />
          <div className="  absolute z-30 xl:w-[91vw] md:w-[92vw] sm:w-[92vw] w-[90vw] xl:h-[105vh] md:[200vh]   left-[4vw] flex flex-col justify-between items-center ">
            <div
              data-aos="fade-up"
              className=" md:w-[91vw] w-[90vw]  flex justify-between md:flex-row flex-col md:space-y-0 space-y-5 mb-4 "
            >
              <h1 className="font-bold  md:text-6xl text-4xl">
                ARTICLES & NEWS
              </h1>

              <Button text="BROWSE NEWS" />
            </div>
            <div className=" flex justify-between items-start   xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col md:space-y-0 sm:space-y-10   md:space-x-5">
              <div className=" inner xl:w-[50vw] lg:w-[50vw] md:w-[92vw] sm:w-[92vw] w-[90vw]  ">
                <div
                  data-aos="zoom-in"
                  className="xl:w-[50vw] lg:w-[50vw] md:w-[100%] sm:w-[100%] overflow-hidden  "
                >
                  <img className=" object-contain" src={Set} alt={Set} />
                </div>
                <div
                  data-aos="fade-up"
                  className="xl:w-[50vw] lg:w-[50vw] md:w-[90vw] sm:w-[90vw] w-[85vw] pt-8 flex justify-between"
                >
                  <button className="p-3  bg-[#f32c46] btn-p">MERCH</button>
                  <h2>SEPTEMBER 1, 2022</h2>
                </div>
                <h1
                  data-aos="fade-up"
                  className="pt-8 font-bold  md:text-3xl text-2xl "
                >
                  OUR NEW BRANDED HEADPHONES ARE NOW FOR SALE
                </h1>
              </div>
              <div className="xl:w-[38vw] lg:w-[38vw] md:w-[92vw] sm:w-[92vw] w-[90vw]   flex flex-col md:items-start items-center  justify-start md:space-y-10 space-y-5 ">
                <div
                  className=" flex xl:w-[38vw] lg:w-[38vw] md:w-[92vw] sm:w-[92vw] w-[87vw]  justify-around sm:flex-row flex-col md:items-start items-center  
                md:space-y-0 space-y-5"
                >
                  <div className=" inner  xl:w-[18vw] lg:w-[18vw] md:w-[43vw]  sm:w-[40vw] space-y-5">
                    <div
                      data-aos="zoom-in"
                      className="overflow-hidden xl:w-[17vw] lg:w-[17vw] md:w-[43vw]  sm:w-[40vw]"
                    >
                      <img src={Key} alt="key" />
                    </div>
                    <h1
                      data-aos="fade-up"
                      className="font-bold lg:text-lg  md:text-xl text-sm"
                    >
                      THE BEST KEYBOARD FOR HIGH-END GAMING
                    </h1>
                  </div>
                  <div className=" inner  xl:w-[18vw] lg:w-[18vw] md:w-[43vw]  sm:w-[40vw]   space-y-5">
                    <div
                      data-aos="zoom-in"
                      className="overflow-hidden xl:w-[17vw]  lg:w-[17vw] md:w-[43vw]  sm:w-[40vw]"
                    >
                      <img src={Sound2} alt="" />
                    </div>
                    <h1
                      data-aos="fade-up"
                      className="font-bold lg:text-lg  md:text-xl text-sm"
                    >
                      3 AMAZING PC BRANDS FOR YOUR NEXT GAMING PC
                    </h1>
                  </div>
                </div>
                <div
                  className=" flex xl:w-[38vw] lg:w-[38vw] md:w-[92vw] sm:w-[92vw] w-[87vw]  justify-around sm:flex-row flex-col md:items-start items-center  md:space-y-0 space-y-5
                  
               "
                >
                  <div className=" inner xl:w-[18vw] lg:w-[18vw] md:w-[43vw]  sm:w-[43vw]  space-y-5 md:h-[40vh]">
                    <div
                      data-aos="zoom-in"
                      className="overflow-hidden xl:w-[17vw] lg:w-[17vw]  md:w-[43vw]  sm:w-[43vw]    "
                    >
                      <img src={Key2} alt="" />
                    </div>
                    <h1
                      data-aos="fade-up"
                      className="font-bold lg:text-lg  md:text-xl text-sm"
                    >
                      NEW DRAGON ESPORTS PC MERCH ANNOUNCED
                    </h1>
                  </div>
                  <div className=" inner xl:w-[18vw] lg:w-[18vw] md:w-[43vw]  sm:w-[43vw]    space-y-5 md:h-[40vh]">
                    <div
                      data-aos="zoom-in"
                      className="overflow-hidden xl:w-[17vw]  lg:w-[17vw] md:w-[43vw]  sm:w-[43vw]"
                    >
                      <img src={Sound2} alt="" />
                    </div>
                    <h1
                      data-aos="fade-up"
                      className="font-bold lg:text-lg md:text-xl text-sm"
                    >
                      2021 XBOX GOLD TOURNAMENT DATE ANNOUNCED
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* the get out merch */}

        <div
          data-aos="zoom-in"
          className="w-[100%] h-[60vh] flex md:flex-row flex-col items-center md:justify-between justify-center px-[5vw] md:space-y-0 space-y-10
         bg-[url('./assets/across2.jpeg')] object-contain"
        >
          <h1
            data-aos="fade-up"
            className=" font-extrabold md:text-5xl text-4xl xl:w-[40vw] lg:w-[50vw] sm:w-[50vw] w-[80vw]  md:text-start text-center "
          >
            GET OUR MERCH & SUPPORT OUR TEAM
          </h1>
          <button
            data-aos="fade-up"
            className=" bg-white text-[#f32c46] px-10 py-5 font-extrabold hover:bg-[#f32c46] hover:shadow-md hover:shadow-[#f32c46] hover:text-white  hover:scale-105 "
          >
            GET MERCH
          </button>
        </div>

        {/* second to the last guy */}
        <section className="py-20 w-[95vw] flex items-center relative justify-center md:h-[200vh] h-[400vh] ">
          <div
            data-aos="zoom-in"
            style={{
              backgroundColor: "var(--neutral-700)",
            }}
            className=" h-[100vh] w-[40vw] relative left-[28vw]
            "
          />
          <div className=" mx-auto text-center absolute z-30">
            <h2 className="md:text-5xl text-4xl font-bold mb-12 ">
              FEATURED PRODUCTS
            </h2>
            <div className="flex flex-wrap justify-around items-center w-[95vw]   ">
              <div
                data-aos="zoom-in"
                className=" sh  rounded-lg shadow-lg xl:max-w-[18rem] lg:max-w-[18rem] md:max-w-[18rem] sm:max-w-[15rem] max-w-[30rem] mx-3 relative"
              >
                {/* <div
                style={
                  {
                    // backgroundColor: "#333",
                  }
                }
                className=" absolute left-[1rem] md:w-[20vw] w-[40vw] h-[45vh] bg-[#2e2e31] 
                "
              /> */}
                <img
                  data-aos="zoom-in"
                  src={Polo}
                  alt="Esports Team Shirt"
                  className=" sh w-full h-auto mb-4 relative z-30"
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
              <div
                className=" sh rounded-lg shadow-lg  mx-3 
              xl:max-w-[18rem] lg:max-w-[18rem] md:max-w-[18rem] sm:max-w-[15rem] max-w-[30rem]"
              >
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
              <div className=" sh  rounded-lg shadow-lg xl:max-w-[18rem] lg:max-w-[18rem] md:max-w-[18rem] sm:max-w-[15rem] max-w-[30rem] mx-3">
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
              <div className=" sh rounded-lg shadow-lg xl:max-w-[18rem] lg:max-w-[18rem] md:max-w-[18rem] sm:max-w-[15rem] max-w-[30rem]  mx-3">
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
          </div>
        </section>
        {/* last guy */}
        <div className="flex flex-col items-center justify-around h-auto py-20   ">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            FOLLOW US ON <span className="text-[#f32c46]">INSTAGRAM</span>
          </h3>
          <div className="flex flex-wrap justify-center items-center   pt-10 lg:space-y-0 space-y-5  lg:space-x-0 space-x-5 ">
            <div className="  w-[20rem] sm:w-[18rem] md:w-[23rem] lg:w-[24vw] xl:w-[24.5vw]  x">
              <Instagram
                image={Music3}
                className="w-full h-full object-cover"
              />
              {/* <img
                src={Music3}
                alt="Music3"
                className="w-full h-full object-cover"
              /> */}
              <div className="w-full h-0 g absolute bottom-0 left-0 group-hover:h-full transition-all duration-300 flex items-center justify-center ">
                <img src="" alt="" />
              </div>
            </div>
            <div className="   w-[20rem] sm:w-[18rem] md:w-[23rem] lg:w-[24vw] xl:w-[24.5vw]  x relative lg:bottom-0 bottom-2 flex items-center justify-center">
              <Instagram
                image={Music4}
                className="w-full h-full object-cover"
              />
              {/* <img
                src={Music4}
                alt="Music4"
                className="w-full h-full object-cover"
              /> */}
              <div className="w-full h-0 g absolute bottom-0 left-0 group-hover:h-full transition-all duration-300 flex items-center justify-center ">
                <img src="" alt="" />
              </div>
            </div>
            <div className="  w-[20rem] sm:w-[18rem] md:w-[23rem] lg:w-[24vw] xl:w-[24.5vw]  x">
              <Instagram
                image={Music3}
                className="w-full h-full object-cover"
              />
              {/* <img
                src={Music3}
                alt="Music3"
                className="w-full h-full object-cover  "
              /> */}
              <div className="w-full h-0 g absolute bottom-0 left-0 group-hover:h-full transition-all duration-300 flex items-center justify-center">
                <img src="" alt="" />
              </div>
            </div>

            <div className="  w-[20rem] sm:w-[18rem]  md:w-[23rem] lg:w-[24vw] xl:w-[24.5vw] x">
              <Instagram
                image={Music4}
                className="w-full h-full object-cover"
              />
              {/* <img
                src={Music4}
                alt="Music4"
                className="w-full h-full object-cover"
              /> */}
              <div className="w-full h-0 g absolute bottom-0 left-0 group-hover:h-full transition-all duration-300 flex items-center justify-center ">
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

// flex xl:w-[38vw] lg:w-[38vw] md:w-[92vw] sm:w-[92vw] w-[90vw] justify-around sm:items-center sm:flex-row flex-col
