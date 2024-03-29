"use client"
import React, { useReducer, useRef } from 'react'
import { useScroll , motion, useTransform} from "framer-motion"



const Hero = () => {

  const targetRef = useRef(null)

  const {scrollYProgress} = useScroll({
    target:targetRef,
    offset:['end end','end start']
  })

  const y = useTransform(scrollYProgress,[0,1],[50,-150])

  return (
    <div ref={targetRef} className='h-[90vh] w-full text-white flex justify-center items-center flex-col bg-black'>
      <motion.div
       initial={{opacity:0}}
       animate={{opacity:1}}
       transition={{duration:0.5}}
       style={{y}}
      >
        <h1 
        className='white-gradient-text font-bold text-center text-5xl leading-[3.5rem] max-sm:leading-9 max-sm:text-[1.6rem] lg:text-6xl lg:leading-[4.5rem]'>
          Transform your Ideas <br/> 
          into Digital Masterpieces
        </h1>
        <p 
        className='font-semibold text-xl white-gradient-text opacity-50 -mt-6 max-sm:text-sm max-sm:-mt-8 text-center w-full lg:text-3xl'>
          Crafting Websites that Drive Success
        </p>
      </motion.div>

    </div>
  )
}

export default Hero