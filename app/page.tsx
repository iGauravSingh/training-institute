"use client";
import Image from "next/image";
import Topbar from "./Components/Topbar/Topbar";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Program from "./Components/Programs/Program";
import WhyChoose from "./Components/WhyChoose/WhyChoose";
import Aboutus from "./Components/Aboutus/Aboutus";
import Achivement from "./Components/Achivement/Achivement";
import Helpyou from "./Components/Helpyou/Helpyou";
import UpcomingEvents from "./Components/UpcomingEvents/UpcomingEvents";
import Consultation from "./Components/Consultation/Consultation";
import Footer from "./Components/Footer/Footer";

import { Provider } from "react-redux";
import { store } from "./Components/app/store";
import Head from "next/head";

export default function Home() {
  return (
    <Provider store={store}>
      <>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Topbar />
        <Navbar />
        <Hero />
        <Program />
        <WhyChoose />
        <Aboutus />
        <Achivement />
        <Helpyou />
        <UpcomingEvents />
        <Consultation />
        <Footer />
      </>
    </Provider>
  );
}
