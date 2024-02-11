import React from 'react'

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
          <button className='nav-btn-element'>
            <p className='nav-btn-text'>Home</p>
          </button>
          <button className='nav-btn-element'>
            <p className='nav-btn-text'>Services</p>
          </button>
          <button className='nav-btn-element'>
            <p className='nav-btn-text'>Portfolio</p>
          </button>
          <button className='nav-btn-element'>
            <p className='nav-btn-text'>Contact</p>
          </button>
        </div>
        </div>

        
        <button className='cta text-xs border h-[38px]  border-neutral-950 px-[4px] text-white rounded-full'>
          <p className='nav-btn-text ml-2'>Become a client</p>
          <div className='rounded-full w-[32px] h-[32px] border ml-2'>

          </div>
        </button>
        
    </div>
  )
}

export default Navbar