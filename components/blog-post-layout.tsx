import { markdownToHtml } from "@/lib/markdown";
import { SocialLinks } from "@/components/social-links";

export async function BlogPostLayout({ content }: { content: string }) {
  return (
    <div className="max-w-2xl mx-auto">
      <article className="prose dark:prose-invert mx-auto">
        <div
          className="prose dark:prose-invert"
          dangerouslySetInnerHTML={{
            __html: await markdownToHtml(content),
          }}
        />
      </article>
      <SocialLinks />
    </div>
  );
}
