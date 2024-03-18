"use client"
import Image from "next/image";
import React, { useState } from "react";

import { MdMailOutline } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";

import logo from "./logo1.png";
import Link from "next/link";

const Topbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuStatus = () => {
    setMenuOpen((prevState) => !prevState)
  }
  
  return (
    <>
    <div className=" hidden md:block">
      <div className="  w-screen h-24 flex justify-center font-roboto">
      <div className=" w-[80%] flex justify-between items-center">
        <div className=" flex gap-4 justify-center items-center">
          <Image className=" w-8 md:w-12" src={logo} alt="logo" />
          <div className=" felx flex-col gap-1">
            {/* <p className=" text-sm font-bold text-navcolor text-right">Established in 2009</p> */}
            <h1 className="  text-lg md:text-3xl font-bold text-navcolor font-dm">
              Ebrains Techno Solution Pvt. Ltd.
            </h1>
            {/* <p className=" text-sm font-bold text-navcolor text-right">An ISO 9001:2008 Certified Company</p> */}
          </div>
        </div>
        {/* logos  */}
        <div className=" flex gap-12">
          {/* mail  */}
          <div className="flex items-center gap-4">
            <MdMailOutline size={40} color="#2e8ece" />
            <div className=" text-sm md:text-lg">
              <h2 className=" font-bold">EMAIL SUPPORT</h2>
              <p className=" text-[]">info@ebrainstech.co.in</p>
            </div>
          </div>
          {/* call  */}
          <div className="flex items-center gap-4">
            <IoCall size={30} color="#2e8ece" />
            <div className=" text-sm md:text-lg">
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
    </div>
    
    {/* responsive top bar  */}

    <div className=" sm:hidden flex justify-between items-center mt-4 mb-7 px-7">

    <div className=" flex gap-4 justify-center items-center">
          <Image className=" w-8" src={logo} alt="logo" />
          <div className=" felx flex-col gap-1">
            {/* <p className=" text-sm font-bold text-navcolor text-right">Established in 2009</p> */}
            <h1 className="  text-lg font-bold text-navcolor font-dm">
              Ebrains Techno Solution Pvt. Ltd.
            </h1>
            {/* <p className=" text-sm font-bold text-navcolor text-right">An ISO 9001:2008 Certified Company</p> */}
          </div>
        </div>
        {/* menu icon  */}
        <div className=" cursor-pointer">
          <IoIosMenu onClick={handleMenuStatus} size={30} color="#212635" />
        </div>
    </div>
    {/* slider menu  */}
    { menuOpen ? (<div>
      <div className=" flex justify-center items-center bg-navcolor text-white mx-6 mb-2 rounded-3xl animate-slide-down">
          <ul className=" flex flex-col gap-2 py-2">
            <Link href='/'><li>HOME</li></Link>
            <Link href='/services/training'><li>COURSES</li></Link>
            <Link href='/services'><li>SERVICES</li></Link>
            <Link href='/m-tech-projects'><li>M-TECH PROJECTS</li></Link>
            <Link href='/career'><li>CAREER</li></Link>
            <Link href='/contact'><li>CONTACT</li></Link>
          </ul>
    </div>
    </div>) : ''}
    </>
  );
};

export default Topbar;
