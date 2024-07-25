


import React from "react";
import { Link } from "react-router-dom";
import Polo from "../assets/polo.png";
import Polo2 from "../assets/polo2.png";
import Polo3 from "../assets/polo3.png";
import Polo4 from "../assets/polo4.png";
import Cap1 from "../assets/cap1.png";
import Cap2 from "../assets/cap2.png";
import Bag1 from "../assets/bag1.png";
import Bag2 from "../assets/bag2.png";

function Shop() {
  return (
    <>
      <div className="w-full h-auto flex flex-col items-center justify-around">
        <div className="w-full h-[90vh] flex items-center bg-[url('./assets/bg3.jpeg')] bg-cover bg-center justify-start  ">
          <div className="w-[90vw] md:w-[70vw] lg:w-[55vw] h-auto flex flex-col  text-justify items-start justify-end py-6  pt-[25vh] pl-14 ">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold pb-5 text-white">
              SPONSORS
            </h1>
            <p className="md:text-2xl text-sm text-white/70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et quis
              odio vestibulum nunc, neque integer purus.
            </p>
          </div>
        </div>

        <section className="py-16 w-[95vw] flex items-center justify-center">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12 ">LATEST MERCH</h2>
            <div className="flex flex-wrap justify-center items-center   ">
              <div className=" sh  rounded-lg shadow-lg max-w-[18rem] mx-3">
                <img
                  src={Polo}
                  alt="Esports Team Shirt"
                  className=" sh w-full h-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-2 text-center">
                  ESPORTS TEAM SHIRT <br />
                  Black Line <br />
                  <span className="tw">$19.99 USD</span>
                </h3>
              </div>
              <div className=" sh rounded-lg shadow-lg max-w-[18rem] mx-3">
                <img
                  src={Polo2}
                  alt="Esports Team Shirt"
                  className="w-full h-auto mb-4 sh"
                />
                <h3 className=" text-xl font-bold mb-2 text-center">
                  ESPORTS TEAM SHIRT <br />
                  White Line <br />
                  <span className="tw">$19.99 USD</span>
                </h3>
              </div>
              <div className=" sh  rounded-lg shadow-lg max-w-[18rem] mx-3">
                <img
                  src={Polo3}
                  alt="Esports Team Hoodie"
                  className="w-full h-auto mb-4 sh"
                />
                <h3 className="text-xl font-bold mb-2 text-center">
                  ESPORTS TEAM HOOIE <br />
                  Black Line <br />
                  <span className="tw">$59.99 USD</span>
                </h3>
              </div>
              <div className=" sh rounded-lg shadow-lg max-w-[18rem] mx-3">
                <img
                  src={Polo4}
                  alt="Esports Team Hoodie"
                  className="w-full h-auto mb-4 sh"
                />
                <h3 className="text-xl font-bold mb-2 text-center">
                  ESPORTS TEAM HOOIE <br />
                  white Line <br />
                  <span className="tw">$59.99 USD</span>
                </h3>
              </div>
            </div>

            <div className="flex flex-wrap justify-center items-center  pt-10  ">
              <div className=" sh  rounded-lg shadow-lg max-w-[18rem] mx-3">
                <img
                  src={Cap1}
                  alt="Esports Team Shirt"
                  className=" sh w-full h-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-2 text-center">
                  ESPORTS TEAM SHIRT <br />
                  BACKPACK Black Line <br />
                  <span className="tw">$9.99 USD</span>
                </h3>
              </div>
              <div className=" sh rounded-lg shadow-lg max-w-[18rem] mx-3">
                <img
                  src={Cap2}
                  alt="Esports Team Shirt"
                  className="w-full h-auto mb-4 sh"
                />
                <h3 className=" text-xl font-bold mb-2 text-center">
                  ESPORTS TEAM SHIRT <br />
                  WhitePACK White Line <br />
                  <span className="tw">$99.99 USD</span>
                </h3>
              </div>
              <div className=" sh  rounded-lg shadow-lg max-w-[18rem] mx-3">
                <img
                  src={Bag1}
                  alt="Esports Team Hoodie"
                  className="w-full h-auto mb-4 sh"
                />
                <h3 className="text-xl font-bold mb-2 text-center">
                  ESPORTS TEAM HOOIE <br />
                  Black Line <br />
                  <span className="tw">$99.99 USD</span>
                </h3>
              </div>
              <div className=" sh rounded-lg shadow-lg max-w-[18rem] mx-3">
                <img
                  src={Bag2}
                  alt="Esports Team Hoodie"
                  className="w-full h-auto mb-4 sh"
                />
                <h3 className="text-xl font-bold mb-2 text-center">
                  ESPORTS TEAM HOOIE <br />
                  white Line <br />
                  <span className="tw">$99.99 USD</span>
                </h3>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className=" py-16 h-[100vh]  w-[95vw] flex items-center justify-center">
            <div className="w-full h-[60vh] flex items-center bg-[url('./assets/across.jpeg')] bg-cover bg-center justify-center   ">
              <section>
                <div className="py-16 h-[100vh] w-[95vw] flex items-center justify-center">
                  <div className="w-full h-[60vh] flex items-center bg-[url('./assets/across.jpeg')] bg-cover bg-center justify-center">
                    <div className="w-[90vw] flex flex-col xl:flex-row items-center justify-between">
                      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold pb-5 text-white w-full md:w-[50vw] xl:w-[35vw] text-center xl:text-left">
                        SUBSCRIBE TO RECEIVE NEW MERCH RELEASES!
                      </h1>
                      <form
                        action=""
                        className="w-full md:w-[50vw] xl:w-[600px] flex flex-col xl:flex-row items-center justify-center"
                      >
                        <input
                          className="w-full xl:w-[420px] px-4 py-3 md:px-8 md:py-5 xl:py-7 mb-4 xl:mb-0 focus:outline-none"
                          type="email"
                          name=""
                          id=""
                          placeholder="ENTER EMAIL"
                        />
                        <Link className="w-full xl:w-auto text-center border-4 border-[#f32c46] bg-[#f32c46] px-4 py-3 xl:px-8 xl:py-6">
                          SUBSCRIBE
                        </Link>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
      {/* mx-auto px-4 py-16  container*/}
    </>
  );
}

export default Shop;