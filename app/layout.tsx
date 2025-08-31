import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { PostHogProvider } from "@/components/posthog-provider";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "FSB | Franco Sebastián Benítez",
  description: "Building tech that thinks like people",
  keywords: [
    "software developer",
    "psychologist",
    "entrepreneur",
    "startups",
    "AI",
    "product management",
    "FSB",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PostHogProvider>
        {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialised`}
        > */}
        <body className={`${ibmPlexMono.variable} antialiased`}>
          <div className="max-w-2xl mx-auto">
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </div>
        </body>
      </PostHogProvider>
    </html>
  );
}
