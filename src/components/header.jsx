import React, { useContext, useLayoutEffect, useState } from "react";
import Logo from "../assets/logo.svg";
import { HiMenu } from "react-icons/hi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Context } from "./Context";

function Header2() {
  const [sticky, setSticky] = useState("");
  const [background, setBackground] = useState("");
  const [display, setDisplay] = useState(true);
  const [height, setHeight] = useState(true);
  const { menu, setMenu } = useContext(Context);

  useLayoutEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const stickyClass = scrollTop >= 100 ? "fixed shadow-xl z-10" : "";
      const backgroundClass =
        scrollTop >= 100 ? " bg-[#04080f] " : "bg-transparent";
      setSticky(stickyClass);
      setBackground(backgroundClass);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Nav = ({ text, path }) => (
    <p className="cursor-pointer hover:text-[#f32c46]">{text}</p>
  );

  const Nav1 = ({ text, source }) => {
    const navigate = useNavigate();
    const closeMenu = () => {
      setMenu(!menu);
      navigate(source);
    };

    return (
      <p
        onClick={closeMenu}
        className="cursor-pointer hover:text-[#f32c46] md:w-[7vw] md:h-fit h-[5vh]"
      >
        {text}
      </p>
    );
  };

  return (
    <main
      className={`w-full h-[19vh] md:h-[22vh] flex justify-around items-center fixed z-40 ${sticky} ${background} transition-all duration-300`}
    >
      <div className="lg:w-[16vw] md:w-[29vw] w-[38vw]">
        <img src={Logo} alt="Logo" />
      </div>
      <div
        className={`flex top-[18%] md:h-[17vh] w-screen fixed h-screen md:static 
     flex-col md:flex-row ${menu ? "hidden md:flex" : "flex"}
      justify-evenly md:items-center gap-6 md:gap-2 overflow-y-auto md:overflow-hidden
      items-start md:px-fit px-6 md:py-0 lg:w-[42vw] md:bg-transparent bg-black z-50`}
      >
        <div
          className="md:flex-row flex flex-col gap-7 md:gap-0 md:w-screen 
    md:justify-evenly md:h-fit h-[70vh] border-white font-extrabold"
        >
          <Nav1 text="HOME" source="/home" />
          <Nav1 text="ABOUT" source="/about" />
          <Nav1 text="TEAM" source="/team" />
          <Nav1 text="PARTNER" source="/partner" />
          <Nav1 text="SHOP" source="/shop" />
          <div className="flex justify-between w-[31vw] md:w-fit items-center">
            <Nav1 text="PAGES" source="/" />
            <span
              className="text-2xl  md:hidden hover:text-[#f32c46]"
              onClick={() => {
                setDisplay(!display);
                setHeight(!height);
              }}
            >
              {display ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </span>
          </div>
        </div>
        <div className={`md:hidden font-medium ${height ? "hidden" : "grid"}`}>
          {/* Mobile Menu Content */}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <p className="md:w-[7vw] w-[26vw] cursor-pointer">CART(0)</p>
        <div className="hidden md:flex">
          <button className="bg-[#f32c46] w-[12vw] h-[9vh] text-white">
            BUY MERCH
          </button>
        </div>
        <div
          onClick={() => setMenu(!menu)}
          className="button-primary cursor-pointer md:hidden bg-[#f32c46] text-5xl "
        >
          <HiMenu />
        </div>
      </div>
    </main>
  );
}

export default Header2;
