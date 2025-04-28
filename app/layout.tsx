import type React from "react";
import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/language-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { PostHogProvider } from "@/providers/posthog";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Franco Sebastián Benítez",
  description: "Software developer, psychologist, and entrepreneur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={ibmPlexMono.className}>
      <PostHogProvider>
        <body className="bg-background antialiased">
          <div className="max-w-2xl mx-auto">
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <LanguageProvider>{children}</LanguageProvider>
            </ThemeProvider>
          </div>
        </body>
      </PostHogProvider>
    </html>
  );
}
