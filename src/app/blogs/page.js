import React from 'react'
import BlogCard from '@/components/BlogCard'
import getPostMetaData from '../../../utils/getPostMetaData'

const BlogMainPage = () => {
    const posts = getPostMetaData('blogs')
  return (
    <main className='min-h-screen bg-[#343646] relative'>
      <div className='w-[85%] lg:w-[70%] m-auto  pt-[6em] lg:pt-[8em]'>
      <h2 className='text-3xl font-bold mb-10 text-yellow-500'>Blogs</h2>
       <div className='grid gap-2 lg:grid-cols-3'>
       {posts.map((post,index) => (
            <BlogCard key={index} post={post}/>
            ))}
       </div>
      </div>
    </main>
  )
}

export default BlogMainPage
