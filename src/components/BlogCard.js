import React from 'react'
import Link from 'next/link'

const BlogCard = async ({ title, date, time, url, slug, tags }) => {
  const new_date = new Date(date)
  const formatted_date = new_date.toDateString()
  console.log('tt', tags[0].color)

  const bgColorMap = {
    pink: 'bg-pink-400/20',
    yellow: 'bg-yellow-400/20',
    red: 'bg-red-400/20',
  };
  const borderColorMap = {
    pink: 'border-pink-400',
    yellow: 'border-yellow-400',
    red: 'border-red-400',
  }
  return (
    <Link href={`/blogs/${slug}`}>
      <div className='shadow-sm rounded-lg hover:shadow-md group bg-transparent/10 '>
          <div className='relative group-hover:[&>div]:block transition-all delay-75 ease-in '>
               <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-black/10 hidden '></div>
          <img src={url} alt={title} className='w-full h-48 cursor-pointer object-cover rounded-tr-md rounded-tl-md' />
        </div>
        <div className='px-3 py-5 pt-3 grid gap-2 border border-t-transparent border-transparent border-solid  transition-all rounded-bl-md rounded-br-md'>

          <div className='flex flex-row justify-between'>
            <div>
              <h4 className='text-white'>{title}</h4>
            </div>

            <span className='text-xs text-gray-400'>{time} min read</span>
          </div>
          <div>
            <span className='text-xs text-gray-400'>{formatted_date}</span>
          </div>
          <div className='flex flex-wrap flex-row gap-2'>
            {tags?.map((e) => <span key={e.id} className={`text-xs text-white ${bgColorMap[e.color]} ${borderColorMap[e.color]} border-solid border   py-1 px-2 rounded-md`}>{e.color}</span>)}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogCard
