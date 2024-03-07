"use client"
import Hero from "./components/Hero";
import Services from "./components/Services";
import Title from "./components/Title";
import Progress from "./components/Progress";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
export default function Home() {

  useEffect(()=>{
    const lenis = new Lenis()

    function raf(time){
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  },[])

  return (
    <main>
        <Hero  />
        <Title content={"SERVICES"} />
        <Services />
        <Title content={"PROCESS"} />
        <Progress />
        <Title content={"ABOUT US"} />
        <About />
        <Title content={"CONTACT"} />
        <ContactForm/>
        <Footer/>
    </main>
  );
}
