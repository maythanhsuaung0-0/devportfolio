import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const BlogCard = ({ title, date, readingTime, image, slug, category }) => {
  const formatted_date = date ? new Date(date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC',
  }) : ''
  return (
    <Link href={`/blogs/${slug}`}>
      <div className='shadow-sm rounded-lg hover:shadow-md group bg-transparent/10 '>
          <div className='relative group-hover:[&>div]:block transition-all delay-75 ease-in '>
               <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-black/10 hidden '></div>
          <Image src={image} alt={title} width={640} height={360} className='w-full h-48 cursor-pointer object-cover rounded-tr-md rounded-tl-md' />
        </div>
        <div className='px-3 py-5 pt-3 grid gap-2 border border-t-transparent border-transparent border-solid  transition-all rounded-bl-md rounded-br-md'>

          <div className='flex flex-row justify-between'>
            <div>
              <h4 className='text-white'>{title}</h4>
            </div>

            <span className='text-xs text-gray-400'>{readingTime} min read</span>
          </div>
          <div>
            <span className='text-xs text-gray-400'>{formatted_date}</span>
          </div>
          <div className='flex flex-wrap flex-row gap-2'>
            {category && <span className='text-xs text-white bg-yellow-400/20 border-yellow-400 border py-1 px-2 rounded-md'>{category}</span>}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogCard
