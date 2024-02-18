"use client"
import React from 'react'
import { useScroll , motion, useTransform} from "framer-motion"

const Hero = ({m1}) => {
  return (
    <div className='h-screen w-full text-white flex justify-center items-center flex-col '>
      <motion.div 
      style={{y:m1}}
      >
        <h1 className='white-gradient-text font-bold text-center text-5xl leading-[3.5rem] max-sm:text-2xl'>
          Transform your Ideas <br/> 
          into Digital Masterpieces
        </h1>
        <p className='font-semibold text-xl white-gradient-text opacity-50 -mt-6 max-sm:text-sm max-sm:-mt-8 text-center w-full'>
          Crafting Websites that Drive Success
        </p>
      </motion.div>

    </div>
  )
}

export default Hero