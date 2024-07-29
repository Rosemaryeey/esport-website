import { Link } from "react-router-dom";
import React from "react";
import { LuClock3 } from "react-icons/lu";
import { FaTwitch } from "react-icons/fa";
import "./home.css";
import Wo from "../assets/wo.jpeg";
import Isi from "../assets/isi.svg";
import Isi2 from "../assets/isi2.svg";
import Band from "../assets/band.jpeg";
import Button from "../components/button"

const Home = () => {
  return (
    <>
      <div className="w-[100%] h-[500vh] flex flex-col items-center">
        <div className="w-[100%] h-[140vh] flex items-center justify-center bg-[url('./assets/bg.jpeg')] border-2 object-contain">
          <div className="w-[90vw] h-[140vh] flex items-center border-2">
            <div className="flex flex-col items-start justify-around h-[65vh] w-[60vw]">
              <h1 className="head font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                NEXT-GENERATION ESPORTS TEAM
              </h1>
              <p className="md:text-2xl text-sm text-white/50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et quis
                odio vestibulum nunc, neque integer purus.
              </p>
              <div className="flex md:flex-row flex-col  items-start justify-between md:w-[40vw] w-[90vw] h-[20vh]">
                <Button text="   BUY MERCH" />

                <Link className="btn border-2 text-base sm:text-lg md:text-xl lg:text-2xl">
                  MEET THE TEAM
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[150vh] w-[90vw] flex border-2 items-center relative  ">
          <div className=" flex flex-col items-start justify-around h-[80vh] w-[50vw] border-2  ">
            <h2
              className="xl:text-[55px] lg:text-[70px] text-[65px] leading-[77px] font-bold z-30 absolute  
            xl:w-[49vw] lg:w-[60vw] w-[60vw] top-[32%] "
            >
              ABOUT THE DRAGO ESPORTS TEAM
            </h2>
            <p
              className="xl:text-base text-2xl xl:w-[33vw] 
          md:w-[45vw] h-fit z-30 relative  top-[30%]"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              convallis tortor, malesuada vitae tortor. Dignissim ac aliquam ut
              sed eu. Eget nulla elit, ac habitant.
            </p>
            <Button text=" MEET THE TEAM" />
          </div>

          <div className="relative w-[55vw] border-2 right-20 top-20 ">
            <div className="bg-[#11161e] h-[80vh] w-[65vw]  "></div>
            <img
              src={Wo}
              className="w-[55vw] absolute z-10 bottom-[30%] left-20
                 object-cover md:object-contain "
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-evenly h-[180vh] w-[100%] relative">
          <div className="text-center  relative z-30">
            <h1 className=" md:text-6xl text-5xl  font-bold">
              UPCOMING MATCHES
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-base w-[40vw]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              convallis tortor, malesuada vitae tortor. Dignissim ac aliquam ut
              sed eu.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "var(--neutral-700)",
            }}
            className=" h-[160vh] w-[38vw]  absolute  left-[60vw] bottom-5  "
          />
          <div className=" band  relative z-30">
            <div className="band1">
              <div className="flex flex-col  items-center justify-around w-[90vw]    absolute">
              <img
                src={Band}
                alt=""
                className="f xl:w-[85vw] lg:w-[90vw]  md:h-[35vh] h-[50vh] "
              />
              <div
                className="flex  items-center md:flex-row flex-col  justify-center relative z-30 
              md:bottom-[35vh] bottom-[50vh] border-2
             md:w-[85vw] w-[70vw]
               md:h-[35vh] h-[50vh] border-yellow-600 "
              >
                <div
                  className="  

                md:text-left text-center 
                space-y-2 
                border-2
                 xl:pr-[15vw]
                 lg:pr-[10vw] 
                 md:pr-[4vw] pr-0
                  border-red-200 "
                >
                  <p className=" md:text-base text-lg  border-2 ">Terra</p>
                  <h1 className=" md:text-3xl text-2xl  font-bold border-2  md:tracking-normal tracking-wider ">
                    INTERNATIONAL TOURNAMENT 2022
                  </h1>
                  <div
                    className="flex 
                    flex-wrap
                    lg:items-center 
                    md:items-start  
                    sm:items-start items-center
                   justify-between   
                   border-2 
                  lg:flex-row 
                  md:flex-col 
                  sm:flex-row flex-row
                  custom-300:flex-col"
                  >
                    <Link className=" flex justify-around items-center md:text-base  border-2 ">
                      <LuClock3 className="text-xl" />
                      <span className="pl-3"> December 10, 2022, 12:00PM</span>
                    </Link>
                    <Link className="md:text-base  flex justify-around items-center  border-2">
                      <FaTwitch className="text-xl  " />
                      <span className="pl-3"> Watch Stream</span>
                    </Link>
                  </div>
                </div>
                <div
                  className="flex items-center justify-between md:text-6xl text-5xl 
                lg:w-[25vw] md:w-[35vw] sm:w-[35vw] w-[60vw]
                  border-2"
                >
                  <img src={Isi} alt="" className=" md:w-[100px] w-[90px]" />
                  <h2 className="text-2xl font-bold">VS</h2>
                  <img src={Isi2} alt="" className="md:w-[100px] w-[90px]" />
                </div>
              </div>
            </div>
            </div>
            <div className="band2">
              
            <div className=" flex flex-col items-center justify-around w-[90vw]   border-2  absolute">
              <img
                src={Band}
                alt=""
                className="f xl:w-[85vw] lg:w-[90vw]  md:h-[35vh] h-[50vh] "
              />
              <div
                className="flex  items-center md:flex-row flex-col  justify-center relative z-30 
              md:bottom-[35vh] bottom-[50vh] border-2
             md:w-[85vw] w-[70vw]
               md:h-[35vh] h-[50vh] border-yellow-600 "
              >
                <div
                  className="  

                md:text-left text-center 
                space-y-2 
                border-2
                 xl:pr-[15vw]
                 lg:pr-[10vw] 
                 md:pr-[4vw] pr-0
                  border-red-200 "
                >
                  <p className=" md:text-base text-lg  border-2 ">Terra</p>
                  <h1 className=" md:text-3xl text-2xl  font-bold border-2  md:tracking-normal tracking-wider ">
                    INTERNATIONAL TOURNAMENT 2022
                  </h1>
                  <div
                    className="flex 
                    flex-wrap
                    lg:items-center 
                    md:items-start  
                    sm:items-start items-center
                   justify-between   
                   border-2 
                  lg:flex-row 
                  md:flex-col 
                  sm:flex-row flex-row
                  custom-300:flex-col"
                  >
                    <Link className=" flex justify-around items-center md:text-base  border-2 ">
                      <LuClock3 className="text-xl" />
                      <span className="pl-3"> December 10, 2022, 12:00PM</span>
                    </Link>
                    <Link className="md:text-base  flex justify-around items-center  border-2">
                      <FaTwitch className="text-xl  " />
                      <span className="pl-3"> Watch Stream</span>
                    </Link>
                  </div>
                </div>
                <div
                  className="flex items-center justify-between md:text-6xl text-5xl 
                lg:w-[25vw] md:w-[35vw] sm:w-[35vw] w-[60vw]
                  border-2"
                >
                  <img src={Isi} alt="" className=" md:w-[100px] w-[90px]" />
                  <h2 className="text-2xl font-bold">VS</h2>
                  <img src={Isi2} alt="" className="md:w-[100px] w-[90px]" />
                </div>
              </div>
            </div>
            </div>
            <div className="band3">
              <div className=" flex flex-col items-center justify-around w-[90vw]   border-2  absolute">
              <img
                src={Band}
                alt=""
                className="f xl:w-[85vw] lg:w-[90vw]  md:h-[35vh] h-[50vh] "
              />
              <div
                className="flex  items-center md:flex-row flex-col  justify-center relative z-30 
              md:bottom-[35vh] bottom-[50vh] border-2
             md:w-[85vw] w-[70vw]
               md:h-[35vh] h-[50vh] border-yellow-600 "
              >
                <div
                  className="  

                md:text-left text-center 
                space-y-2 
                border-2
                 xl:pr-[15vw]
                 lg:pr-[10vw] 
                 md:pr-[4vw] pr-0
                  border-red-200 "
                >
                  <p className=" md:text-base text-lg  border-2 ">Terra</p>
                  <h1 className=" md:text-3xl text-2xl  font-bold border-2  md:tracking-normal tracking-wider ">
                    INTERNATIONAL TOURNAMENT 2022
                  </h1>
                  <div
                    className="flex 
                    flex-wrap
                    lg:items-center 
                    md:items-start  
                    sm:items-start items-center
                   justify-between   
                   border-2 
                  lg:flex-row 
                  md:flex-col 
                  sm:flex-row flex-row
                  custom-300:flex-col"
                  >
                    <Link className=" flex justify-around items-center md:text-base  border-2 ">
                      <LuClock3 className="text-xl" />
                      <span className="pl-3"> December 10, 2022, 12:00PM</span>
                    </Link>
                    <Link className="md:text-base  flex justify-around items-center  border-2">
                      <FaTwitch className="text-xl  " />
                      <span className="pl-3"> Watch Stream</span>
                    </Link>
                  </div>
                </div>
                <div
                  className="flex items-center justify-between md:text-6xl text-5xl 
                lg:w-[25vw] md:w-[35vw] sm:w-[35vw] w-[60vw]
                  border-2"
                >
                  <img src={Isi} alt="" className=" md:w-[100px] w-[90px]" />
                  <h2 className="text-2xl font-bold">VS</h2>
                  <img src={Isi2} alt="" className="md:w-[100px] w-[90px]" />
                </div>
              </div>
            </div> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
