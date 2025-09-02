"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export function LogoImg() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const params = useParams();

  // Only execute this effect on the client side
  useEffect(() => {
    setMounted(true);
  }, []);

  // If not mounted yet, return a placeholder with the same dimensions
  // to prevent layout shift
  if (!mounted) {
    return <div style={{ width: "24px", height: "24px" }} />;
  }

  const currentLang = (params?.lang as string) || "en";

  return (
    <Link
      href={`/${currentLang}`}
      className="hover:opacity-80 transition-opacity"
    >
      <Image
        src={resolvedTheme === "dark" ? "/logo-dark.svg" : "/logo-light.svg"}
        alt="FSB's logo"
        width={12}
        height={12}
      />
    </Link>
  );
}
