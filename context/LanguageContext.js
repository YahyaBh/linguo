"use client"
import { createContext, useContext, useState } from "react"

const LanguageContext = createContext()

export function LanguageProvider({ children, tajawalClass }) {
  const [language, setLanguage] = useState("fr")

  return <LanguageContext.Provider value={{ language, setLanguage, tajawalClass }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  return useContext(LanguageContext)
}
