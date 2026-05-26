"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

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
            className={cn(
              "group relative px-1.5 py-1 text-sm transition-colors duration-200",
              isActive
                ? "font-medium text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <span className="relative inline-block">
              {key}
              <span
                aria-hidden
                className={cn(
                  "absolute -bottom-1 left-0 h-[2px] w-full bg-[radial-gradient(circle,currentColor_1.25px,transparent_1.25px)] bg-size-[5px_2px] bg-repeat-x text-foreground/70 transition-[clip-path] duration-300 ease-[cubic-bezier(0.2,0,0,1)]",
                  isActive
                    ? "[clip-path:inset(0_0_0_0)]"
                    : "[clip-path:inset(0_100%_0_0)] group-hover:[clip-path:inset(0_0_0_0)]"
                )}
              />
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
