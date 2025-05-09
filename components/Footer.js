"use client"
import { useLanguage } from "@/context/LanguageContext"
import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

const translations = {
  fr: {
    copyright: "© 2025 LexiYa. Tous droits réservés.",
    links: {
      privacy: "Politique de confidentialité",
      terms: "Conditions d'utilisation",
      contact: "Contact",
    },
  },
  ar: {
    copyright: "© 2025 LexiYa. جميع الحقوق محفوظة.",
    links: {
      privacy: "سياسة الخصوصية",
      terms: "شروط الاستخدام",
      contact: "اتصل بنا",
    },
  },
}

export default function Footer() {
  const { language, tajawalClass } = useLanguage()
  const t = translations[language]
  const isRTL = language === "ar"

  return (
    <footer className={`bg-black text-white py-10 ${isRTL ? tajawalClass : ""}`}>
      <div className="container mx-auto px-4">
        <div className={`flex flex-col md:flex-row justify-between items-center ${isRTL ? "md:flex-row-reverse" : ""}`}>
          <div className={`mb-6 md:mb-0 ${isRTL ? "text-right" : "text-left"}`}>
            <Link href="/" className="text-2xl font-bold">
              LexiYa<span className="text-[#FFE662]">.</span>
            </Link>
            <p className="mt-2 text-gray-400">{t.copyright}</p>
          </div>

          <div
            className={`flex flex-col md:flex-row gap-6 md:gap-10 ${isRTL ? "text-right md:flex-row-reverse" : "text-left"}`}
          >
            <Link href="/privacy" className="hover:text-[#FFE662] transition-colors">
              {t.links.privacy}
            </Link>
            <Link href="/terms" className="hover:text-[#FFE662] transition-colors">
              {t.links.terms}
            </Link>
            <Link href="#contact" className="hover:text-[#FFE662] transition-colors">
              {t.links.contact}
            </Link>
          </div>

          <div className={`flex gap-4 mt-6 md:mt-0 ${isRTL ? "flex-row-reverse" : ""}`}>
            <a href="#" className="bg-white text-black p-2 rounded-full hover:bg-[#FFE662] transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="bg-white text-black p-2 rounded-full hover:bg-[#FFE662] transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="bg-white text-black p-2 rounded-full hover:bg-[#FFE662] transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
