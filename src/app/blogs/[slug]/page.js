import { notFound, redirect } from "next/navigation";
import { getBlogPost, getBlogPosts } from "../../../../utils/blogs";

export function generateStaticParams() {
  return getBlogPosts().map(post => ({ slug: post.slug }));
}

export default async function BlogPage({ params }) {
  const { slug } = await params;
  if (!getBlogPost(slug)) notFound();
  redirect("/");
}
