import { validateLanguage } from "@/lib/i18n";
import { getBlogPostContent } from "@/lib/get-content";
import {
  getBlogPost,
  blogPostAllowedForLang,
  getStaticBlogSlugParams,
} from "@/lib/blog-posts";
import { BlogPostLayout } from "@/components/blog-post-layout";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getStaticBlogSlugParams();
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const resolvedParams = await Promise.resolve(params);
  const lang = await validateLanguage(resolvedParams.lang);
  const slug = resolvedParams.slug;

  const post = getBlogPost(slug);
  if (!post || !blogPostAllowedForLang(post, lang)) {
    notFound();
  }

  const loaded = await getBlogPostContent(lang, slug);
  if (!loaded) {
    notFound();
  }

  return <BlogPostLayout content={loaded.content} />;
}
