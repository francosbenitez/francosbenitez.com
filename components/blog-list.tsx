import Link from "next/link";
import type { BlogPost } from "@/lib/get-content";
import { ArrowRight } from "lucide-react";

export function BlogList({ posts, lang }: { posts: BlogPost[]; lang: string }) {
  const isEnglish = lang === "en";

  return (
    <ul className="divide-y divide-border/20">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link
            href={`/${lang}/blog/${post.slug}`}
            className="group flex items-center justify-between py-3 hover:bg-accent/10 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
          >
            <div className="flex items-baseline gap-3 min-w-0">
              <h3 className="font-medium truncate">{post.title}</h3>
              <time
                dateTime={post.date}
                className="text-xs text-muted-foreground shrink-0"
              >
                {new Date(post.date).toLocaleDateString(
                  isEnglish ? "en-US" : "es-ES",
                  {
                    month: "short",
                    year: "numeric",
                  }
                )}
              </time>
            </div>
            <ArrowRight className="h-3 w-3 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
