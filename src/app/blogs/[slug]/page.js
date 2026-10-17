import React from 'react'
import Markdown from 'markdown-to-jsx'
import Link from 'next/link'
import { CgArrowLeft } from 'react-icons/cg'
import { getBlogPost, getBlogPosts } from '../../../../utils/blogs'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return getBlogPosts().map(post => ({ slug: post.slug }))
}

const BlogPage = async ({ params }) => {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) {
    notFound()
  }
  return (
    <main className='min-h-screen bg-[#343646] relative'>
      <article className='max-w-[1200px] mx-auto px-5 prose prose-invert prose-code:bg-slate-950 prose-code:rounded-md prose-pre:bg-slate-950'>
        <div className='w-[85%] mx-auto pt-[6em] lg:pt-[8em] pb-[5em]'>

          <div>
            <Link href='/blogs'>
              <div className='flex flex-row text-white bg-[#47495f]   hover:bg-[#555771] w-fit rounded-md px-2 py-2 gap-2 mb-4'>
                <CgArrowLeft className='self-center' />
                <span className='self-center text-sm'>Back</span>
              </div>
            </Link>
            <section>
              <Markdown>{post.content}</Markdown>
            </section>
          </div>
        </div>
      </article>

    </main>
  )
}

export default BlogPage
