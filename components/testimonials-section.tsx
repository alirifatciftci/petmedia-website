"use client"

import { useTranslation } from "@/lib/i18n"
import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const { t } = useTranslation()

  const testimonials = [
    {
      key: "testimonial1",
      name: "Ayşe K.",
      location: "İstanbul",
      rating: 5,
      avatar: "👩",
      gradient: "from-purple-100 to-pink-100",
    },
    {
      key: "testimonial2",
      name: "Mehmet S.",
      location: "Ankara",
      rating: 5,
      avatar: "👨",
      gradient: "from-blue-100 to-purple-100",
    },
    {
      key: "testimonial3",
      name: "Zeynep M.",
      location: "İzmir",
      rating: 5,
      avatar: "👩‍🦱",
      gradient: "from-orange-100 to-pink-100",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-fraunces text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
            {t.testimonials?.title || "Kullanıcı Yorumları"}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            PetMedia topluluğundan gerçek deneyimler
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.key}
              className={`relative bg-gradient-to-br ${testimonial.gradient} rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105`}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-6 h-6 text-purple-500" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4 pt-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 text-pretty">
                "{t.testimonials?.[testimonial.key] || "Great testimonial text here"}"
              </p>

              {/* User Info */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                  <span className="text-2xl">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
