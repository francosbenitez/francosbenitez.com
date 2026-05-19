import { validateLanguage, t } from "@/lib/i18n";
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
        <div className="flex items-baseline gap-4">
          <span className="text-sm font-mono text-muted-foreground w-28 shrink-0">
            Jan 1, 2025
          </span>
          <Link href={`/${lang}/blog/journey`} className="text-sm">
            {t(lang, "myJourney")}
          </Link>
        </div>
        <div className="flex items-baseline gap-4">
          <span className="text-sm font-mono text-muted-foreground w-28 shrink-0">
            Jan 1, 2025
          </span>
          <Link href={`/${lang}/blog/quotes`} className="text-sm">
            {t(lang, "interestingQuotes")}
          </Link>
        </div>
        {lang === "en" && (
          <div className="flex items-baseline gap-4">
            <span className="text-sm font-mono text-muted-foreground w-28 shrink-0">
              Jan 1, 2025
            </span>
            <Link href={`/${lang}/blog/product-engineer`} className="text-sm">
              What is a Product Engineer?
            </Link>
          </div>
        )}
      </div>
      </article>
    </div>
  );
}
