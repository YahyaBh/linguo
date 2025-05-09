"use client"
import { useLanguage } from "@/context/LanguageContext"
import { motion } from "framer-motion"
import { useState } from "react"
import { MapPin, Phone, Mail, Send } from "lucide-react"

const translations = {
  fr: {
    title: "Contact",
    subtitle: "Des questions ? Contactez-nous",
    form: {
      name: "Nom",
      email: "Email",
      phone: "Téléphone",
      message: "Message",
      submit: "Envoyer",
      success: "Message envoyé avec succès !",
      error: "Une erreur s'est produite. Veuillez réessayer.",
    },
    contact: {
      address: "Agadir, Maroc",
      phone: "+212 665 845 124",
      email: "contact@yahyabouhsine.click",
    },
  },
  ar: {
    title: "اتصل بنا",
    subtitle: "لديك أسئلة؟ اتصل بنا",
    form: {
      name: "الاسم",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      message: "الرسالة",
      submit: "إرسال",
      success: "تم إرسال الرسالة بنجاح!",
      error: "حدث خطأ. يرجى المحاولة مرة أخرى.",
    },
    contact: {
      address: "أكادير، المغرب",
      phone: "+212 665 845 124",
      email: "contact@yahyabouhsine.click",
    },
  },
}

export default function Contact() {
  const { language, tajawalClass } = useLanguage()
  const t = translations[language]
  const isRTL = language === "ar"

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
    }, 1000)
  }

  return (
    <section id="contact" className={`py-20 bg-gray-50 ${isRTL ? tajawalClass : ""}`}>
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

        <div className={`flex flex-col md:flex-row gap-10 ${isRTL ? "md:flex-row-reverse" : ""}`}>
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className={`bg-white p-8 rounded-2xl shadow-lg h-full ${isRTL ? "text-right" : ""}`}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    {t.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFE662] focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    {t.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFE662] focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2 font-medium">
                    {t.form.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFE662] focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">
                    {t.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFE662] focus:border-transparent outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white font-bold py-3 px-8 rounded-lg hover:bg-[#FFE662] hover:text-black transition-colors shadow-lg flex items-center justify-center gap-2"
                >
                  {isRTL ? (
                    <>
                      <Send className="h-4 w-4 ml-2" />
                      {t.form.submit}
                    </>
                  ) : (
                    <>
                      {t.form.submit}
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>

                {status === "success" && <p className="text-green-600 text-center">{t.form.success}</p>}

                {status === "error" && <p className="text-red-600 text-center">{t.form.error}</p>}
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className={`bg-black text-white p-8 rounded-2xl shadow-lg h-full ${isRTL ? "text-right" : ""}`}>
              <div className="space-y-8">
                <div className={`flex items-start ${isRTL ? "flex-row-reverse" : ""} gap-4`}>
                  <div className="bg-[#FFE662] text-black p-3 rounded-full">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{isRTL ? "العنوان" : "Adresse"}</h3>
                    <p>{t.contact.address}</p>
                  </div>
                </div>

                <div className={`flex items-start ${isRTL ? "flex-row-reverse" : ""} gap-4`}>
                  <div className="bg-[#FFE662] text-black p-3 rounded-full">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{isRTL ? "الهاتف" : "Téléphone"}</h3>
                    <p>{t.contact.phone}</p>
                  </div>
                </div>

                <div className={`flex items-start ${isRTL ? "flex-row-reverse" : ""} gap-4`}>
                  <div className="bg-[#FFE662] text-black p-3 rounded-full">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{isRTL ? "البريد الإلكتروني" : "Email"}</h3>
                    <p>{t.contact.email}</p>
                  </div>
                </div>

                <div className={`mt-12 ${isRTL ? "text-right" : "text-left"}`}>
                  <a
                    href="https://wa.me/+212665845124?text=Je%20suis%20intéressé%20par%20un%20cours%20d'essai%20gratuit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#FFE662] text-black font-bold py-3 px-8 rounded-lg hover:bg-white transition-colors shadow-lg"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
