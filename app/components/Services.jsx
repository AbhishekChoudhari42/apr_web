import Image from 'next/image'
import React from 'react'
import Card from './Card'

const Services = () => {
    return (
        <div  className='min-h-fit w-screen py-8 pt-20 text-white flex flex-col gap-20 items-center relative z-[0] bg-black'>
            <Card title={"Web Design"} imgSrc={"/design-icon.webp"} borderColor={"green"}>
            <p>
                From stylish, contemporary designs to striking layouts,
                we tailor custom websites that enhance
                your brand and achieve goals.
            </p>
            </Card>
            <Card title={"Web Development"} imgSrc={"/comp-icon.webp"} borderColor={"green"}>
            <p>
            Our skilled developers transform your design into reality with 
            pristine code and flawless functionality, guaranteeing 
            seamless website performance.
            </p>
            </Card>

        </div>
    )
}

export default Services