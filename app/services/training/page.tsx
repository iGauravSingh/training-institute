import Navbar2 from "@/app/Components/navbar2/navbar2";
import bg from "../../../public/images/bg-06-free-img.jpg";
import toppic from "../../../public/images/mobile-developmen-t.jpg";
import Image from "next/image";
import Footer from "@/app/Components/Footer/Footer";


const courses = [
  { name: "MERN Stack", description: "Build and deploy full-stack web applications using MongoDB, Express, React, and Node.js." },
  { name: "Django", description: "Learn to build high-performing web applications with Django, a high-level Python Web framework." },
  { name: "Android Development", description: "Master Android development, from basics to advanced, and learn to build mobile applications." },
  { name: "IoT", description: "Dive into the Internet of Things (IoT) and learn to create connected devices and applications." },
  { name: "Python", description: "Discover the versatility of Python programming language for web development, data science, and more." },
  { name: "FastAPI", description: "Explore FastAPI, a modern, fast (high-performance) web framework for building APIs with Python 3.7+." },
  { name: "React.js", description: "Learn React.js, a JavaScript library for building user interfaces, to create dynamic web applications." },
  { name: "Machine Learning", description: "Delve into the field of machine learning and harness the power of algorithms to analyze data and make predictions." },
  { name: "Java", description: "Master Java programming language for building enterprise-level applications and Android mobile apps." },
  { name: "MATLAB", description: "Utilize MATLAB for numerical computation, data analysis, algorithm development, and more." },
  { name: ".NET", description: "Develop robust, scalable, and secure applications using the .NET framework and C# programming language." },
  { name: "Digital Marketing", description: "Explore digital marketing strategies and techniques to promote products or services online effectively." },
];

const page = () => {
  return (
    <div>
      <Navbar2 />
      <div className=" bg-gray-200 font-roboto ">
        <div className="flex flex-col items-center font-roboto">
          <div className="w-full text-center relative">
            <Image src={bg} alt="Placeholder" className="mx-auto  mb-4" />
            <div className="absolute top-0 flex justify-center items-center w-full h-full">
              <h2 className="font-bold text-4xl text-white">
                TRAINING
              </h2>
            </div>
          </div>

          <div className="py-12 bg-white min-h-screen mb-24 mt-16 rounded-2xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base  text-newblue font-semibold tracking-wide uppercase">Industrial Training</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Enhance Your Skills with Professional Training
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Dive into our comprehensive training programs designed for aspiring professionals and students to master the latest technologies.
          </p>
        </div>

        <div className="mt-10">
          <ul className="md:grid md:grid-cols-2 gap-10">
            {courses.map((course, index) => (
              <li key={index} className="mt-10 md:mt-0">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-newblue text-white">
                      {/* Icon placeholder */}
                      <span className="text-xl font-medium leading-none">{course.name.charAt(0)}</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">{course.name}</h4>
                    <p className="mt-2 text-base text-gray-500">{course.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
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
