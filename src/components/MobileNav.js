import Link from 'next/link'
import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'

const MobileNav = ({toggleMenu}) => {
  return (
    <div className="fixed py-10  w-full h-full top-0 left-0 bg-[rgba(36,36,36,0.85)] backdrop-blur-sm z-50">
    <div className="w-[85%] m-auto grid gap-2">
      <div
        className=" justify-self-end text-3xl cursor-pointer"
        onClick={toggleMenu}
      >
        <IoCloseOutline />
      </div>
      <ul className="list-none text-2xl grid gap-6">
        <li className="">
          <Link className="navBtn" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="navBtn" href="/about">
            about
          </Link>
        </li>
        <li>
          <Link className="navBtn" href="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className="navBtn" href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default MobileNav
