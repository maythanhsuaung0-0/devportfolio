import Link from 'next/link'
import React from 'react'
import { LuDot } from 'react-icons/lu'

const Card = ({data,mainTools}) => {
    const colors = ['bg-red-500','bg-blue-500','bg-green-500','bg-yellow-500','bg-indigo-500','bg-purple-500','bg-pink-500']
    const ToolColor ={}
    mainTools.map((tool,index) => {
      ToolColor[tool] = colors[index]
    })
    console.log(ToolColor)
  return (
    <Link Link href={`/projects/${data.projectName.split(' ').join('')}`}>
    <div className='p-3 my-3 m-auto cursor-pointer rounded-md w-[90%] min-h-[11em] h-full border border-gray-50 hover:rotate-3'>
      <h3 className='text-lg font-bold lg:text-xl mb-3'>{data.projectName.split(' ').slice(0,5).join(' ')}{data.projectName.split(' ').length>5 && ' ...'}</h3>
      <div className='flex flex-row justify-between mb-4 text-xs text-gray-400'>
        <span>{data.name}</span>
        <span>{data.year}</span>
      </div>
      <div className='flex flex-row gap-2'>
        <span className={`w-2 h-2 rounded-full self-center ${ToolColor[data.tools[0]]}`}></span>
      <span className="text-xs text-white self-center">{data.tools[0]}</span>
      </div>
    </div>
    </Link>
  )
}

export default Card
