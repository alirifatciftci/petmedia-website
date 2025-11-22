"use client"

import { useTranslation } from "@/lib/i18n"
import { Heart, Users, MapPin } from "lucide-react"

export function FeaturesSection() {
  const { t } = useTranslation()

  const features = [
    {
      key: "adoption",
      icon: Heart,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      emoji: "🏠",
    },
    {
      key: "community",
      icon: Users,
      gradient: "from-pink-500 to-purple-500",
      bgGradient: "from-pink-50 to-purple-50",
      emoji: "👥",
    },
    {
      key: "feeding",
      icon: MapPin,
      gradient: "from-orange-500 to-pink-500",
      bgGradient: "from-orange-50 to-pink-50",
      emoji: "🥣",
    },
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-fraunces text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
            {t.features?.title || "Özellikler"}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            PetMedia ile dostlarımıza yardım etmenin üç farklı yolu
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            const isOrangeCard = feature.key === "feeding"

            return (
              <div
                key={feature.key}
                className={`group relative overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  isOrangeCard
                    ? "bg-gradient-to-br from-orange-100 to-pink-100 border-2 border-orange-200"
                    : `bg-gradient-to-br ${feature.bgGradient} border border-gray-100`
                } shadow-lg`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-4 right-4 text-6xl">{feature.emoji}</div>
                </div>

                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 shadow-lg`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-fraunces text-xl sm:text-2xl font-bold text-gray-900 mb-4 text-balance">
                  {t.features?.[feature.key]?.title || feature.key}
                </h3>

                <p className="text-gray-600 leading-relaxed text-pretty">
                  {t.features?.[feature.key]?.description || "Feature description"}
                </p>

                {/* Hover Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl`}
                ></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
