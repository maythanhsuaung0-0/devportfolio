import { Client } from '@notionhq/client';
import { cache } from 'react';

export const revalidate = 3600; // revalidate the data at most every hour

const databaseId = process.env.NOTION_DATABASE;

/**
 * Returns a random integer between the specified values, inclusive.
 * The value is no lower than `min`, and is less than or equal to `max`.
 *
 * @param {number} minimum - The smallest integer value that can be returned, inclusive.
 * @param {number} maximum - The largest integer value that can be returned, inclusive.
 * @returns {number} - A random integer between `min` and `max`, inclusive.
 */
function getRandomInt(minimum, maximum) {
  const min = Math.ceil(minimum);
  const max = Math.floor(maximum);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const notion = new Client({
  auth: process.env.NOTION_SECRET,
});

export const getDatabase = cache(async () => {
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  return { props: response.results, revalidate: revalidate };
});

export const getPage = cache(async (pageId) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
});
const getPlainTextFromRichText = richText => {
  return richText.map(t => t.plain_text).join("")
  // Note: A page mention will return "Undefined" as the page name if the page has not been shared with the integration. See: https://developers.notion.com/reference/block#mention
}
export const getPageFromSlug = cache(async (slug) => {
  const slugie = slug
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'slug',
      formula: {
        string: {
          equals: slugie,
        },
      },
    },
  });
  if (response?.results?.length) {
    return response?.results?.[0];
  }
  return {};
});

export const getBlocks = cache(async (blockID) => {
  const blockId = blockID.replaceAll('-', '');

  const { results } = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 100,
  });
  // Fetches all child blocks recursively
  // be mindful of rate limits if you have large amounts of nested blocks
  // See https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
  const childBlocks = results.map(async (block) => {
    if (block.has_children) {
      const children = await getBlocks(block.id);
      return { ...block, children };
    }
    return block;
  });

  return Promise.all(childBlocks).then((blocks) => blocks.reduce((acc, curr) => {
    if (curr.type === 'bulleted_list_item') {
      if (acc[acc.length - 1]?.type === 'bulleted_list') {
        acc[acc.length - 1][acc[acc.length - 1].type].children?.push(curr);
      } else {
        acc.push({
          id: getRandomInt(10 ** 99, 10 ** 100).toString(),
          type: 'bulleted_list',
          bulleted_list: { children: [curr] },
        });
      }
    } else if (curr.type === 'numbered_list_item') {
      if (acc[acc.length - 1]?.type === 'numbered_list') {
        acc[acc.length - 1][acc[acc.length - 1].type].children?.push(curr);
      } else {
        acc.push({
          id: getRandomInt(10 ** 99, 10 ** 100).toString(),
          type: 'numbered_list',
          numbered_list: { children: [curr] },
        });
      }
    } else {
      acc.push(curr);
    }
    return acc;
  }, []));
});
export const getBlogPostArray = async (posts) => {
  if (posts) {
    const results = posts.map(async post => {
      const plain_slug = await post?.properties?.slug['rich_text'][0]['plain_text']
      const page = await getPageFromSlug(plain_slug)
      const { title, URL, reading_time, created_at, tags } = page.properties
      return {
        id: page.id,
        slug: plain_slug,
        url: URL.url,
        time: reading_time.number,
        date: created_at.created_time,
        title: title.rich_text[0].plain_text,
        tags: tags.multi_select
      }
    }); 
    if(!Array.isArray(results)){
      console.log('result',results)
      throw new Error("Expected data to be array")
    }
    return await Promise.all(results)
  }
  return []
}
