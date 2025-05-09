"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export default function LanguageSelector({ onSelect }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full text-center"
      >
        <div className="mb-6">
          <Image
            src="/logo.svg?height=80&width=80"
            alt="LexiYa Logo"
            width={80}
            height={80}
            className="mx-auto"
          />
          <h1 className="text-3xl font-bold mt-4 mb-2">LexiYa</h1>
          <p className="text-gray-600">Choisissez votre langue / اختر لغتك</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => onSelect("fr")}
            className="flex items-center justify-center gap-2 p-4 border-2 border-[#FFE662] rounded-lg hover:bg-[#FFE662] transition-colors"
          >
            <span className="text-xl">🇫🇷</span>
            <span className="font-medium">Français</span>
          </button>

          <button
            onClick={() => onSelect("ar")}
            className="flex items-center justify-center gap-2 p-4 border-2 border-[#FFE662] rounded-lg hover:bg-[#FFE662] transition-colors"
          >
            <span className="text-xl">🇲🇦</span>
            <span className="font-medium">العربية</span>
          </button>
        </div>
      </motion.div>
    </div>
  )
}
