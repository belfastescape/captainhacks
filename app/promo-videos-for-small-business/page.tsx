import type { Metadata } from "next"
import { PromoVideosClient } from "./promo-videos-client"

export const metadata: Metadata = {
  title: "Promo Videos for Small Businesses in New Zealand — Ready in 24 Hours | From $60 NZD",
  description:
    "Launch your next sale fast with scroll-stopping promo videos for small businesses across Auckland, Wellington, Christchurch, and throughout New Zealand. 24-hour delivery, affordable pricing, perfect for flash sales, product launches, and limited-time offers.",
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
    "Auckland promo videos",
    "Wellington video marketing",
    "New Zealand small business videos",
  ],
  alternates: {
    canonical: "/promo-videos-for-small-business",
  },
  openGraph: {
    title: "Promo Videos for Small Businesses in New Zealand — Ready in 24 Hours",
    description: "Fast, affordable, effective promo videos for NZ businesses. Serving Auckland, Wellington, Christchurch & beyond.",
    type: "article",
    url: "/promo-videos-for-small-business",
  },
  twitter: {
    card: "summary_large_image",
    title: "Promo Videos for Small Businesses in New Zealand — Ready in 24 Hours",
    description: "Fast, affordable, effective promo videos for Kiwi businesses",
  },
}

export default function PromoVideosPage() {
  return <PromoVideosClient />
}

