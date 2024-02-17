import Image from 'next/image'
import React from 'react'
import Card from './Card'

const Services = () => {
    return (
        <div  className='h-[80vh] min-h-fit w-screen text-white flex flex-col gap-20 pt-4 items-center relative z-[0] bg-black'>
            <Card title={"Web Design"} imgSrc={"/design-icon.webp"} borderColor={"green"}>
            <p>
                From stylish, contemporary designs to striking layouts,
                we tailor custom websites that enhance
                your brand and achieve goals.
            </p>
            </Card>
            <Card title={"Web Development"} imgSrc={"/temp.png"} borderColor={"green"}>
            <p>
                From stylish, contemporary designs to striking layouts,
                we tailor custom websites that enhance
                your brand and achieve goals.
            </p>
            </Card>
            {/* <Card title={"Web Development"} >
            <p>
                From stylish, contemporary designs to striking layouts,
                we tailor custom websites that enhance
                your brand and achieve goals.
            </p>
            </Card> */}
        </div>
    )
}

export default Services