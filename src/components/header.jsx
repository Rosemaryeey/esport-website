import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import "./header.css";
import { HiMenu } from "react-icons/hi";

function Header() {
  return (
    <>
      <header className="md:h-[20vh] h-[15vh] w-[100%] flex items-center  justify-center fixed z-50 text-white  ">
        <div className=" wow  w-[97vw]  py-5">
          <div className=" lo  pl-7  w-[40vw]">
            <img className="logo sm:w-[28vw]" src={Logo} alt="logo" />
          </div>
          <nav
            // role="navigate"
            className=" nav   "
          >
            <Link className="a" to="/home">
              HOME
            </Link>
            <Link className="a" to="/about">
              ABOUT
            </Link>
            <Link className="a" to="/team">
              TEAM
            </Link>
            <Link className="a" to="/partner">
              PARTNER
            </Link>
            <Link className="a" to="/shop">
              SHOP
            </Link>
            <Link className="a" to="/pages">
              PAGE
            </Link>
          </nav>
          <div className=" ok    ">
            <Link className=" font-bold CART ">CART()</Link>
            <a href="" className="button btn-p md:flex hidden">
              {" "}
              BUY MERCH
            </a>
            <div className="button-primary menu bg-[#f32c46]  text-5xl ">
              <HiMenu className=" z-50  " />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
