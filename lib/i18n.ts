export const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
];

export const translations = {
  en: {
    about: "About",
    blog: "Writing",
    backToBlog: "Back to writing",
    backToHome: "Back to home",
    connect: "Let's connect!",
    language: "Language",
    light: "Light",
    dark: "Dark",
    system: "System",
  },
  es: {
    about: "Sobre mí",
    blog: "Escritos",
    backToBlog: "Volver a escritos",
    backToHome: "Volver al inicio",
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
