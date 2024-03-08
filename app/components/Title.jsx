import React from 'react'
import {motion} from 'framer-motion'
const Title = ({ content }) => {
  return (
    <div id={content} className='z-30 w-full h-28 bg-black border-t border-neutral-900 rounded-tr-[40px] rounded-tl-[40px] flex justify-center items-center'>

      <motion.h1
        initial={{opacity:0,scale:0.9}}
        whileInView={{opacity:1,scale:1}}
        transition={{duration:0.5}}
        className='white-gradient-text page-title w-full text-center' data-text={content.split(" ")[0]}
      >
        {content}
      </motion.h1>

    </div>
  )
}

export default Title