import React from 'react'
import Markdown from 'markdown-to-jsx'
import fs from 'fs'
import matter from 'gray-matter'
import OnThisPage from '@/components/OnThisPage'
import getPostMetaData from '../../../../utils/getPostMetaData'
import Link from 'next/link'
import { CgArrowLeft } from 'react-icons/cg'

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
        <div className='flex flex-row text-white bg-[#47495f]   hover:bg-[#555771] w-fit rounded-md px-2 py-2 gap-2 mb-4'>
            <CgArrowLeft className='self-center'/>
           <span className='self-center text-sm'>Back</span>
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
