import Link from "next/link"

interface StoreBadgeProps {
  store: "apple" | "google"
  href: string
  className?: string
}

export function StoreBadge({ store, href, className = "" }: StoreBadgeProps) {
  const badges = {
    apple: {
      src: "/download-app-store-badge.png",
      alt: "Download on the App Store",
      text: "Download on the App Store",
    },
    google: {
      src: "/get-it-on-google-play-badge.jpg",
      alt: "Get it on Google Play",
      text: "Get it on Google Play",
    },
  }

  const badge = badges[store]

  return (
    <Link
      href={href}
      className={`inline-block transition-transform hover:scale-105 ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="bg-black text-white rounded-xl px-6 py-3 flex items-center gap-3 min-w-[180px]">
        <div className="text-2xl">{store === "apple" ? "🍎" : "📱"}</div>
        <div className="text-left">
          <div className="text-xs opacity-80">{store === "apple" ? "Download on the" : "Get it on"}</div>
          <div className="text-lg font-semibold leading-tight">{store === "apple" ? "App Store" : "Google Play"}</div>
        </div>
      </div>
    </Link>
  )
}
