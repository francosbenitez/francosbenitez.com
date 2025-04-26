import type React from "react";
// import { Navigation } from "@/components/navigation";
import { LanguageSwitcher } from "@/components/language-switcher";
import { validateLanguage } from "@/lib/i18n";
import { ThemeToggle } from "@/components/theme-toggle";
import { Logo } from "@/components/logo";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const resolvedParams = await Promise.resolve(params);
  const lang = await validateLanguage(resolvedParams.lang);

  return (
    <div className="flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="px-4 py-4 flex justify-between items-center">
          {/* <Navigation lang={lang} /> */}
          <Logo />
          <div className="flex items-center gap-2 ml-auto">
            <ThemeToggle currentLang={lang} />
            <LanguageSwitcher currentLang={lang} />
          </div>
        </div>
      </header>
      <main className="flex-1 px-4 animate-in fade-in duration-500">
        {children}
      </main>
      {/* <footer className="border-t border-border/40 py-8 mt-12">
        <div className="px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Franco Sebastián Benítez
            </p>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
