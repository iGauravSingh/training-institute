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
                <p className=''>We provide a professional dignissim at cursus elefeind norma arcu. Pellentesque accumsan est in tempus etos ullamcorper sem quam suscipit lacus maecenas tortor. Suspendisse gravida ornare non mattis velit rutrum modest.</p>
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