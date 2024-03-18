import Footer from '@/app/Components/Footer/Footer'
import Navbar2 from '@/app/Components/navbar2/navbar2'
import React from 'react'
import mobiledev from '../../../public/images/mobile-developmen-t.jpg'
import Image from 'next/image'

const page = () => {
  return (
    <div>
        <Navbar2 />
        <div>
        <div className="container mx-auto py-8 text-justify">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Mobile App Development</h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 md:pr-6">
          <Image src={mobiledev} alt="Mobile App Development" className="rounded-lg" />
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0">
          <p className="text-gray-700 mb-4">
            At our company, we specialize in developing mobile applications using React Native, a popular framework for building cross-platform apps. With React Native, we can create high-quality mobile apps for both iOS and Android platforms, allowing you to reach a wider audience with your product.
          </p>
          <p className="text-gray-700 mb-4">
            Our team of experienced developers follows industry best practices to ensure that your mobile app is fast, responsive, and user-friendly. We work closely with you throughout the development process to understand your requirements and deliver a customized solution that meets your needs.
          </p>
          <p className="text-gray-700 mb-4">
            Whether you're a startup looking to launch your first app or an established business wanting to expand your mobile presence, we're here to help you bring your ideas to life. Contact us today to discuss your mobile app development project!
          </p>
        </div>
      </div>
    </div>
        </div>
        <Footer />
    </div>
  )
}

export default page