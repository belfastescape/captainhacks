import type { Metadata } from "next"
import { PromoVideosClient } from "./promo-videos-client"

export const metadata: Metadata = {
  title: "Promo Videos for Small Businesses — Ready in 24 Hours | From $39",
  description:
    "Launch your next sale fast with scroll-stopping promo videos for small businesses. 24-hour delivery, affordable pricing, perfect for flash sales, product launches, and limited-time offers.",
  keywords: [
    "promo videos",
    "small business videos",
    "flash sale videos",
    "24 hour video delivery",
    "social media promo",
    "Instagram Reels promo",
    "TikTok promo video",
    "product launch video",
    "sale announcement video",
  ],
  alternates: {
    canonical: "/promo-videos-for-small-business",
  },
  openGraph: {
    title: "Promo Videos for Small Businesses — Ready in 24 Hours",
    description: "Fast, affordable, effective promo videos for your next sale or product launch",
    type: "article",
    url: "/promo-videos-for-small-business",
  },
  twitter: {
    card: "summary_large_image",
    title: "Promo Videos for Small Businesses — Ready in 24 Hours",
    description: "Fast, affordable, effective promo videos for your next sale or product launch",
  },
}

export default function PromoVideosPage() {
  return <PromoVideosClient />
}

