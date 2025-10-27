import type { Metadata } from "next"
import CaptainHacksHome from "./home-client"

export const metadata: Metadata = {
  title: "Captain Hacks - Professional Video Marketing | 24-Hour Delivery",
  description:
    "Get scroll-stopping promo videos for your business in 24 hours. Professional video editing from $49. Perfect for restaurants, retail, services & more. Fast, affordable, unforgettable.",
  keywords: [
    "video marketing",
    "promo videos",
    "social media videos",
    "business videos",
    "video editing service",
    "facebook reels",
    "instagram reels",
    "tiktok videos",
    "affordable video production",
  ],
  openGraph: {
    title: "Captain Hacks - Professional Video Marketing",
    description: "Scroll-stopping promo videos delivered in 24 hours. From $49.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Captain Hacks - Professional Video Marketing",
    description: "Get unforgettable promo videos for your business in 24 hours. From $49.",
  },
}

export default function Page() {
  return <CaptainHacksHome />
}
