import Image from 'next/image'
import React from 'react'

const Services = () => {
    return (
        <div className=' h-[100vh] text-white flex flex-col gap-14 items-center relative border-t border-neutral-900 rounded-tr-[80px] rounded-tl-[80px] pt-12 z-[0] bg-black'>
            <h1 className='page-title' data-text="SERVICES">SERVICES</h1>
            <div className="card-container bg-cross-lines ">
                <div className="card ">
                    <h2>Web Design</h2>
                    <p>From stylish, contemporary designs to striking layouts,
                        <br />  we tailor custom websites that enhance
                        <br /> your brand and achieve goals.</p>
                </div>
                <div className="absolute right-0 top-[50%] translate-y-[-50%] translate-x-[50%]">
                    <Image width={100} height={100} alt='icon' src={"/temp.png"}/>
                </div>
            </div>
            <div className="card-container bg-cross-lines ">
                <div className="card ">
                    <h2>Web Development</h2>
                    <p>Our skilled developers transform your design into reality  
                    <br />with pristine code and flawless functionality,  
                    <br />guaranteeing seamless website performance.</p>
                </div>
                <div className="absolute right-0 top-[50%] translate-y-[-50%] translate-x-[50%]">
                    <Image width={100} height={100} alt='icon' src={"/temp.png"}/>
                </div>
            </div>

        </div>
    )
}

export default Services