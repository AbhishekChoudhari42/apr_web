import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion"

const Card = ({title,imgSrc,children,borderColor}) => {
  const targetRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target:targetRef,
    offset:['start end','end start']
  })

  const y = useTransform(scrollYProgress,[0,1],['-30%','-80%'])
  const opacity = useTransform(scrollYProgress,[0,0.2],[0,1])
  const scale = useTransform(scrollYProgress,[0,0.5],[0.9,1])


  return (
    <motion.div 
    style={{opacity,scale}}
    ref={targetRef}
    className={`card-container ${borderColor ?? borderColor}-border`}>
    <div className={`card`}>
        <h2 className={`${imgSrc ? 'mt-14' : 'mt-0'}`}>{title}</h2>
        {children}
    </div>
    <motion.div 
    style={{y,x:'50%'}}
    className="absolute p-0 rounded-[20px]   right-[50%] top-0 translate-y-[-50%] translate-x-[50%]">
        {imgSrc && <Image className='rounded-[20px] border border-neutral-800' width={100} height={100} alt='icon' src={imgSrc}/>}
    </motion.div>
</motion.div>
  )
}

export default Card