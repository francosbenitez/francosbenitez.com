import { validateLanguage, t } from "@/lib/i18n";
import { markdownToHtml } from "@/lib/markdown";
import { getAboutContent } from "@/lib/get-content";
import { SocialLinks } from "@/components/social-links";
import { getBlogPostTitle, getBlogPostsForLang } from "@/lib/blog-posts";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await Promise.resolve(params);
  const lang = await validateLanguage(resolvedParams.lang);
  const { content } = await getAboutContent(lang);

  const lines = content.split("\n").filter(Boolean);
  const tagline =
    lines.find((l) => !l.startsWith("#") && l.trim().length > 0) ?? "";
  const taglineHtml = await markdownToHtml(tagline);

  return (
    <div className="max-w-2xl mx-auto">
      <article className="prose dark:prose-invert mx-auto">
        <h1>Franco S. Benítez</h1>

        <div className="flex flex-col items-center">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 overflow-hidden">
            <Image
              src="/photo.jpg"
              alt="Franco Benitez"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-xs text-muted-foreground mt-2 italic">
            {t(lang, "photoLabel")}
          </p>
        </div>

        <div
          className="[&>p]:mt-0 [&>p]:mb-3"
          dangerouslySetInnerHTML={{ __html: taglineHtml }}
        />

        {/* Writing section */}
        <h2 className="mb-4 text-2xl font-medium tracking-tight text-foreground">
          {t(lang, "writing")}
        </h2>
        <div className="mb-8 flex flex-col gap-2">
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

        <SocialLinks />
      </article>
    </div>
  );
}
