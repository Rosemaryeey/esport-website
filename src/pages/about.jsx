import React, { useState } from "react";

import Gun from "/gun.jpeg";
import Man from "/systemman.jpeg";
import Headset from "/headset.jpeg";
import Game from "/gamepad.jpg";
import Work from "/work.jpeg";
import first from "/first.svg";
import second from "/second.svg";
import John from "/John.png";
import Dan from "/Dan Clark.png";
import Cannon from "/Cannon.png";
import John2 from "/John2.jpg";
import Dan2 from "/Dan Clark2.jpg";
import Cannon2 from "/Cannon2.jpg";
import { IoLogoTwitch } from "react-icons/io5";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import Pad from "/Pad.jpg";
import Speakers from "/speakers.jpg";
import Speaker from "/speaker.jpg";
import War from "/war.jpg";

const Results = ({ num, text }) => (
  <div>
    <p className="text-8xl font-semibold">
      {num}
      <span className="text-red-500">+</span>
    </p>
    <p className="text-xl text-gray-400 font-semibold">{text}</p>
  </div>
);
const Icons = ({ icon }) => (
  <div className="icon w-[2.7vw] bg-[var(--primary-1)] h-[6vh] flex justify-center items-center">
    <p className="text-2xl">{icon}</p>
  </div>
);
const Awards = ({ image, year }) => (
  <div>
    <div className="h-[40vh] ">
      <div className=" flex justify-center items-center">
        <img src={image} />
      </div>
    </div>
    <p className="text-[22px] font-semibold">BIG TOURNAMENT {year}</p>
  </div>
);
const Team = ({ image2, image, name }) => {
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
            className="object-cover filter-grayscale  w-[28.5vw] h-[57vh]  "
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
            className=" filter-grayscale object-cover  absolute bottom-0 w-[28.5vw] h-[57vh]  z-30 opacity-40"
          />
          <div className="bg-[#11161e]  w-[28.5vw] h-[57vh] flex justify-center items-center">
            <p className="text-[33px] font-bold z-40 ">{name}</p>
          </div>
        </div>
      </div>
    </>
  );
};
const Instagram = ({ image }) => (
  <div className="relative">
    <img
      src={image}
      className="  
    hover:opacity-10"
    />
    <div
      className="absolute cursor-pointer inset-0 flex items-center justify-center bg-[#11161e] bg-opacity-75
    opacity-0 hover:opacity-100 transition-opacity duration-300"
    >
      <FaInstagram className="text-[85px] text-white" />
    </div>
  </div>
);

function About() {
  return (
    <main
      className="w-full h-full
      flex flex-col items-center  justify-center  font-barlow "
    >
      {/* Hero Section */}

      <section className=" w-[100%] h-[250vh] md:flex hidden">
        <div className="flex justify-center items-center relative h-[170vh] md:h-[150vh] ">
          <div className="h-[10vh] w-[37vw] pl-10  space-y-7  ">
            <p
              className="xl:text-[76px] lg:text-[70px] text-[65px] leading-[77px] font-bold z-30 absolute  
            xl:w-[49vw] lg:w-[60vw] w-[60vw] top-[32%] "
            >
              ABOUT DRAGON ESPORTS TEAM
            </p>
            <p
              className="xl:text-2xl text-2xl xl:w-[33vw] 
            md:w-[45vw] h-fit z-30 relative  "
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et quis
              odio vestibulum nunc, neque integer purus.
            </p>
            <button className="button  bg-[#f32c46] btn-p h-[13vh] w-[20vw]">
              MEET THE TEAM
            </button>
          </div>
          <div className="relative w-[60vw] border-2 ">
            <div className="bg-[#11161e] h-[80vh] w-[50vw]  "></div>
            <img
              src={Gun}
              className="w-[55vw] absolute z-10 h-[120vh] bottom-[7%] md:bottom-[-15%] left-[9%] object-cover md:object-contain "
            />
          </div>
        </div>

        <div className="flex xl:justify-center justify-around items-center w-full h-[40vh] border-2">
          <p className="xl:w-[30vw] lg:w-[20vw]  font-semibold text-xl">
            OUR RESULTS
          </p>
          <div className="flex justify-between items-center xl:w-[60vw] lg:w-[70vw] w-[70vw]">
            <Results num="35" text="TOURNAMENTS" />
            <Results num="20" text="GLOBAL AWARDS" />
            <Results num="14" text="TEAM MEMBERS" />
            <Results num="8" text="YEARS GOING" />
          </div>
        </div>
        <div className=" border-b-2 border-gray-700 w-full h-[5vh]"></div>
      </section>


      <section className="flex justify-center items-center w-[100%] h-[169vh]">
        <div className="w-[50vw] relative">
          <div className="w-[55vw] h-[80vh] bg-[#11161e] "></div>
          <img
            src={Headset}
            className="w-[43vw] absolute z-30 bottom-[7%] left-[-2%]"
          />
        </div>
        <div className="h-[140vh] space-y-10 ">
          <div className="w-[40vw] h-fit space-y-10  ">
            <p className="text-[8vh] w-[38vw] leading-[56px]  font-bold h-fit z-30 relative  ">
              THE STORY BEHIND DRAGON TEAM
            </p>
            <p className="w-[37vw]  text-lg h-[18vh] z-30 relative">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              convallis tortor, malesuada vitae tortor. Dignissim ac aliquam ut
              sed eu. Eget nulla elit, ac habitant
            </p>
            <button className="button bg-[#f32c46] btn-p h-[13vh] w-[20vw]">
              MEET THE TEAM
            </button>
          </div>
          <div className="z-30 absolute right-14 w-[67vw]">
            <img src={Man} />
          </div>
        </div>
      </section>
      <section className="h-[190vh] flex justify-center items-center">
        <div className=" h-fit space-y-20 border-2">
          <p className="text-[8vh] w-[38vw] leading-[56px] h-[18vh]  font-bold">
            HOW DRAGON ESPORTS STARTED
          </p>
          <p className="text-lg w-[43vw]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At at
            gravida platea congue. Gravida viverra id ac dui blandit in sed
            phasellus. Amet nisl sagittis feugiat in lacus. Lectus tellus erat
            lectus netus a luctus amet sollicitudin montes. Tristique amet
            viverra platea semper. Volutpat quam interdum commodo diam, id
            interdum fusce vestibulum. Quam orci, vel penatibus sed. Pharetra
            aenean porttitor commodo, nulla tortor amet faucibus. Vulputate.
          </p>
        </div>
        <div className="relative">
          <div className="bg-[#11161e] h-[80vh] w-[50vw]"></div>
          <img
            src={Work}
            className=" object-contain absolute bottom-48 h-[74vh] w-[35vw] right-0"
          />
          <img
            src={Game}
            className=" object-contain absolute bottom-[-27%] w-[33vw] h-[90vh] left-16"
          />
        </div>
      </section>
      <section className="relative flex justify-center w-[100%] h-[150vh]">
        <div className="w-full">
          <div className="bg-[#11161e] h-[130vh] w-[44vw]"></div>
        </div>
        <div
          className="flex justify-center items-center flex-col text-center z-30 bottom-[37%]
        right-[5%] absolute"
        >
          <p className="text-[8vh] w-[36vw] leading-[56px] h-fit  font-bold">
            OUR AWARDS
          </p>
          <p className="text-lg w-[55vw] h-[14vh]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At at
            gravida platea congue. Gravida viverra id ac dui blandit in sed
            phasellus. Amet nisl sagittis feugiat in lacus.
          </p>
          <div className="flex justify-between items-center w-[90vw] ">
            <Awards image={first} year="2021" />
            <Awards image={second} year="2020" />
            <Awards image={first} year="2019" />
            <Awards image={second} year="2018" />
          </div>
        </div>
      </section>
      <section className="h-[120vh]">
        <div className="flex justify-between items-center w-[90vw]">
          <div>
            <p className="text-[8vh] w-[36vw] h-[13vh]  font-bold">OUR TEAM</p>
            <p className="text-lg w-[43vw] text-gray-300 h-[15vh]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. At at
              gravida platea congue. Gravida viverra id ac dui blandit in sed.
            </p>
          </div>
          <button className="button  bg-[#f32c46]   btn-p h-[13vh] w-[20vw]">
            BROWSE TEAM
          </button>
        </div>
        <div className="flex justify-between w-[100%]">
          <Team image={John} name="JOHN CARTER" image2={John2} />
          <Team image={Dan} name="JOHN CARTER" image2={Dan2} />
          <Team image={Cannon} name="JOHN CARTER" image2={Cannon2} />
        </div>
      </section>
      <section>
        <p className="text-center text-[32px] font-bold h-[12vh]">
          FOLLOW US ON <span className="text-red-500 ">INSTAGRAM</span>
        </p>
        <div className="flex ">
          <Instagram image={Speakers} />
          <Instagram image={Speaker} />
          <Instagram image={War} />
          <Instagram image={Pad} />
        </div>
      </section>
    </main>
  );
}

export default About;
