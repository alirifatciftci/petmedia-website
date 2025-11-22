"use client"

import { useState, useEffect } from "react"
import { useTranslation } from "@/lib/i18n"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ScreenshotsCarousel() {
  const { t } = useTranslation()
  const [currentIndex, setCurrentIndex] = useState(0)

  // Mock screenshot data
  const screenshots = [
    {
      id: 1,
      title: "Ana Sayfa",
      description: "Sahiplendirilmeyi bekleyen dostlarımızı keşfedin",
      bgGradient: "from-purple-100 to-pink-100",
      emoji: "🏠",
      content: "Pet Listesi",
    },
    {
      id: 2,
      title: "Harita",
      description: "Mama ve su noktalarını haritada görün",
      bgGradient: "from-green-100 to-blue-100",
      emoji: "🗺️",
      content: "Topluluk Haritası",
    },
    {
      id: 3,
      title: "Profil",
      description: "Pet profillerini detaylı inceleyin",
      bgGradient: "from-orange-100 to-pink-100",
      emoji: "🐱",
      content: "Pet Profili",
    },
    {
      id: 4,
      title: "Mesajlar",
      description: "Pet sahipleriyle güvenli iletişim",
      bgGradient: "from-blue-100 to-purple-100",
      emoji: "💬",
      content: "Sohbet",
    },
    {
      id: 5,
      title: "Favoriler",
      description: "Beğendiğiniz petleri kaydedin",
      bgGradient: "from-pink-100 to-purple-100",
      emoji: "❤️",
      content: "Favorilerim",
    },
  ]

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [screenshots.length])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length)
  }

  return (
    <section id="screenshots" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-fraunces text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
            Uygulama Ekran Görüntüleri
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            PetMedia uygulamasının kullanıcı dostu arayüzünü keşfedin
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center justify-center">
            {/* Previous Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="absolute left-4 z-10 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            {/* Screenshots Display */}
            <div className="flex items-center justify-center space-x-4 overflow-hidden">
              {screenshots.map((screenshot, index) => {
                const isActive = index === currentIndex
                const isPrev = index === (currentIndex - 1 + screenshots.length) % screenshots.length
                const isNext = index === (currentIndex + 1) % screenshots.length
                const isVisible = isActive || isPrev || isNext

                if (!isVisible) return null

                return (
                  <div
                    key={screenshot.id}
                    className={`transition-all duration-500 ${
                      isActive ? "scale-100 opacity-100 z-20" : "scale-75 opacity-40 z-10"
                    }`}
                  >
                    {/* Phone Frame */}
                    <div className="relative w-64 h-[520px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                      <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                        {/* Status Bar */}
                        <div className="absolute top-0 left-0 right-0 h-8 bg-gray-50 flex items-center justify-between px-6 text-xs font-medium text-gray-900 z-10">
                          <span>9:41</span>
                          <div className="flex items-center space-x-1">
                            <div className="w-4 h-2 bg-gray-900 rounded-sm"></div>
                            <div className="w-1 h-2 bg-gray-900 rounded-sm"></div>
                            <div className="w-6 h-3 border border-gray-900 rounded-sm">
                              <div className="w-4 h-2 bg-gray-900 rounded-sm m-0.5"></div>
                            </div>
                          </div>
                        </div>

                        {/* App Content */}
                        <div
                          className={`pt-8 h-full bg-gradient-to-br ${screenshot.bgGradient} flex flex-col items-center justify-center p-6`}
                        >
                          <div className="text-6xl mb-4">{screenshot.emoji}</div>
                          <h3 className="font-bold text-gray-900 text-lg mb-2">{screenshot.title}</h3>
                          <p className="text-gray-600 text-sm text-center mb-4">{screenshot.content}</p>
                          <div className="w-full max-w-48 h-32 bg-white/50 rounded-2xl flex items-center justify-center">
                            <span className="text-gray-500 text-xs">Ekran İçeriği</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Screenshot Info */}
                    {isActive && (
                      <div className="text-center mt-6">
                        <h4 className="font-semibold text-gray-900 mb-2">{screenshot.title}</h4>
                        <p className="text-gray-600 text-sm">{screenshot.description}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Next Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="absolute right-4 z-10 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-purple-500 scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
