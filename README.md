# Developer portfolio

A Next.js portfolio with Sanity-managed portfolio data and a local Markdown blog.

## Getting Started

Install dependencies and start the development server:

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Use Node.js 22.12 or later. Edit `src/app/page.js` to update the homepage.

## Configure Sanity portfolio data

1. Create or select a project at [Sanity Manage](https://www.sanity.io/manage)
   and note its project ID and dataset name.
2. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SANITY_PROJECT_ID`
   and `NEXT_PUBLIC_SANITY_DATASET`. A public dataset does not need a token.
   For a private dataset, set `SANITY_API_READ_TOKEN` to a Viewer token.
3. In the Sanity project's API settings, add `http://localhost:3000` as a CORS
   origin with credentials allowed. Add the production website origin when deploying.
4. Run `npm run dev` and open [Studio](http://localhost:3000/studio). Sign in to
   Sanity, open **Portfolio Data**, and fill in the Work Experience, Education,
   and Projects tabs. Click **Publish** when your changes are ready.
5. Open `/about` to see your published experience and education. Published
   changes are refreshed on a subsequent request after the 60-second cache expires.

Set the same environment variables in your hosting provider before building the
production app; Studio's project ID and dataset are included at build time.

The Studio is embedded at `/studio`, including its nested editor routes. It uses
one document with ID `portfolio`. Array order in Studio controls display order.
The schema matches the education, experience, and school/work project fields that
were in `public/data.json`. Project data is editable and available through
`getPortfolioData()`, but there is no projects page in the current website.

`public/data.json` is retained unchanged and is no longer read by the website.
Without Sanity configuration or a published portfolio document, experience and
education show empty states. The integration does not import the JSON data into
Sanity. The existing biography, homepage text, and Markdown blog are separate
from this portfolio data schema.

## Add or edit a blog post

Blog posts are Markdown files in `blogs/`. The filename determines the URL:
`blogs/sorting-algorithms.md` is available at `/blogs/sorting-algorithms`.

Create a file such as `blogs/my-new-post.md` with metadata followed by Markdown:

```markdown
---
title: "My New Post"
cover: "/code.png"
category: "Development"
date: "2026-10-16"
readingTime: 5
---

# My New Post

Write the article here.
```

Use `YYYY-MM-DD` dates and a number of minutes for `readingTime`. Put images in
`public/` and reference them with paths such as `/code.png`. If omitted, the cover
defaults to `/code.png` and the reading time is estimated from the article length.

The homepage and `/blogs` list posts with the newest dates first. Blog detail pages
render the Markdown content; unknown filenames return 404. `/api/blogs` returns
local post metadata as `{ "posts": [...] }`. No external service or credentials
are needed. Rebuild the production site after adding or editing posts.

## Check and build

```bash
npm run lint
npm run build
npm start
```

`npm start` serves the production build and requires `npm run build` first.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
