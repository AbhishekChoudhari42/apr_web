import React from 'react'
import Card from './Card'
const Progress = () => {
  return (
    <div className='min-h-screen py-4 pb-12 w-full text-white flex flex-col items-center relative z-[0] bg-black'>
        <Card borderColor={"white"} title="Understanding Your Vision">
            <p className='font-semibold'>
                We listen carefully to your goals 
                and vision for the project.
            </p>
        </Card>
        <div className='line'> </div>
        <Card borderColor={"white"} title="Planning, Brainstorming, and Research">
            <p className='font-semibold'>
            We strategize, brainstorm ideas, and conduct
            thorough research to ensure alignment with 
            your objectives.
            </p>
        </Card>
        <div className='line'> </div>
        <Card borderColor={"white"} title="Design and Development">
            <p className='font-semibold'>
            Our team brings your vision to life through creative design 
            and development, prioritizing user experience and 
            functionality by crafting clean and efficient code
            </p>
        </Card>
        <div className='line'> </div>
        <Card borderColor={"white"} title="Delivering Your Website">
            <p className='font-semibold'>
            We deliver your fully realized website, ready to make an 
            impact and achieve your goals
            </p>
        </Card>
    </div>
  )
}

export default Progress