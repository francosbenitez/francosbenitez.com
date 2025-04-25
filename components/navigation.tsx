"use client";

import Link from "next/link";
import { translations } from "@/lib/i18n";
import { usePathname } from "next/navigation";

export function Navigation({ lang }: { lang: string }) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    const basePath = `/${lang}${path}`;
    return pathname === basePath || pathname.startsWith(basePath + "/");
  };

  return (
    <nav>
      <ul className="flex items-center space-x-1 md:space-x-6">
        <li className="mr-4">
          <Link
            href={`/${lang}`}
            className="font-medium text-lg tracking-tight hover:text-foreground transition-colors"
          >
            FSB.
          </Link>
        </li>
        <li>
          <Link
            href={`/${lang}`}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive("")
                ? "bg-secondary text-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
            }`}
          >
            {translations[lang].about}
          </Link>
        </li>
        <li>
          <Link
            href={`/${lang}/blog`}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive("/blog")
                ? "bg-secondary text-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
            }`}
          >
            {translations[lang].blog}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
