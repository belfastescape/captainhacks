import type { Metadata } from "next"
import CaptainHacksHome from "./home-client"

export const metadata: Metadata = {
  title: "Captain Hacks - Promo Video Creators for Small Business | 24-Hour Delivery",
  description:
    "Get scroll-stopping promo videos for your business in 24 hours. Professional video's created by Captain Hacks from $39. Perfect for restaurants, retail, services & more. Fast, affordable, unforgettable.",
  keywords: [
    "video marketing",
    "promo videos",
    "social media videos",
    "business videos",
    "video marketing service",
    "facebook reels",
    "instagram reels",
    "tiktok videos",
    "affordable video production",
  ],
  openGraph: {
    title: "Captain Hacks - Promo Video Creators for Small Business",
    description: "Scroll-stopping promo videos delivered in 24 hours. From $39.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Captain Hacks - Promo Video Creators for Small Business",
    description: "Get unforgettable promo videos for your business in 24 hours. From $39.",
  },
}

export default function Page() {
  return <CaptainHacksHome />
}
