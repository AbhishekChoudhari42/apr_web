"use client"
import React from 'react'
import { useScroll , motion, useTransform} from "framer-motion"

const Hero = () => {
  return (
    <div className='h-[80vh] w-full text-white flex justify-center items-center flex-col '>
      <motion.div
       initial={{y:-20,opacity:0}}
       animate={{y:0,opacity:1}}
       transition={{duration:0.5}}
      >
        <h1 
        className='white-gradient-text font-bold text-center text-5xl leading-[3.5rem] max-sm:text-2xl lg:text-6xl lg:leading-[4.5rem]'>
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