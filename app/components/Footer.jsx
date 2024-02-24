import React from 'react'
import Link from 'next/link';
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
const Footer = () => {
    return (
        <footer className='w-full min-h-fit text-white relative flex flex-col gap-6 justify-center items-center rounded-t-[20px] border-neutral-900 border-t py-8'>

            <div className="flex justify-around max-sm:px-12 max-w-[360px] items-center gap-6 p-2 w-full">
                <Link href="https://x.com/PixlCraft_tech?t=-bAYQ30ZJJQLiAPuO1ZFpA&s=08">
                    <FaXTwitter className='hover:brightness-200' size={24} color='#aaa' />
                </Link>
                <Link href="https://www.linkedin.com/in/pixlcraft-tech-99bb022b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                    <FaLinkedinIn className='hover:brightness-200' size={28} color='#aaa' />
                </Link>
                <Link href="/">
                    <FaInstagram className='hover:brightness-200' size={28} color='#aaa' />
                </Link>
                <Link href="https://wa.me/+919004820390">
                    <FaWhatsapp className='hover:brightness-200' size={28} color='#aaa' />
                </Link>
            </div>
            <Link href={"mailto:contact@pixlcraft.tech"} className='flex items-center justify-center'>
                <IoMailOutline color='#888' size={28} /> <p className='ml-2 text-[#888]'>contact@pixlcraft.tech</p>
            </Link>
            <p className="text-base leading-6 text-center text-neutral-700 mt-8">
                © 2024 Pixlcraft , Inc. All rights reserved.
            </p>




        </footer>
    )
}

export default Footer