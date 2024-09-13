import React from 'react'
import { ParseTime } from '../../utils/CommonJsFunc'
import Link from 'next/link'

const Card = ({post}) => {
  const hour = ParseTime(post.readingTime.split(":")[0],'h')
  const min = ParseTime(post.readingTime.split(":")[1],'m')
  const sec = ParseTime(post.readingTime.split(":")[2],'s')
  return (
   <Link href={`/blogs/${post.slug}`}>
     <div className='p-2 rounded-md shadow-sm grid gap-2 group'>
      <div>
        <img src={post.image} alt={post.title} className='w-full h-48 group-hover:border border border-[#343646] transition-all  group-hover:border-[#5c5f7a] cursor-pointer object-cover rounded-md'/>
      </div>
      <div className='flex flex-row justify-between'>
        <span className='text-xs text-gray-400'>{post.category}</span>
        <span className='text-xs text-gray-400'>{hour}{min}{sec}</span>
      </div>
      <div>
        <h4 className='text-white'>{post.title}</h4>
      </div>
      <div>
        <span className='text-xs text-gray-400'>{post.date}</span>
      </div>
    </div>
    </Link>
  )
}

export default Card
