import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimatedBox from "./components/scrollanimation";

import Logo2 from "./assets/logo2.svg";
import Logo3 from "./assets/logo3.svg";
import Side from "./assets/side.jpg";
import Side2 from "./assets/side2.png";
import Box1 from "./assets/box1.png";
import Box2 from "./assets/box2.png";
import Box3 from "./assets/box3.jpg";
import Home from "./assets/home.jpg";
import About from "./assets/about.png";
import Contact from "./assets/contact.png";
import Team from "./assets/team.png";
import Product from "./assets/product.png";
import Blog from "./assets/blog.png";
import Post from "./assets/post.png";
import Single from "./assets/single.png";
import Shop from "./assets/shop.png";
import Sponsors from "./assets/sponsors.png";
import P404 from "./assets/404.png";
import Protected from "./assets/protected.png";
import Aside from "./assets/aside.png";
import Aside2 from "./assets/aside2.png";
import Aside3 from "./assets/aside3.png";
import Aside4 from "./assets/aside4.png";
import Aside5 from "./assets/aside5.png";
import Pics from "./assets/pics.png";
import Logo4 from "./assets/logo4.svg";
import Button from "./components/button";

function Main2() {
  return (
    <main className=" flex items-center flex-col w-[100%]">
      {/* slide one  --------- */}
      <div className="flex items-center justify-center flex-col md:w-[100%] w-[100%] xl:h-[100vh] lg:h-[100vh] sm:h-[100vh] h-[95vh]   ">
        <div className="xl:w-[90vw] w-[95vw] h-[90vh] flex items-end justify-center   ">
          <div
            className="xl:h-[80vh] xl:w-[90vw] w-[95vw] 
          flex items-center justify-evenly "
          >
            <div
              className="
        xl:w-[75vw] lg:w-[80vw] md:w-[90vw] sm:w-[90vw] w-[90vw]
        xl:h-[50vh] lg:h-[55vh] md:h-[54vh] sm:h-[55vh] h-[60vh]
       flex flex-col items-center justify-between 
      "
            >
              <h1
                className="
          text-center font-bold  text-white/95
          xl:text-[4.8rem] lg:text-[4.4rem] md:text-[3.8rem]  sm:text-[3.5rem] text-[2.8rem]
            leading-[1]  xl:tracking-[0.07em] tracking-[0.1em]
            sm:pb-0 pb-0 
            "
              >
                <span className="xl:block lg:flex items-center justify-center md:block  ">
                  ESPORTS
                  <span className=" xl:inline lg:inline md:inline sm:block inline "> X</span>
                </span>
                <span> WEBFLOW TEMPLATE</span>
              </h1>
              <p
                className="
          text-center font-light md:font-medium text-white/90
          xl:text-[1.09rem] lg:text-[1rem] md:text-[1rem] sm:text-[1.2rem] text-[1rem]
         
        "
              >
                Presenting eSports X, the ultimate eSports & Gaming Webflow
                Template
              </p>
              <div
                className="
          flex md:flex-row flex-col justify-evenly xl:items-end md:items-start
          xl:h-[17vh] lg:h-[18vh] md:h-[26vh] sm:h-[28vh] h-[28vh]
          xl:py-2 lg:py-3 md:py-6 sm:pt-3 pt-8
       
        "
              >
                <Button text="Buy Template " />
                <Link
                  to=""
                  className="btn border-2  md:mt-0 mt-5  xl:ml-6 md:ml-10 ml-0 font-bold"
                >
                  EXPLORE PAGES
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------slide two */}
      <div className="flex items-center justify-evenly  w-[100%] xl:h-[100vh] sm:h-[80vh] h-[40vh] ">
        <ScrollAnimatedBox />
      </div>

      {/* ------------slide three */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          alignItems: "center",
          width: "100%",
        }}
        className=" h-fit md: flex  flex-wrap lg:space-around    space-y-10        "
      >
        <div className="xl:h-[50vh] md:h-[] h-[60vh]   flex  items-end justify-center ">
          <div className=" xl:h-[20vh]  flex flex-col items-center justify-around ">
            <h1
              style={{
                textAlign: "center",
                lineHeight: "1",
              }}
              className=" xl:w-[95vw] w-[]
            xl:text-[3.5rem] lg:text-[3rem] md:text-[3rem] sm:text-[2.2rem] text-[2.2rem]  md:px-0 px-2 md:mb-0 mb-2
             font-bold   "
            >
              WHAT IS INCLUDED IN ESPORTS X
            </h1>
            <p
              style={{
                textAlign: "center",
              }}
              className=" text-[18px] font-[300] xl:w-[60vw] text-white/50    "
            >
              eSports X Webflow Template includes over 15 pages in total,and
              with more than 35 sections.
            </p>
          </div>
        </div>
        <div
          // style={{
          //   width:"95vw"
          // }}
          className="
    xl:w-[95vw] h-fit
    lg:w-[95vw] 
    md:w-[95vw] 
    sm:w-[90vw] w-[90vw] 
     lg:space-y-0 space-y-10 
   
    flex
    xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col
    items-center justify-around  
  "
        >
          <div className="">
            <img
              className="box xl:w-[30vw] lg:w-[30vw] w-[90vw] lg:object-contain  object-fill lg:h-fit h-[90vh] sm:object-contain"
              src={Box3}
              alt=""
            />
            <div
              style={{
                backgroundColor: "var(--neutral-700)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="
        xl:font-[700] xl:text-[21px] xl:py-6 xl:px-0
       
        md:font-[700] font-[700] md:text-[25px] text-[20px]  sm:py-6 py-6 sm:px-0
        
      "
            >
              <span
                style={{ color: "var(--primary-1)" }}
                className="xl:pr-2 lg:pr-2 md:pr-1  "
              >
                15+
              </span>
              <span style={{ color: "var(--secondary-1)" }}>PAGES</span>
            </div>
          </div>
          <div>
            <img
              className="box xl:w-[30vw] lg:w-[30vw] w-[90vw] lg:object-contain object-fill sm:object-contain lg:h-fit h-[90vh]"
              src={Box2}
              alt=""
            />
            <div
              style={{
                backgroundColor: "var(--neutral-700)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="
      
              xl:font-[700] xl:text-[21px] xl:py-6 xl:px-0
       
            md:font-[700] font-[700] md:text-[25px] text-[20px] sm:py-6 py-6 sm:px-0
      
      "
            >
              <span
                style={{ color: "var(--primary-1)" }}
                className="xl:pr-2 lg:pr-2 md:pr-1 sm:pr-1 xs:pr-1"
              >
                35+
              </span>
              <span style={{ color: "var(--secondary-1)" }}>SECTIONS</span>
            </div>
          </div>
          <div>
            <div>
              <img
                className="box xl:w-[30vw] lg:w-[30vw] w-[90vw] lg:object-contain object-fill sm:object-contain lg:h-fit h-[90vh]"
                src={Box1}
                alt=""
              />
            </div>
            <div
              style={{
                backgroundColor: "var(--neutral-700)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="
        xl:font-[700] xl:text-[21px] xl:py-6 xl:px-0
       
        md:font-[700] font-[700] md:text-[25px] text-[20px] sm:py-6 py-6 sm:px-0
        "
            >
              <span
                style={{ color: "var(--primary-1)" }}
                className="xl:pr-2 lg:pr-2 md:pr-1 sm:pr-1 xs:pr-1"
              >
                25+
              </span>
              <span style={{ color: "var(--secondary-1)" }}>
                STYLE<span className="px-2">&</span>SYMBOLS
              </span>
            </div>
          </div>
        </div>

        <div className=" sec ">
          <div className=" in bg-[#11161e]  py-5 px-14  flex items-center justify-center">
            <div className="h-[60vh] flex flex-col items-start justify-around">
              <img src={Logo2} alt="" />
              <h1 className="  num ">FIGMA FILE INCLUDED</h1>
              <p>
                Send us an email to <a href="">esports@brixtemplates</a>.com
                with your <br /> purchase receipt, and we will send you the
                editable Figma file for the ESports X template.
              </p>
              <Link className="button border-2 ">REQUEST FIGMA FILE</Link>
            </div>
          </div>

          <img className=" ig object-cover " src={Side} alt="" />
        </div>

        <div className=" sec1 ">
          <img className="ig  object-cover " src={Side2} alt="" />
          <div className="in   pd flex items-center justify-center">
            <div className="h-[60vh] flex flex-col items-start justify-around ">
              <img src={Logo3} alt="" />
              <h1 className=" nu ">
                LOOKING FOR MORE AMAZING WEBFLOW TEMPLATES?
              </h1>
              <p>
                Take a look at our collection of 100+ premium Webflow Templates
                at BRIX Templates.
              </p>
              <Link className="button border-2 ">BROWSER TEMPLATE</Link>
            </div>
          </div>
        </div>

        <div className=" h-[30vh] items-start flex justify-center  w-[95vw]">
          {/* <Link className="hm border-2  border-[#f32c46] bg-[#f32c46]">
            BUY TEMPLATE
          </Link> */}
          <div className="mt-5">
            <Button text="BUY TEMPLATE" />
          </div>
        </div>
      </div>
      {/* --------------------slide four */}
      <div
        style={{
          width: "100%",
          display: " flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "start",
        }}
        className=" h-fit three "
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
            alignItems: "center",
            width: "95vw",
          }}
          className=" xl:h-[40vh] lg:h-[20vh] md:h-[35vh] sm:h-[40vh] h-[30vh] "
        >
          <div className="  flex flex-col items-center justify-around h-[20vh]   py-3">
            <h1 className="font-bold px-10  text-[2rem] sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl ">
              MAIN PAGE
            </h1>
            <p className="font-medium text-base sm:text-base md:text-lg lg:text-xl text-center">
              Take a look at the main pages included in the eSports X Template.
            </p>
          </div>
        </div>
        <div className=" h-fit ">
          <div className="bo">
            <Link className="bo1">
              <img className="h-[50vh]  i" src={Home} alt="" />
              <div className="box3 nm  o"> HOME</div>
            </Link>
            <Link className="bo2">
              <img className="h-[50vh] i " src={About} alt="" />
              <div className="box3 nm "> ABOUT</div>
            </Link>{" "}
            <Link className="bo3">
              {" "}
              <img className="md:h-[50vh] i  " src={Contact} alt="" />
              <div className=" nm box3 "> CONTACT</div>
            </Link>
            <Link className="bo4">
              <img className="h-[50vh] i" src={Team} alt="" />
              <div className="box3 nm ">Team </div>
            </Link>
            <Link className="bo5">
              <img className="h-[50vh] i" src={Product} alt="" />
              <div className="box3 nm ">SINGLE PRODUCT </div>
            </Link>
            <Link className="bo6">
              <img className="h-[50vh] i" src={Blog} alt="" />
              <div className="box3 nm "> BLOG</div>
            </Link>
            <Link className="bo7">
              <img className="h-[50vh] i" src={Post} alt="" />
              <div className="box3 nm "> BLOG POST</div>
            </Link>
            <Link className="bo8">
              <img className="h-[50vh] i" src={Single} alt="" />
              <div className="box3 nm ">TEAM SINGLE </div>
            </Link>
            <Link className="bo9">
              <img className="h-[50vh] i" src={Shop} alt="" />
              <div className="box3 nm ">SHOP </div>
            </Link>
            <Link className="bo10">
              <img className="h-[50vh] i" src={Sponsors} alt="" />
              <div className="box3 nm ">SPONSORS </div>
            </Link>
          </div>
        </div>
        <div className=" h-[20vh]  flex items-start">
          <Button text="BUY TEMPLATE" />
        </div>
      </div>

      {/* -------------------SLIDE FIVE */}
      <div className="h-auto w-[95vw] flex flex-col items-center justify-center">
        <div className="h-fit md:mb-40 mb-10  flex flex-col items-center justify-evenly w-full sm:w-[90vw] md:w-[85vw] lg:w-[80vw] xl:w-[70vw]">
          <div className=" text-center md:text-center pt-20 pb-10">
            <h1 className="font-bold px-10  pb-2 text-[2.2rem] sm:text-4xl md:text-4xl  lg:text-[3rem] xl:text-[3.2rem] ">
              UTILITY PAGES
            </h1>
            <p className="font-medium text-[1.08rem] sm:text-sm md:text-base xl:text-base">
              Take a look at the utility pages included in the eSports X
              Template.
            </p>
          </div>

          <div className=" w-[95vw] flex flex-wrap justify-center gap-10 ">
            <div className="flex flex-col items-center border-2  ">
              <img
                className=" box w-[80vw] sm:w-[90vw] md:w-[40vw] lg:w-[40vw] xl:w-[40vw]  "
                src={P404}
                alt="404 Not Found"
              />
              <p
                style={{
                  backgroundColor: "var(--secondary-1)",
                  fontWeight: "700",
                  fontFamily: "Chakra Petch, sans-serif",
                }}
                className=" box3 nm
                 "
              >
                404 NOT FOUND
              </p>
            </div>
            <div className="flex flex-col items-center border-2 h-fit w-auto ">
              <img
                className="box w-[80vw] sm:w-[90vw] md:w-[40vw] lg:w-[40vw] xl:w-[40vw] border-2"
                src={Protected}
                alt="Protected Page"
              />
              <p
                style={{
                  backgroundColor: "var(--secondary-1)",
                  fontWeight: "700",
                  fontFamily: "Chakra Petch, sans-serif",
                }}
                className=" box3 nm
                 "
              >
                PROTECTED PAGE
              </p>
            </div>
          </div>

          <div className="pt-10  ">
            <Button text="BUY TEMPLATE" />
          </div>
        </div>
      </div>

      {/* second to the last .................. */}
      <div className="three  w-full flex flex-col items-center justify-around space-y-10 ">
        <div className="h2 h-[50vh]  w-[95vw]">
          <h1 className=" text-3xl px-2 sm:text-3xl md:text-4xl xl:text-[3.2rem] font-bold pb-10 text-center  ">
            THE ESPORTS X WEBFLOW TEMPLATE ALSO COMES WITH MORE SURPRISES...
          </h1>
        </div>

        <div className="sec flex lg:flex-row md:flex-row flex-col items-center w-full sm:w-[90vw] md:w-[90vw]  xl:w-[90vw]  h-fit">
          <div className=" flex items-center justify-center w-full ">
            <div className="ohi  ">
              <h1 className="num text-xl sm:text-2xl md:text-3xl xl:text-3xl text-center sm:text-left ">
                3 HEADERS AND FOOTERS
              </h1>
              <p
                className="text-sm sm:text-base md:text-lg lg:text-xl text-center 
           md:text-left xl:text-left lg:text-left   "
              >
                With a total of 3 different headers and footers, you can easily
                customize the eSports X Webflow Template to fit your company
                needs and requirements.
              </p>
              <Button text=" BUY TEMPLATE" />
            </div>
          </div>

          <img className="ig0 " src={Aside} alt="" />
        </div>

        <div className="sec1 flex lg:flex-row md:flex-row flex-col items-center w-full sm:w-[90vw] md:w-[90vw]  xl:w-[90vw] h-fit">
          <img className="ig0 " src={Aside2} alt="" />
          <div className=" flex items-center justify-center w-full">
            <div className="ohi md:py-5 md:pl-12">
              <h1 className="num text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center sm:text-left">
                3 NOTIFICATION BARS
              </h1>
              <p
                className="text-sm sm:text-base md:text-lg lg:text-xl 
             text-center 
           md:text-left xl:text-left lg:text-left "
              >
                If you are looking to get more sales, use one of our 3
                notification bars included in the eSports X Webflow Template,
                and start promoting your products or services.
              </p>
              <Button text="   BUY TEMPLATE" />
            </div>
          </div>
        </div>

        <div className="sec flex lg:flex-row md:flex-row flex-col items-center w-full sm:w-[90vw] md:w-[90vw]  xl:w-[90vw] h-fit">
          <div className="ini flex items-center justify-center w-full">
            <div className="ohi py-5 px-5">
              <h1 className="num text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center sm:text-left">
                CUSTOM ICON SET
              </h1>
              <p
                className="text-sm sm:text-base md:text-lg lg:text-xl text-center 
          md:text-left xl:text-left lg:text-left "
              >
                The eSports X Webflow Template includes 3 sets of custom icons
                (rounded, square and filled), so you can easily use more icon
                fonts in your template. No matter if you are looking to add
                another social media icon in the footer, or change the cart icon
                in the header, we got you covered.
              </p>
              <Button text="   BUY TEMPLATE" />
            </div>
          </div>
          <img className="ig0 " src={Aside3} alt="" />
        </div>

        <div className="sec1 flex lg:flex-row md:flex-row flex-col items-center w-full sm:w-[90vw] md:w-[90vw]  xl:w-[90vw] h-fit">
          <img className="ig0 " src={Aside4} alt="" />
          <div className="ini flex items-center justify-center w-full">
            <div className="ohi md:py-5 md:pl-12 ">
              <h1 className="num text-xl sm:text-2xl md:text-3xl lg:text-4xl text-centermd:text-center ">
                3 NOTIFICATION BARS
              </h1>
              <p
                className="text-sm sm:text-base md:text-lg lg:text-xl text-center 
          md:text-left xl:text-left lg:text-left  "
              >
                If you are looking to get more sales, use one of our 3
                notification bars included in the eSports X Webflow Template,
                and start promoting your products or services.
              </p>
              <Button text="   BUY TEMPLATE" />
            </div>
          </div>
        </div>

        <div className="sec flex lg:flex-row md:flex-row flex-col items-center w-full sm:w-[90vw] md:w-[90vw]  xl:w-[90vw] h-fit">
          <div className="ini flex items-center justify-center w-full">
            <div className="ohi py-5 px-5">
              <h1 className="num text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center sm:text-left">
                3 HEADERS AND FOOTERS
              </h1>
              <p
                className="text-sm sm:text-base md:text-lg lg:text-xl text-center 
           md:text-left xl:text-left lg:text-left "
              >
                With a total of 3 different headers and footers, you can easily
                customize the eSports X Webflow Template to fit your company
                needs and requirements.
              </p>
              <Button text="   BUY TEMPLATE" />
            </div>
          </div>
          <img className="ig0 " src={Aside5} alt="" />
        </div>
      </div>
      {/* lastttttttttttttttttttttttttttttttt */}
      <div className=" xl:flex-row lg:flex-row flex-col flex items-center justify-between w-[95vw]  lg:h-[150vh] h-[235vh]">
        <div className="lg:w-[45vw] w-[90vw] h-auto flex flex-col justify-center items-center bg-blue-600 text-white ia mb-20 ">
          <div className=" flex flex-col items-start justify-around lg:w-[40vw] w-[80vw] pt-10 ">
            <img src={Logo4} alt="" />
            <h2 className=" xl:text-3xl lg:text-3xl text-xl md:font-[500] font-[800] py-6">
              BUY NOW ON WEBFLOW
            </h2>
            <p className="pb-10 md:text-[1rem] text-[1.2rem] ">
              Get the ESport X Webflow Template Today, and take your Website
              design to next level.
            </p>

            <div className=" py-5 px-20 font-[700] text-center bg-white text-blue-500 ml-4  ">
              <Link>BUY TEMPLATE </Link>
            </div>

            <div className=" mt-3">
              <img
                src={Pics}
                alt
                className=" h-[50vh] object-cover   bg-center w-[90vw]  "
              />
            </div>
          </div>
        </div>
        <div className="lg:w-[45vw] w-[90vw] h-auto flex flex-col justify-center items-center bg-slate-50 text-black ia  mb-20">
          <div className=" flex flex-col items-start justify-around lg:w-[40vw] w-[80vw] py-12">
            <img
              src={Logo3}
              alt=""
              className="p-3 shadow-2xl shadow-black/20"
            />
            <h2 className=" xl:text-3xl md:text-3xl text-[1.2rem] md:font-[500] font-[800] text-black/60 py-6">
              BROWSE ALL TEMPLATES
            </h2>
            <p className=" pb-10 md:text-[1rem] text-[1.2rem] text-black/50">
              Looking for more template? Browse our collection of 100+ Webflow
              Templates on BRIXTemplate.com
            </p>
            <div>
              <Link className=" py-6 px-10 text-center bg-blue-700 text-white">
                EXPLORE MORE TEMPLATES
              </Link>
            </div>
          </div>
          <div>
            <img
              src={Side2}
              alt=""
              className=" h-[50vh] object-cover   bg-center w-[90vw]    "
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main2;

// w-[60vw] h-[89vh]  items-center
