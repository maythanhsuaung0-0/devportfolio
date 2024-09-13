import React from 'react'
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { AiFillGithub } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import Link from 'next/link';
const SideNav = () => {
  return (
    <div className='bg-[#47495f] hidden lg:block p-2 rounded-full fixed top-[50%] transfrom -translate-y-[50%] left-[3em] w-fit z-50'>
      <ul className='grid gap-2 text-xl'>
        <li className='cursor-pointer p-3 hover:bg-[#555771] rounded-full'>
            <a href='mailto:maythanhsuaung1111@gmail.com' target='_blank_'
            >
            <HiOutlineMail/>
            </a>
        </li>
        <li className='cursor-pointer p-3 hover:bg-[#555771] rounded-full'>
            <a href='https://www.linkedin.com/in/maythanhsu/' target='_blank_'>
        <FaLinkedinIn/>
            </a>
        </li>
        <li className='cursor-pointer p-3 hover:bg-[#555771] rounded-full'>
            <a href={'https://github.com/maythanhsuaung0-0'} target='_blank_'>
            <AiFillGithub/></a>
        </li>
        <li className='cursor-pointer p-3 hover:bg-[#555771] rounded-full'>
            <a href={'https://www.instagram.com/s_shizuko/'} target='_blank_'>
            <IoLogoInstagram/></a>
        </li>
      </ul>
    </div>
  )
}

export default SideNav
