import React from 'react'
import Link from 'next/link'

const BlogCard = async ({title, date, time, url, slug, tags }) => {
  const new_date = new Date(date)
  const formatted_date = new_date.toDateString()
  console.log('tt',tags[0].color)

const bgColorMap = {
  pink: 'bg-pink-400/20',
  yellow: 'bg-yellow-400/20',
  red: 'bg-red-400/20',
};
  const borderColorMap={
   pink: 'border-pink-400',
  yellow: 'border-yellow-400',
  red: 'border-red-400',
}
  return (
    <Link href={`/blogs/${slug}`}>
      <div className='shadow-sm rounded-lg group'>
        <div>
          <img src={url} alt={title} className='w-full h-48 group-hover:border border border-[#343646] transition-all  group-hover:border-[#5c5f7a] cursor-pointer object-cover rounded-tr-md rounded-tl-md' />
        </div>
        <div className='px-3 py-5 pt-3 grid gap-2 border hover:border-b-gray-50/20 hover:border-l-gray-50/20
          hover:border-r-gray-50/20 border-t-transparent border-transparent border-solid  transition-all rounded-bl-md rounded-br-md'>

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
