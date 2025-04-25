"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { validateLanguage } from "@/lib/i18n"

type LanguageContextType = {
  lang: string
}

const LanguageContext = createContext<LanguageContextType>({ lang: "en" })

export function useLanguage() {
  return useContext(LanguageContext)
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [lang, setLang] = useState("en")

  useEffect(() => {
    // Extract language from URL path
    const pathSegments = pathname.split("/")
    if (pathSegments.length > 1 && pathSegments[1]) {
      setLang(validateLanguage(pathSegments[1]))
    }
  }, [pathname])

  return <LanguageContext.Provider value={{ lang }}>{children}</LanguageContext.Provider>
}
