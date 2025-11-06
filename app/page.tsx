import type { Metadata } from "next"
import CaptainHacksHome from "./home-client"

export const metadata: Metadata = {
  title: "Captain Hacks - Promo Video Creators for Small Business | 24-Hour Delivery",
  description:
    "Get scroll-stopping promo videos for your business in 24 hours. Professional video's created by Captain Hacks from $60 NZD. Perfect for restaurants, retail, services & more. Fast, affordable, unforgettable.",
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Captain Hacks - Promo Video Creators for Small Business",
    description: "Scroll-stopping promo videos delivered in 24 hours. From $60 NZD.",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Captain Hacks - Promo Video Creators for Small Business",
    description: "Get unforgettable promo videos for your business in 24 hours. From $60 NZD.",
  },
}

export default function Page() {
  return <CaptainHacksHome />
}
