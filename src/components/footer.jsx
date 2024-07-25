import {useEffect} from "react";
import { Form, Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import "./footer.css";
import {BiLogoFacebook,} from "react-icons/bi";
import { FaTiktok, FaTwitch,FaYoutube,FaTwitter } from "react-icons/fa";
import { BsInstagram,} from "react-icons/bs"
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () =>{
   useEffect(() => {
     Aos.init({ duration: 600, delay: 200 });
   }, []);
  return (
    <footer data-aos="fade-up" className=" foot  one ">
      <section className="h0">
        <div data-aos="fade-up" className=" he ">
          <img className="logo " src={Logo} alt="" />
          <p className=" text-white/50 ">
            Lorem ipsum dolor sit amet consectetur, <br />
            adipisicing elit. voluptatem!
          </p>
        </div>
        <div data-aos="fade-up" className="g">
          <div className="g1 grid  justify-items-start content-center ">
            <h1 className="text-[#f32c46] font-bold text-xl">PAGES</h1>
            <div className="grid md:grid-flow-col grid-flow-row justify-items-center content-center">
              <div className=" w flex flex-col items-start justify-around   h-[42vh]">
                <Link className="shif">ABOUT</Link>
                <Link className="shif">TEAM</Link>
                <Link className="shif">TEAM INDIVIDUAL</Link>
                <Link className="shif">NEWS</Link>
                <Link className="shif">NEWS INDIVIDUAL</Link>
              </div>
              <div className=" w flex flex-col items-start justify-around   h-[24vh]">
                <Link className="shif">SHOP CMS</Link>
                <Link className="shif">CONTACT</Link>
                <Link className="shif">SPONSOR</Link>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="g2 grid justify-items-start content-center"
          >
            <h1 className="text-[#f32c46] font-bold text-xl ">UTILITY PAGES</h1>
            <div className=" w1 flex flex-col items-start justify-around   ">
              <Link className="shif">START HERE</Link>
              <Link className="shif">404 NOT FOUND</Link>
              <Link className="shif">PASSWORD PROTECTED</Link>
              <Link className="shif">LICENSES</Link>
              <Link className="shif">CHANGELOG</Link>
              <Link className="border-b-2 border-white font-bold ">
                BROWSE MORE TEMPLATE
              </Link>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="g3 grid justify-items-start content-center"
          >
            <h1 className="text-[#f32c46] font-bold text-xl">FOLLOW US</h1>
            <div className=" flex flex-col items-start justify-around  w">
              <Link className=" shift flex items-center justify-around ">
                <div className="icon w-[30px] h-[30px] bg-[#f32c46] flex items-center justify-center">
                  <BiLogoFacebook className="text-xl" />
                </div>
                <p className=" shift flex items-center justify-around px-3">
                  FACEBOOK
                </p>
              </Link>
              <Link className=" shift flex items-center justify-around ">
                <div className="icon w-[30px] h-[30px] bg-[#f32c46] flex items-center justify-center">
                  <FaTwitter className="text-xl" />
                </div>
                <p className=" shift flex items-center justify-around px-3 ">
                  TWITTER
                </p>
              </Link>
              <Link className=" shift flex items-center justify-around ">
                <div className="icon w-[30px] h-[30px] bg-[#f32c46] flex items-center justify-center">
                  <BsInstagram className="text-xl" />
                </div>
                <p className=" shift flex items-center justify-around px-3 ">
                  INSTAGRAM
                </p>
              </Link>
              <Link className=" shift flex items-center justify-around ">
                <div className="icon w-[30px] h-[30px] bg-[#f32c46] flex items-center justify-center">
                  <FaYoutube className="text-xl" />
                </div>
                <p className=" shift flex items-center justify-around px-3 ">
                  YOU TUBE
                </p>
              </Link>
              <Link className=" shift flex items-center justify-around ">
                <div className="icon w-[30px] h-[30px] bg-[#f32c46] flex items-center justify-center">
                  <FaTwitch className="text-xl" />
                </div>
                <p className=" shift flex items-center justify-around px-3 ">
                  TWITCH
                </p>
              </Link>
              <Link className=" shift flex items-center justify-around ">
                <div className="icon w-[30px] h-[30px] bg-[#f32c46] flex items-center justify-center">
                  <FaTiktok className="text-xl" />
                </div>
                <p className=" shift flex items-center justify-around px-3 ">
                  TICTOK
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        
        className="  border-t-[1px] border-[#282d34] w-[95vw] flex items-center justify-center h-[15vh]"
      >
        <p className=" md:font-bold font-normal md:text-xl text-sm">
          Copyright © eSports | Designed by <span>BRIX Templates</span> -
          Powered by <span>Webflow</span>
        </p>
      </section>
    </footer>
  );
}

export default Footer;
