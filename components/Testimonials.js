"use client"
import { useLanguage } from "@/context/LanguageContext"
import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const translations = {
  fr: {
    title: "Ce que disent nos élèves",
    subtitle: "Découvrez les expériences de nos étudiants",
    testimonials: [
      {
        name: "Amine, 15 ans",
        text: "Grâce aux cours de LexiYa, j'ai considérablement amélioré mon anglais en seulement quelques mois. Les méthodes d'enseignement sont amusantes et efficaces !",
        rating: 5,
      },
      {
        name: "Sara, 12 ans",
        text: "J'avais peur de parler anglais avant, mais maintenant je me sens beaucoup plus confiante. Les ateliers de conversation m'ont vraiment aidée.",
        rating: 5,
      },
      {
        name: "Youssef, 17 ans",
        text: "La préparation aux examens m'a permis d'obtenir d'excellentes notes en anglais. Je recommande vivement LexiYa à tous les lycéens !",
        rating: 4,
      },
      {
        name: "Lina, 14 ans",
        text: "J'adore les cours de vocabulaire, ils sont très interactifs. J'ai appris beaucoup de nouveaux mots que j'utilise maintenant tous les jours.",
        rating: 5,
      },
    ],
  },
  ar: {
    title: "ماذا يقول طلابنا",
    subtitle: "اكتشف تجارب طلابنا",
    testimonials: [
      {
        name: "أمين، 15 سنة",
        text: "بفضل دروس LexiYa، تحسنت لغتي الإنجليزية بشكل كبير في غضون أشهر قليلة فقط. طرق التدريس ممتعة وفعالة!",
        rating: 5,
      },
      {
        name: "سارة، 12 سنة",
        text: "كنت أخاف من التحدث بالإنجليزية من قبل، لكنني الآن أشعر بثقة أكبر بكثير. ساعدتني ورش المحادثة حقًا.",
        rating: 5,
      },
      {
        name: "يوسف، 17 سنة",
        text: "سمح لي التحضير للامتحانات بالحصول على درجات ممتازة في اللغة الإنجليزية. أوصي بشدة بـ LexiYa لجميع طلاب المدارس الثانوية!",
        rating: 4,
      },
      {
        name: "لينا، 14 سنة",
        text: "أحب دروس المفردات، فهي تفاعلية للغاية. لقد تعلمت الكثير من الكلمات الجديدة التي أستخدمها الآن كل يوم.",
        rating: 5,
      },
    ],
  },
}

export default function Testimonials() {
  const { language, tajawalClass } = useLanguage()
  const t = translations[language]
  const isRTL = language === "ar"

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === t.testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? t.testimonials.length - 1 : prevIndex - 1))
  }

  return (
    <section id="testimonials" className={`py-20 bg-gray-50 ${isRTL ? tajawalClass : ""}`}>
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

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isRTL ? 20 : -20 }}
              transition={{ duration: 0.5 }}
              className={`bg-white p-8 md:p-12 rounded-2xl shadow-xl ${isRTL ? "rtl text-right" : ""}`}
            >
              <div className="flex justify-center mb-8">
                {[...Array(t.testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-[#FFE662] fill-[#FFE662]" />
                ))}
                {[...Array(5 - t.testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i + t.testimonials[currentIndex].rating} className="h-6 w-6 text-gray-300" />
                ))}
              </div>

              <p className="text-lg md:text-xl mb-8 italic">"{t.testimonials[currentIndex].text}"</p>

              <div className={`flex items-center ${isRTL ? "justify-end" : "justify-center"} gap-4`}>
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt={t.testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="font-semibold">{t.testimonials[currentIndex].name}</p>
              </div>
            </motion.div>

            <button
              onClick={isRTL ? nextTestimonial : prevTestimonial}
              className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? "right" : "left"}-0 ${isRTL ? "-mr-5 md:-mr-6" : "-ml-5 md:-ml-6"} bg-white rounded-full p-2 shadow-lg hover:bg-[#FFE662] transition-colors`}
              aria-label={isRTL ? "Next testimonial" : "Previous testimonial"}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={isRTL ? prevTestimonial : nextTestimonial}
              className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? "left" : "right"}-0 ${isRTL ? "-ml-5 md:-ml-6" : "-mr-5 md:-mr-6"} bg-white rounded-full p-2 shadow-lg hover:bg-[#FFE662] transition-colors`}
              aria-label={isRTL ? "Previous testimonial" : "Next testimonial"}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {t.testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full ${currentIndex === index ? "bg-[#FFE662]" : "bg-gray-300"}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
