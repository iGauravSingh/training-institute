import Footer from '@/app/Components/Footer/Footer'
import Navbar2 from '@/app/Components/navbar2/navbar2'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar2 />
        <div>
        <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Web Development Services</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Custom Web Development</h2>
        <p className="text-gray-600 mb-4">
          Our team of experienced developers specializes in creating custom websites tailored to your specific needs. Whether you need a simple portfolio site, an e-commerce platform, or a complex web application, we've got you covered.
        </p>
        <h2 className="text-xl font-bold text-gray-800 mb-2">Responsive Design</h2>
        <p className="text-gray-600 mb-4">
          In today's mobile-first world, having a responsive website is essential. We ensure that your website looks and functions flawlessly across all devices, from desktop computers to smartphones and tablets.
        </p>
        <h2 className="text-xl font-bold text-gray-800 mb-2">SEO Optimization</h2>
        <p className="text-gray-600 mb-4">
          A beautiful website is only effective if it can be found by your target audience. That's why we implement best practices in search engine optimization (SEO) to improve your website's visibility and drive organic traffic.
        </p>
        <h2 className="text-xl font-bold text-gray-800 mb-2">Maintenance and Support</h2>
        <p className="text-gray-600 mb-4">
          Your website is an important asset for your business, and we're here to ensure it stays up and running smoothly. We provide ongoing maintenance and support services to keep your website secure, updated, and performing at its best.
        </p>
      </div>
    </div>
        </div>
        <Footer />
    </div>
  )
}

export default page