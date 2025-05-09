import { Inter, Tajawal } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/context/LanguageContext"

const inter = Inter({ subsets: ["latin"] })
const tajawal = Tajawal({ subsets: ["arabic"], weight: ["400", "500", "700"] })

export const metadata = {
  title: "LexiYa | Tutorat d'Anglais à Agadir",
  description:
    "Cours d'anglais personnalisés à Agadir pour les jeunes de 10 à 18 ans. Améliorez votre vocabulaire, accent et communication avec le professeur Yahya.",
  keywords:
    "cours anglais, tutorat anglais, Agadir, Maroc, apprendre anglais, vocabulaire anglais, accent anglais, communication anglais, cours pour enfants, cours pour adolescents",
  openGraph: {
    title: "LexiYa | Tutorat d'Anglais à Agadir",
    description:
      "Cours d'anglais personnalisés à Agadir pour les jeunes de 10 à 18 ans. Améliorez votre vocabulaire, accent et communication avec le professeur Yahya.",
    images: ["/images/tutoring-hero.jpg"],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="google" content="notranslate" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "LexiYa",
              "description": "Tutorat d'anglais personnalisé à Agadir",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Agadir",
                "addressCountry": "MA"
              },
              "offers": {
                "@type": "Offer",
                "price": "199",
                "priceCurrency": "MAD",
                "availability": "https://schema.org/InStock"
              }
            }
          `}
        </script>
      </head>
      <body className={inter.className}>
        <LanguageProvider tajawalClass={tajawal.className}>{children}</LanguageProvider>
      </body>
    </html>
  )
}
