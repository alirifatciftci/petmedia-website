import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PetMedia - Pet Adoption & Community",
    short_name: "PetMedia",
    description:
      "PetMedia, sahiplendirme sürecini kolay ve güvenli hale getirir; haritada mama/su noktalarıyla topluluğu bir araya getirir.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#8b5cf6",
    icons: [
      {
        src: "/favicon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
