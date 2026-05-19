import { validateLanguage } from "@/lib/i18n";
import { markdownToHtml } from "@/lib/markdown";
import { getQuotesContent } from "@/lib/get-content";
import { SocialLinks } from "@/components/social-links";

export default async function Quotes({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await Promise.resolve(params);
  const lang = await validateLanguage(resolvedParams.lang);
  const { content: quotesContent } = await getQuotesContent(lang);

  return (
    <div className="max-w-2xl mx-auto">
      <article className="prose dark:prose-invert mx-auto">
        <div
          className="prose dark:prose-invert"
          dangerouslySetInnerHTML={{
            __html: await markdownToHtml(quotesContent),
          }}
        />
      </article>
      <SocialLinks />
    </div>
  );
}
