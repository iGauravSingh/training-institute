"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import ButtonBlue from "../Button/Button2";
import ButtonGrey from "../Button/Button1";

const slide1 = "/images/slide-1.jpg";
const slide2 = "/images/slide-2.jpg";
const slide3 = "/images/slide-3.jpg";

const images = [
  {
    id: 1,
    heading: "Improve Your Personal Life",
    Decsription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, vitae!",
    image: slide1,
  },
  {
    id: 2,
    heading: "Improve Your Business",
    Decsription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, vitae!",
    image: slide2,
  },
  {
    id: 3,
    heading: "Transform Your Life",
    Decsription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, vitae!",
    image: slide3,
  },
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [textCaption, setTextCaption] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // 6 seconds

    console.log(currentImageIndex);
    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  const handleLeftClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1) % images.length);
  };

  const handleRightClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const [hoveredLeft, setHoveredLeft] = useState(false);
  const [hoveredRight, setHoveredRight] = useState(false);

  const handleMouseEnterLeft = () => {
    setHoveredLeft(true);
  };

  const handleMouseLeaveLeft = () => {
    setHoveredLeft(false);
  };

  const handleMouseEnterRight = () => {
    setHoveredRight(true);
  };

  const handleMouseLeaveRight = () => {
    setHoveredRight(false);
  };

  const iconStyleleft = {
    color: hoveredLeft ? "white" : "black",
  };
  const iconStyleright = {
    color: hoveredRight ? "white" : "black",
  };

  return (
    <div className=" relative">
      {/* <div className="bg-cover bg-center bg-fixed w-screen h-screen filter brightness-75"
     style={{ backgroundImage: `url(${images[currentImageIndex].image})` }}>

    </div> */}
      <div className="relative w-screen h-screen filter brightness-75 overflow-hidden">
        {images.map((img, index) => (
          <div
            key={img.id}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000 ${
              index === currentImageIndex ? "translate-x-0" : "translate-x-full"
            }`}
            style={{ backgroundImage: `url(${img.image})` }}
          >
            {/* Add text caption here */}
            <div className=" z-10 flex flex-col justify-center items-center h-full">
              <h3 className=" text-white font-bold text-6xl">{img.heading}</h3>
              <p className=" text-white font-bold text-lg mt-8">
                {img.Decsription}
              </p>
              {/* buttons  */}
              <div className="flex gap-8 mt-10">
                <ButtonBlue name="CONTACT US" />
                <ButtonGrey name="LEARN MORE" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* next button  */}
      <div
        onMouseEnter={handleMouseEnterLeft}
        onMouseLeave={handleMouseLeaveLeft}
        className=" absolute top-[50%] left-8 w-12 h-12 rounded-full bg-white hover:bg-newblue flex justify-center items-center cursor-pointer "
      >
        <IoIosArrowBack size={20} style={iconStyleleft} />
      </div>

      <div
        onMouseEnter={handleMouseEnterRight}
        onMouseLeave={handleMouseLeaveRight}
        className=" absolute top-[50%] right-8 w-12 h-12 rounded-full bg-white hover:bg-newblue flex justify-center items-center cursor-pointer  "
      >
        <IoIosArrowForward size={20} style={iconStyleright} />
      </div>
    </div>
  );
};

export default Hero;
