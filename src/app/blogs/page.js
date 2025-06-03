import React from 'react'
import BlogCard from '@/components/BlogCard'
import SideNav from '@/components/SideNav'
import { getBlogPostArray, getDatabase } from '../../../utils/notion'
const BlogMainPage = async () => {
  const posts = await getDatabase();
  let blog_posts = await getBlogPostArray(posts.props)
  const result = await Promise.all(blog_posts)
  if (!posts ) {
    return <div className='grid items-center h-screen w-full'><h3>No blogs found</h3></div>
  }
  return (
    <main className='min-h-screen bg-[#343646] relative'>
      <SideNav position="vertical" />
      <div className='w-[90%] lg:w-[70%] m-auto  py-[6em] lg:py-[8em]'>
        <h2 className='text-3xl font-bold mb-10 text-white'>Blogs</h2>
        <div className='grid gap-6 lg:grid-cols-3'>
          {result?.map((post) => (
            <BlogCard key={post.id} slug={post.slug} tags={post.tags} id={post.id} url={post.url} time={post.time} date={post.date} title={post.title} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default BlogMainPage
