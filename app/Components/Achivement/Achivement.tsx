import React from "react";
import { FaLeaf } from "react-icons/fa";

const Achivement = () => {
  return (
    <div
      className=" h-screen w-screen bg-cover bg-center bg-fixed font-quicksand "
      style={{ backgroundImage: `url(/images/bgoverlay-2.jpg)` }}
    >
      {/* CTA  */}
      <div className=" relative w-screen h-[50%] flex flex-col justify-center items-center">
        <FaLeaf size={45} color="white" className=" z-10" />
        <h3 className=" text-[1.71rem] w-[50%] text-center font-bold text-white z-10 mt-2">
          We&apos;re here to help you reach your goal and reach your full
          potential.
        </h3>
        <p className="text-md w-[60%] text-center text-white z-10 mt-2">
          We provide innovative solutions for sustainable progress. Our
          professional team works to increase productivity and cost
          effectiveness on the market
        </p>
        <div className="absolute top-0 left-0 w-full h-full bg-slate-950 opacity-75 z-0 "></div>
      </div>

      {/* Stats  */}
      <div className=" w-screen h-[50%] ">
        <div className=" w-[85%] h-full flex justify-center items-center gap-6">
          <div>
            <h2 className=" w-[20rem] h-[168px] font-bold text-2xl md:text-4xl text-navcolor">
              We Have Great Achivment To Show!!
            </h2>
          </div>
          <div className=" flex gap-8">
            <div className=" flex flex-col gap-2">
              <h1 className=" font-bold text-2xl md:text-4xl text-newblue">
                12389
              </h1>
              <p>Satisfied Students</p>
            </div>
            <div className=" flex flex-col gap-2 ">
              <h1 className=" font-bold text-2xl md:text-4xl text-newblue">
                1850
              </h1>
              <p>Student Across</p>
            </div>
            <div className=" flex flex-col gap-2">
              <h1 className=" font-bold text-2xl md:text-4xl text-newblue">
                15
              </h1>
              <p>Years Experience</p>
            </div>
            <div className=" flex flex-col gap-2">
              <h1 className=" font-bold text-2xl md:text-4xl text-newblue">
                878
              </h1>
              <p>Persons Mentored</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achivement;
