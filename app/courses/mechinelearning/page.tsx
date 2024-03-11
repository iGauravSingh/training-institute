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
            Machine Learning
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Dive into the world of machine learning and unlock the power of data-driven insights.
          </p>
        </div>

        <div className="mt-10">
          <h3 className="text-xl leading-6 font-medium text-newblue">Course Structure</h3>
          <ul className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
            <li className="py-4 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-lg">Introduction to Machine Learning</span>
                <span className="text-sm text-gray-500">Basic concepts, types of machine learning</span>
              </div>
            </li>
            <li className="py-4 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-lg">Supervised Learning</span>
                <span className="text-sm text-gray-500">Regression, classification, model evaluation</span>
              </div>
            </li>
            <li className="py-4 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-lg">Unsupervised Learning</span>
                <span className="text-sm text-gray-500">Clustering, dimensionality reduction</span>
              </div>
            </li>
            <li className="py-4 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-lg">Model Deployment</span>
                <span className="text-sm text-gray-500">Deploying machine learning models</span>
              </div>
            </li>
            <li className="py-4 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-lg">Advanced Topics</span>
                <span className="text-sm text-gray-500">Deep learning, reinforcement learning</span>
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