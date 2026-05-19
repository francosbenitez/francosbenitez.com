import { validateLanguage } from "@/lib/i18n";
import { markdownToHtml } from "@/lib/markdown";
import { getAboutContent } from "@/lib/get-content";
import { SocialLinks } from "@/components/social-links";
import Image from "next/image";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await Promise.resolve(params);
  const lang = await validateLanguage(resolvedParams.lang);
  const { content } = await getAboutContent(lang);

  const lines = content.split("\n");
  const titleIndex = lines.findIndex((line) => line.startsWith("# "));

  if (titleIndex !== -1) {
    const title = lines[titleIndex].replace(/^#\s+/, "");
    const afterTitle = lines.slice(titleIndex + 1).join("\n");

    const contentHtml = await markdownToHtml(afterTitle);

    return (
      <div className="max-w-2xl mx-auto">
        <article className="prose dark:prose-invert mx-auto">
          <h1>{title}</h1>

          <div className="flex flex-col items-center">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 overflow-hidden">
              <Image
                src="/photo-ushuaia-channel.jpg"
                alt="Franco in Ushuaia, Argentina"
                fill
                className="object-cover object-[center_95%]"
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2 italic">
              Ushuaia, Argentina — end of the world
            </p>
          </div>

          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />

          <SocialLinks />
        </article>
      </div>
    );
  }

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
