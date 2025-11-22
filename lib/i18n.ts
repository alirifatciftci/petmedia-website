"use client"

import { useState, useEffect } from "react"

type Language = "tr" | "en"

const translations = {
  tr: () => import("../locales/tr.json").then((m) => m.default),
  en: () => import("../locales/en.json").then((m) => m.default),
}

export function useTranslation() {
  const [language, setLanguage] = useState<Language>("tr")
  const [t, setT] = useState<any>({})

  useEffect(() => {
    const loadTranslations = async () => {
      const translation = await translations[language]()
      setT(translation)
    }
    loadTranslations()
  }, [language])

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "tr" ? "en" : "tr"))
  }

  return { t, language, toggleLanguage }
}
