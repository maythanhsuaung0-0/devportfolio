# Developer portfolio

A Next.js portfolio with an About page and an optional Notion-backed blog.

## Getting Started

Install dependencies and start the development server:

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

No environment variables are required to run the portfolio. The About page uses
`public/data.json` directly. Edit `src/app/page.js` to update the homepage.

## Notion blog (optional)

Copy `.env.example` to `.env.local` and set both values:

```bash
cp .env.example .env.local
```

- `NOTION_SECRET`: the integration's API secret.
- `NOTION_DATABASE`: the database ID, shared with that integration.

The blog expects these Notion properties:

| Property | Type |
| --- | --- |
| `slug` | Text or formula returning a string; required for each post |
| `title` | Text or title |
| `URL` | URL for the cover image (optional) |
| `reading_time` | Number of minutes (optional) |
| `created_at` | Created time (optional; defaults to the page's creation time) |
| `tags` | Multi-select (optional) |

Restart the development server after changing environment variables. Without both
Notion values, the home and blog pages show an empty blog list, `/api/blogs`
returns an empty results array, and blog detail URLs return 404. Errors from a
configured Notion integration are reported by the server so they can be fixed.

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
