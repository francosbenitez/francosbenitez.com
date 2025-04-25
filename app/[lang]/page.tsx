import { getAboutContent } from "@/lib/get-content";
import { SocialLinks } from "@/components/social-links";
import { validateLanguage } from "@/lib/i18n";
import { markdownToHtml } from "@/lib/markdown";

export default async function AboutPage({
  params,
}: {
  params: { lang: string };
}) {
  const resolvedParams = await Promise.resolve(params);
  const lang = await validateLanguage(resolvedParams.lang);
  const { content } = await getAboutContent(lang);

  // Convert markdown to HTML
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
