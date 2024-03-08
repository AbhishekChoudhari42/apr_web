"use client"
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion"

const About = () => {
  const targetRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target:targetRef,
    offset:['start end','end start']
  })
  const opacity = useTransform(scrollYProgress,[0.12,0.5],[0,1])

  return (
    <motion.p 
    ref={targetRef}
    className='w-full  md:px-28 max-sm:leading-[3rem] max-sm:px-4 pt-10 pb-20 h-fit min-h-[80vh] sm:text-2xl sm:leading-[3rem] font-[300] max-sm:text-xl text-xl text-white'
    style={{opacity}} 
    >
        We are an agency based in Pune, India, stepping into the web design and development arena with fresh enthusiasm and innovative ideas. 
        Our journey is just beginning, and we're eager to embrace challenges, learn and grow alongside our clients. 
        Specializing in web design and development, we're committed to turning bold visions into reality.
        Let's embark on this exciting digital adventure together. 
        With <span className='font-semibold text-white'>PixlCraft</span>, your project is not just another job, it's a shared journey towards something extraordinary.
    </motion.p>
  )
}

export default About