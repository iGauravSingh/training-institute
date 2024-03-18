import React from "react";
import { VscSmiley } from "react-icons/vsc";
import { FaRegLightbulb } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { FaRegPaperPlane } from "react-icons/fa";

const WhyChoose = () => {
  return (
    <div className=" w-screen border-b-2 flex justify-center ">
      <div className="w-[85%] h-full flex  justify-center items-center ">
        <div className=" flex flex-col justify-center items-start">
          <h3 className=" text-newblue font-semibold mt-8">WHY CHOOSE US</h3>
          {/* card containr  */}
          <div className="container mx-auto py-8 flex justify-center">
            <div className=" grid grid-cols-1 md:grid-cols-4  gap-8 pt-16">
              
                {/* card 1  */}
                <div className=" w-[292px] h-[198px] group flex flex-col justify-start">
                  {/* logo in circle  */}
                  <div className=" w-14 h-14 rounded-full bg-newblue group-hover:bg-navcolor flex justify-center items-center group-hover:animate-blink-icon">
                    <VscSmiley size={25} color="white" />
                  </div>
                  {/* description  */}
                  <h3 className=" group-hover:text-newblue font-semibold mt-7">
                    COMITTMENT
                  </h3>
                  <p className=" mt-4 text-sm ">Life Time Enrollment</p>
                </div>

                {/* // */}
                {/* card 2  */}
                <div className=" w-[292px] h-[198px] group  flex flex-col justify-start">
                  {/* logo in circle  */}
                  <div className=" w-14 h-14 rounded-full bg-newblue group-hover:bg-navcolor flex justify-center items-center group-hover:animate-blink-icon">
                    <FaRegLightbulb size={30} color="white" />
                  </div>
                  {/* description  */}
                  <h3 className=" group-hover:text-newblue font-semibold mt-7">
                    EXPERT GUDIENCE
                  </h3>
                  <p className=" mt-4 text-sm ">
                    Training By Expert IITians/Industrial Experts.
                  </p>
                </div>

                {/* // */}

                {/* card 3  */}
                <div className=" w-[292px] h-[198px] group  flex flex-col justify-start">
                  {/* logo in circle  */}
                  <div className=" w-14 h-14 rounded-full bg-newblue group-hover:bg-navcolor flex justify-center items-center group-hover:animate-blink-icon">
                    <GiGraduateCap size={30} color="white" />
                  </div>
                  {/* description  */}
                  <h3 className=" group-hover:text-newblue font-semibold mt-7">
                    INDUSTRY EXPOSURE
                  </h3>
                  <p className=" mt-4 text-sm ">
                    Our Training are made with current technology in mind.
                  </p>
                </div>

                {/* // */}

                {/* card 4  */}
                <div className=" w-[292px] h-[198px] group flex flex-col justify-start">
                  {/* logo in circle  */}
                  <div className=" w-14 h-14 rounded-full bg-newblue group-hover:bg-navcolor flex justify-center items-center group-hover:animate-blink-icon">
                    <FaRegPaperPlane size={25} color="white" />
                  </div>
                  {/* description  */}
                  <h3 className=" group-hover:text-newblue font-semibold mt-7">
                    PLACEMENT ASSISTANCE
                  </h3>
                  <p className=" mt-4 text-sm ">
                    We prepare students for jobs and good career.
                  </p>
                </div>

                {/* // */}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
