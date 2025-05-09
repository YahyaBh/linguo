"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { BookOpen, Globe, Mail, MessageCircle, Phone, Check, ChevronRight, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import LanguageSwitcher from "@/components/language-switcher"
import { useLanguage } from "@/context/language-context"
import { translations } from "@/lib/translations"

export default function Home() {
  const { language } = useLanguage()
  const t = translations[language]

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/212600000000?text=Bonjour,%20je%20suis%20intéressé(e)%20par%20vos%20cours%20d'anglais.",
      "_blank",
    )
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${scrollY > 50 ? "bg-black shadow-md py-2" : "bg-transparent py-4"}`}
      >
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center gap-2 font-bold text-2xl">
            <span className="text-[#FFE662]">Linguo</span>
          </div>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />

            <nav className="hidden md:flex items-center gap-6">
              <Link href="#home" className="text-sm font-medium text-white hover:text-[#FFE662] transition-colors">
                {t.nav.home}
              </Link>
              <Link href="#about" className="text-sm font-medium text-white hover:text-[#FFE662] transition-colors">
                {t.nav.about}
              </Link>
              <Link href="#services" className="text-sm font-medium text-white hover:text-[#FFE662] transition-colors">
                {t.nav.services}
              </Link>
              <Link
                href="#testimonials"
                className="text-sm font-medium text-white hover:text-[#FFE662] transition-colors"
              >
                {t.nav.testimonials}
              </Link>
              <Link href="#contact" className="text-sm font-medium text-white hover:text-[#FFE662] transition-colors">
                {t.nav.contact}
              </Link>
            </nav>

            <Button
              onClick={handleWhatsAppClick}
              size="sm"
              className="hidden md:inline-flex bg-[#FFE662] text-black hover:bg-[#FFE662]/80"
            >
              {t.buttons.freeSession}
            </Button>

            <button onClick={toggleMenu} className="md:hidden text-white hover:text-[#FFE662] transition-colors">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link
                href="#home"
                className="text-white hover:text-[#FFE662] py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.home}
              </Link>
              <Link
                href="#about"
                className="text-white hover:text-[#FFE662] py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.about}
              </Link>
              <Link
                href="#services"
                className="text-white hover:text-[#FFE662] py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.services}
              </Link>
              <Link
                href="#testimonials"
                className="text-white hover:text-[#FFE662] py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.testimonials}
              </Link>
              <Link
                href="#contact"
                className="text-white hover:text-[#FFE662] py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.contact}
              </Link>
              <Button onClick={handleWhatsAppClick} className="bg-[#FFE662] text-black hover:bg-[#FFE662]/80 w-full">
                {t.buttons.freeSession}
              </Button>
            </div>
          </motion.div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative bg-black text-white min-h-screen flex items-center">
          <div className="absolute inset-0 z-0 opacity-30">
            <img
              src="/placeholder.svg?height=1080&width=1920"
              alt="English tutoring background"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="container mx-auto px-4 py-20 z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-[#FFE662]">Linguo</span>
                <br />
                {t.hero.title}
              </h1>
              <p className="text-xl mb-8 text-gray-300">{t.hero.subtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="bg-[#FFE662] text-black hover:bg-[#FFE662]/80"
                >
                  {t.buttons.freeSession}
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  {t.buttons.learnMore}
                </Button>
              </div>
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-3"
                >
                  <div className="bg-[#FFE662] rounded-full p-2">
                    <Check className="h-5 w-5 text-black" />
                  </div>
                  <span>{t.hero.feature1}</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <div className="bg-[#FFE662] rounded-full p-2">
                    <Check className="h-5 w-5 text-black" />
                  </div>
                  <span>{t.hero.feature2}</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex items-center gap-3"
                >
                  <div className="bg-[#FFE662] rounded-full p-2">
                    <Check className="h-5 w-5 text-black" />
                  </div>
                  <span>{t.hero.feature3}</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronRight size={30} className="rotate-90 text-[#FFE662]" />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold">{t.about.title}</h2>
              <div className="mt-2 h-1 w-20 bg-[#FFE662] mx-auto"></div>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative h-[450px] rounded-lg overflow-hidden"
              >
                <img
                  src="/placeholder.svg?height=450&width=600"
                  alt="Yahya - English tutor in Agadir"
                  className="object-cover w-full h-full"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-semibold">{t.about.subtitle}</h3>
                <p className="text-gray-700">{t.about.paragraph1}</p>
                <p className="text-gray-700">{t.about.paragraph2}</p>
                <div className="pt-4">
                  <Button onClick={handleWhatsAppClick} className="bg-black text-white hover:bg-black/80">
                    {t.buttons.contactMe}
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 bg-[#FFE662] rounded-full flex items-center justify-center">
                      <span className="font-bold text-black">5+</span>
                    </div>
                    <span className="text-sm">{t.about.experience}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 bg-[#FFE662] rounded-full flex items-center justify-center">
                      <span className="font-bold text-black">100+</span>
                    </div>
                    <span className="text-sm">{t.about.students}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold">{t.services.title}</h2>
              <div className="mt-2 h-1 w-20 bg-[#FFE662] mx-auto"></div>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{t.services.subtitle}</p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <motion.div
                variants={item}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="h-14 w-14 bg-[#FFE662] rounded-lg flex items-center justify-center mb-6">
                  <BookOpen className="h-7 w-7 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t.services.service1.title}</h3>
                <p className="text-gray-600">{t.services.service1.description}</p>
              </motion.div>

              <motion.div
                variants={item}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="h-14 w-14 bg-[#FFE662] rounded-lg flex items-center justify-center mb-6">
                  <MessageCircle className="h-7 w-7 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t.services.service2.title}</h3>
                <p className="text-gray-600">{t.services.service2.description}</p>
              </motion.div>

              <motion.div
                variants={item}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="h-14 w-14 bg-[#FFE662] rounded-lg flex items-center justify-center mb-6">
                  <Globe className="h-7 w-7 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t.services.service3.title}</h3>
                <p className="text-gray-600">{t.services.service3.description}</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mt-16 bg-black text-white p-8 md:p-12 rounded-2xl"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{t.pricing.title}</h3>
                  <p className="text-gray-300 mb-6">{t.pricing.description}</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-[#FFE662]" />
                      <span>{t.pricing.feature1}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-[#FFE662]" />
                      <span>{t.pricing.feature2}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-[#FFE662]" />
                      <span>{t.pricing.feature3}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-[#FFE662]" />
                      <span>{t.pricing.feature4}</span>
                    </li>
                  </ul>
                  <Button
                    onClick={handleWhatsAppClick}
                    size="lg"
                    className="bg-[#FFE662] text-black hover:bg-[#FFE662]/80"
                  >
                    {t.buttons.startNow}
                  </Button>
                </div>
                <div className="bg-white/10 p-8 rounded-xl text-center">
                  <p className="text-gray-300 mb-2">{t.pricing.monthlyPrice}</p>
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <span className="text-5xl font-bold">199</span>
                    <div className="text-left">
                      <span className="text-2xl font-bold">DH</span>
                      <p className="text-sm text-gray-400">{t.pricing.perMonth}</p>
                    </div>
                  </div>
                  <div className="h-px w-full bg-white/20 my-6"></div>
                  <p className="text-[#FFE662] font-medium mb-2">{t.pricing.firstSession}</p>
                  <p className="text-3xl font-bold mb-6">{t.pricing.free}</p>
                  <Button
                    onClick={handleWhatsAppClick}
                    variant="outline"
                    className="border-[#FFE662] text-[#FFE662] hover:bg-[#FFE662]/10 w-full"
                  >
                    {t.buttons.bookFree}
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold">{t.testimonials.title}</h2>
              <div className="mt-2 h-1 w-20 bg-[#FFE662] mx-auto"></div>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{t.testimonials.subtitle}</p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-3 gap-6"
            >
              <motion.div variants={item} className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8 text-[#FFE662]"
                    >
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 italic">{t.testimonials.testimonial1.text}</p>
                </div>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                    <img
                      src="/placeholder.svg?height=40&width=40"
                      alt="Student"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{t.testimonials.testimonial1.name}</p>
                    <p className="text-sm text-gray-500">{t.testimonials.testimonial1.role}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={item} className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8 text-[#FFE662]"
                    >
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 italic">{t.testimonials.testimonial2.text}</p>
                </div>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                    <img
                      src="/placeholder.svg?height=40&width=40"
                      alt="Student"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{t.testimonials.testimonial2.name}</p>
                    <p className="text-sm text-gray-500">{t.testimonials.testimonial2.role}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={item} className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8 text-[#FFE662]"
                    >
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 italic">{t.testimonials.testimonial3.text}</p>
                </div>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                    <img
                      src="/placeholder.svg?height=40&width=40"
                      alt="Student"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{t.testimonials.testimonial3.name}</p>
                    <p className="text-sm text-gray-500">{t.testimonials.testimonial3.role}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold">{t.contact.title}</h2>
              <div className="mt-2 h-1 w-20 bg-[#FFE662] mx-auto"></div>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{t.contact.subtitle}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-6"
              >
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Phone className="h-5 w-5 text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">{t.contact.phone.title}</h3>
                    <p className="text-gray-600">+212 600 000000</p>
                    <p className="text-gray-600">{t.contact.phone.hours}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Mail className="h-5 w-5 text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">{t.contact.email.title}</h3>
                    <p className="text-gray-600">contact@linguo.ma</p>
                    <p className="text-gray-600">{t.contact.email.response}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-black"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">{t.contact.location.title}</h3>
                    <p className="text-gray-600">{t.contact.location.address}</p>
                    <p className="text-gray-600">{t.contact.location.options}</p>
                  </div>
                </div>

                <div className="pt-6">
                  <Button
                    onClick={handleWhatsAppClick}
                    size="lg"
                    className="bg-[#FFE662] text-black hover:bg-[#FFE662]/80"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 mr-2"
                    >
                      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                      <path d="M13 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                      <path d="M9 14a5 5 0 0 0 6 0" />
                    </svg>
                    {t.buttons.whatsapp}
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white p-8 rounded-lg shadow-sm"
              >
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        {t.contact.form.name}
                      </label>
                      <input
                        id="name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFE662] focus:border-transparent"
                        placeholder={t.contact.form.namePlaceholder}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        {t.contact.form.email}
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFE662] focus:border-transparent"
                        placeholder={t.contact.form.emailPlaceholder}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      {t.contact.form.subject}
                    </label>
                    <input
                      id="subject"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFE662] focus:border-transparent"
                      placeholder={t.contact.form.subjectPlaceholder}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      {t.contact.form.message}
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFE662] focus:border-transparent"
                      placeholder={t.contact.form.messagePlaceholder}
                    ></textarea>
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-black/80">{t.contact.form.send}</Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 font-bold text-2xl mb-4">
                <span className="text-[#FFE662]">Linguo</span>
              </div>
              <p className="text-gray-400 mb-4">{t.footer.description}</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t.footer.quickLinks}</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#home" className="text-gray-400 hover:text-white transition-colors">
                    {t.nav.home}
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                    {t.nav.about}
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                    {t.nav.services}
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-gray-400 hover:text-white transition-colors">
                    {t.nav.testimonials}
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    {t.nav.contact}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t.footer.contactInfo}</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-400">+212 600 000000</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-400">contact@linguo.ma</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-gray-400"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-gray-400">{t.contact.location.address}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Linguo. {t.footer.rights}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
