import Image from "next/image";
import Topbar from "./Components/Topbar/Topbar";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Program from "./Components/Programs/Program";
import WhyChoose from "./Components/WhyChoose/WhyChoose";
import Aboutus from "./Components/Aboutus/Aboutus";
import Achivement from "./Components/Achivement/Achivement";

export default function Home() {
  return (
    <>
    <Topbar />
    <Navbar />
    <Hero />
    <Program />
    <WhyChoose />
    <Aboutus />
    <Achivement />
    </>
  );
}
