"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { key: "home", href: (lang: string) => `/${lang}`, exact: true },
  { key: "blog", href: (lang: string) => `/${lang}/blog`, exact: false },
  { key: "about", href: (lang: string) => `/${lang}/about`, exact: false },
];

export function NavTabs({ lang }: { lang: string }) {
  const pathname = usePathname();

  return (
    <nav className="flex gap-6">
      {tabs.map(({ key, href, exact }) => {
        const path = href(lang);
        const isActive = exact
          ? pathname === path
          : pathname === path || pathname.startsWith(path + "/");
        return (
          <Link
            key={key}
            href={path}
            className={`text-sm transition-colors ${
              isActive
                ? "font-medium text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {key}
          </Link>
        );
      })}
    </nav>
  );
}
