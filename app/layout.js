import "./globals.css"
import { Inter } from "next/font/google"
import { LanguageProvider } from "@/context/language-context"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Linguo | Cours d'anglais à Agadir pour les jeunes de 10-18 ans",
  description:
    "Cours d'anglais personnalisés à Agadir, Maroc. Spécialisé dans le vocabulaire, l'accent et les compétences de communication pour les jeunes de 10 à 18 ans.",
  keywords:
    "cours anglais, Agadir, Maroc, tutorat anglais, jeunes, adolescents, vocabulaire anglais, accent anglais, communication anglais, Yahya, Linguo",
  openGraph: {
    title: "Linguo | Cours d'anglais à Agadir pour les jeunes de 10-18 ans",
    description:
      "Cours d'anglais personnalisés à Agadir, Maroc. Spécialisé dans le vocabulaire, l'accent et les compétences de communication pour les jeunes de 10 à 18 ans.",
    url: "https://linguo.ma",
    siteName: "Linguo",
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: "https://linguo.ma",
    languages: {
      fr: "https://linguo.ma/fr",
      ar: "https://linguo.ma/ar",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" dir="ltr">
      <body className={inter.className}>
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
