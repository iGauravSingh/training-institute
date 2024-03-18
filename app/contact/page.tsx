import React from "react";
import Navbar2 from "../Components/navbar2/navbar2";
import Footer from "../Components/Footer/Footer";

import bg from "./bg-06-free-img.jpg";
import Image from "next/image";
import ButtonBlue from "../Components/Button/Button2";
import { RiMailOpenFill } from "react-icons/ri";
import { ImLocation2 } from "react-icons/im";

import { FaPhoneAlt } from "react-icons/fa";

const page = () => {
  return (
    <div>
      <Navbar2 />
      <div className=" bg-gray-200 ">
        <div className="flex flex-col items-center font-roboto">
          <div className="w-full text-center relative">
            <Image src={bg} alt="Placeholder" className="mx-auto  mb-4" />
            <div className="absolute top-[50%] left-[45%] ">
              <h2 className="font-bold text-4xl text-white">Contact Us</h2>
            </div>
          </div>
          <div className="flex justify-between w-full mt-8 px-8 pb-12">
            <div className="w-1/2 p-8 rounded-lg bg-white flex flex-col gap-6 mr-4">
              <h3 className="text-3xl text-newblue font-bold mb-4">
                EBRAINS TECHNO SOLUTION PVT. LTD.
              </h3>
              <p>Use our information request form to ask us to contact you.</p>
              {/* phone  */}
              <div className=" flex gap-8 items-center">
                <FaPhoneAlt color="#2e8ece" size={40} />
                <div>
                  <p className=" text-2xl">Phone Number</p>
                  <p className=" text-lg">(+91) 979 320 6228</p>
                </div>
              </div>
              {/* email  */}
              <div className=" flex gap-8 items-center">
                <RiMailOpenFill color="#2e8ece" size={40} />
                <div>
                  <p className=" text-2xl">Email</p>
                  <p className=" text-lg">info@ebrainstech.co.in</p>
                </div>
              </div>
              {/* Address  */}
              <div className=" flex gap-8 items-center">
                <ImLocation2 color="#2e8ece" size={40} />
                <div>
                  <p className=" text-2xl">Address​</p>
                  <p className=" text-lg">
                    3rd floor, Sahar Plaza, MunshiPulia Chauraha, Lucknow
                    (Uttar Pardesh)
                  </p>
                </div>
              </div>
            </div>
            <div className="w-1/2 p-8 rounded-lg bg-white ml-4">
              <h3 className="text-3xl text-newblue font-bold mb-4">
                Contact Form
              </h3>
              <form className="flex flex-col">
                <input
                  type="text"
                  placeholder="Name"
                  className="p-2 rounded-md mb-4"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="p-2 rounded-md mb-4"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="p-2 rounded-md mb-4"
                />

                <textarea
                  placeholder="Message"
                  rows={4}
                  className="p-2 rounded-md mb-4"
                ></textarea>
                <div className=" flex justify-center items-center">
                  <ButtonBlue name="Submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
