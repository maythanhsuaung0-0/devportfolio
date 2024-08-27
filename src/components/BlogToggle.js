import React from 'react'
import { LuDot } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa6";
const BlogToggle = () => {
  return (
    <div className='grid grid-cols-[30%,auto,5%] gap-3 py-5 cursor-pointer hover:bg-[#41435633] rounded-md'>
      <div className='flex flex-row gap-1 lg:self-center text-xs lg:text-sm text-gray-400'>
        <span>Feb 26</span>
        <span className='lg:self-center'>
            <LuDot />
        </span>
        <span>Blog</span>
      </div>
      <div className='lg:self-center text-sm lg:text-base text-white'>
        <div>Javascript beginner guide</div>
      </div>
      <div className='lg:self-center'>
        <span className='text-yellow-500'>
            <FaArrowRight />
        </span>
      </div>
    </div>
  )
}

export default BlogToggle
