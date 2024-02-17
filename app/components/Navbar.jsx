"use client"
import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { motion } from 'framer-motion';
import Link from 'next/link';
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
    text: 'Portfolio',
    link: 'PORTFOLIO'
  },
  {
    text: 'contact',
    link: 'CONTACT'
  }
]

const Navbar = () => {
  return (
    <div className='absolute top-0 left-0 px-4 w-full flex justify-between items-center py-2'>
      <h1 className='text-white font-extrabold text-lg'>
        Apricity
        <span className='text-teal-500 mx-[2px] text-xl'>.</span>
        tech
      </h1>
      <div className='gradient-container-grey'>

        <div className='nav-btns '>
          {
            links.map(el => {
              return (
                <Link className='nav-btn-element' href={`/#${el.link}`}>
                  <motion.div
                    transition={{ ease: "easeOut", duration: 2 }}
                    key={el.text}
                    className=''>
                    <p className='nav-btn-text'>{el.text}</p>
                  </motion.div>
                </Link>)
            })
          }

        </div>
      </div>



      <button className='cta text-xs border h-[38px]  border-neutral-950 px-[4px] text-white rounded-full
            max-sm:fixed max-sm:bottom-24 z-50 max-sm:rounded-bl-none max-sm:rounded-br-none max-sm:rounded-[20px] max-sm:-rotate-90 max-sm:-right-16
      '>
        <p className='nav-btn-text ml-2'>Become a client</p>
        <div className='rounded-full w-[32px] h-[32px] border ml-2 flex justify-center items-center'>
          <FaArrowRight className='arrow' color='white' />
        </div>
      </button>

    </div>
  )
}

export default Navbar