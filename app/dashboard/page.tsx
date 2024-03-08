"use client";
import React, { useState } from "react";
import { Provider } from "react-redux";
import { store } from "../Components/app/store";
import Navbar from "../Components/Navbar/Navbar";
import EventManager from "../Components/EventManager/EventManager";
import StaffManager from "./StaffManager/StaffManager";

const Dashboard = () => {
  const [clicked, setClicked] = useState('events')

  const handleEventClick =() => {
    setClicked('events')
  }
  const handleStaffClick =() => {
    setClicked('staff')
  }

  return (
    <Provider store={store}>
      <div className=" w-screen min-h-screen bg-bluebackground">
        <Navbar />
        <div className="flex h-screen">
          {/* admin menu  */}
          <div className=" bg-slate-400 border-2 border-r-slate-500 flex flex-col justify-start items-center w-[20%] px-16 gap-8 py-10">
            <p onClick={handleEventClick} className=" cursor-pointer hover:text-navcolor">Events</p>
            <p onClick={handleStaffClick} className=" cursor-pointer hover:text-navcolor">Staff</p>
          </div>

          {/* admin control  */}
          <div className=" w-[80%] h-full bg-slate-200">
            {clicked === 'events' ? (<EventManager />) : (<StaffManager />)}
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default Dashboard;
