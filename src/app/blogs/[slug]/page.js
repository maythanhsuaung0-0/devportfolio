import React from 'react'
import Markdown from 'markdown-to-jsx'
import fs from 'fs'
import matter from 'gray-matter'
import OnThisPage from '@/components/OnThisPage'
import getPostMetaData from '../../../../utils/getPostMetaData'
import {IoReturnUpBack } from 'react-icons/io5'
import Link from 'next/link'

export const getPostContent = async (slug)=>{
    const folder = "blogs/";
    const file = `${folder}${slug}.md`
    const fileContent = fs.readFileSync(file,'utf8')
    const matterResult = matter(fileContent)
    return matterResult	
}

const BlogPage = async ({params}) => {

    const post = await getPostContent(params.slug)
    const postMeta = await getPostMetaData("blogs")
  return (
    <main className='min-h-screen bg-[#343646] relative'>
      <div className='w-[85%] lg:w-[85%] flex flex-col-reverse lg:grid lg:grid-cols-[70%,auto] gap-5 lg:gap-10 mr-auto ml-auto lg:mr-0 lg:ml-auto pt-[6em] lg:pt-[8em]  lg:py-[5em]'>
       
        <div>
        <Link href='/blogs'>
        <div className='flex flex-row text-[#eab308] gap-4'>
          <IoReturnUpBack className=' text-3xl cursor-pointer'/> <span className='self-center'>Back</span>
        </div>
        </Link>
           <div  className='reset-all-tailwind'>
           <Markdown>{post.content}</Markdown>
           </div>
        </div>
        <div className=''>
        <OnThisPage data={postMeta[0].subtitle}/>
        </div>
      </div>
      
    </main>
  )
}

export default BlogPage
