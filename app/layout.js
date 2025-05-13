import { Inter, Tajawal } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/context/LanguageContext"

const inter = Inter({ subsets: ["latin"] })
const tajawal = Tajawal({ subsets: ["arabic"], weight: ["400", "500", "700"] })

export const metadata = {
  title: "LexiYa | Cours d'Anglais Personnalisés à Agadir | Améliorez Votre Vocabulaire, Accent & Communication",
  description:
    "LexiYa propose des cours d'anglais personnalisés à Agadir pour les jeunes de 10 à 18 ans. Améliorez votre vocabulaire, accent et communication avec le professeur Yahya.",
  keywords:
    "cours anglais, tutorat anglais, Agadir, Maroc, apprendre anglais, vocabulaire anglais, accent anglais, communication anglais, cours pour enfants, cours pour adolescents, tutorat Agadir, leçons personnalisées",
  openGraph: {
    title: "LexiYa | Cours d'Anglais Personnalisés à Agadir | Améliorez Votre Vocabulaire, Accent & Communication",
    description:
      "Améliorez votre anglais avec des cours personnalisés pour les jeunes de 10 à 18 ans à Agadir. Cours adaptés avec professeur Yahya.",
    images: ["/section.jpg"],
    url: "https://lexiya.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LexiYa | Cours d'Anglais Personnalisés à Agadir",
    description:
      "Cours d'anglais personnalisés à Agadir pour les jeunes de 10 à 18 ans. Améliorez votre vocabulaire, accent et communication avec le professeur Yahya.",
    image: "/section.jpg",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <meta name="google" content="notranslate" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph Tags for Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="LexiYa | Cours d'Anglais Personnalisés à Agadir" />
        <meta property="og:description" content="Cours d'anglais personnalisés à Agadir pour les jeunes de 10 à 18 ans." />
        <meta property="og:image" content="/section.jpg" />
        <meta property="og:url" content="https://lexiya.com" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LexiYa | Cours d'Anglais Personnalisés à Agadir" />
        <meta name="twitter:description" content="Cours d'anglais personnalisés à Agadir pour les jeunes de 10 à 18 ans." />
        <meta name="twitter:image" content="/section.jpg" />

        {/* Schema Markup for Rich Snippets */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "LexiYa",
              "description": "Cours d'anglais personnalisés à Agadir",
              "url": "https://lexiya.com",
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
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "150"
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
