import Footer from '@/app/Components/Footer/Footer'
import Navbar2 from '@/app/Components/navbar2/navbar2'
import React from 'react'

const page = () => {
  return (
    <div className=' h-screen'>
      <Navbar2 />
      <div className="py-12 bg-white mb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base  text-newblue font-semibold tracking-wide uppercase">MERN Stack Course Details</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Master Full-Stack Web Development with MERN Stack
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Dive deep into the MERN Stack and become proficient in building dynamic and scalable web applications.
          </p>
        </div>

        <div className="mt-10">
          <h3 className="text-lg leading-6 font-medium  text-newblue">Course Structure</h3>
          <ul className="mt-4">
            <li className="mt-2">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6  text-newblue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="ml-3 text-base text-gray-500">Introduction to MongoDB</p>
              </div>
            </li>
            <li className="mt-2">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6  text-newblue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="ml-3 text-base text-gray-500">Building RESTful APIs with Express.js</p>
              </div>
            </li>
            <li className="mt-2">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6  text-newblue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="ml-3 text-base text-gray-500">Building Single Page Applications with React.js</p>
              </div>
            </li>
            <li className="mt-2">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6  text-newblue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="ml-3 text-base text-gray-500">Node.js and Express.js for Backend Development</p>
              </div>
            </li>
            <li className="mt-2">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6  text-newblue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="ml-3 text-base text-gray-500">State Management with Redux and Redux Toolkit</p>
              </div>
            </li>
            <li className="mt-2">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-newblue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="ml-3 text-base text-gray-500">JWT Authentication</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default page