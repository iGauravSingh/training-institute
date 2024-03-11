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
            .NET Development
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Learn to build robust, scalable, and secure applications with the .NET framework and C# programming language.
          </p>
        </div>

        <div className="mt-10">
          <h3 className="text-xl leading-6 font-medium text-newblue">Course Structure</h3>
          <ul className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
            <li className="py-4 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-lg">Introduction to .NET</span>
                <span className="text-sm text-gray-500">Overview, installation, basic concepts</span>
              </div>
            </li>
            <li className="py-4 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-lg">C# Programming</span>
                <span className="text-sm text-gray-500">Syntax, data types, control flow</span>
              </div>
            </li>
            <li className="py-4 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-lg">ASP.NET Core</span>
                <span className="text-sm text-gray-500">Building web applications, MVC architecture</span>
              </div>
            </li>
            <li className="py-4 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-lg">Entity Framework</span>
                <span className="text-sm text-gray-500">ORM, database interactions</span>
              </div>
            </li>
            <li className="py-4 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-lg">Deployment</span>
                <span className="text-sm text-gray-500">Publishing .NET applications</span>
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