import Image from 'next/image'
import React from 'react'

const Services = () => {
    return (
        <div className=' h-[100vh] text-white flex flex-col gap-14 items-center relative z-[0] bg-black'>
            <div className="card-container">
                <div className="card ">
                    <h2>Web Design</h2>
                    <p>From stylish, contemporary designs to striking layouts,
                        <br />  we tailor custom websites that enhance
                        <br /> your brand and achieve goals.</p>
                </div>
                <div className="absolute right-[50%] top-0 translate-y-[-50%] translate-x-[50%]">
                    <Image width={100} height={100} alt='icon' src={"/temp.png"}/>
                </div>
            </div>
            <div className="card-container">
                <div className="card ">
                    <h2>Web Design</h2>
                    <p>From stylish, contemporary designs to striking layouts,
                        <br />  we tailor custom websites that enhance
                        <br /> your brand and achieve goals.</p>
                </div>
                <div className="absolute right-[50%] top-0 translate-y-[-50%] translate-x-[50%]">
                    <Image width={100} height={100} alt='icon' src={"/temp.png"}/>
                </div>
            </div>
           
        </div>
    )
}

export default Services