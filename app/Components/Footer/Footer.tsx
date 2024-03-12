import React from 'react';
import logo from './logo1.png'
import Image from 'next/image';
import map from './map.jpg'
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className=" bg-bluebackground py-8 font-quicksand">
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* First Column */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
          <div className="mb-4">
            {/* Logo */}
            <div className=" flex gap-4 justify-center items-center">
            <Image className=" w-14" src={logo} alt="logo" />
            <div className=" felx flex-col gap-1">
              {/* <p className=" text-sm font-bold text-navcolor text-right">Established in 2009</p> */}
              <h1 className=" text-xl font-bold text-navcolor font-dm">
                Ebrains Techno Solution Pvt. Ltd.
              </h1>
              {/* <p className=" text-sm font-bold text-navcolor text-right">An ISO 9001:2008 Certified Company</p> */}
            </div>
          </div>
          </div>
          
        </div>

        {/* Second Column */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4 text-navcolor">
          <h3 className="text-lg font-semibold mb-2">Address</h3>
          {/* Address */}
          <p className="text-md mb-2 font-semibold">3rd floor, Sahar Plaza, MunshiPulia Chauraha, Lucknow (Uttar Pardesh)</p>
          {/* Email */}
          <p className="text-md mb-2 font-semibold">info@ebrainstech.co.in</p>
          {/* Phone Number */}
          <p className="text-sm font-semibold">+91-979 320 6228</p>
        </div>

        {/* Third Column */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4 text-navcolor">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="text-md font-semibold">
            <li className="mb-1"><Link href="/">Home</Link></li>
            <li className="mb-1"><Link href="/about/company-profile">About</Link></li>
            <li className="mb-1"><Link href="services/training">Services</Link></li>
            <li className="mb-1"><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;