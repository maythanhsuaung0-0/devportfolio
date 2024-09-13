import React from 'react'
import getPostMetaData from '../../../utils/getPostMetaData'
import Card from '@/components/Card'

const BlogMainPage = () => {
    const posts = getPostMetaData('blogs')
  return (
    <main className='min-h-screen bg-[#343646] relative'>
      <div className='w-[85%] lg:w-[70%] m-auto grid gap-2 lg:grid-cols-3 pt-[6em] lg:pt-[8em]'>
        {posts.map((post,index) => (
            <Card key={index} post={post}/>
            ))}
      </div>
    </main>
  )
}

export default BlogMainPage
