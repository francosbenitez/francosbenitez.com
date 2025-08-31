"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export function LogoImg() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only execute this effect on the client side
  useEffect(() => {
    setMounted(true);
  }, []);

  // If not mounted yet, return a placeholder with the same dimensions
  // to prevent layout shift
  if (!mounted) {
    return <div style={{ width: "24px", height: "24px" }} />;
  }

  return (
    <Image
      src={resolvedTheme === "dark" ? "/logo-dark.svg" : "/logo-light.svg"}
      alt="FSB's logo"
      width={24}
      height={24}
    />
  );
}
