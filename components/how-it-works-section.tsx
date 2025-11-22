"use client"

import { useTranslation } from "@/lib/i18n"
import { Search, MessageCircle, Heart } from "lucide-react"

export function HowItWorksSection() {
  const { t } = useTranslation()

  const steps = [
    {
      key: "step1",
      icon: Search,
      number: "01",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      emoji: "🔍",
    },
    {
      key: "step2",
      icon: MessageCircle,
      number: "02",
      gradient: "from-pink-500 to-orange-500",
      bgGradient: "from-pink-50 to-orange-50",
      emoji: "💬",
    },
    {
      key: "step3",
      icon: Heart,
      number: "03",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      emoji: "❤️",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-fraunces text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
            {t.howItWorks?.title || "Nasıl Çalışır?"}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            Üç basit adımda dostlarımıza yeni bir yuva bulun
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl">
            <div className="relative h-1">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-200 via-pink-200 to-orange-200 rounded-full"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full animate-pulse opacity-50"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 relative">
            {steps.map((step, index) => {
              const IconComponent = step.icon

              return (
                <div key={step.key} className="text-center relative">
                  {/* Step Card */}
                  <div
                    className={`relative bg-gradient-to-br ${step.bgGradient} rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105`}
                  >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute top-4 right-4 text-6xl">{step.emoji}</div>
                    </div>

                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center shadow-lg`}
                      >
                        <span className="text-white font-bold text-lg">{step.number}</span>
                      </div>
                    </div>

                    {/* Icon */}
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} mb-6 shadow-lg mt-4`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="font-fraunces text-xl sm:text-2xl font-bold text-gray-900 mb-4 text-balance">
                      {t.howItWorks?.[step.key]?.title || `Step ${index + 1}`}
                    </h3>

                    <p className="text-gray-600 leading-relaxed text-pretty">
                      {t.howItWorks?.[step.key]?.description || "Step description"}
                    </p>

                    {/* Hover Effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl`}
                    ></div>
                  </div>

                  {/* Connection Arrow (Mobile) */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-6 mb-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Trust & Safety Preview */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="font-fraunces text-2xl font-bold text-gray-900 mb-4">
              {t.trust?.title || "Güven & Güvenlik"}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>{t.trust?.verification || "Kimlik doğrulama"}</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>{t.trust?.location || "Konum gizliliği"}</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>{t.trust?.exif || "Fotoğraf güvenliği"}</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>{t.trust?.report || "Şüpheli durumları bildirme"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
