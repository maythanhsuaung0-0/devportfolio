import { getBlogPosts } from '../../../../utils/blogs';

export function GET() {
  return Response.json({ posts: getBlogPosts() });
}
