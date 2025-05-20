import React from 'react'
import Link from 'next/link'

export const BlogCardVer2 = async ({ title, date, time, url, slug, tags }) => {
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
      <div className='shadow-sm rounded-2xl group bg-transparent/10 p-4'>
        <div className='relative group-hover:[&>div]:block group-hover:[&>div:last-child]:grid transition-all delay-75 ease-in '>
          <img src={url} alt={title} className='w-full h-56 cursor-pointer object-cover rounded-2xl' />
          <div className='hidden absolute w-full h-full bottom-0 left-0 bg-gradient-to-t from-35% to-100% rounded-2xl from-black/50 to-transparent backdrop-blur-sm backdrop-opacity-80'>
            <div className='p-3 gap-1 self-end'>
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
        </div>
      </div>
    </Link>
  )
}

