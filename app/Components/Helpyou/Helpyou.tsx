import React from "react";
import { FaLeaf } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaRegCircle } from "react-icons/fa6";

const Helpyou = () => {
  return (
    <div className=" w-screen h-[480px] border-b-2 font-quicksand ">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className=" w-[85%] flex flex-col justify-start">
          <h3 className=" text-newblue font-bold text-lg">WE CAN HELP YOU</h3>
          {/* card containr  */}
          <div className=" flex gap-6 mt-6">
            {/* card 1  */}
            <div className=" w-[25%] h-[310px] group flex flex-col justify-center items-center border border-slate-200 rounded-2xl px-8 py-5">
              {/* logo  */}
              <FaLeaf size={72} color="#2e8ece" />
              {/* description  */}
              <h3 className=" group-hover:text-newblue font-semibold mt-7">
                Life Coaching
              </h3>
              <div className="w-[200px]">
                <p className=" mt-4 text-sm  text-center hidden group-hover:block transition-transform duration-350 ease-in-out ">
                Create anything from social media posts business.
              </p>
              </div>
              
            </div>

            {/* // */}
            {/* card 2  */}
            <div className=" w-[25%] h-[310px] group flex flex-col justify-center items-center border border-slate-200 rounded-2xl px-8 py-5">
              {/* logo  */}
              <GiGraduateCap size={72} color="#2e8ece" />
              {/* description  */}
              <h3 className=" group-hover:text-newblue font-semibold mt-7">
                Life Coaching
              </h3>
              <div className="w-[200px]">
                <p className=" mt-4 text-sm  text-center hidden group-hover:block transition-transform duration-350 ease-in-out ">
                Create anything from social media posts business.
              </p>
              </div>
              
            </div>

            {/* // */}

            {/* card 3  */}
            <div className=" w-[25%] h-[310px] group flex flex-col justify-center items-center border border-slate-200 rounded-2xl px-8 py-5">
              {/* logo  */}
              <FaHeart size={72} color="#2e8ece" />
              {/* description  */}
              <h3 className=" group-hover:text-newblue font-semibold mt-7">
                Life Coaching
              </h3>
              <div className="w-[200px]">
                <p className=" mt-4 text-sm  text-center hidden group-hover:block transition-transform duration-350 ease-in-out ">
                Create anything from social media posts business.
              </p>
              </div>
              
            </div>

            {/* // */}

            {/* card 4  */}
            <div className=" w-[25%] h-[310px] group flex flex-col justify-center items-center border border-slate-200 rounded-2xl px-8 py-5">
              {/* logo  */}
              <IoIosPeople size={72} color="#2e8ece" />
              {/* description  */}
              <h3 className=" group-hover:text-newblue font-semibold mt-7">
                Life Coaching
              </h3>
              <div className="w-[200px]">
                <p className=" mt-4 text-sm  text-center hidden group-hover:block transition-transform duration-350 ease-in-out ">
                Create anything from social media posts business.
              </p>
              </div>
              
            </div>

            {/* // */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Helpyou;
