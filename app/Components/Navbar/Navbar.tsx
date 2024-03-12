"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaCaretDown } from "react-icons/fa";
import Login from "../Login/Login";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import Link from "next/link";



const html = typeof document !== 'undefined' ? document.documentElement : null;

const Navbar = () => {
  
  const [showLogin, setShowLogin] = useState(false);
  const { user, isLoading } = useSelector((state: RootState) => state.user.value)

  const loginStatus = () => {
    if(html){
      setShowLogin(true);
    html.style.overflow = "hidden";
    }
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
              <Link href='/'><h2 className=" text-[14px] font-bold leading-5">HOME</h2></Link>
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
              <Link href='/about/company-profile'className=" cursor-pointer hover:bg-newblue hover:text-bluebackground w-full px-2 py-1">
                  COMPANY PROFILE
                </Link>
                <Link href='/about/vision' className=" cursor-pointer hover:bg-newblue hover:text-bluebackground w-full px-2 py-1">
                  VISION
                </Link>
                {/* <Link href='/about/training' className=" cursor-pointer hover:bg-newblue hover:text-bluebackground w-full px-2 py-1">
                  TRAINING
                </Link> */}
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
              <Link href='/courses/django' className=" cursor-pointer hover:bg-newblue hover:text-bluebackground w-full px-2 py-1">
              Django Rest API
                </Link>
                <Link href='/courses/python' className=" cursor-pointer hover:bg-newblue hover:text-bluebackground w-full px-2 py-1">
                Python Django
                </Link>
                <Link href='/courses/fastapi' className=" cursor-pointer hover:bg-newblue hover:text-bluebackground w-full px-2 py-1">
                Fast API
                </Link>
                <Link href='/courses/react' className=" cursor-pointer hover:bg-newblue hover:text-bluebackground w-full px-2 py-1">
                React js
                </Link>
                <Link href='/courses/mern' className=" cursor-pointer hover:bg-newblue hover:text-bluebackground w-full px-2 py-1">
                MERN
                </Link>
                <Link href='/courses/digital-marketing' className=" cursor-pointer hover:bg-newblue hover:text-bluebackground w-full px-2 py-1">
                Digital Marketing
                </Link>
                <Link href='/courses/mechinelearning' className=" cursor-pointer hover:bg-newblue hover:text-bluebackground w-full px-2 py-1">
                Mechine Learning
                </Link>
                <Link href='/courses/java' className=" cursor-pointer hover:bg-newblue hover:text-bluebackground w-full px-2 py-1">
                Java
                </Link>
                <Link href='/courses/matlab' className=" cursor-pointer hover:bg-newblue hover:text-bluebackground w-full px-2 py-1">
                Matlab
                </Link>
                <Link href='/courses/net' className=" cursor-pointer hover:bg-newblue hover:text-bluebackground w-full px-2 py-1">
                .NET
                </Link>
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
              <Link href='/services/training' className=" cursor-pointer hover:bg-newblue hover:text-bluebackground w-full px-2 py-1">
                  TRAINING
                </Link>
              
                <Link href='/services/thesis' className=" cursor-pointer hover:bg-newblue hover:text-bluebackground w-full px-2 py-1">
                  PHD & M-TECH THESIS
                </Link>
                <Link href='/services/paper-writing' className=" cursor-pointer hover:bg-newblue hover:text-bluebackground w-full px-2 py-1">
                  PLAGIARISM REMOVER/PAPER WRITING
                </Link>
              </div>
            </div>
          </div>
          {/* M-TECH PROJECTS  */}
          <div className=" h-full group relative flex flex-col justify-center items-center ">
            <div className=" flex gap-2 items-center cursor-pointer">
            <Link href='/m-tech-projects' className=" text-[14px] font-bold leading-5">
                M-TECH PROJECTS
              </Link>
            </div>
          </div>
          {/* CAREER  */}
          <div className=" h-full group relative flex flex-col justify-center items-center ">
            <div className=" flex gap-2 items-center cursor-pointer">
            <Link href='/career' className=" text-[14px] font-bold leading-5">CAREER</Link>
            </div>
          </div>

          {/* CONTACT  */}
          <div className=" h-full group relative flex flex-col justify-center items-center ">
            <div className=" flex gap-2 items-center cursor-pointer">
            <Link href='/contact' className=" text-[14px] font-bold leading-5">CONTACT</Link>
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