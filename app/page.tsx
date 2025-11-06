import type { Metadata } from "next"
import CaptainHacksHome from "./home-client"

export const metadata: Metadata = {
  title: "Captain Hacks - Promo Video Creators for Small Business in New Zealand | 24-Hour Delivery",
  description:
    "Get scroll-stopping promo videos for your business in 24 hours. Professional video's created by Captain Hacks from $60 NZD. Serving Auckland, Wellington, Christchurch, and all of New Zealand. Perfect for restaurants, retail, services & more.",
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
    "Auckland promo videos",
    "Wellington video marketing",
    "Christchurch business videos",
    "Dunedin video production",
    "New Zealand video marketing",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Captain Hacks - Promo Video Creators for Small Business in New Zealand",
    description: "Scroll-stopping promo videos delivered in 24 hours. Serving businesses across Auckland, Wellington, Christchurch & NZ. From $60 NZD.",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Captain Hacks - Promo Video Creators for Small Business in New Zealand",
    description: "Get unforgettable promo videos for your business in 24 hours. Serving Auckland, Wellington, Christchurch & all of NZ. From $60 NZD.",
  },
}

export default function Page() {
  return <CaptainHacksHome />
}
