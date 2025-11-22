"use client"

import { useState } from "react"
import { useTranslation } from "@/lib/i18n"
import { ChevronDown, ChevronUp } from "lucide-react"

export function FAQSection() {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    { key: "q1", aKey: "a1" },
    { key: "q2", aKey: "a2" },
    { key: "q3", aKey: "a3" },
    { key: "q4", aKey: "a4" },
    { key: "q5", aKey: "a5" },
    { key: "q6", aKey: "a6" },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-fraunces text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
            {t.faq?.title || "Sıkça Sorulan Sorular"}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            PetMedia hakkında merak ettiğiniz her şey
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.key}
                className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 rounded-2xl"
                >
                  <h3 className="font-semibold text-gray-900 text-lg pr-4 text-balance">
                    {t.faq?.[faq.key] || `Question ${index + 1}`}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-purple-500" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="pt-2 border-t border-gray-200">
                      <p className="text-gray-600 leading-relaxed text-pretty">
                        {t.faq?.[faq.aKey] || `Answer ${index + 1}`}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
