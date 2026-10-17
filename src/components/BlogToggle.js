import React from 'react'
import { LuDot } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa6";
const BlogToggle = ({title,date,time}) => {
  const formatted_date = date ? new Date(date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC',
  }) : ''
 return (
    <div className='grid grid-cols-[25%,auto,5%] gap-3 py-5 px-3 cursor-pointer hover:bg-[#41435633] rounded-md'>
      <div className='flex flex-col lg:flex-row gap-1 lg:self-center text-xs lg:text-sm text-gray-400'>
        <span className='text-sm self-center'>{formatted_date}</span>
        <span className='lg:self-center hidden lg:block'>
            <LuDot />
        </span>
        <span className='text-sm lg:text-left lg:self-center'>
{time} min read</span>
      </div>
      <div className='lg:self-center text-sm lg:text-base text-white'>
        <div>{title}</div>
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
