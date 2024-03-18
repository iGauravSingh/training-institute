import Navbar2 from "@/app/Components/navbar2/navbar2";
import bg from "../../../public/images/bg-06-free-img.jpg";
import Image from "next/image";
import Footer from "@/app/Components/Footer/Footer";

const page = () => {
  return (
    <div>
      <Navbar2 />
      <div className=" bg-gray-200 font-roboto text-justify ">
        <div className="flex flex-col items-center font-roboto">
          <div className="w-full text-center relative">
            <Image src={bg} alt="Placeholder" className="mx-auto  mb-4" />
            <div className="absolute top-0 flex justify-center items-center w-full h-full">
              <h2 className="font-bold text-4xl text-white">
                Plagiarism Remover/Paper Writing
              </h2>
            </div>
          </div>
          <div className=" px-8 py-10">
            <h2 className=" text-center text-2xl py-10 font-bold text-newblue">PAPER WRITING</h2>

            <div className=" flex flex-col gap-2">
              <p className=" px-3 py-2 text-lg bg-red-400 text-white font-bold rounded-2xl">Paper Writing For SCI Journals</p>
              <p className=" px-3 py-2 text-lg bg-green-400 text-white font-bold rounded-2xl">Paper Writing For Scopus Journals</p>
              <p className=" px-3 py-2 text-lg bg-cyan-400 text-white font-bold rounded-2xl">Paper Writing For IEEE Conference</p>
              <p className=" px-3 py-2 text-lg bg-indigo-400 text-white font-bold rounded-2xl">Paper Writing For International Conference</p>
              <p className=" px-3 py-2 text-lg bg-orange-400 text-white font-bold rounded-2xl">Paper Writing For UGC Journals.</p>
            </div>

            <h2 className=" text-center text-2xl py-10 text-newblue font-bold">PLAGIARISM REMOVAL</h2>
            <p className="  text-lg ">e-Brain[s] Tech provides assistance in Plagiarism removal for M.Tech./Ph.D. Thesis and Papers for publication on Turnitin Tool.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
