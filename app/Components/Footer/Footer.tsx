import React from 'react';
import logo from './logo.png'
import Image from 'next/image';
import map from './map.jpg'

const Footer = () => {
  return (
    <footer className=" bg-bluebackground py-8 font-quicksand">
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* First Column */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
          <div className="mb-4">
            {/* Logo */}
            <Image src={logo} alt="Logo" className="w-24 h-auto" />
          </div>
          {/* Address */}
          <p className="text-md mb-2 font-semibold">1234 Street Name, City</p>
          {/* Email */}
          <p className="text-md mb-2 font-semibold">info@example.com</p>
          {/* Phone Number */}
          <p className="text-sm font-semibold">123-456-7890</p>
        </div>

        {/* Second Column */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4 text-navcolor">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="text-md font-semibold">
            <li className="mb-1"><a href="#">Home</a></li>
            <li className="mb-1"><a href="#">About</a></li>
            <li className="mb-1"><a href="#">Services</a></li>
            <li className="mb-1"><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Third Column */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
          {/* Subscribe */}
          <div className=' flex flex-col gap-4'>
            <h3 className=' font-bold text-navcolor'>SUBSCRIBE</h3>
            <p>Lit sed The Best in dolor sit amet consectetur adipisicing elit sedconsectetur adipisicing</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;