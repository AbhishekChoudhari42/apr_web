"use client"
import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Title from "./components/Title";
import Progress from "./components/Progress";
import {ReactLenis} from '@studio-freight/react-lenis' 
import ScrollProgress from "./components/ScrollProgress";
import { useScroll , motion, useTransform} from "framer-motion"
import { useRef } from "react";

export default function Home() {
  const container = useRef(null)
  const {scrollYProgress} = useScroll({
    target:container.current,
    offset:['start end','end start']
  })
  const m1 = useTransform(scrollYProgress,[0,0.5],[170,-300])
  

  return (
    <main ref={container}  >
      <ReactLenis root>
      {/* <motion.div style={{scaleY:sv}} className="bg-white w-2 h-2 absolute top-4 right-4">

      </motion.div> */}

        <Hero m1={m1}/>

     
      <Title content={"SERVICES"}/>
      <Services/>
      <Title content={"PROCESS"}/>
      <Progress/>
      <Title content={"ABOUT US"}/>
      <Title content={"CONTACT"}/>
      </ReactLenis>
    </main>
  );
}
