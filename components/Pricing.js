"use client"
import { useLanguage } from "@/context/LanguageContext"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

const translations = {
  fr: {
    title: "Tarifs",
    subtitle: "Un investissement abordable pour l'avenir de votre enfant",
    monthlyPrice: "199 DH / mois",
    firstSessionFree: "Première séance gratuite",
    features: [
      "4 séances par mois",
      "Matériel pédagogique inclus",
      "Tests hebdomadaires",
      "Suivi personnalisé",
      "Accès à des ressources en ligne",
    ],
    cta: "Réserver une séance gratuite",
    note: "* Engagement minimum de 3 mois recommandé pour des résultats optimaux",
  },
  ar: {
    title: "الأسعار",
    subtitle: "استثمار ميسور لمستقبل طفلك",
    monthlyPrice: "199 درهم / شهر",
    firstSessionFree: "الجلسة الأولى مجانية",
    features: [
      "4 جلسات في الشهر",
      "المواد التعليمية مشمولة",
      "اختبارات أسبوعية",
      "متابعة شخصية",
      "الوصول إلى موارد عبر الإنترنت",
    ],
    cta: "احجز جلسة مجانية",
    note: "* يوصى بالتزام لمدة 3 أشهر على الأقل للحصول على نتائج مثالية",
  },
}

export default function Pricing() {
  const { language, tajawalClass } = useLanguage()
  const t = translations[language]
  const isRTL = language === "ar"

  return (
    <section id="pricing" className={`py-20 ${isRTL ? tajawalClass : ""}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={`text-center mb-16 ${isRTL ? "rtl" : ""}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto"
        >
          <div
            className={`bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#FFE662] ${isRTL ? "rtl text-right" : ""}`}
          >
            <div className="bg-black text-white p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">{t.monthlyPrice}</h3>
              <p className="text-[#FFE662]">{t.firstSessionFree}</p>
            </div>

            <div className="p-8">
              <ul className="space-y-4 mb-8">
                {t.features.map((feature, index) => (
                  <li key={index} className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <div className="bg-[#FFE662] rounded-full p-1">
                      <Check className="h-4 w-4" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/+212665845124?text=Je%20suis%20intéressé%20par%20un%20cours%20d'essai%20gratuit"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#FFE662] text-black text-center font-bold py-3 px-8 rounded-lg hover:bg-black hover:text-[#FFE662] transition-colors shadow-lg"
              >
                {t.cta}
              </a>

              <p className="text-sm text-gray-500 mt-4 text-center">{t.note}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
