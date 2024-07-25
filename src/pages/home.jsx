import { Link } from "react-router-dom";
import React from "react";
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

        <div className="h-[150vh] w-[90vw] flex border-2 items-center wrapper">
          <div className="content flex flex-col items-start justify-around h-[50vh] w-[50vw] border-2">
            <h2 className="head2 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              ABOUT THE DRAGO ESPORTS TEAM
            </h2>
            <p className="md:text-xl text-sm text-white/50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              convallis tortor, malesuada vitae tortor. Dignissim ac aliquam ut
              sed eu. Eget nulla elit, ac habitant.
            </p>
            <Link className="hm border-2 border-[#f32c46] bg-[#f32c46] text-base sm:text-lg md:text-xl lg:text-2xl">
              MEET THE TEAM
            </Link>
          </div>
          <div className="video-wrapper">
            <img className="w-[100%] h-[100%]" src={Wo} alt="" />
          </div>
          <div className="bg-about" />
        </div>

        <div className="flex flex-col items-center justify-around h-[200vh] w-[100%]">
          <div className="text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              UPCOMING MATCHES
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              convallis tortor, malesuada vitae tortor. Dignissim ac aliquam ut
              sed eu.
            </p>
          </div>

          <div className="band flex flex-col items-center w-full sm:w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw]">
            <div className="band1 flex items-center justify-around w-full">
              <img
                src={Band}
                alt=""
                className="f w-[30vw] sm:w-[25vw] md:w-[20vw] lg:w-[15vw]"
              />
              <div className="flex flex-col sm:flex-row items-center justify-between w-[80vw]">
                <div className="text-center md:text-left">
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl">
                    TERRA
                  </p>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                    INTERNATIONAL TOURNAMENT 2022
                  </h1>
                  <div className="flex flex-col sm:flex-row items-center justify-between w-full sm:w-[60vw] md:w-[40vw] lg:w-[30vw]">
                    <div className="text-sm sm:text-base md:text-lg lg:text-xl">
                      December 10, 2022, 12:00PM
                    </div>
                    <div className="text-sm sm:text-base md:text-lg lg:text-xl">
                      Watch Stream
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl w-full sm:w-[23vw] border-2">
                  <img
                    src={Isi}
                    alt=""
                    className="w-[50px] sm:w-[75px] md:w-[100px]"
                  />
                  <h2 className="">VS</h2>
                  <img
                    src={Isi2}
                    alt=""
                    className="w-[50px] sm:w-[75px] md:w-[100px]"
                  />
                </div>
              </div>
            </div>
            <div className="band2"></div>
            <div className="band3"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
