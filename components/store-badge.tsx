import Link from "next/link"

interface StoreBadgeProps {
  store: "apple" | "google"
  href: string
  className?: string
}

export function StoreBadge({ store, href, className = "" }: StoreBadgeProps) {
  const badges = {
    apple: {
      topText: "Download on the",
      bottomText: "App Store",
    },
    google: {
      topText: "Get it on",
      bottomText: "Google Play",
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
      <div className="bg-black text-white rounded-xl px-6 py-3 text-center min-w-[180px]">
        <div className="text-xs opacity-80 mb-1">{badge.topText}</div>
        <div className="text-lg font-semibold leading-tight">{badge.bottomText}</div>
      </div>
    </Link>
  )
}
