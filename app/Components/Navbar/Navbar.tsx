import React from "react";
import { FaCaretDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className=" w-screen h-16 flex justify-center">
      <p></p>
      <div className=" w-[85%] h-full flex">
        {/* left part  */}
        <div className="bg-navcolor h-full w-[85%] rounded-l-full flex justify-start text-white items-center gap-6">
          {/* home  */}
          <div className=" flex gap-2 items-center ml-8">
            <h2>HOME</h2>
            <FaCaretDown />
          </div>
          {/* about  */}
          <div>
            <h2>ABOUT</h2>
          </div>
          {/* SERVICES  */}
          <div className=" flex gap-2 items-center">
            <h2>SERVICES</h2>
            <FaCaretDown />
          </div>
          {/* EVENTS  */}
          <div className=" flex gap-2 items-center">
            <h2>EVENTS</h2>
            <FaCaretDown />
          </div>
          {/* STORIES  */}
          <div>
            <h2>STORIES</h2>
          </div>
          {/* NEWS  */}
          <div className=" flex gap-2 items-center">
            <h2>NEWS</h2>
            <FaCaretDown />
          </div>
          {/* PAGES  */}
          <div className=" flex gap-2 items-center">
            <h2>PAGES</h2>
            <FaCaretDown />
          </div>
          {/* CONTACT  */}
          <div>
            <h2>CONTACT</h2>
          </div>
        </div>


        {/* right part  */}
        <div className=" bg-newblue h-full w-[15%] rounded-r-full flex justify-center items-center">
          <h3 className=" text-white hover:text-navcolor cursor-pointer">
            GET A QUOTE
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
