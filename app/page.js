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

  const scaleTop = useTransform(scrollYProgress,[0,1],[0,1])
  // const scaleRight = useTransform(scrollYProgress,[0.25,0.5],[0,1])
  // const scaleBottom = useTransform(scrollYProgress,[0.4,0.75],[0,1])


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
        
        <motion.div className="progress-top scroll-progress" style={{scaleX:scrollYProgress,transformOrigin:"left"}}></motion.div>
        {/* <motion.div className="progress-right scroll-progress" style={{scaleY:scaleRight,transformOrigin:"top"}}></motion.div>
        <motion.div className="progress-bottom scroll-progress" style={{scaleX:scaleBottom,transformOrigin:"right"}}></motion.div> */}
        {/* <motion.div className="progress-top scroll-progress" style={{scaleX,transformOrigin:"left"}}></motion.div> */}

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
