"use client"
import { useEffect, useState } from "react"
import { useLanguage } from "@/context/LanguageContext"
import LanguageSelector from "@/components/LanguageSelector"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Services from "@/components/Services"
import Testimonials from "@/components/Testimonials"
import Pricing from "@/components/Pricing"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  const { language, setLanguage, tajawalClass } = useLanguage()
  const [showLanguageSelector, setShowLanguageSelector] = useState(true)

  useEffect(() => {
    const savedLanguage = localStorage.getItem("preferredLanguage")
    if (savedLanguage) {
      setLanguage(savedLanguage)
      setShowLanguageSelector(false)
    }
  }, [setLanguage])

  const handleLanguageSelect = (lang) => {
    setLanguage(lang)
    localStorage.setItem("preferredLanguage", lang)
    setShowLanguageSelector(false)
  }

  if (showLanguageSelector) {
    return <LanguageSelector onSelect={handleLanguageSelect} />
  }

  return (
    <main className={language === "ar" ? tajawalClass : ""}>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}
