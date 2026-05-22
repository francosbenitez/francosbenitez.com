import { languages, t } from "@/lib/i18n";

type BlogPostForAllLangs = {
  slug: string;
  date: string;
  titleKey: string;
};

type BlogPostEnOnly = {
  slug: string;
  date: string;
  title: string;
  langs: readonly string[];
};

export type BlogPostEntry = BlogPostForAllLangs | BlogPostEnOnly;

export const blogPosts: BlogPostEntry[] = [
  {
    slug: "quotes",
    date: "Jan 1, 2025",
    titleKey: "interestingQuotes",
  },
  {
    slug: "from-psychology-to-programming",
    date: "Jan 1, 2025",
    title: "From Psychology to Programming",
    langs: ["en"],
  },
  {
    slug: "my-fundamental-tips-for-productivity",
    date: "Jan 1, 2025",
    title: "My Fundamental Tips for Productivity",
    langs: ["en"],
  },
  {
    slug: "product-engineer",
    date: "Jan 1, 2025",
    title: "What is a Product Engineer?",
    langs: ["en"],
  },
];

export function getBlogPost(slug: string): BlogPostEntry | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function blogPostAllowedForLang(
  post: BlogPostEntry,
  lang: string
): boolean {
  if ("langs" in post) return post.langs.includes(lang);
  return true;
}

export function getBlogPostsForLang(lang: string): BlogPostEntry[] {
  return blogPosts.filter((post) => blogPostAllowedForLang(post, lang));
}

export function getBlogPostTitle(post: BlogPostEntry, lang: string): string {
  return "titleKey" in post ? t(lang, post.titleKey) : post.title;
}

export function getStaticBlogSlugParams(): { lang: string; slug: string }[] {
  const codes = languages.map((l) => l.code);
  const params: { lang: string; slug: string }[] = [];

  for (const lang of codes) {
    for (const post of blogPosts) {
      if (blogPostAllowedForLang(post, lang)) {
        params.push({ lang, slug: post.slug });
      }
    }
  }

  return params;
}
