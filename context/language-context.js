"use client"

import { createContext, useContext, useState, useEffect } from "react"

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("fr")
  const [mounted, setMounted] = useState(false)

  // Detect browser language on first load
  useEffect(() => {
    setMounted(true)

    const savedLanguage = localStorage.getItem("language")
    if (savedLanguage) {
      setLanguage(savedLanguage)
    } else {
      const browserLang = navigator.language.split("-")[0]
      if (browserLang === "ar") {
        setLanguage("ar")
      } else {
        setLanguage("fr") // Default to French
      }
    }
  }, [])

  // Save language preference
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("language", language)

      // Update HTML dir attribute for RTL support
      document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
    }
  }, [language, mounted])

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  return useContext(LanguageContext)
}
