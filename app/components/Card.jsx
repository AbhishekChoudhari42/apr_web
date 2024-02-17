import Image from 'next/image'
import React from 'react'

const ServicesCard = ({title,imgSrc,children,borderColor}) => {
  return (
    <div className={`card-container ${borderColor ?? borderColor}-border`}>
    <div className={`card`}>
        <h2 className={`${imgSrc ? 'mt-14' : 'mt-0'}`}>{title}</h2>
        {children}
    </div>
    <div className="absolute right-[50%] top-0 translate-y-[-50%] translate-x-[50%]">
        {imgSrc && <Image width={100} height={100} alt='icon' src={imgSrc}/>}
    </div>
</div>
  )
}

export default ServicesCard