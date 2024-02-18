import React from 'react'

const Title = ({content}) => {
  return (
    <div id={content} className='z-30 w-full h-28 bg-black border-t border-neutral-900 rounded-tr-[40px] rounded-tl-[40px] flex justify-center items-center'>
        
        <h1 className='white-gradient-text page-title w-full text-center' data-text={content.split(" ")[0]}>{content}</h1>

    </div>
  )
}

export default Title