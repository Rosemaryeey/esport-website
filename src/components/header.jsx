import React, { useContext, useState } from "react";
import Logo from "../assets/logo.svg";
import { HiMenu } from "react-icons/hi";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Context } from "./Context";
// const navigate = useNavigate();

const Nav = ({ text, path }) => (
  <p className="cursor-pointer hover:text-[#f32c46]">{text}</p>
);
const Nav1 = ({ text, source }) => {
  const navigate = useNavigate();
  const { menu, setMenu } = useContext(Context);

  const close = () => {
    setMenu(!menu);
    navigate(source);
  };

  return (
    <p
      onClick={close}
      className="cursor-pointer hover:text-[#f32c46] md:w-[7vw]  md:h-fit h-[5vh]   "
    >
      {text}
    </p>
  );
};

function header2() {
  const [display, setDisplay] = useState(true);
  const [height, setheight] = useState(true);
  // const [menu, setMenu] = useState(true);
  const { menu, setMenu } = useContext(Context);
  const closeMenu = () => {
    setMenu(!menu);
    //
  };
  return (
    <main
      className="w-[100%] md:h-[22vh] h-[19vh] flex justify-around items-center md:w-[100%]
    md:text-[16.5px] text-[22px] font-serif fixed z-40 bg-[#04080f] font-bold  "
    >
      <div className="lg:w-[16vw] md:w-[29vw] w-[38vw] ">
        <img src={Logo} />
      </div>
      <div
        className={` flex  top-[18%] md:h-[17vh] w-screen fixed h-screen md:static 
          bg-[#04080f] flex-col md:flex-row  ${menu ? "hidden lg:flex" : "flex"}
      justify-evenly md:items-center gap-6 md:gap-2 overflow-y-auto  md:overflow-hidden
      items-start md:px-fit px-6 md:py-0  md:z-0 z-50 lg:w-[42vw]  `}
      >
        <div
          className="md:flex-row flex flex-col gap-7 md:gap-0  md:w-screen 
        md:justify-evenly md:h-fit  h-[70vh]  border-white "
        >
          <Nav1 text="HOME" source="/home" />
          <Nav1 text="ABOUT" source="/about" />
          <Nav1 text="TEAM" source="/" />
          <Nav1 text="PARTNER" source="/partner" />
          <Nav1 text="SHOP" source="/shop" />
          <div className=" flex justify-between w-[31vw] md:w-fit items-center">
            <Nav1 text="PAGES" source="/pages" />
            <span
              className="text-2xl md:hidden hover:text-[#f32c46] "
              onClick={() => {
                setDisplay(!display);
                setheight(!height);
              }}
            >
              {display ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </span>
          </div>
        </div>
        <div
          className={`md:hidden  font-medium  ${height ? "hidden" : "grid"} 
          `}
        >
          <div className={` flex`}>
            <div className="h-[40vh] flex flex-col gap-3 w-[55vw] ">
              <Nav text="HOME" source="/home" />
              <Nav text="ABOUT" source="/about" />
              <Nav text="TEAM" source="/team" />
              <Nav text="TEAM INDIVIDUAL" source="" />
              <Nav text="NEWS" source="" />
              <Nav text="NEWS INDIVIDUAL" source="" />
            </div>
            <div className="h-[40vh] flex flex-col gap-3 ">
              <Nav text="SHOP" source="/shop" />
              <Nav text="SHOP CMS" source="" />
              <Nav text="CONTACT" source="" />
              <Nav text="SPONSORS" source="" />
            </div>
          </div>
          <div className="h-[64vh] flex flex-col gap-3  w-[90vw] ">
            <Nav text="STYLE GUIDE" />
            <Nav text="START HERE" />
            <Nav text="404 NOT FOUND" />
            <Nav text="PASSWORD PROTECTED" />
            <Nav text="LICENSES" />
            <Nav text="CHANGELOG" />
            <div>
              <Nav text="BROWSE MORE TEMPLATES" />
              <div className="border-b hover:border-red-500 h-[1vh]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="md:w-[7vw] w-[26vw] cursor-pointer">CART(O)</p>
        <div className=" hidden md:flex">
          <button className="bg-[#f32c46] w-[12vw] h-[9vh] text-white">
            BUY MERCH
          </button>
        </div>
        <div
          onClick={closeMenu}
          className="button-primary cursor-pointer lg:hidden bg-[#f32c46]  text-5xl"
        >
          <HiMenu />
        </div>
      </div>
    </main>
  );
}

export default header2;
