"use client"

import Link from "next/link"
import { useTranslation } from "@/lib/i18n"
import { Mail, Instagram, Twitter, Facebook } from "lucide-react"

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">🐾</span>
              </div>
              <span className="font-fraunces font-bold text-xl">PETMEDIA</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md text-pretty">
              Dostlarımızı yalnız bırakmıyoruz. PetMedia ile güvenli sahiplendirme ve topluluk desteği.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button
                  onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-white transition-colors"
                >
                  Özellikler
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("map")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-white transition-colors"
                >
                  Harita
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("screenshots")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-white transition-colors"
                >
                  Ekran Görüntüleri
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-white transition-colors"
                >
                  SSS
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h4 className="font-semibold mb-4">İletişim</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="mailto:info@petmedia.app"
                  className="flex items-center space-x-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>info@petmedia.app</span>
                </a>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  {t.footer?.terms || "Kullanım Şartları"}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  {t.footer?.privacy || "Gizlilik Politikası"}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 PetMedia. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}
