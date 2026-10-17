import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const BlogCardVer2 = ({ title, date, readingTime, image, slug, category }) => {
  const formatted_date = date ? new Date(date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC',
  }) : ''
  return (
    <Link href={`/blogs/${slug}`}>
      <div className='shadow-sm rounded-2xl group bg-transparent/10 p-4'>
        <div className='relative group-hover:[&>div]:block group-hover:[&>div:last-child]:grid transition-all delay-75 ease-in '>
          <Image src={image} alt={title} width={640} height={360} className='w-full h-56 cursor-pointer object-cover rounded-2xl' />
          <div className='hidden absolute w-full h-full bottom-0 left-0 bg-gradient-to-t from-35% to-100% rounded-2xl from-black/50 to-transparent backdrop-blur-sm backdrop-opacity-80'>
            <div className='p-3 gap-1 self-end'>
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
        </div>
      </div>
    </Link>
  )
}

