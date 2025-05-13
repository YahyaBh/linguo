"use client"
import { useLanguage } from "@/context/LanguageContext"
import { motion } from "framer-motion"
import Image from "next/image"

const translations = {
  fr: {
    title: "Apprenez l'anglais avec plaisir",
    subtitle: "Cours personnalisés pour les 10-18 ans à Agadir",
    description:
      "Améliorez votre vocabulaire, votre accent et vos compétences en communication avec des méthodes d'apprentissage modernes et interactives.",
    cta: "Premier cours gratuit",
    scrollDown: "Découvrir plus",
  },
  ar: {
    title: "تعلم الإنجليزية بمتعة",
    subtitle: "دروس مخصصة للأعمار 10-18 سنة في أكادير",
    description: "حسّن مفرداتك ولهجتك ومهارات التواصل لديك من خلال أساليب تعليمية حديثة وتفاعلية.",
    cta: "الدرس الأول مجاني",
    scrollDown: "اكتشف المزيد",
  },
}

export default function Hero() {
  const { language, tajawalClass } = useLanguage()
  const t = translations[language]
  const isRTL = language === "ar"

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  }

  return (
    <section id="home" className={`relative min-h-screen flex items-center pt-20 ${isRTL ? tajawalClass : ""}`}>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="English tutoring background"
          fill
          priority
          className="object-cover opacity-20"
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div
          className={`flex flex-col md:flex-row items-center ${isRTL ? "md:flex-row-reverse text-right" : "text-left"}`}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-4">
              {t.title}
            </motion.h1>
            <motion.h2 variants={itemVariants} className="text-xl md:text-2xl mb-6 text-gray-700">
              {t.subtitle}
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg mb-8 max-w-lg">
              {t.description}
            </motion.p>
            <motion.div variants={itemVariants} className={`${isRTL ? "text-right" : "text-left"}`}>
              <a
                href="https://wa.me/+212665845124?text=Je%20suis%20intéressé%20par%20un%20cours%20d'essai%20gratuit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#FFE662] text-black font-bold py-3 px-8 rounded-full hover:bg-black hover:text-[#FFE662] transition-colors shadow-lg"
              >
                {t.cta}
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="relative h-[400px] w-full">
              <Image
                src="/316535242_11350659.png"
                alt="English tutoring"
                fill
                className="object-contain rounded-2xl"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center"
        >
          <p className="mb-2 text-sm">{t.scrollDown}</p>
          <div className="animate-bounce">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 5V19M12 19L5 12M12 19L19 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
