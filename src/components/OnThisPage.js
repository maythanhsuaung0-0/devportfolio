'use client'
import React,{useState} from 'react'
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
const OnThisPage = ({data}) => {
  const [show,setShow] = useState(false)

  return (
    <div className='relative w-full lg:h-full mt-20 '>
      <div className='border-l-2 border-[#44465b85] px-5 py-4 top-[2em] sticky lg:top-[7em] right-[10em]'>
      <div className='flex flex-row gap-2 justify-between pr-10 cursor-pointer' onClick={()=>setShow(!show)}>
      <h4 className='text-[#eab308]'>On This Page</h4>
      {show && <FaAngleUp  className='cursor-pointer text-[#eab308]'/>}
      {!show && <FaAngleDown className='cursor-pointer text-[#eab308]'/>}
      </div>
     {show &&  <ul className='text-white list-none pt-2'>
        {data.map((val,index) => (
          <li key={index} className='text-sm py-2'>
            <a href={`#${val.ttl.toLowerCase().replace(' ','-')}`}>{val.ttl}</a>
            <ul className='list-none text-sm pl-4 pt-2'>
              {val.content.map((cont,i) => (
                <li key={i} className='py-1 hover:text-gray-200'>
                  <a href={`#${cont.toLowerCase().replace(' ','-')}`}>{cont}</a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>}
    </div>
    </div>
  )
}

export default OnThisPage
