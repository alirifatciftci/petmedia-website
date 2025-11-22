"use client"
import { StoreBadge } from "@/components/store-badge"
import { useTranslation } from "@/lib/i18n"

export function HeroSection() {
  const { t } = useTranslation()

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-pink-50 to-purple-100 pt-20 pb-16 lg:pt-32 lg:pb-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="font-fraunces text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 text-balance">
              {t.hero?.title || "Dostlarımızı yalnız bırakmıyoruz."}
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed text-pretty max-w-2xl mx-auto lg:mx-0">
              {t.hero?.subtitle ||
                "PetMedia, sahiplendirme sürecini kolay ve güvenli hale getirir; haritada mama/su noktalarıyla topluluğu bir araya getirir."}
            </p>

            {/* Store Badges */}
            <div id="download" className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <StoreBadge store="apple" href="https://apps.apple.com/app/idXXXXXXXXX" className="animate-fade-in-up" />
              <StoreBadge
                store="google"
                href="https://play.google.com/store/apps/details?id=com.example.petmedia"
                className="animate-fade-in-up"
              />
            </div>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start text-center lg:text-left">
              <div>
                <div className="text-2xl font-bold text-purple-600">10K+</div>
                <div className="text-sm text-gray-600">Mutlu Sahiplendirme</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-pink-600">500+</div>
                <div className="text-sm text-gray-600">Mama Noktası</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">50K+</div>
                <div className="text-sm text-gray-600">Topluluk Üyesi</div>
              </div>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-64 h-[520px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="absolute top-0 left-0 right-0 h-8 bg-gray-50 flex items-center justify-between px-6 text-xs font-medium text-gray-900">
                    <span>9:41</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-2 bg-gray-900 rounded-sm"></div>
                      <div className="w-1 h-2 bg-gray-900 rounded-sm"></div>
                      <div className="w-6 h-3 border border-gray-900 rounded-sm">
                        <div className="w-4 h-2 bg-gray-900 rounded-sm m-0.5"></div>
                      </div>
                    </div>
                  </div>

                  {/* App Screenshot */}
                  <div className="pt-8 h-full bg-gradient-to-br from-purple-50 to-pink-50">
                    <div className="px-4 py-6">
                      {/* App Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                            <span className="text-white text-sm">🐾</span>
                          </div>
                          <span className="font-bold text-gray-900">PetMedia</span>
                        </div>
                        <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                      </div>

                      {/* Featured Pet Card */}
                      <div className="bg-white rounded-2xl p-4 shadow-lg mb-4">
                        <div className="w-full h-32 bg-gradient-to-br from-orange-200 to-pink-200 rounded-xl mb-3 flex items-center justify-center">
                          <span className="text-4xl">🐱</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-1">Luna</h3>
                        <p className="text-sm text-gray-600 mb-2">2 yaşında, dişi kedi</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded-full">
                            Sahiplendirilecek
                          </span>
                          <button className="text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full">
                            İletişim
                          </button>
                        </div>
                      </div>

                      {/* Map Preview */}
                      <div className="bg-white rounded-2xl p-4 shadow-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Yakındaki Noktalar</h4>
                        <div className="w-full h-20 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                          <span className="text-2xl">🗺️</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-white text-xl">❤️</span>
              </div>
              <div
                className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-400 rounded-2xl flex items-center justify-center shadow-lg animate-bounce"
                style={{ animationDelay: "0.5s" }}
              >
                <span className="text-white text-xl">🏠</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
