import Image from "next/image";
import React from "react";

import { MdMailOutline } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { LuClock9 } from "react-icons/lu";

import logo from "./logo.png";

const Topbar = () => {
  return (
    <div className=" w-screen h-24 flex justify-center">
      <div className=" w-[80%] flex justify-between items-center">
        <Image src={logo} alt="logo" />
        {/* logos  */}
        <div className=" flex gap-12">
          {/* mail  */}
          <div className="flex items-center gap-4">
            <MdMailOutline size={40} color="#2e8ece" />
            <div>
              <h2 className=" font-bold">EMAIL SUPPORT</h2>
              <p>info@trainer.com</p>
            </div>
          </div>
          {/* call  */}
          <div className="flex items-center gap-4">
            <IoCall size={30} color="#2e8ece" />
            <div>
              <h2 className=" font-bold">CALL SUPPORT</h2>
              <p>+91 897 896 6547</p>
            </div>
          </div>
          {/* hours  */}
          <div className="flex items-center gap-4">
            <LuClock9 size={30} color="#2e8ece" />
            <div>
              <h2 className=" font-bold">OPERATING HOURS</h2>
              <p>Mon - Fri 08:00 - 17:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
