import React from 'react'

import about from './welcome-img.jpg'
import Image from 'next/image'

const Aboutus = () => {
  return (
    <div className=' w-screen h-[576px] flex justify-center items-center font-quicksand text-navcolor'>
        <div className=' flex  w-[85%] h-[416px] mt-6'>
            {/* Aboutus  */}
            <div className=' w-[50%]'>
                <h3 className=' text-newblue font-bold text-lg'>ABOUT US</h3>
                <h1 className='text-6xl font-bold mt-4 mb-8'>We have the experience with combine quality workmanship.</h1>
                <p className=' font-roboto'>Ebrains tech is a premier institute in INDIA dedicated for educating teachers, students and the public about the promise and challenges. Ebrains Tech is working for the promotion of latest technologies in India.</p>
            </div>
            {/* image  */}
            <div className=' w-[50%]'>
                <Image className=' rounded-3xl' src={about} alt='about' />
            </div>
        </div>
    </div>
  )
}

export default Aboutus