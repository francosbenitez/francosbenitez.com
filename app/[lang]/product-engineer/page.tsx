import { validateLanguage } from "@/lib/i18n";
import { markdownToHtml } from "@/lib/markdown";
import { getProductEngineerContent } from "@/lib/get-content";
import { SocialLinks } from "@/components/social-links";

export default async function ProductEngineer({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await Promise.resolve(params);
  const lang = await validateLanguage(resolvedParams.lang);
  const { content: productEngineerContent } = await getProductEngineerContent(
    lang
  );

  return (
    <div className="max-w-2xl mx-auto">
      <article className="prose dark:prose-invert mx-auto">
        <div
          className="prose dark:prose-invert"
          dangerouslySetInnerHTML={{
            __html: await markdownToHtml(productEngineerContent),
          }}
        />
      </article>
      <SocialLinks />
    </div>
  );
}
