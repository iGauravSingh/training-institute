import Footer from '@/app/Components/Footer/Footer'
import Navbar2 from '@/app/Components/navbar2/navbar2'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar2 />
      <div className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-newblue font-semibold tracking-wide uppercase">Course Details</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Python Programming
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Master the fundamentals of Python programming language.
          </p>
        </div>

        <div className="mt-10">
          <h3 className="text-xl leading-6 font-medium text-newblue">Course Structure</h3>
          <ul className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
            <li className="py-4 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-lg">Introduction to Python</span>
                <span className="text-sm text-gray-500">Basic syntax, variables, data types</span>
              </div>
            </li>
            <li className="py-4 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-lg">Control Flow and Functions</span>
                <span className="text-sm text-gray-500">Conditionals, loops, functions</span>
              </div>
            </li>
            <li className="py-4 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-lg">Data Structures</span>
                <span className="text-sm text-gray-500">Lists, tuples, dictionaries</span>
              </div>
            </li>
            <li className="py-4 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-lg">Object-Oriented Programming</span>
                <span className="text-sm text-gray-500">Classes, inheritance, encapsulation</span>
              </div>
            </li>
            <li className="py-4 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-lg">File Handling and Modules</span>
                <span className="text-sm text-gray-500">Working with files, importing modules</span>
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