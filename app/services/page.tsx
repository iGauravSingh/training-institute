import Link from 'next/link';
import React from 'react';
import Navbar2 from '../Components/navbar2/navbar2';
import Footer from '../Components/Footer/Footer';


const Services = () => {
  return (
    <div>
        <Navbar2 />
        <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard title="Training" description="Explore our technical training programs designed to bridge the gap between education and industry demands." link="/services/training" />
        <ServiceCard title="Ph.D. - M.Tech Thesis" description="Get assistance with your Ph.D. or M.Tech thesis from experienced professionals in your field." link="services/thesis" />
        <ServiceCard title="Plagiarism Remover/Paper Writing" description="Ensure originality in your research papers with our plagiarism remover and professional paper writing services." link="/services/thesis" />
        <ServiceCard title="Web Development" description="Build stunning and responsive websites tailored to your business needs with our expert web development services." link="/services/web-development" />
        <ServiceCard title="Mobile App Development" description="Turn your ideas into reality with our custom mobile app development solutions for iOS and Android platforms." link="services/app-development" />
      </div>
    </div>
    <Footer />
    </div>
  );
};

interface ServiceCardProps {
    title: String;
    description: String;
    link: String;
}

const ServiceCard = ({ title, description, link }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link href={`${link}`} className="text-blue-500 hover:underline">Learn More</Link>
    </div>
  );
};

export default Services;