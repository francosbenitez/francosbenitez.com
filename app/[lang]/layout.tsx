import { validateLanguage } from "@/lib/i18n";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSwitcher } from "@/components/language-switcher";
import { LogoImg } from "@/components/logo-img";

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
      <header className="sticky top-0 z-40 w-full border-b border-gray-400 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="px-4 py-4 flex justify-between items-center">
          <LogoImg />
          <div className="flex items-center gap-2 ml-auto">
            <ThemeToggle currentLang={lang} />
            <LanguageSwitcher currentLang={lang} />
          </div>
        </div>
      </header>
      <main className="flex-1 px-4 animate-in fade-in duration-500">
        {children}
      </main>
    </div>
  );
}
