import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { translations } from "@/lib/i18n";

export function SocialLinks() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/francosbenitez",
      icon: <Github className="h-5 w-5" />,
    },
    {
      name: "X",
      url: "https://x.com/francosbenitez",
      icon: <Twitter className="h-5 w-5" />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/francosbenitez",
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      name: "Email",
      url: "mailto:me@francosbenitez.com",
      icon: <Mail className="h-5 w-5" />,
    },
  ];

  return (
    <div className="mt-12 pt-8 border-t border-border/40">
      {/* <h2 className="text-xl font-medium mb-6">{translations[lang].connect}</h2> */}
      <div className="flex flex-wrap gap-4">
        {socialLinks.map((link) => (
          <Button
            key={link.name}
            variant="outline"
            size="icon"
            className="rounded-full h-10 w-10 transition-all hover:scale-105 hover:bg-secondary hover:border-primary/20"
            asChild
          >
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          </Button>
        ))}
      </div>
    </div>
  );
}
