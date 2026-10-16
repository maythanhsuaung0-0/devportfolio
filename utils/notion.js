import { Client } from '@notionhq/client';
import { cache } from 'react';

export const revalidate = 3600; // revalidate the data at most every hour

const databaseId = process.env.NOTION_DATABASE;

const notion = process.env.NOTION_SECRET && databaseId ? new Client({
  auth: process.env.NOTION_SECRET,
}) : null;

export const getDatabase = cache(async () => {
  const posts = [];
  if (notion) {
    let cursor;
    do {
      const response = await notion.databases.query({
        database_id: databaseId,
        start_cursor: cursor,
      });
      posts.push(...response.results);
      cursor = response.has_more ? response.next_cursor : undefined;
    } while (cursor);
  }
  return { props: posts, revalidate };
});

export const getPage = cache(async (pageId) => {
  if (!notion || !pageId) return null;
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
});

const getPlainTextFromRichText = (richText = []) =>
  richText.map(text => text.plain_text ?? text.text?.content ?? '').join('');

const getPropertyText = (property) =>
  property?.formula?.string ?? getPlainTextFromRichText(property?.rich_text ?? property?.title);

export const getPageFromSlug = cache(async (slug) => {
  if (!slug) return null;
  const { props: posts } = await getDatabase();
  return posts.find(post => getPropertyText(post.properties?.slug) === slug) ?? null;
});

export const getBlocks = cache(async (blockID) => {
  if (!notion || !blockID) return [];
  const blockId = blockID.replaceAll('-', '');

  const results = [];
  let cursor;
  do {
    const response = await notion.blocks.children.list({
      block_id: blockId,
      page_size: 100,
      start_cursor: cursor,
    });
    results.push(...response.results);
    cursor = response.has_more ? response.next_cursor : undefined;
  } while (cursor);
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
          id: `list-${curr.id}`,
          type: 'bulleted_list',
          bulleted_list: { children: [curr] },
        });
      }
    } else if (curr.type === 'numbered_list_item') {
      if (acc[acc.length - 1]?.type === 'numbered_list') {
        acc[acc.length - 1][acc[acc.length - 1].type].children?.push(curr);
      } else {
        acc.push({
          id: `list-${curr.id}`,
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
  return (posts ?? []).flatMap(post => {
    const properties = post.properties ?? {};
    const slug = getPropertyText(properties.slug);
    if (!slug) return [];
    return [{
      id: post.id,
      slug,
      url: properties.URL?.url ?? '/code.png',
      time: properties.reading_time?.number ?? 0,
      date: properties.created_at?.created_time ?? post.created_time,
      title: getPropertyText(properties.title) || 'Untitled',
      tags: properties.tags?.multi_select ?? [],
    }];
  });
};
