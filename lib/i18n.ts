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
  },
  es: {
    about: "Sobre mí",
    blog: "Blog",
    backToBlog: "Volver al blog",
    connect: "Conectemos!",
  },
};

export async function validateLanguage(lang: string): Promise<string> {
  return languages.some((l) => l.code === lang) ? lang : "en";
}
