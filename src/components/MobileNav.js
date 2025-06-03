import Link from 'next/link'
import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'

const MobileNav = ({ toggleMenu }) => {
  return (
    <div className="fixed py-10 text-white  w-full h-full top-0 left-0 bg-[rgba(36,36,36,0.85)] backdrop-blur-sm z-50">
      <div className="w-[90%] m-auto grid gap-2">
        <div
          className=" justify-self-end text-white text-3xl cursor-pointer"
          onClick={toggleMenu}
        >
          <IoCloseOutline />
        </div>
        <ul className="list-none text-2xl grid gap-6">
          <li className="">
            <Link
              onClick={toggleMenu}
              className="navBtn" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={toggleMenu} className="navBtn" href="/about">
              About
            </Link>
          </li>
          <li>
            <Link onClick={toggleMenu} className="navBtn" href="/resume">
              Resume
            </Link>
          </li>
          <li>
            <Link onClick={toggleMenu} className="navBtn" href="/blogs">
              Blogs
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MobileNav
