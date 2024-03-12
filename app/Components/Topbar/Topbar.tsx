import Image from "next/image";
import React from "react";

import { MdMailOutline } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { LuClock9 } from "react-icons/lu";

import logo from "./logo1.png";

const Topbar = () => {
  return (
    <div className=" w-screen h-24 flex justify-center font-roboto">
      <div className=" w-[80%] flex justify-between items-center">
        <div className=" flex gap-4 justify-center items-center">
        <Image className=" w-14" src={logo} alt="logo" />
        <div className=" felx flex-col gap-1">
          {/* <p className=" text-sm font-bold text-navcolor text-right">Established in 2009</p> */}
          <h1 className=" text-3xl font-bold text-navcolor font-dm">Ebrains Techno Solution Pvt. Ltd.</h1>
          {/* <p className=" text-sm font-bold text-navcolor text-right">An ISO 9001:2008 Certified Company</p> */}
        </div>
        </div>
        {/* logos  */}
        <div className=" flex gap-12">
          {/* mail  */}
          <div className="flex items-center gap-4">
            <MdMailOutline size={40} color="#2e8ece" />
            <div>
              <h2 className=" font-bold">EMAIL SUPPORT</h2>
              <p className=" text-[]">info@ebrainstech.co.in</p>
            </div>
          </div>
          {/* call  */}
          <div className="flex items-center gap-4">
            <IoCall size={30} color="#2e8ece" />
            <div>
              <h2 className=" font-bold">CALL SUPPORT</h2>
              <p>+91 979 320 6228</p>
            </div>
          </div>
          {/* hours  */}
          {/* <div className="flex items-center gap-4">
            <LuClock9 size={30} color="#2e8ece" />
            <div>
              <h2 className=" font-bold">OPERATING HOURS</h2>
              <p>Mon - Fri 08:00 - 17:00</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
