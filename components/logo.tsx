"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

export function Logo() {
  const { theme } = useTheme();

  return (
    <Image
      src={theme === "dark" ? "/logo-dark.png" : "/logo.png"}
      alt="FSB's logo"
      width={24}
      height={24}
    />
  );
}
