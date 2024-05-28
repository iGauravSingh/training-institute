import React from "react";
import Navbar2 from "../Components/navbar2/navbar2";
import Footer from "../Components/Footer/Footer";

import bg from "../../public/images/bg-06-free-img.jpg";
import Image from "next/image";
import ButtonBlue from "../Components/Button/Button2";
import { TiTick } from "react-icons/ti";

const projectData = [ 'MATLAB (Simulink)',
  'VLSI',
  'JAVA',
  'ANDROIDS',
  'Image/Biomedical Data Processing',
  'WSN Application (CRC/Leach/OFDM)',
  'Optimization (GA/PSO,ACO)',
  'Artificial Intelligence(ANN/ANFIS/Fuzzy Logic)',
  'IOT',
  'Big Data',
  'Hadoop',
  'Machine Learning',
  'Cloud Computing']

const page = () => {
  return (
    <div>
      <Navbar2 />
      <div className=" bg-gray-200 font-roboto ">
        <div className="flex flex-col items-center font-roboto">
          <div className="w-full text-center relative">
            <Image src={bg} alt="Placeholder" className="mx-auto  mb-4" />
            <div className="absolute top-[50%] left-[45%] ">
              <h2 className="font-bold text-4xl text-white">PhD. Thesis and M-Tech Project</h2>
            </div>
          </div>
          <div className=" px-8">
            <p className=" text-center font-lg py-10">
            E-BRAIN[S] TECH (ISO 9001:2008) pleased to announced you that we are providing assistance on Thesis and Implementation of project for M.Tech. and PhD. Students on different Topics (MATLAB / VLSI/Cloud Computing/ANN/ERP/Web Minning/Civil/ Mechanical/ EC/ CSE).
            </p>
          </div>
          <div className="flex justify-between w-full mt-8 px-8 pb-12">
            <div className="w-1/2 p-8 rounded-lg bg-white flex flex-col gap-6 mr-4">
              
             { projectData.map((pro,index) => (
              <div key={index}>
                  <ul>
                    <li className=" flex gap-1"><TiTick /> <p>{pro}</p></li>
                  </ul>
              </div>
             ))}
             
            </div>
            <div className="w-1/2 p-8 rounded-lg bg-white ml-4">
              <div className=" flex flex-col gap-6">
              <p className=" text-newblue">IEEE PAPER IMPLEMENTATION AND PUBLICATION SCOPUS/SCI/UGC/IEEE PAPER PUBLICATION PLAGIARISM CHECK AND REMOVE ON TURNITIN</p>
              <div className=" px-4 py-4 text-center text-white font-bold rounded-2xl bg-green-600"><p>STUDENT MAY ALSO BRING THEIR OWN PROJECT TOPIC.</p></div>
              <p>All necessary help will be provided to complete their project within time.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
