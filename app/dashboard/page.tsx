"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Provider } from "react-redux";
import { store } from "../Components/app/store";
import Navbar from "../Components/Navbar/Navbar";
import EventManager from "../Components/EventManager/EventManager";
import StaffManager from "./StaffManager/StaffManager";

import Cookie from "universal-cookie";
import Link from "next/link";


const cookie = new Cookie();




const Dashboard = () => {
  const sessionToken = cookie.get("session_token");
  const [clicked, setClicked] = useState('events')

  const handleEventClick =() => {
    setClicked('events')
  }
  const handleStaffClick =() => {
    setClicked('staff')
  }
  
  if(!sessionToken){
    return (
      <div>
       <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-500 mb-4">Uh oh! Unauthorized Access</h1>
      <p className="text-xl text-gray-800 mb-8">
        It appears you tried to access a resource you are not authorized for.
      </p>
      <Link href="/" className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md">
        Go Back Home
      </Link>
    </div>
        
      </div>
    )
  }

  return (
    <Provider store={store}>
      <div className=" w-screen min-h-screen  bg-slate-200 ">
        <Navbar />
        <div className="flex ">
          {/* admin menu  */}
          <div className=" bg-slate-400 border-2 border-r-slate-500 flex flex-col justify-start items-center w-[20%] min-h-screen px-16 gap-8 py-10">
            <p onClick={handleEventClick} className=" cursor-pointer hover:text-navcolor">Events</p>
            <p onClick={handleStaffClick} className=" cursor-pointer hover:text-navcolor">Staff</p>
          </div>

          {/* admin control  */}
          <div className=" w-[80%] h-full ">
            {clicked === 'events' ? (<EventManager />) : (<StaffManager />)}
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default Dashboard;
