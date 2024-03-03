"use client";
import React, { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";

const CircularArrow = () => {

    const [hoveredLeft, setHoveredLeft] = useState(false);

    const handleMouseEnterLeft = () => {
        setHoveredLeft(true);
      };
    
      const handleMouseLeaveLeft = () => {
        setHoveredLeft(false);
      };

      const iconStyleleft = {
        color: hoveredLeft ? "white" : "black",
      };


  return (
    <div
        onMouseEnter={handleMouseEnterLeft}
        onMouseLeave={handleMouseLeaveLeft}
        className="w-12 h-12 rounded-full border border-navcolor hover:border-bluebackground bg-white hover:bg-newblue flex justify-center items-center cursor-pointer  "
      >
        <IoIosArrowForward size={20} style={iconStyleleft} />
      </div>
    
  )
}

export default CircularArrow