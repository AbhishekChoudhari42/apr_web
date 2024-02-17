import React from 'react'

const Title = ({content}) => {
  return (
    <div id={content} className='w-full h-28 bg-black border-t border-neutral-900 rounded-tr-[40px] rounded-tl-[40px] flex justify-center items-center mb-8'>
        
        <h1 className='white-gradient-text page-title ' data-text={content}>{content}</h1>

    </div>
  )
}

export default Title