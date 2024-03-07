"use client"
import Hero from "./components/Hero";
import Services from "./components/Services";
import Title from "./components/Title";
import Progress from "./components/Progress";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Lenis from "@studio-freight/lenis";
import { useEffect, useRef } from "react";
import { useScroll, useTransform ,motion} from "framer-motion";
export default function Home() {

  const targetRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target:targetRef,
    offset:['start start','end end']
  })

  const scaleX = useTransform(scrollYProgress,[0,1],[0,1])


  useEffect(()=>{
    const lenis = new Lenis()

    function raf(time){
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  },[])

  return (
    <main ref={targetRef}>
        
        <motion.div className="scroll-progress" style={{scaleX,left:'0px'}}></motion.div>

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
