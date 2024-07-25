import React, { useState } from "react";

const Button = ({ text }) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      style={{
        fontFamily: " Barlow sans-serif",
        // fontFamily: "Chakra Petch sans-serif",
        textAlign: "center",
        letterSpacing: "0.04em",
        transformStyle: "preserve-3d",
        fontWeight: "700",
        // fontSize: "20px",
        lineHeight: "1.111em",
        // padding: "23px 48px",
        transition: "box-shadow 0.15s, transform 0.15s",
        transform: hover ? "scale3d(1.06, 1.06, 1.01)" : undefined,
        boxShadow: hover ? "0 4px 18px rgba(223, 0, 0, 0.6)" : undefined,
        backgroundColor: hover ? "var(--primary-1)" : "#f32c46",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className=" md:text-[20px] sm:text-[17px] text-[16px] border-2 border-[#f32c46] bg-[#f32c46] font-bold 
      xl:py-[23px]  md:py-[25px] sm:py-[20px] py-[19px] sm:px-[80px] px-[70px]  
      xl:px-[48px]   md:px-[48px]  "
    >
      {text}
    </button>
  );
};

export default Button;
