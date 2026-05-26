import { validateLanguage } from "@/lib/i18n";
import { getBlogPostTitle, getBlogPostsForLang } from "@/lib/blog-posts";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await Promise.resolve(params);
  const lang = await validateLanguage(resolvedParams.lang);

  return (
    <div className="max-w-2xl mx-auto">
      <article className="prose dark:prose-invert mx-auto">
        <h1>Blog</h1>
        <div className="flex flex-col gap-2">
          {getBlogPostsForLang(lang).map((post) => (
            <div key={post.slug} className="flex items-baseline gap-4">
              {/* <span className="text-sm font-mono text-muted-foreground w-28 shrink-0">
                {post.date}
              </span> */}
              <Link
                href={`/${lang}/blog/${post.slug}`}
                className="group inline-flex items-center gap-1.5 text-sm"
              >
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:translate-x-1" />
                {getBlogPostTitle(post, lang)}
              </Link>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}
