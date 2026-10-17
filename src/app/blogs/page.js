import React from 'react'
import BlogCard from '@/components/BlogCard'
import SideNav from '@/components/SideNav'
import { getBlogPosts } from '../../../utils/blogs'
const BlogMainPage = () => {
  const posts = getBlogPosts()
  return (
    <main className='min-h-screen bg-[#343646] relative'>
      <SideNav position="vertical" />
      <div className='w-[90%] lg:w-[70%] m-auto  py-[6em] lg:py-[8em]'>
        <h2 className='text-3xl font-bold mb-10 text-white'>Blogs</h2>
        {posts.length === 0 && <p className='text-white'>No blogs found.</p>}
        <div className='grid gap-6 lg:grid-cols-3'>
          {posts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default BlogMainPage
