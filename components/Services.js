"use client"
import { useLanguage } from "@/context/LanguageContext"
import { motion } from "framer-motion"
import { BookOpen, FileText, Users, Award, Clock } from "lucide-react"

const translations = {
  fr: {
    title: "Nos Services",
    subtitle: "Une approche complète pour maîtriser l'anglais",
    services: [
      {
        icon: <BookOpen className="h-8 w-8" />,
        title: "Cours de vocabulaire",
        description:
          "Enrichissez votre lexique anglais avec des méthodes d'apprentissage adaptées à votre niveau et à vos centres d'intérêt.",
      },
      {
        icon: <Users className="h-8 w-8" />,
        title: "Ateliers de conversation",
        description:
          "Pratiquez l'anglais dans des situations réelles pour développer votre aisance et votre confiance à l'oral.",
      },
      {
        icon: <FileText className="h-8 w-8" />,
        title: "Tests hebdomadaires",
        description:
          "Évaluez régulièrement vos progrès grâce à des tests personnalisés qui ciblent vos points forts et vos axes d'amélioration.",
      },
      {
        icon: <Award className="h-8 w-8" />,
        title: "Préparation aux examens",
        description:
          "Préparez-vous efficacement aux examens scolaires et aux certifications internationales d'anglais.",
      },
      {
        icon: <Clock className="h-8 w-8" />,
        title: "Horaires flexibles",
        description:
          "Choisissez des horaires qui s'adaptent à votre emploi du temps scolaire et à vos activités extrascolaires.",
      },
    ],
  },
  ar: {
    title: "خدماتنا",
    subtitle: "نهج شامل لإتقان اللغة الإنجليزية",
    services: [
      {
        icon: <BookOpen className="h-8 w-8" />,
        title: "دروس المفردات",
        description: "أثرِ قاموسك الإنجليزي بطرق تعلم تتناسب مع مستواك واهتماماتك.",
      },
      {
        icon: <Users className="h-8 w-8" />,
        title: "ورش المحادثة",
        description: "مارس اللغة الإنجليزية في مواقف حقيقية لتطوير طلاقتك وثقتك في التحدث.",
      },
      {
        icon: <FileText className="h-8 w-8" />,
        title: "اختبارات أسبوعية",
        description: "قيّم تقدمك بانتظام من خلال اختبارات مخصصة تستهدف نقاط قوتك ومجالات التحسين.",
      },
      {
        icon: <Award className="h-8 w-8" />,
        title: "التحضير للامتحانات",
        description: "استعد بفعالية للامتحانات المدرسية وشهادات اللغة الإنجليزية الدولية.",
      },
      {
        icon: <Clock className="h-8 w-8" />,
        title: "مواعيد مرنة",
        description: "اختر المواعيد التي تتناسب مع جدولك المدرسي وأنشطتك اللامنهجية.",
      },
    ],
  },
}

export default function Services() {
  const { language } = useLanguage()
  const t = translations[language]
  const isArabic = language === "ar"

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={`text-center mb-16 ${isArabic ? "rtl" : ""}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </motion.div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 ${isArabic ? "rtl" : ""}`}>
          {t.services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#FFE662]"
            >
              <div className="bg-[#FFE662] inline-flex p-3 rounded-lg mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
