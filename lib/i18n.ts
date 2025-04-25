export const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
];

export const translations = {
  en: {
    about: "About",
    blog: "Blog",
    backToBlog: "Back to blog",
    connect: "Let's connect!",
    language: "Language",
    light: "Light",
    dark: "Dark",
    system: "System",
  },
  es: {
    about: "Sobre mí",
    blog: "Blog",
    backToBlog: "Volver al blog",
    connect: "Conectemos!",
    language: "Idioma",
    light: "Claro",
    dark: "Oscuro",
    system: "Sistema",
  },
};

export async function validateLanguage(lang: string): Promise<string> {
  return languages.some((l) => l.code === lang) ? lang : "en";
}
