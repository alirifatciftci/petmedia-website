"use client"

import { useTranslation } from "@/lib/i18n"
import { MapPin, Navigation, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MapTeaserSection() {
  const { t } = useTranslation()

  return (
    <section id="map" className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="font-fraunces text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">
              {t.map?.title || "Topluluk Haritası"}
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed text-pretty">
              {t.map?.description || "Çevrenizdeki mama/su noktalarını keşfedin ve yeni noktalar ekleyin."}
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700">Yakındaki mama ve su noktalarını görün</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Navigation className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-gray-700">GPS ile kolay navigasyon</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <Plus className="w-4 h-4 text-purple-600" />
                </div>
                <span className="text-gray-700">Yeni noktalar ekleyin ve paylaşın</span>
              </div>
            </div>

            <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-medium px-8 py-3">
              Haritayı Keşfet
            </Button>
          </div>

          {/* Map Illustration */}
          <div className="relative">
            <div className="relative bg-white rounded-3xl p-6 shadow-2xl">
              {/* Map Container */}
              <div className="w-full h-80 bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 rounded-2xl relative overflow-hidden">
                {/* Map Grid Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div key={i} className="border border-gray-300"></div>
                    ))}
                  </div>
                </div>

                {/* Location Pins */}
                <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                      <span className="text-white text-sm">🥣</span>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-orange-500"></div>
                  </div>
                </div>

                <div className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div
                      className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg animate-bounce"
                      style={{ animationDelay: "0.5s" }}
                    >
                      <span className="text-white text-sm">💧</span>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-blue-500"></div>
                  </div>
                </div>

                <div className="absolute bottom-1/3 left-1/4 transform -translate-x-1/2 translate-y-1/2">
                  <div className="relative">
                    <div
                      className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center shadow-lg animate-bounce"
                      style={{ animationDelay: "1s" }}
                    >
                      <span className="text-white text-sm">🏠</span>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-purple-500"></div>
                  </div>
                </div>

                {/* User Location */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 bg-red-500 rounded-full shadow-lg animate-pulse"></div>
                  <div className="absolute inset-0 w-4 h-4 bg-red-500 rounded-full animate-ping opacity-75"></div>
                </div>
              </div>

              {/* Map Controls */}
              <div className="absolute top-8 right-8 flex flex-col space-y-2">
                <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <Plus className="w-5 h-5 text-gray-600" />
                </button>
                <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <span className="text-gray-600 text-sm font-bold">-</span>
                </button>
              </div>

              {/* Legend */}
              <div className="mt-4 flex items-center justify-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-600">Mama</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600">Su</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-600">Barınak</span>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-lg">
              <div className="text-2xl font-bold text-green-600">127</div>
              <div className="text-xs text-gray-600">Aktif Nokta</div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg">
              <div className="text-2xl font-bold text-blue-600">2.3km</div>
              <div className="text-xs text-gray-600">En Yakın</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
