import Image from 'next/image'
import React from 'react'
import { motion} from "framer-motion"

const Card = ({title,imgSrc,children,borderColor}) => {
  
  return (
    <motion.div 
    
    className={`card-container ${borderColor ?? borderColor}-border`}>
    <div className={`card`}>
        <h2 className={`${imgSrc ? 'mt-14' : 'mt-0'}`}>{title}</h2>
        {children}
    </div>
    <div className="absolute p-0 rounded-[20px]   right-[50%] top-0 translate-y-[-50%] translate-x-[50%]">
        {imgSrc && <Image className='rounded-[20px] border border-neutral-800' width={100} height={100} alt='icon' src={imgSrc}/>}
    </div>
</motion.div>
  )
}

export default Card