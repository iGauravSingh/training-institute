import React from 'react'
import Navbar2 from '../Components/navbar2/navbar2'
import Footer from '../Components/Footer/Footer'
import Image from 'next/image'

import { ImClock } from "react-icons/im";
import { TiTick } from "react-icons/ti";
import { FaCalendarAlt } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";
import { GiArcheryTarget } from "react-icons/gi";



import bg from '../../public/images/bg-06-free-img.jpg'
import { DiVim } from 'react-icons/di';






const page = () => {
  return (
    <div>
      <Navbar2 />
        <div className=' bg-bluebackground'>
          {/* image  */}
          <div className="w-full text-center relative">
            <Image src={bg} alt="Placeholder" className="mx-auto  mb-4" />
            <div className="absolute top-[50%] left-[45%] ">
              <h2 className="font-bold text-4xl text-white">Career</h2>
            </div>
          </div>

          <div className=' flex flex-col gap-4 justify-center items-center mt-11 pb-14 font-quicksand font-bold'>
            <h4 className=' text-xl'>This Is Why</h4>
            <h3 className=' text-5xl'>We Should Work Together</h3>
          </div>
        {/* icon data container  */}
          <div className=' w-screen flex flex-wrap gap-8 mx-10 mb-28 justify-center items-center'>
            {/* 1  */}
          <div className=' w-[30%] h-[20rem] flex flex-col justify-center items-center gap-8 px-12 py-12 hover:border-2 hover:shadow-xl hover:bg-white rounded-2xl'>
            {/* icon  */}
            <ImClock size={45} color='#2e8ece' />
            <div className=' flex flex-col gap-4'>
              {/* heading  */}
            <h3 className=' font-bold text-2xl text-center'>Always On Time</h3>
            {/* desc  */}
            <p className=' text-center'>We deliver on time</p>
            </div>
          </div>

{/* 2 */}
<div className=' w-[30%] h-[20rem] flex flex-col justify-center items-center gap-8 px-12 py-12 hover:border-2 hover:shadow-xl hover:bg-white rounded-2xl'>
            {/* icon  */}
            <TiTick size={45} color='#2e8ece' />
            <div className=' flex flex-col gap-4'>
              {/* heading  */}
            <h3 className=' font-bold text-2xl text-center'>Hard Working</h3>
            {/* desc  */}
            <p className=' text-center'>We have hard working and dedicated team.</p>
            </div>
          </div>

          {/* 3 */}
          <div className=' w-[30%] h-[20rem] flex flex-col justify-center items-center gap-8 px-12 py-12 hover:border-2 hover:shadow-xl hover:bg-white rounded-2xl'>
            {/* icon  */}
            <FaCalendarAlt size={45} color='#2e8ece' />
            <div className=' flex flex-col gap-4'>
              {/* heading  */}
            <h3 className=' font-bold text-2xl text-center'>24/7 Availability</h3>
            {/* desc  */}
            <p className=' text-center'>We try to be available most of the time.</p>
            </div>
          </div>

          {/* 4 */}
          <div className=' w-[30%] h-[20rem] flex flex-col justify-center items-center gap-8 px-12 py-12 hover:border-2 hover:shadow-xl hover:bg-white rounded-2xl'>
            {/* icon  */}
            <FaDollarSign size={45} color='#2e8ece' />
            <div className=' flex flex-col gap-4'>
              {/* heading  */}
            <h3 className=' font-bold text-2xl text-center'>Maximum Profitability</h3>
            {/* desc  */}
            <p className=' text-center'>Money and time spaent with us will benefit you greatly.</p>
            </div>
          </div>

          {/* 5  */}
          <div className=' w-[30%] h-[20rem] flex flex-col justify-center items-center gap-8 px-12 py-12 hover:border-2 hover:shadow-xl hover:bg-white rounded-2xl'>
            {/* icon  */}
            <FaQuestion size={45} color='#2e8ece' />
            <div className=' flex flex-col gap-4'>
              {/* heading  */}
            <h3 className=' font-bold text-2xl text-center'>Advanced know-how</h3>
            {/* desc  */}
            <p className=' text-center'>Our courses are updated with industry trends.</p>
            </div>
          </div>

          {/* 6  */}
          <div className=' w-[30%] h-[20rem] flex flex-col justify-center items-center gap-8 px-12 py-12 hover:border-2 hover:shadow-xl hover:bg-white rounded-2xl'>
            {/* icon  */}
            <GiArcheryTarget size={45} color='#2e8ece' />
            <div className=' flex flex-col gap-4'>
              {/* heading  */}
            <h3 className=' font-bold text-2xl text-center'>Always Accurate</h3>
            {/* desc  */}
            <p className=' text-center'>We try to reduce a much as human error as possible.</p>
            </div>
          </div>

          </div>
        </div>
      <Footer />
    </div>
  )
}

export default page