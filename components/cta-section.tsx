"use client"

import type React from "react"

import { useState } from "react"
import { useTranslation } from "@/lib/i18n"
import { StoreBadge } from "@/components/store-badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, CheckCircle } from "lucide-react"

export function CTASection() {
  const { t } = useTranslation()
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)

    // Mock API call - in real app this would call your newsletter API
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubscribed(true)
    setIsLoading(false)
    setEmail("")
  }

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          {/* Header */}
          <h2 className="font-fraunces text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            {t.cta?.title || "Hemen Başlayın"}
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto text-pretty">
            {t.cta?.subtitle || "PetMedia topluluğuna katılın ve dostlarımıza yardım edin."}
          </p>

          {/* Store Badges */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <StoreBadge store="apple" href="https://apps.apple.com/app/idXXXXXXXXX" className="hover:scale-110" />
            <StoreBadge
              store="google"
              href="https://play.google.com/store/apps/details?id=com.example.petmedia"
              className="hover:scale-110"
            />
          </div>

          {/* Newsletter Signup */}
          <div className="max-w-md mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex items-center space-x-2 mb-4">
                <Mail className="w-5 h-5 text-white" />
                <h3 className="font-semibold text-white">E-bülten</h3>
              </div>

              {!isSubscribed ? (
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <Input
                    type="email"
                    placeholder={t.cta?.newsletter || "E-posta adresinizi girin"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
                    required
                  />
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-white text-purple-600 hover:bg-gray-100 font-medium"
                  >
                    {isLoading ? "Gönderiliyor..." : t.cta?.subscribe || "Abone Ol"}
                  </Button>
                </form>
              ) : (
                <div className="flex items-center justify-center space-x-2 text-white">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Başarıyla abone oldunuz!</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
