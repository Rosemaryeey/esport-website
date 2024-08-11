import React, { useState,useEffect } from "react";
import Button from "../components/button"
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
import Music from "../assets/music.svg";
import Music2 from "../assets/music2.svg";
import Music3 from "../assets/music3.jpg";
import Music4 from "../assets/music4.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Results = ({ num, text }) => (
  <div data-aos="fade-up">
    <p className="xl:text-8xl lg:text-8xl md:text-7xl  sm:text-5xl text-4xl font-semibold">
      {num}
      <span className="text-red-500">+</span>
    </p>
    <p className="xl:text-xl lg:text-xl md:text-xl sm:text-xl text-sm   text-gray-400 font-semibold">
      {text}
    </p>
  </div>
);
const Icons = ({ icon }) => (
  <div className="icon md:w-[2.7vw] w-[8vw] bg-[var(--primary-1)] h-[6vh] flex justify-center items-center">
    <p className="text-2xl">{icon}</p>
  </div>
);
const Awards = ({ image, year }) => (
  <div>
    <div className="h-[40vh] ">
      <div data-aos="zoom-in" className=" flex justify-center items-center">
        <img src={image} />
      </div>
    </div>
    <p data-aos="fade-up" className="text-[22px] py-3 font-semibold">
      BIG TOURNAMENT {year}
    </p>
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
            data-aos="zoom-in"
            className="bg-[#11161e]   xl:w-[28.5vw] lg:w-[28vw] md:w-[28.5vw] w-[80.5vw] xl:h-[57vh] lg:h-[50vh] md:h-[50vh] h-[57vh] flex justify-center items-center"
          >
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

const About = ({ text }) => {
    const [hover, setHover] = useState(false);
    useEffect(() => {
      Aos.init({ duration: 600, delay: 300 });
    }, []);

  return (
    <main
      className="w-full h-full
      flex flex-col items-center  justify-center  font-barlow "
    >
      {/* Hero Section */}

      <section className=" w-[100%] h-[250vh] md:flex hidden flex-col">
        <div className="flex justify-center items-center relative h-[170vh] md:h-[150vh] ">
          <div className="h-[10vh] w-[37vw] pl-10  space-y-7  ">
            <p
              data-aos="fade-up"
              className="xl:text-[76px] lg:text-[70px] text-[65px] leading-[77px] font-bold z-30 absolute  
            xl:w-[49vw] lg:w-[60vw] w-[60vw] top-[32%] "
            >
              ABOUT DRAGON ESPORTS TEAM
            </p>
            <p
              data-aos="fade-up"
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
          <div className="relative w-[60vw]  ">
            <div
              data-aos="zoom-in"
              className="bg-[#11161e] h-[80vh] w-[50vw]  "
            ></div>
            <img
              src={Gun}
              data-aos="zoom-in"
              className="w-[55vw] absolute z-10 h-[120vh] bottom-[7%] md:bottom-[-15%] left-[9%] object-cover md:object-contain "
            />
          </div>
        </div>

        <div className="flex xl:justify-center justify-around items-center w-full h-[40vh] ">
          <p
            data-aos="fade-up"
            className="xl:w-[30vw] lg:w-[20vw]  font-semibold text-xl"
          >
            OUR RESULTS
          </p>
          <div className="flex justify-between items-center xl:w-[60vw] lg:w-[70vw] w-[70vw]">
            <Results num="35" text="TOURNAMENTS" />
            <Results num="20" text="GLOBAL AWARDS" />
            <Results num="14" text="TEAM MEMBERS" />
            <Results num="8" text="YEARS GOING" />
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className=" border-b-2 border-gray-700 w-full h-[5vh]"
        ></div>
      </section>

      {/* mobile veiw........................ */}
      <section className=" w-[100%] sm:h-[150vh] h-[120vh] md:hidden  items-center sm:justify-center justify-end flex  flex-col  bg-[url('./gun.jpeg')] bg-cover bg-center">
        {/* <div className="bg-[#11161e] h-[80vh] w-[50vw]  "/>    */}
        <div className="sm:h-[30vh] h-[50vh]" />
        <div className="flex flex-col justify-center sm:items-start items-center sm:h-[130vh] h-[120vh]  sm:pl-10 pl-0   ">
          <h1
            data-aos="fade-up"
            className=" sm:text-5xl text-4xl   font-bold  pb-5  sm:text-left text-center w-[90vw]
           "
          >
            ABOUT DRAGON ESPORTS TEAM
          </h1>
          <p
            data-aos="fade-up"
            className=" sm:text-base text-sm  font-bold w-[80vw] sm:text-left text-center pb-5 
              "
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et quis
            odio vestibulum nunc, neque integer purus.
          </p>
          <Button text="MEET THE TEAM" />

          {/* <img
              src={Gun}
              className="w-[55vw] absolute z-10 h-[120vh] bottom-[7%] md:bottom-[-15%] left-[9%] object-cover md:object-contain "
            /> */}
        </div>

        <div className="flex flex-col justify-around items-center w-[95vw] h-[40vh] ">
          <p className="sm:w-[60vw] w-[60vw]  font-semibold xl:text-xl lg:text-xl md:text-xl  text-xl ">
            OUR RESULTS
          </p>
          <div className="flex flex-col justify-around items-center  w-[90vw]">
            <div className="flex justify-around items-center w-[90vw] ">
              <Results num="35" text="TOURNAMENTS" />
              <Results num="20" text="GLOBAL AWARDS" />
            </div>
            <div className="flex justify-around items-center w-[90vw]  ">
              <Results num="14" text="TEAM MEMBERS" />
              <Results num="8" text="YEARS GOING" />
            </div>
          </div>
        </div>
        <div className=" border-b-2 border-gray-700 w-full h-[5vh]"></div>
      </section>

      {/* second slid................... */}
      <section className="flex md:flex-row flex-col justify-center items-center  w-[100%] md:h-[169vh] h-[250vh] ">
        <div className=" h-[40vh] md:hidden flex " />
        <div className="md:w-[50vw] w-[95vw] relative  md:flex hidden">
          <div
            data-aos="zoom-in"
            className="w-[55vw] h-[80vh] bg-[#11161e] "
          ></div>
          <img
            data-aos="zoom-in"
            src={Headset}
            className="w-[43vw]  absolute z-30 bottom-[7%]  left-[-2%]"
          />
        </div>
        <div className="sm:w-[95vw]  h-[60vh] relative  ">
          <div
            data-aos="zoom-in"
            className="w-[90vw] h-[80vh] bg-[#11161e] "
          ></div>
          <img
            data-aos="zoom-in"
            src={Headset}
            className="sm:w-[80vw]  h-[70vh]   object-cover md:hidden flex absolute z-30 md:bottom-[7%] bottom-[2%] left-[-2%]"
          />
        </div>
        <div className="h-[140vh] space-y-10 ">
          <div className="md:w-[40vw] w-[90vw] h-fit space-y-10 sm:text-left text-center ">
            <p
              data-aos="fade-up"
              className="xl:text-[8vh] lg:text-[8vh] md:text-[8vh] md:w-[38vw] w-[85vw] leading-[56px]  sm:text-5xl text-3xl  font-bold h-fit z-30 relative  "
            >
              THE STORY BEHIND DRAGON TEAM
            </p>
            <p
              data-aos="fade-up"
              className="md:w-[37vw] w-[85vw]  md:text-lg text-base h-[18vh]  z-30 relative "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              convallis tortor, malesuada vitae tortor. Dignissim ac aliquam ut
              sed eu. Eget nulla elit, ac habitant
            </p>
            <Button text="MEET THE TEAM" />
          </div>
          <div
            data-aos="zoom-in"
            className="z-30 absolute md:right-14 right-5 md:w-[67vw] w-[80vw]"
          >
            <img src={Man} />
          </div>
        </div>
      </section>

      {/* third slid.................. */}
      <section className="md:h-[190vh] h-[250vh] flex md:justify-center justify-start md:flex-row flex-col items-center ">
        <div className=" h-fit space-y-20  md:text-left text-center">
          <p
            data-aos="fade-up"
            className="xl:text-[8vh] lg:text-[8vh] md:text-[8vh] sm:text-5xl text-3xl md:w-[38vw] w-[90vw] leading-[56px] h-[18vh]  font-bold"
          >
            HOW DRAGON ESPORTS STARTED
          </p>
          <p
            data-aos="fade-up"
            className="md:text-lg text-base md:w-[43vw] w-[90vw]"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At at
            gravida platea congue. Gravida viverra id ac dui blandit in sed
            phasellus. Amet nisl sagittis feugiat in lacus. Lectus tellus erat
            lectus netus a luctus amet sollicitudin montes. Tristique amet
            viverra platea semper. Volutpat quam interdum commodo diam, id
            interdum fusce vestibulum. Quam orci, vel penatibus sed. Pharetra
            aenean porttitor commodo, nulla tortor amet faucibus. Vulputate.
          </p>
        </div>
        <div className="relative md:top-0 top-40">
          <div
            data-aos="zoom-in"
            className="bg-[#11161e] md:h-[80vh] h-[100vh] md:w-[50vw] w-[90vw]"
          ></div>
          <img
            data-aos="zoom-in"
            src={Work}
            className=" object-contain absolute bottom-48 md:h-[74vh] h-[80vh] md:w-[35vw] w-[80vw] xl:right-0 sm:right-[-4%] right-0"
          />
          <img
            data-aos="zoom-in"
            src={Game}
            className=" object-contain absolute bottom-[-27%] md:w-[33vw] w-[80vw] md:h-[90vh] h-[80vh] md:left-16 left-[-15%]"
          />
        </div>
      </section>

      {/* four slide................. */}
      <section className="relative flex md:justify-center justify-evenly  w-[100%] xl:h-[150vh] lg:h-[150vh] md:h-[150vh] sm:h-[150vh] h-[250vh] ">
        <div className="w-full">
          <div
            data-aos="zoom-in"
            className="bg-[#11161e] h-[130vh] md:w-[44vw] w-[50vw]"
          ></div>
        </div>
        <div
          className="flex justify-center items-center flex-col text-center z-30 md:bottom-[37%] bottom-10
        md:right-[5%]  absolute"
        >
          <p
            data-aos="fade-up"
            className="xl:text-[8vh] lg:text-[8vh] md:text-[8vh] sm:text-5xl text-3xl md:w-[36vw] w-[90vw] leading-[56px] h-fit  font-bold"
          >
            OUR AWARDS
          </p>
          <p
            data-aos="fade-up"
            className="md:text-lg text-base md:w-[55vw] w-[90vw] md:h-[14vh] h-[20vh]"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At at
            gravida platea congue. Gravida viverra id ac dui blandit in sed
            phasellus. Amet nisl sagittis feugiat in lacus.
          </p>
          <div className="flex  md:flex-row flex-col justify-between items-center w-[90vw] md:space-y-0 space-y-5 ">
            <div className="flex  sm:flex-row flex-col justify-between items-center w-[90vw] md:space-y-0 space-y-10 ">
              <Awards image={first} year="2021" />
              <Awards image={second} year="2020" />
            </div>
            <div className="flex   sm:flex-row flex-col  justify-between items-center w-[90vw] md:space-y-0 space-y-10 ">
              <Awards image={first} year="2019" />
              <Awards image={second} year="2018" />
            </div>
          </div>
        </div>
      </section>

      {/* fifth slide..................... */}
      <section className="md:h-[120vh] h-[250vh]">
        <div className="flex justify-between items-center w-[90vw] md:flex-row flex-col md:py-0 py-20">
          <div>
            <p
              data-aos="fade-up"
              className="text-[8vh] md:w-[36vw] w-[90vw] md:h-[13vh] h-[20vh]  md:text-left text-center font-bold"
            >
              OUR TEAM
            </p>
            <p
              data-aos="fade-up"
              className="text-lg md:w-[43vw] w-[90vw] md:text-left text-center text-gray-300 h-[15vh]"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. At at
              gravida platea congue. Gravida viverra id ac dui blandit in sed.
            </p>
          </div>

          <Button text=" BROWSE TEAM" />
          {/* <button className="button  bg-[#f32c46]   btn-p h-[13vh] md:w-[20vw] w-[70vw]">
            BROWSE TEAM
          </button> */}
        </div>
        <div className="flex justify-around w-[95vw] flex-wrap h-fit  items-center md:flex-row flex-col  xl:space-x-10 lg:space-x-10 md:space-y-5 space-y-10">
          <Team image={John} name="JOHN CARTER" image2={John2} />
          <Team image={Dan} name="JOHN CARTER" image2={Dan2} />
          <Team image={Cannon} name="JOHN CARTER" image2={Cannon2} />
        </div>
      </section>

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
            className=" sm:relative sm:right-0 right-2  w-[20rem] sm:w-[18rem] md:w-[23rem] lg:w-[24vw] xl:w-[24.5vw]  x relative lg:bottom-0 bottom-2 flex items-center justify-center"
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
            className="sm:relative sm:right-0 right-2  w-[20rem] sm:w-[18rem] md:w-[23rem] lg:w-[24vw] xl:w-[24.5vw]  x"
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
            className=" sm:relative sm:right-0 right-2 w-[20rem] sm:w-[18rem]  md:w-[23rem] lg:w-[24vw] xl:w-[24.5vw] x"
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
    </main>
  );
}

export default About;
