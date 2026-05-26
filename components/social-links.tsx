import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  Instagram,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
// import { translations } from "@/lib/i18n";

export function SocialLinks() {
  const socialLinks: { name: string; url: string; icon: LucideIcon }[] = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/francosbenitez",
      icon: Linkedin,
    },
    {
      name: "Email",
      url: "mailto:me@francosbenitez.com",
      icon: Mail,
    },
    {
      name: "GitHub",
      url: "https://github.com/francosbenitez",
      icon: Github,
    },
    {
      name: "X",
      url: "https://x.com/francosbenitez",
      icon: Twitter,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/francosbenitez",
      icon: Instagram,
    },
  ];

  return (
    <>
      <hr className="my-6" />
      <div className="flex flex-wrap gap-4 mb-8">
        {socialLinks.map(({ name, url, icon: Icon }) => (
          <Button
            key={name}
            variant="outline"
            size="icon"
            className="group rounded-full h-10 w-10 transition-[transform,background-color,border-color] duration-200 ease-out hover:scale-105 hover:bg-secondary hover:border-primary/20 active:scale-95"
            asChild
          >
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
            >
              <Icon className="h-5 w-5 transition-transform duration-200 ease-out group-hover:scale-110 group-hover:-translate-y-0.5" />
            </a>
          </Button>
        ))}
      </div>
    </>
  );
}
