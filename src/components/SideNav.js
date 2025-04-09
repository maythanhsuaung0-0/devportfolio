"use client"
import React, { useEffect, useState } from 'react'
import { FaLinkedinIn } from "react-icons/fa6";
import { AiFillGithub } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
const SideNav = ({ position }) => {
  const [currentHeight, setCurrentHeight] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      setCurrentHeight(window.scrollY)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  const verticalClass = `fixed top-[50%] transition-transform duration-100 ease-in-out transfrom -translate-y-[50%] left-[3em]`
  return (
    <div className={`bg-[#47495f] hidden lg:block p-2 rounded-full w-fit z-50 ${currentHeight > 400 || position == "vertical" ? verticalClass : ''}`}>
      <ul className={`${currentHeight > 400 || position == "vertical" ? 'grid' : 'flex'} gap-2 text-xl`}>
        <li className='cursor-pointer p-3 hover:bg-[#555771] rounded-full'>
          <a href='mailto:maythanhsuaung1111@gmail.com' target='_blank_'
          >
            <HiOutlineMail />
          </a>
        </li>
        <li className='cursor-pointer p-3 hover:bg-[#555771] rounded-full'>
          <a href='https://www.linkedin.com/in/maythanhsu/' target='_blank_'>
            <FaLinkedinIn />
          </a>
        </li>
        <li className='cursor-pointer p-3 hover:bg-[#555771] rounded-full'>
          <a href={'https://github.com/maythanhsuaung0-0'} target='_blank_'>
            <AiFillGithub /></a>
        </li>
      </ul>
    </div>
  )
}

export default SideNav
