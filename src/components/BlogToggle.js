import React from 'react'
import { LuDot } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa6";
import { ParseTime } from '../../utils/CommonJsFunc';
const BlogToggle = ({val}) => {
  const hour = ParseTime(val.readingTime.split(":")[0],'h')
  const min = ParseTime(val.readingTime.split(":")[1],'m')
  const sec = ParseTime(val.readingTime.split(":")[2],'s')
  return (
    <div className='grid grid-cols-[40%,auto,5%] gap-3 py-5 px-3 cursor-pointer hover:bg-[#41435633] rounded-md'>
      <div className='flex flex-row gap-1 lg:self-center text-xs lg:text-sm text-gray-400'>
        <span className='text-xs self-center'>{val.date}</span>
        <span className='lg:self-center'>
            <LuDot />
        </span>
        <span className='text-xs self-center'>
        {hour}
        {min}
        {sec}
        {parseInt(val.readingTime.split(":")[2])>0&&`${val.readingTime.split(":")[2]}s`} read</span>
      </div>
      <div className='lg:self-center text-sm lg:text-base text-white'>
        <div>{val.title}</div>
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
