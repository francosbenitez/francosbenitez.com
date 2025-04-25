import { getBlogPostBySlug, getBlogPosts } from "@/lib/get-content";
import { validateLanguage } from "@/lib/i18n";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { markdownToHtml } from "@/lib/markdown";
import { Button } from "@/components/ui/button";

export async function generateStaticParams({
  params,
}: {
  params: { lang: string };
}) {
  const resolvedParams = await Promise.resolve(params);
  const lang = await validateLanguage(resolvedParams.lang);
  const posts = await getBlogPosts(lang);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: { lang: string; slug: string };
}) {
  const resolvedParams = await Promise.resolve(params);
  const lang = await validateLanguage(resolvedParams.lang);
  const post = await getBlogPostBySlug(lang, resolvedParams.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  // Convert markdown to HTML
  const htmlContent = await markdownToHtml(post.content);

  return (
    <div className="max-w-2xl mx-auto">
      <Button
        variant="ghost"
        size="sm"
        className="mb-8 -ml-2 text-muted-foreground hover:text-foreground"
        asChild
      >
        <Link href={`/${lang}/blog`}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          {lang === "en" ? "Back to blog" : "Volver al blog"}
        </Link>
      </Button>

      <article className="prose dark:prose-invert mx-auto">
        <header className="mb-8 not-prose">
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            {post.title}
          </h1>
          <time dateTime={post.date} className="text-sm text-muted-foreground">
            {new Date(post.date).toLocaleDateString(
              lang === "en" ? "en-US" : "es-ES",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            )}
          </time>
        </header>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </article>
    </div>
  );
}
