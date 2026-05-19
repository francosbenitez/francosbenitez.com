import { validateLanguage, t } from "@/lib/i18n";
import { markdownToHtml } from "@/lib/markdown";
import { getAboutContent } from "@/lib/get-content";
import { SocialLinks } from "@/components/social-links";
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

        {/* Recent writing section */}
        <h2 className="mb-4 text-2xl font-medium tracking-tight text-foreground">
          Recent writing
        </h2>
        <div className="mb-8 flex flex-col gap-2">
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

        <SocialLinks />
      </article>
    </div>
  );
}
