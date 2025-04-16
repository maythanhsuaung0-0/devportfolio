import React from 'react'
import BlogCard from '@/components/BlogCard'
import getPostMetaData from '../../../utils/getPostMetaData'
import SideNav from '@/components/SideNav'
import { getBlocks, getBlogPostArray, getDatabase, getPageFromSlug } from '../../../utils/notion'
async function getPosts() {
  const database = await getDatabase();

  return database;
}

const BlogMainPage = async () => {
  const posts = await getPosts();
  console.log('params', posts[0])
  let blog_posts = getBlogPostArray(posts)
  const result = await Promise.all(blog_posts)

  return (
    <main className='min-h-screen bg-[#343646] relative'>
      <SideNav position="vertical" />
      <div className='w-[85%] lg:w-[70%] m-auto  pt-[6em] lg:pt-[8em]'>
        <h2 className='text-3xl font-bold mb-10 text-white'>Blogs</h2>
        <div className='grid gap-4 lg:grid-cols-3'>
          {result?.map((post, index) => (
            <BlogCard key={post.id} slug={post.slug} tags={post.tags} id={post.id} url={post.url} time={post.time} date={post.date} title={post.title} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default BlogMainPage
