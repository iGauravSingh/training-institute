"use client";
import React, { useState } from "react";
import Image from "next/image";
import formImage from "./contact.jpg";
import ButtonBlue from "../Button/Button2";

const Consultation = () => {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", { fullName, address, subject, message });
    setFullName("");
    setAddress("");
    setSubject("");
    setMessage("");
  };

  return (
    <div
      className="w-screen min-h-screen flex justify-center items-center "
      style={{ backgroundImage: `url(/images/bgoverlay-3.jpg)` }}
    >
      <div className=" w-[80%] h-[80%] flex items-center">
        {/* image  */}
        <div className="w-[40%]">
          <Image className=" w-full h-[571.55px] object-cover rounded-l-2xl" src={formImage} alt="formImage" />
        </div>

        {/* form  */}
        <div className=" w-[60%] h-[571.55px] bg-white font-quicksand rounded-r-2xl">
            <div className=" pl-10 pt-12 pb-14 flex flex-col gap-6">
            <h3 className=" font-bold text-lg text-newblue">CONTACT</h3>
            <h2 className=" font-bold text-4xl text-navcolor">Free Consultation</h2>
            </div>
          <form onSubmit={handleSubmit} className=" px-10 flex flex-col gap-6">
            <div className="flex gap-2">
              <div className=" w-1/2 pr-2">
                <input
                  type="text"
                  id="fullName"
                  value={fullName}
                  placeholder="Full Name"
                  onChange={(e) => setFullName(e.target.value)}
                  className=" w-full border-b"
                  required
                />
              </div>
              <div className="w-1/2">
                <input
                  type="text"
                  id="address"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className=" w-full border-b"
                  required
                />
              </div>
            </div>
            <div>
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className=" w-full border-b"
                required
              />
            </div>
            <div>
              <textarea
                id="message"
                value={message}
                placeholder="Write Message"
                onChange={(e) => setMessage(e.target.value)}
                className=" w-full h-40 border-b"
                required
              />
            </div>
            <ButtonBlue name='SUBMIT MESSAGE' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
