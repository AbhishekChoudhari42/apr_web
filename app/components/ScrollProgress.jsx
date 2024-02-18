"use client"
import React from 'react'
import { useScroll , motion, useTransform} from "framer-motion"
const ScrollProgress = (m) => {
    console.log(m)
    return (
    <motion.div style={{y:m.current,scaleY:m}} className={`fixed right-2 text-white z-50 `}>aa</motion.div>
  )
}

export default ScrollProgress