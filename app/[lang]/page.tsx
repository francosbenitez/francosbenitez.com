import { validateLanguage } from "@/lib/i18n";
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

  // Split content to separate title from rest of content
  const lines = content.split("\n");
  const titleIndex = lines.findIndex((line) => line.startsWith("# "));

  if (titleIndex !== -1) {
    const title = lines[titleIndex];
    const beforeTitle = lines.slice(0, titleIndex).join("\n");
    const afterTitle = lines.slice(titleIndex + 1).join("\n");

    const titleHtml = await markdownToHtml(title);
    const contentHtml = await markdownToHtml(afterTitle);

    return (
      <div className="max-w-2xl mx-auto">
        <article className="prose dark:prose-invert mx-auto">
          {beforeTitle && (
            <div
              dangerouslySetInnerHTML={{
                __html: await markdownToHtml(beforeTitle),
              }}
            />
          )}
          <div dangerouslySetInnerHTML={{ __html: titleHtml }} />

          {/* Photo after title */}
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
            {/* Photo label below image */}
            <p className="text-xs text-muted-foreground mt-2 italic">
              São Paulo adventures
            </p>
          </div>

          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />

          {/* Link to quotes page */}
          <div className="mb-8">
            <Link
              href={`/${lang}/quotes`}
              className="text-sm text-muted-foreground"
            >
              {lang === "es" ? "Frases" : "Quotes"} →
            </Link>
          </div>
        </article>
        <SocialLinks />
      </div>
    );
  }

  // Fallback if no title found
  const htmlContent = await markdownToHtml(content);
  return (
    <div className="max-w-2xl mx-auto">
      <article className="prose dark:prose-invert mx-auto">
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </article>
      <SocialLinks />
    </div>
  );
}
