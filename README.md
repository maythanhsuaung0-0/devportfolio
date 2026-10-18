# Developer portfolio

A single-page Next.js portfolio with Sanity-managed data and a local Markdown archive.

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
2. Create `.env.local` and set `NEXT_PUBLIC_SANITY_PROJECT_ID`
   and `NEXT_PUBLIC_SANITY_DATASET`. A public dataset does not need a token.
   For a private dataset, set `SANITY_API_READ_TOKEN` to a Viewer token.
3. In the Sanity project's API settings, add `http://localhost:3000` as a CORS
   origin with credentials allowed. Add the production website origin when deploying.
4. Run `npm run dev` and open [Studio](http://localhost:3000/studio). Sign in to
   Sanity, open **Portfolio Data**, and fill in the Work Experience, Education,
   and Projects tabs. Click **Publish** when your changes are ready.
5. Open `/` to see your published projects, experience, and education. Published
   changes are refreshed on a subsequent request after the 60-second cache expires.

Set the same environment variables in your hosting provider before building the
production app; Studio's project ID and dataset are included at build time.

The Studio is embedded at `/studio`, including its nested editor routes. It uses
one document with ID `portfolio`. Array order in Studio controls display order.
The homepage is a single document with projects, biography, skills, experience,
education, and contact details. Its navigation jumps to sections on the same page.
The old `/about` URL redirects to the About section; `/blogs` and known blog article
URLs redirect to the homepage. `/resume` opens the resume file.

`public/data.json` supplies the existing projects, experience, and education when
Sanity is not configured or there is no published portfolio document. Once a
document is published, its arrays (including intentionally empty ones) take
precedence. The local `/MayAung_resume.pdf` is used until a resume is uploaded.
The integration does not import the JSON data into Sanity. The biography,
homepage text, and Markdown archive are separate from this portfolio data schema.

## Blog archive

The original Markdown posts remain in `blogs/`. They are not displayed on the
homepage. `/api/blogs` still returns their metadata as `{ "posts": [...] }`, sorted
by date. Known article URLs redirect to the homepage; unknown filenames return 404.
Keep the cover images in `public/`, since the API references them. Rebuild the
production site after editing the archive.

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
