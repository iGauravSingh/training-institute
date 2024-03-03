import React from "react";
import { VscSmiley } from "react-icons/vsc";
import { FaRegLightbulb } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { FaRegPaperPlane } from "react-icons/fa";

const WhyChoose = () => {
  return (
    <div className=" w-screen h-[480px] border-b-2 ">
      <div className="w-full h-full flex flex-col justify-center items-center">
      <div className=" flex flex-col justify-start">
      <h3 className=" text-newblue font-semibold">WHY CHOOSE US</h3>
        {/* card containr  */}
        <div className=" flex gap-1 mt-6">
          {/* card 1  */}
          <div className=" w-[292px] h-[198px] group flex flex-col justify-start">
            {/* logo in circle  */}
            <div className=" w-14 h-14 rounded-full bg-newblue group-hover:bg-navcolor flex justify-center items-center group-hover:scale-75 transition-transform duration-350 ease-in-out">
              <VscSmiley size={25} color="white" />
            </div>
            {/* description  */}
            <h3 className=" group-hover:text-newblue font-semibold mt-7">
              BEING HAPPY
            </h3>
            <p className=" mt-4 text-sm ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry orem Ipsum has been.
            </p>
          </div>

          {/* // */}
          {/* card 2  */}
          <div className=" w-[292px] h-[198px] group  flex flex-col justify-start">
            {/* logo in circle  */}
            <div className=" w-14 h-14 rounded-full bg-newblue group-hover:bg-navcolor flex justify-center items-center">
              <FaRegLightbulb size={30} color="white" />
            </div>
            {/* description  */}
            <h3 className=" group-hover:text-newblue font-semibold mt-7">
              FULFILLING POTENTIAL
            </h3>
            <p className=" mt-4 text-sm ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry orem Ipsum has been.
            </p>
          </div>

          {/* // */}

          {/* card 3  */}
          <div className=" w-[292px] h-[198px] group  flex flex-col justify-start">
            {/* logo in circle  */}
            <div className=" w-14 h-14 rounded-full bg-newblue group-hover:bg-navcolor flex justify-center items-center">
              <GiGraduateCap size={30} color="white" />
            </div>
            {/* description  */}
            <h3 className=" group-hover:text-newblue font-semibold mt-7">
              MAKING CHANCES
            </h3>
            <p className=" mt-4 text-sm ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry orem Ipsum has been.
            </p>
          </div>

          {/* // */}

          {/* card 4  */}
          <div className=" w-[292px] h-[198px] group flex flex-col justify-start">
            {/* logo in circle  */}
            <div className=" w-14 h-14 rounded-full bg-newblue group-hover:bg-navcolor flex justify-center items-center group-hover:scale-75 transition-transform duration-350 ease-in-out">
              <FaRegPaperPlane size={25} color="white" />
            </div>
            {/* description  */}
            <h3 className=" group-hover:text-newblue font-semibold mt-7">
              FINDING BALANCE
            </h3>
            <p className=" mt-4 text-sm ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry orem Ipsum has been.
            </p>
          </div>

          {/* // */}
        </div>
      </div>
      </div>
    </div>
  );
};

export default WhyChoose;
