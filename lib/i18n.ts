export const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
];

export async function validateLanguage(lang: string): Promise<string> {
  return languages.some((l) => l.code === lang) ? lang : "en";
}

type Translations = {
  [key: string]: {
    [key: string]: string;
  };
};

export const translations: Translations = {
  en: {
    // about: "About",
    // blog: "Writing",
    // backToBlog: "Back to writing",
    // backToHome: "Back to home",
    // connect: "Let's connect!",
    language: "Language",
    light: "Light",
    dark: "Dark",
    system: "System",
    photoLabel: "São Paulo adventures",
    interestingQuotes: "Interesting quotes",
    myJourney: "My journey",
  },
  es: {
    // about: "Sobre mí",
    // blog: "Escritos",
    // backToBlog: "Volver a escritos",
    // backToHome: "Volver al inicio",
    // connect: "Conectemos!",
    language: "Idioma",
    light: "Claro",
    dark: "Oscuro",
    system: "Sistema",
    photoLabel: "Aventuras en São Paulo",
    interestingQuotes: "Frases interesantes",
    myJourney: "Mi trayectoria",
  },
};

/**
 * Get a translation for a given key and language
 * @param lang - The language code (e.g., 'en', 'es')
 * @param key - The translation key
 * @param fallback - Optional fallback text if translation is not found
 * @returns The translated text or fallback
 */
export function t(lang: string, key: string, fallback?: string): string {
  const validLang = languages.some((l) => l.code === lang) ? lang : "en";
  return translations[validLang]?.[key] || fallback || key;
}

/**
 * Get a translation for a given key and language (async version for compatibility)
 * @param lang - The language code (e.g., 'en', 'es')
 * @param key - The translation key
 * @param fallback - Optional fallback text if translation is not found
 * @returns Promise that resolves to the translated text or fallback
 */
export async function tAsync(
  lang: string,
  key: string,
  fallback?: string
): Promise<string> {
  return t(lang, key, fallback);
}
