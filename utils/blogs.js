import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const blogDirectory = path.join(process.cwd(), 'blogs');

function getSlugs() {
  if (!fs.existsSync(blogDirectory)) return [];

  return fs.readdirSync(blogDirectory, { withFileTypes: true })
    .filter(entry => entry.isFile() && entry.name.endsWith('.md'))
    .map(entry => entry.name.slice(0, -3));
}

function readPost(slug) {
  const file = fs.readFileSync(path.join(blogDirectory, `${slug}.md`), 'utf8');
  const { data, content } = matter(file);

  return {
    slug,
    title: data.title || slug,
    image: data.cover || '/code.png',
    category: data.category || '',
    date: data.date instanceof Date ? data.date.toISOString().slice(0, 10) : data.date || '',
    readingTime: Number.isFinite(data.readingTime) && data.readingTime > 0
      ? data.readingTime
      : Math.max(1, Math.ceil(content.trim().split(/\s+/).length / 200)),
    content,
  };
}

export function getBlogPosts() {
  return getSlugs()
    .map(slug => {
      const { content, ...metadata } = readPost(slug);
      return metadata;
    })
    .sort((a, b) => (Date.parse(b.date) || 0) - (Date.parse(a.date) || 0));
}

export function getBlogPost(slug) {
  // Only read filenames discovered in the blog directory.
  if (typeof slug !== 'string' || !getSlugs().includes(slug)) return null;
  return readPost(slug);
}
