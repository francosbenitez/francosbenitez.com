import { validateLanguage } from "@/lib/i18n";
import { markdownToHtml } from "@/lib/markdown";
import { getJourneyContent } from "@/lib/get-content";
import { SocialLinks } from "@/components/social-links";

export default async function Journey({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await Promise.resolve(params);
  const lang = await validateLanguage(resolvedParams.lang);
  const { content: journeyContent } = await getJourneyContent(lang);

  return (
    <div className="max-w-2xl mx-auto">
      <article className="prose dark:prose-invert mx-auto">
        <div
          className="prose dark:prose-invert"
          dangerouslySetInnerHTML={{
            __html: await markdownToHtml(journeyContent),
          }}
        />
      </article>
      <SocialLinks />
    </div>
  );
}
