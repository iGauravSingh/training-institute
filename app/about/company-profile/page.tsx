import Navbar2 from '@/app/Components/navbar2/navbar2'
import React from 'react'

import bg from './bg-06-free-img.jpg'
import about from './about-us.jpg'
import Image from 'next/image'
import Footer from '@/app/Components/Footer/Footer'

const page = () => {

  const testimonials = [
    { id: 1, name: 'MR. RAGHAWENDRA SHARMA', testimonial: ' Raghawendra (Post Graduate) is alumni of Semiconductor Laboratory, Mohali and has a rich experience in Digital design, Verilog, and VHDL with high level of skill in Chip Design, Verification and VLSI Training. He has over 7 years of experience in the RTL coding and verification. His expertise in Digital design, STA (Static Timing Analysis), Verilog, and VHDL. He has hands-on experience on industry level EDA tools.' },
    { id: 2, name: 'MR. ANURAG', testimonial: ' A post graduate from Indian Institute of Science (IISc) Bangalore from Electrical & Communication Engineering Dept., he has over 9 years of experience in the Signal Processing ,MATLAB and VHDL based design and application. In his career spanning over various facets of the Academics, he has worked on senior positions in Project design and technical trainings related to Electronics and Electrical Engineering.' },
    { id: 3, name: 'DR. ANSHU SRIVASTAVA', testimonial: 'Doctorate in Computer Science. She has 20 years of rich experience in education and administrative field. Her expertise on Cloud Computing, ontology, interoperability and data mining, Project experience on .net technologies and open source. Her recent works are on cloud computing and clustering. She has expertise on UML tools like xpand, eclipse e.t.c.' },
    { id: 4, name: 'MR. DEVESH KATIYAR', testimonial: 'Perusing PhD in Computer Science. He has 12 years of rich experience in education and administrative field. He excels in Software Engineering, RDBMS and data mining Project experience on ORACLE, D2K and Online Apps. Handled various MIS projects for Govt. Departments.' },
    { id: 5, name: 'DR. ZIA ABBAS', testimonial: 'Currently he is research scholar in University of Rome, Italy and has approximately 11 years of research and teaching experience. His research interest includes Low power/Power aware nano-scale VLSI designs, Current mode devices, Electronic nose sensors etc. He has also carried out his research in IIT Kanpur on VLSI circuits. He has published several research papers in various international/national journals and conferences of repute and authored two books in the field of Electronics Engineering and has won best project/paper awards. In his career, his research work includes the experience of the various tools like NGSpice, Xilinx, Leonardo Spectrum, Model Sim , VeriBest, ActiveHDL, Magic, IRSIM, Lab VIEW, MATLAB, Micro Sim, OrCAD (PSpice), Microwind, Cadence at different level of design abstraction.' },
  ];

  const importantPoints = [
    'To Spread Awareness Among Students About Technologies.',
    'We Emphasis on Learning by Doing.',
    'To Implement The Concepts Of Engineering.',
    'To Prepare The Students For Jobs & A Good Career In Their Fields.',
    'To Bring The Era of Creativity.',
  ];
  

  return (
    <div>
      <Navbar2 />
      <div className="space-y-8">
      {/* Image with text in the center */}
      <div className="relative font-roboto">
        <Image src={bg} alt="Descriptive text for the image" className="w-full h-auto" />
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-navcolor opacity-80 text-white text-2xl p-4 rounded">
          Company Profile
        </p>
      </div>

    <div className=' px-12'>
            {/* Paragraph with the heading */}
            <div>
        <h2 className="text-2xl font-bold mb-4">WE ARE TECHNO SOLUTIONS INDUSTRIES</h2>
        <p>e-Brain[s] Tech is an ISO 9001:2008 Certified Company one of the premier institute in INDIA dedicated for educating teachers, students and the public about the promise and challenges. eBrain[s] Tech is working for the promotion of latest technologies in India. e-Brain[s] Tech deals in Technical training, Industrial Training, Summer Training, Workshops and Research Projects. Technical Training programs works like bridge between student and fast growing industry. eBrain[s] Tech come up with the challenge to meet the requirement of rapid growing industries by providing excellent training the way industry needs to our students by our expert and dedicated staff. We are well equipped with latest technologies and technical tools required for proper training and structured our training modules to fulfill the current industry requirements.</p>
      </div>

      {/* Image on left and paragraph on right */}
      <div className="flex items-center space-x-4 mt-8 mb-8">
        <div className=' w-[50%]'>
        <Image src={about} alt="Another descriptive text" className="w-1/2 h-auto" />
        </div>
        <div className=' w-[50%]'>
          <h2 className=' text-2xl font-bold text-center mb-4'>E-Brain[S] Tech Services</h2>
          <p>e-Brain[s] Tech mainly deals in Engineers Training Programs in latest technologies for Engineering students, corporate and other professionals. Some of the technologies offered for training are VLSI, VHDL, Verilog, MATLAB, Embedded System, Cloud Computing, Web Mining, ASP.NET, CATIA, J2EE, AutoCAD, Website Development, Personality Development and Assistance in Research Projects.</p>
        </div>
      </div>

      {/* Heading and five important points in circular div */}
      <div className=' mt-4 mb-10'>
        <h2 className="text-2xl font-bold mb-6 text-center">E-BRAIN[S] TECH MISSION</h2>
        <div className="flex justify-center items-center gap-4">
          {importantPoints.map((point, index) => (
            <div key={index} className="bg-gray-200 px-6 py-3 w-48 h-48 rounded-full flex justify-center items-center">
              <p className=' text-center'>{point}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Paragraph with the heading */}
      <div className=' mt-8 mb-4'>
        <h2 className="text-2xl font-bold mb-6">OUR COMPANY MESSAGE</h2>
        <p>We are not only aimed at nurturing IT enthusiasts, but also prioritize enabling our students to think creatively and come up with a well-forged solution to encounter various difficulties. To inculcate in them value for their work with passion and corporative spirit, we provide them with the right environment to grow. Having years of experience, we have trained many such minds. Continuing our passion, we are always ready to train students, for the best outcome, using innovative strategies.
To retain our position in this arena, we try our best to enhance our services as much as possible. We have trained staff and the best faculty to encounter every such need; this helps us getting better day by day. Every technology or language, which is taught at Best IT Training Institute – e-Brain[s] Tech, is highly in demand and therefore, helps students thrive towards success.</p>
      </div>

      {/* Five client testimonials */}
      <div className=' mt-16 mb-8'>
        <h2 className="text-2xl font-bold mb-4  mt-8 text-center">CORE TEAM (A STRONG ADVISORY BOARD)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map(({ id, name, testimonial }) => (
            <div key={id} className="border p-4 rounded shadow">
              <p className="mb-2 italic">"{testimonial}"</p>
              <p className="text-right">- {name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
    <Footer />
    </div>
  )
}

export default page