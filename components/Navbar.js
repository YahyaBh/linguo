"use client"
import { useState, useEffect } from "react"
import { useLanguage } from "@/context/LanguageContext"
import { motion } from "framer-motion"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const translations = {
  fr: {
    home: "Accueil",
    about: "À propos",
    services: "Services",
    testimonials: "Témoignages",
    pricing: "Tarifs",
    contact: "Contact",
    language: "Langue",
  },
  ar: {
    home: "الرئيسية",
    about: "من نحن",
    services: "خدماتنا",
    testimonials: "آراء الطلاب",
    pricing: "الأسعار",
    contact: "اتصل بنا",
    language: "اللغة",
  },
}

export default function Navbar() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const t = translations[language]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = () => {
    const newLanguage = language === "fr" ? "ar" : "fr"
    setLanguage(newLanguage)
    localStorage.setItem("preferredLanguage", newLanguage)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-black text-white shadow-lg" : "bg-transparent text-black"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="font-bold text-2xl flex items-center">
            <span className={`${language === "ar" ? "ml-2" : "mr-2"}`}>LexiYa</span>
            <span className="text-[#FFE662]">.</span>
          </Link>

          {/* Desktop Menu */}
          <div className={`hidden md:flex space-x-8 ${language === "ar" ? "flex-row-reverse space-x-reverse" : ""}`}>
            <Link href="#home" className="hover:text-[#FFE662] transition-colors">
              {t.home}
            </Link>
            <Link href="#about" className="hover:text-[#FFE662] transition-colors">
              {t.about}
            </Link>
            <Link href="#services" className="hover:text-[#FFE662] transition-colors">
              {t.services}
            </Link>
            <Link href="#testimonials" className="hover:text-[#FFE662] transition-colors">
              {t.testimonials}
            </Link>
            <Link href="#pricing" className="hover:text-[#FFE662] transition-colors">
              {t.pricing}
            </Link>
            <Link href="#contact" className="hover:text-[#FFE662] transition-colors">
              {t.contact}
            </Link>
            <button onClick={toggleLanguage} className="hover:text-[#FFE662] transition-colors">
              {language === "fr" ? "العربية" : "Français"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black text-white"
        >
          <div className={`flex flex-col p-4 ${language === "ar" ? "text-right" : "text-left"}`}>
            <Link href="#home" className="py-2" onClick={() => setIsOpen(false)}>
              {t.home}
            </Link>
            <Link href="#about" className="py-2" onClick={() => setIsOpen(false)}>
              {t.about}
            </Link>
            <Link href="#services" className="py-2" onClick={() => setIsOpen(false)}>
              {t.services}
            </Link>
            <Link href="#testimonials" className="py-2" onClick={() => setIsOpen(false)}>
              {t.testimonials}
            </Link>
            <Link href="#pricing" className="py-2" onClick={() => setIsOpen(false)}>
              {t.pricing}
            </Link>
            <Link href="#contact" className="py-2" onClick={() => setIsOpen(false)}>
              {t.contact}
            </Link>
            <button onClick={toggleLanguage} className="py-2 text-left">
              {language === "fr" ? "العربية" : "Français"}
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
