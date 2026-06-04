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
            className="rounded-full h-10 w-10 transition-[background-color,border-color] duration-200 ease-out hover:bg-secondary hover:border-primary"
            asChild
          >
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
            >
              <Icon className="h-5 w-5" />
            </a>
          </Button>
        ))}
      </div>
    </>
  );
}
