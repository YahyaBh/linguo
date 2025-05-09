"use client"
import { useLanguage } from "@/context/LanguageContext"
import { motion } from "framer-motion"
import Image from "next/image"
import { BookOpen, MessageCircle, Mic } from "lucide-react"

const translations = {
  fr: {
    title: "À propos de LexiYa",
    subtitle: "Votre parcours vers la maîtrise de l'anglais",
    description:
      "LexiYa est un service de tutorat d'anglais personnalisé à Agadir, spécialement conçu pour les jeunes de 10 à 18 ans. Notre approche pédagogique unique se concentre sur trois piliers essentiels de l'apprentissage des langues :",
    vocabulary: {
      title: "Vocabulaire",
      description:
        "Enrichissez votre lexique anglais avec des méthodes d'apprentissage modernes et adaptées à votre âge.",
    },
    communication: {
      title: "Communication",
      description:
        "Développez votre confiance pour parler anglais dans des situations réelles grâce à des exercices pratiques et interactifs.",
    },
    accent: {
      title: "Accent",
      description: "Améliorez votre prononciation et votre intonation pour parler un anglais naturel et fluide.",
    },
    teacher: "Professeur Yahya",
    teacherDescription:
      "Passionné par l'enseignement des langues, j'ai développé une méthode unique qui rend l'apprentissage de l'anglais amusant et efficace pour les jeunes.",
  },
  ar: {
    title: "عن LexiYa",
    subtitle: "رحلتك نحو إتقان اللغة الإنجليزية",
    description:
      "LexiYa هي خدمة تعليم إنجليزية مخصصة في أكادير، مصممة خصيصًا للشباب من 10 إلى 18 عامًا. يركز نهجنا التعليمي الفريد على ثلاث ركائز أساسية لتعلم اللغة:",
    vocabulary: {
      title: "المفردات",
      description: "أثرِ قاموسك الإنجليزي بطرق تعلم حديثة ومناسبة لعمرك.",
    },
    communication: {
      title: "التواصل",
      description: "طور ثقتك في التحدث بالإنجليزية في المواقف الحقيقية من خلال تمارين عملية وتفاعلية.",
    },
    accent: {
      title: "اللهجة",
      description: "حسّن نطقك ونبرة صوتك للتحدث بالإنجليزية بشكل طبيعي وسلس.",
    },
    teacher: "الأستاذ يحيى",
    teacherDescription: "بشغفي لتدريس اللغات، طورت طريقة فريدة تجعل تعلم اللغة الإنجليزية ممتعًا وفعالًا للشباب.",
  },
}

export default function About() {
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
    <section id="about" className={`py-20 bg-gray-50 ${isRTL ? tajawalClass : ""}`}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`text-center mb-16 ${isRTL ? "rtl" : ""}`}
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            {t.title}
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </motion.p>
        </motion.div>

        <div className={`flex flex-col md:flex-row gap-10 mb-20 ${isRTL ? "md:flex-row-reverse" : ""}`}>
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="relative h-[400px] w-full">
              <Image
                src="/section.jpg?height=600&width=600"
                alt="English tutoring classroom"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`md:w-1/2 ${isRTL ? "text-right" : ""}`}
          >
            <motion.p variants={itemVariants} className="text-lg mb-8">
              {t.description}
            </motion.p>

            <div className="space-y-6">
              <motion.div
                variants={itemVariants}
                className={`flex items-start ${isRTL ? "flex-row-reverse" : ""} gap-4`}
              >
                <div className="bg-[#FFE662] p-3 rounded-full">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t.vocabulary.title}</h3>
                  <p>{t.vocabulary.description}</p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className={`flex items-start ${isRTL ? "flex-row-reverse" : ""} gap-4`}
              >
                <div className="bg-[#FFE662] p-3 rounded-full">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t.communication.title}</h3>
                  <p>{t.communication.description}</p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className={`flex items-start ${isRTL ? "flex-row-reverse" : ""} gap-4`}
              >
                <div className="bg-[#FFE662] p-3 rounded-full">
                  <Mic className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t.accent.title}</h3>
                  <p>{t.accent.description}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={`bg-black text-white p-8 md:p-12 rounded-2xl ${isRTL ? "rtl" : ""}`}
        >
          <div className={`flex flex-col md:flex-row items-center gap-8 ${isRTL ? "md:flex-row-reverse" : ""}`}>
            <div className="md:w-1/4 flex justify-center">
              <div className="relative h-40 w-40 rounded-full overflow-hidden border-4 border-[#FFE662]">
                <Image
                  src="/picme.png?height=200&width=200"
                  alt="Professor Yahya"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className={`md:w-3/4 ${isRTL ? "text-right" : ""}`}>
              <h3 className="text-2xl font-bold mb-4">{t.teacher}</h3>
              <p className="text-lg">{t.teacherDescription}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
