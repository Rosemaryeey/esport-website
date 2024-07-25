import React from "react";
import Foot2 from "../assets/foot2.svg";
import Foot2ii from "../assets/foot2ii.svg";
import Foot2iii from "../assets/foot2iii.svg";
import Foot2iv from "../assets/foot2iv.svg";

import Foot from "../assets/foot.svg";
import Footii from "../assets/footii.svg";
import Footiii from "../assets/footiii.svg";
import Footiv from "../assets/footiv.svg";

import Music from "../assets/music.svg";
import Music2 from "../assets/music2.svg";
import Music3 from "../assets/music3.jpg";
import Music4 from "../assets/music4.jpg";

function Partner() {
  return (
    <>
      <div className="w-full h-auto flex flex-col items-center justify-around">
        <div className="w-full h-[90vh] flex items-center bg-[url('./assets/bg2.jpeg')] bg-cover bg-center justify-center">
          <div className="w-[90vw] md:w-[70vw] lg:w-[50vw] h-auto flex flex-col text-center items-center justify-end py-6  pt-[25vh] ">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold pb-5 text-white">
              SPONSORS
            </h1>
            <p className="md:text-2xl text-sm text-white/70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et quis
              odio vestibulum nunc, neque integer purus.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-around items-center xl:h-[100vh] xl:w-full my-14">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
              GOLD SPONSORS
            </h1>
            <div className="py-12 px-6 w-[90vw] md:w-[80vw] flex flex-wrap items-center justify-around space-y-6 md:space-y-0">
              <img src={Footii} alt="Footii" className="w-24 md:w-36 lg:w-48" />
              <img
                src={Footiii}
                alt="Footiii"
                className="w-24 md:w-36 lg:w-48"
              />
              <img src={Foot} alt="Foot" className="w-24 md:w-36 lg:w-48" />
              <img src={Footiv} alt="Footiv" className="w-24 md:w-36 lg:w-48" />
            </div>
          </div>
          <div className="flex flex-col items-center mt-10">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
              GOLD SPONSORS
            </h1>
            <div className="py-12 px-6 w-[90vw] md:w-[80vw] flex flex-wrap items-center justify-around space-y-6 md:space-y-0">
              <img
                src={Foot2ii}
                alt="Foot2ii"
                className="w-24 md:w-36 lg:w-48"
              />
              <img
                src={Foot2iii}
                alt="Foot2iii"
                className="w-24 md:w-36 lg:w-48"
              />
              <img src={Foot2} alt="Foot2" className="w-24 md:w-36 lg:w-48" />
              <img
                src={Foot2iv}
                alt="Foot2iv"
                className="w-24 md:w-36 lg:w-48"
              />
            </div>
          </div>
        </div>
        {/* py-14 space-y-6 md:space-y-0 */}
        <div className="flex flex-col items-center justify-around h-auto  ">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            FOLLOW US ON <span className="text-[#f32c46]">INSTAGRAM</span>
          </h3>
          <div className="flex flex-wrap justify-center items-center   pt-10 ">
            <div className="w-[12rem] sm:w-[18rem]   md:w-[25rem]  lg:w-[24vw] xl:w-[24.5vw] x">
              <img
                src={Music3}
                alt="Music3"
                className="w-full h-full object-cover"
              />
              <div className="w-full h-0 g absolute bottom-0 left-0 group-hover:h-full transition-all duration-300 flex items-center justify-center ">
                <img src="" alt="" />
              </div>
            </div>
            <div className="w-[12rem] sm:w-[18rem]   md:w-[25rem] lg:w-[24vw] xl:w-[24.5vw] x">
              <img
                src={Music4}
                alt="Music4"
                className="w-full h-full object-cover"
              />
              <div className="w-full h-0 g absolute bottom-0 left-0 group-hover:h-full transition-all duration-300 flex items-center justify-center ">
                <img src="" alt="" />
              </div>
            </div>
            <div className="w-[12rem] sm:w-[18rem] md:w-[25rem] lg:w-[24vw] xl:w-[24.5vw] relative group x">
              <img
                src={Music3}
                alt="Music3"
                className="w-full h-full object-cover  "
              />
              <div className="w-full h-0 g absolute bottom-0 left-0 group-hover:h-full transition-all duration-300 flex items-center justify-center">
                <img src="" alt="" />
              </div>
            </div>

            <div className="w-[12rem] sm:w-[18rem]  md:w-[25rem] lg:w-[24vw] xl:w-[24.5vw] x">
              <img
                src={Music4}
                alt="Music4"
                className="w-full h-full object-cover"
              />
              <div className="w-full h-0 g absolute bottom-0 left-0 group-hover:h-full transition-all duration-300 flex items-center justify-center ">
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Partner;
