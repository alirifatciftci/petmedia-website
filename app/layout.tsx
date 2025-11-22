import type React from "react"
import type { Metadata } from "next"
import { Inter, Fraunces } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "PetMedia - Dostlarımızı yalnız bırakmıyoruz",
    template: "%s | PetMedia",
  },
  description:
    "PetMedia, sahiplendirme sürecini kolay ve güvenli hale getirir; haritada mama/su noktalarıyla topluluğu bir araya getirir. Türkiye'nin en güvenli pet sahiplendirme platformu.",
  keywords: [
    "pet adoption",
    "animal rescue",
    "pet community",
    "Turkey",
    "sahiplendirme",
    "hayvan",
    "evcil hayvan",
    "kedi sahiplendirme",
    "köpek sahiplendirme",
    "sokak hayvanları",
    "mama noktası",
    "pet haritası",
  ],
  authors: [{ name: "PetMedia Team", url: "https://petmedia.app" }],
  creator: "PetMedia",
  publisher: "PetMedia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://petmedia.app"),
  alternates: {
    canonical: "/",
    languages: {
      "tr-TR": "/",
      "en-US": "/en",
    },
  },
  openGraph: {
    title: "PetMedia - Dostlarımızı yalnız bırakmıyoruz",
    description:
      "PetMedia, sahiplendirme sürecini kolay ve güvenli hale getirir; haritada mama/su noktalarıyla topluluğu bir araya getirir.",
    url: "https://petmedia.app",
    siteName: "PetMedia",
    images: [
      {
        url: "/petmedia-app-social-sharing-image.jpg",
        width: 1200,
        height: 630,
        alt: "PetMedia - Pet Adoption App",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PetMedia - Dostlarımızı yalnız bırakmıyoruz",
    description:
      "PetMedia, sahiplendirme sürecini kolay ve güvenli hale getirir; haritada mama/su noktalarıyla topluluğu bir araya getirir.",
    images: ["/petmedia-app-social-sharing-image.jpg"],
    creator: "@petmediaapp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  category: "technology",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${fraunces.variable} antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="PetMedia" />
      </head>
      <body className="font-sans">
        {children}

        {/* Vercel Analytics */}
        <Script
          src="https://va.vercel-scripts.com/v1/script.js"
          strategy="afterInteractive"
          data-website-id="your-analytics-id"
        />

        {/* Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "PetMedia",
              description:
                "PetMedia, sahiplendirme sürecini kolay ve güvenli hale getirir; haritada mama/su noktalarıyla topluluğu bir araya getirir.",
              url: "https://petmedia.app",
              applicationCategory: "LifestyleApplication",
              operatingSystem: "iOS, Android",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "TRY",
              },
              author: {
                "@type": "Organization",
                name: "PetMedia Team",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "1250",
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
