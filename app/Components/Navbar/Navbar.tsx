"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaCaretDown } from "react-icons/fa";
import Login from "../Login/Login";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import Link from "next/link";



const html = document.documentElement

const Navbar = () => {
  
  const [showLogin, setShowLogin] = useState(false);
  const { user, isLoading } = useSelector((state: RootState) => state.user.value)

  const loginStatus = () => {
    setShowLogin(true);
    html.style.overflow = "hidden";
  };

 

  return (
    <div className=" w-screen h-14 flex justify-center font-roboto">
      <p></p>
      <div className=" w-[85%] h-full flex">
        {/* left part  */}
        <div className=" bg-navcolor h-full w-[85%] rounded-l-full flex justify-start text-white items-center gap-8 z-30">
          {/* home  */}
          <div className=" h-full group relative flex flex-col justify-center items-center ">
            <div className=" flex gap-2 items-center ml-8 cursor-pointer">
              <h2 className=" text-[14px] font-bold leading-5">HOME</h2>
            </div>
          </div>
          {/* about  */}
          <div className=" h-full group relative flex flex-col justify-center items-center ">
            <div className=" flex gap-2 items-center cursor-pointer">
              <h2 className=" text-[14px] font-bold leading-5">ABOUT</h2>
              <FaCaretDown />
            </div>
            {/* drop down  */}
            <div className=" hidden group-hover:block animate-slide-down absolute z-20 top-14 left-0 bg-bluebackground w-48 text-navcolor">
              <div className=" flex flex-col gap-1 justify-center items-start text-[14px]">
                <p className=" cursor-pointer hover:bg-newblue hover:text-bluebackground w-full px-2 py-1">
                  COMPANY PROFILE
                </p>
                <p className=" cursor-pointer hover:bg-newblue hover:text-bluebackground w-full px-2 py-1">
                  VISION
                </p>
                <p className=" cursor-pointer hover:bg-newblue hover:text-bluebackground w-full px-2 py-1">
                  TRAINING
                </p>
              </div>
            </div>
          </div>

          {/* COURSES  */}
          <div className=" h-full group relative flex flex-col justify-center items-center ">
            <div className=" flex gap-2 items-center cursor-pointer">
              <h2 className=" text-[14px] font-bold leading-5">COURSES</h2>
              <FaCaretDown />
            </div>
            {/* drop down  */}
            <div className=" hidden group-hover:block animate-slide-down absolute z-20 top-14 left-0 bg-bluebackground w-48 text-navcolor">
              <div className=" flex flex-col gap-1 justify-center items-start text-[14px]">
                <p className=" cursor-pointer hover:bg-newblue hover:text-bluebackground w-full px-2 py-1">
                  MATLAB
                </p>
                <p className=" cursor-pointer hover:bg-newblue hover:text-bluebackground w-full px-2 py-1">
                  VHDL
                </p>
                <p className=" cursor-pointer hover:bg-newblue hover:text-bluebackground w-full px-2 py-1">
                  VLSI
                </p>
                <p className=" cursor-pointer hover:bg-newblue hover:text-bluebackground w-full px-2 py-1">
                  PYTHON
                </p>
                <p className=" cursor-pointer hover:bg-newblue hover:text-bluebackground w-full px-2 py-1">
                  JAVA
                </p>
                <p className=" cursor-pointer hover:bg-newblue hover:text-bluebackground w-full px-2 py-1">
                  PHP
                </p>
                <p className=" cursor-pointer hover:bg-newblue hover:text-bluebackground w-full px-2 py-1">
                  IOT
                </p>
                <p className=" cursor-pointer hover:bg-newblue hover:text-bluebackground w-full px-2 py-1">
                  EMBEDDED SYSTEM
                </p>
                <p className=" cursor-pointer hover:bg-newblue hover:text-bluebackground w-full px-2 py-1">
                  MECHINE LEARNING
                </p>
                <p className=" cursor-pointer hover:bg-newblue hover:text-bluebackground w-full px-2 py-1">
                  CLOUD COMPUTING
                </p>
              </div>
            </div>
          </div>

          {/* SERVICES  */}
          <div className=" h-full group relative flex flex-col justify-center items-center ">
            <div className=" flex gap-2 items-center cursor-pointer">
              <h2 className=" text-[14px] font-bold leading-5">SERVICES</h2>
              <FaCaretDown />
            </div>
            {/* drop down  */}
            <div className=" hidden group-hover:block animate-slide-down absolute z-20 top-14 left-0 bg-bluebackground w-64 text-navcolor">
              <div className=" flex flex-col gap-1 justify-center items-start text-[14px]">
                <p className=" cursor-pointer hover:bg-newblue hover:text-bluebackground w-full px-2 py-1">
                  CORPRATE
                </p>
                <p className=" cursor-pointer hover:bg-newblue hover:text-bluebackground w-full px-2 py-1">
                  SUMMER
                </p>
                <p className=" cursor-pointer hover:bg-newblue hover:text-bluebackground w-full px-2 py-1">
                  INDUSTRIAL
                </p>
                <p className=" cursor-pointer hover:bg-newblue hover:text-bluebackground w-full px-2 py-1">
                  PHD & M-TECH THESIS
                </p>
                <p className=" cursor-pointer hover:bg-newblue hover:text-bluebackground w-full px-2 py-1">
                  PLAGIARISM REMOVER/PAPER WRITING
                </p>
              </div>
            </div>
          </div>
          {/* M-TECH PROJECTS  */}
          <div className=" h-full group relative flex flex-col justify-center items-center ">
            <div className=" flex gap-2 items-center cursor-pointer">
              <h2 className=" text-[14px] font-bold leading-5">
                M-TECH PROJECTS
              </h2>
            </div>
          </div>
          {/* CAREER  */}
          <div className=" h-full group relative flex flex-col justify-center items-center ">
            <div className=" flex gap-2 items-center cursor-pointer">
              <h2 className=" text-[14px] font-bold leading-5">CAREER</h2>
            </div>
          </div>

          {/* CONTACT  */}
          <div className=" h-full group relative flex flex-col justify-center items-center ">
            <div className=" flex gap-2 items-center cursor-pointer">
              <h2 className=" text-[14px] font-bold leading-5">CONTACT</h2>
            </div>
          </div>
        </div>

        {/* right part  */}
        <div className=" group bg-newblue h-full w-[15%] rounded-r-full flex justify-center items-center cursor-pointer">
          {showLogin ? (
            <div className="w-screen h-screen backdrop-brightness-50  absolute inset-0 z-50">
            <div className="">
              <Login setShowLogin={setShowLogin} />
            </div>
          </div>
          ) : (
            <div>
              { (user && !isLoading) ? (
                <Link href="/dashboard">
                <h3
                
                className=" text-white group-hover:text-navcolor font-bold text-[14px] leading-5"
              >
                DASHBOARD
              </h3>
              </Link>
              ) : (
                <h3
                onClick={loginStatus}
                className=" text-white group-hover:text-navcolor font-bold text-[14px] leading-5"
              >
                LOGIN
              </h3>
              )}
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
