import React from 'react'

const Tooltip = ({children,text}) => {
  return (
    <div className=' group relative'>
        <div className="absolute group-hover:block hidden text-xs -top-8 left-0 bg-[#3c3f4c] rounded-full py-1 px-4 z-10
        before:content-[''] before:absolute before:-bottom-1 before:rotate-45 before:left-1/2 before:-translate-x-1/2
         before:w-2 before:h-2 before:bg-[#3c3f4c] ">{text}</div>
      {children}
    </div>
  )
}

export default Tooltip
