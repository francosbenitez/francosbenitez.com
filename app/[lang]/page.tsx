import { getAboutContent } from "@/lib/get-content";
import { SocialLinks } from "@/components/social-links";
import { validateLanguage } from "@/lib/i18n";
import { markdownToHtml } from "@/lib/markdown";
// import { getBlogPosts } from "@/lib/get-content";
// import { BlogList } from "@/components/blog-list";

export default async function AboutPage({
  params,
}: {
  params: { lang: string };
}) {
  const resolvedParams = await Promise.resolve(params);
  const lang = await validateLanguage(resolvedParams.lang);
  const { content } = await getAboutContent(lang);
  // const posts = await getBlogPosts(lang);

  // Convert markdown to HTML
  const htmlContent = await markdownToHtml(content);

  return (
    <div className="max-w-2xl mx-auto">
      <article className="prose dark:prose-invert mx-auto">
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </article>
      <SocialLinks />
      {/* <hr className="border-b border-border/40 my-8" />
      <div className="flex flex-col gap-4">
        <header className="">
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            {translations[lang].blog}
          </h1>
          <p className="text-muted-foreground">
            {lang === "en"
              ? "Thoughts, ideas, and reflections on design and development."
              : "Pensamientos, ideas y reflexiones sobre diseño y desarrollo."}
          </p>
        </header>
        <BlogList posts={posts} lang={lang} />
      </div> */}
    </div>
  );
}
