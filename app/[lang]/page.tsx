import { validateLanguage } from "@/lib/i18n";
import { markdownToHtml } from "@/lib/markdown";
import { getAboutContent } from "@/lib/get-content";
import { SocialLinks } from "@/components/social-links";

export default async function Home({ params }: { params: { lang: string } }) {
  const resolvedParams = await Promise.resolve(params);
  const lang = await validateLanguage(resolvedParams.lang);
  const { content } = await getAboutContent(lang);
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
