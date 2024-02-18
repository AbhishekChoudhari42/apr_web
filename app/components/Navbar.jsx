"use client"
import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import { motion } from 'framer-motion';
import Link from 'next/link';
import Lenis from '@studio-freight/lenis'
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
const links = [
  {
    text: 'Home',
    link: 'HOME'
  },
  {
    text: 'Services',
    link: 'SERVICES'
  },
  {
    text: 'About Us',
    link: 'ABOUT US'
  },
  {
    text: 'Contact',
    link: 'CONTACT'
  }
]

const Navbar = () => {

  const variants = {
    open: {
      width: 168,
      height: 242,
      border:'1px solid #444',
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
    },
    closed: {
      width: 40,
      height: 40,
      border:'1px solid #111',
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
    }
  }

  const [isActive, setIsActive] = useState(false)
  return (
    <div className='absolute z-50 top-0 left-0 px-4 pt-4 w-full flex justify-between items-center py-2'>
      <h1 className='text-white font-extrabold text-lg'>
        Apricity
        <span className='text-teal-500 mx-[2px] text-xl'>.</span>
        tech
      </h1>
      {/* mobile menu */}
      <motion.div
        className='purple-grid hidden max-sm:block  fixed top-2 right-4 z-40 backdrop-blur-lg p-4 rounded-xl overflow-hidden'
        variants={variants}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        <button className='absolute  top-1 right-1 z-50 text-white' onClick={() => setIsActive((isActive) => !isActive)}>
          {isActive ? <IoMdClose size={32} /> : <IoMenu size={32} />}
        </button>
        <div className='mt-[26px] h-[168px] flex flex-col justify-evenly'>{

          links.map(el => {
            return (
              <Link
                onClick={() => setIsActive((isActive) => !isActive)}
                key={el.text}
                className='w-full text-center font-semibold'
                href={`/#${el.link}`}>
                
                <motion.div
                  initial={{y:10}}
                  animate={{y:0}}
                  transition={{ ease: "easeOut", duration: 2 ,delay:2}}
                  className='cursor-pointer '
                >
                  <p className='text-lg text-white'>
                    {el.text}
                  </p>
                </motion.div>
              </Link>
            )
          }
          )
        }
        </div>
      </motion.div>

      {/* desktop menu */}
      <div className='gradient-container-grey'>

        <div className='nav-btns mt-2'>
          {
            links.map(el => {
              return (
                <Link key={el.text} className='nav-btn-element' href={`/#${el.link}`}>
                  <motion.div
                    className='cursor-pointer transition-all duration-500'
                  >
                    <p className='nav-btn-text'>
                      {el.text}
                    </p>
                  </motion.div>
                </Link>
              )
            })
          }

        </div>
      </div>



      <button className='cta text-xs border h-[38px]  border-neutral-950 px-4 text-white rounded-full
            max-sm:fixed max-sm:bottom-24 z-50 max-sm:rounded-bl-none max-sm:rounded-br-none max-sm:rounded-[20px] 
            max-sm:-rotate-90 max-sm:-right-14
      '>
        <Link href={"/#CONTACT"}>
          <p className='nav-btn-text'>Start your project</p>
        </Link>
        {/* <div className='rounded-full w-[32px] h-[32px] border ml-2 flex justify-center items-center'>
          <FaArrowRight className='arrow' color='white' />
        </div> */}
      </button>

    </div>
  )
}

export default Navbar