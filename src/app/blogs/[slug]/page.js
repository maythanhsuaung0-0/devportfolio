import React, { Fragment } from 'react'
import styles from '../../../styles/posts.module.css'
import Link from 'next/link'
import { CgArrowLeft } from 'react-icons/cg'
import { getBlocks, getPageFromSlug } from '../../../../utils/notion'
import { renderBlock } from '@/components/notion/renderer'

export const getPostContent = async (slug) => {
  const page = await getPageFromSlug(slug)
  console.log('page', page)
}

const BlogPage = async ({ params }) => {
  const param = await params  // const page = await getPageFromSlug(post?.slug)
  const slug = param.slug
  // console.log('page',page)
  //const blocks = await getBlocks(page?.id)

  const page = await getPageFromSlug(slug)
  const blocks = await getBlocks(page.id)
  const block = await blocks[0]

  console.log('blocks', blocks)
  if (!page || !blocks) {
    return <div />;
  }
  return (
    <main className='min-h-screen bg-[#343646] relative'>
      <article className={styles.container}>
        <div className='w-[85%] lg:w-[85%] flex flex-col-reverse lg:grid lg:grid-cols-[70%,auto] gap-5 lg:gap-10 mr-auto ml-auto lg:mr-0 lg:ml-auto pt-[6em] lg:pt-[8em]  lg:py-[5em]'>

          <div>
            <Link href='/blogs'>
              <div className='flex flex-row text-white bg-[#47495f]   hover:bg-[#555771] w-fit rounded-md px-2 py-2 gap-2 mb-4'>
                <CgArrowLeft className='self-center' />
                <span className='self-center text-sm'>Back</span>
              </div>
            </Link>
            <section>
              {blocks?.length > 1 &&
                blocks.map((block) => (
                <Fragment key={block.id}>{renderBlock(block)}</Fragment>
              ))}

              <Fragment key={block.id}>{renderBlock(block)}</Fragment>
              {block?.children?.map((block) => (
                <Fragment key={block.id}>{renderBlock(block)}</Fragment>
              ))}
            </section>
            {/*
          <div className='reset-all-tailwind'>
            <Markdown>{post.content}</Markdown>
          </div>
          */}
          </div>
          {/*
        <div className=''>
          <OnThisPage data={postMeta[0].subtitle} />
        </div>
        */}
        </div>
      </article>

    </main>
  )
}

export default BlogPage
