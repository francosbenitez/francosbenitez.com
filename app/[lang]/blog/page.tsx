import { getBlogPosts } from "@/lib/get-content";
import { BlogList } from "@/components/blog-list";
import { validateLanguage, translations } from "@/lib/i18n";

export default async function BlogPage({
  params,
}: {
  params: { lang: string };
}) {
  const resolvedParams = await Promise.resolve(params);
  const lang = await validateLanguage(resolvedParams.lang);
  const posts = await getBlogPosts(lang);

  return (
    <div className="max-w-2xl mx-auto">
      <header className="mb-10">
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
    </div>
  );
}
