import Link from 'next/link'
import React from 'react'
import Navbar2 from '../Components/navbar2/navbar2'
import Footer from '../Components/Footer/Footer'


const page = () => {
  return (
    <div>
      <Navbar2 />
      <div className="space-y-10 p-8">
      {/* Header Section */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-gray-800">About e-Brains Tech</h1>
        <p className="text-lg text-gray-600">Innovating for a brighter future.</p>
      </div>

      {/* Company Information Section */}
      <div className="max-w-4xl mx-auto text-gray-700">
        <p>
          e-Brain[s] Tech is an ISO 9001:2008 Certified Company and a premier institute in INDIA dedicated to educating teachers, students, and the public about the promise and challenges of technology. Established with the vision to become a leading force in the tech industry, e-Brain[s] Tech offers a wide range of technical training, workshops, and research project assistance.
        </p>
        <p className="mt-4">
          Our mission is to bridge the gap between the fast-growing industry demands and the skills of our students. With a team of dedicated experts, we're here to equip our learners with the knowledge and tools they need to succeed in the competitive tech landscape.
        </p>
      </div>

      {/* Links Section */}
      <div className="text-center">
        <Link href="/about/vision" className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out">
          Our Vision
        </Link>
        <Link href="/about/company-profile" className="inline-block ml-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300 ease-in-out">
          Company Profile
        </Link>
      </div>

      {/* Additional Information  */}
      <div className="text-center text-gray-600">
        <p>For more information, contact us at <a href="mailto:info@ebrainstech.co.in" className="text-blue-500">info@ebrainstech.co.in</a></p>
        <p>Call us: +91 979 320 6228</p>
      </div>
    </div>
      <Footer />
    </div>
  )
}

export default page