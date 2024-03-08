import Image from "next/image";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

import card1 from "./why-thumb-1.jpg";
import card2 from "./why-thumb-2.jpg";
import card3 from "./why-thumb-3.jpg";
import CircularArrow from "../CircularArrow/CircularArrow";

const Program = () => {
  return (
    <div className=" h-[551px] w-screen">
      <div className="w-full h-[550px] bg-bluebackground  ">
        <div className=" flex justify-center gap-8 pt-16">
                  {/* card 1  */}
        <div className=" w-[22rem] group flex flex-col gap-6 transition-transform duration-300 transform hover:-translate-y-2">
          {/* image  */}
          <div className=" relative w-[22rem] h-52 overflow-hidden rounded-2xl">
            <Image
              className=" w-full h-full object-cover transition-transform duration-300 transform hover:scale-110 rounded-2xl  hover:brightness-50"
              src={card1}
              alt="card"
            />
          </div>
          <div className="">
            {/* detail container  */}
            <div className="flex">
              {/* detail  */}
              <div className=" flex flex-col w-[19rem]">
                <h3 className=" font-bold text-lg group-hover:text-newblue">
                Ph.D. and M. Tech. Thesis & Project
                </h3>
                <p className=" flex flex-wrap">
                  We specialize in Ph.D./M.Tech support services.
                </p>
              </div>
              {/* circular arrow  */}
              <div className="w-12 h-12 rounded-full border border-navcolor group-hover:border-bluebackground group-hover:bg-newblue flex justify-center items-center cursor-pointer  ">
                <IoIosArrowForward size={20} />
              </div>
            </div>
          </div>
        </div>
        {/* card 2  */}
        <div className=" w-[22rem] group flex flex-col gap-6 transition-transform duration-300 transform hover:-translate-y-2">
          {/* image  */}
          <div className=" relative w-[22rem] h-52 overflow-hidden rounded-2xl">
            <Image
              className=" w-full h-full object-cover transition-transform duration-300 transform hover:scale-110 rounded-2xl  hover:brightness-50"
              src={card2}
              alt="card"
            />
          </div>
          <div className="">
            {/* detail container  */}
            <div className="flex">
              {/* detail  */}
              <div className=" flex flex-col w-[19rem]">
                <h3 className=" font-bold text-lg group-hover:text-newblue">
                  Industrial Training
                </h3>
                <p className=" flex flex-wrap">
                Our Job Oriented training is designed for both pursuing and pass-out students
                </p>
              </div>
              {/* circular arrow  */}
              <div className="w-12 h-12 rounded-full border border-navcolor group-hover:border-bluebackground group-hover:bg-newblue flex justify-center items-center cursor-pointer  ">
                <IoIosArrowForward size={20} />
              </div>
            </div>
          </div>
        </div>
        {/* card 3  */}
        <div className=" w-[22rem] group flex flex-col gap-6 transition-transform duration-300 transform hover:-translate-y-2">
          {/* image  */}
          <div className=" relative w-[22rem] h-52 overflow-hidden rounded-2xl">
            <Image
              className=" w-full h-full object-cover transition-transform duration-300 transform hover:scale-110 rounded-2xl  hover:brightness-50"
              src={card3}
              alt="card"
            />
          </div>
          <div className="">
            {/* detail container  */}
            <div className="flex">
              {/* detail  */}
              <div className=" flex flex-col w-[19rem]">
                <h3 className=" font-bold text-lg group-hover:text-newblue">
                Summer Interenship
                </h3>
                <p className=" flex flex-wrap">
                  We provide best summer training .
                </p>
              </div>
              {/* circular arrow  */}
              <div className="w-12 h-12 rounded-full border border-navcolor group-hover:border-bluebackground group-hover:bg-newblue flex justify-center items-center cursor-pointer  ">
                <IoIosArrowForward size={20} />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
