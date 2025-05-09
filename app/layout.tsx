import "./globals.css"

import { Inter } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "English Tutor Agadir - Vocabulary, Accent & Communication Skills",
  description:
    "Personalized English tutoring in Agadir, Morocco. Specializing in vocabulary, accent, and communication skills.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
