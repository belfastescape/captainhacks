import type { Metadata } from "next"
import { BlackFridayClient } from "./black-friday-client"

export const metadata: Metadata = {
  title: "Black Friday Promo Videos | Boost Your Sales with Video Ads | Captain Hacks",
  description:
    "Check out our Black Friday promo video examples. Get your custom Black Friday sale video made in 24 hours. Perfect for social media, ads, and your website.",
  keywords: [
    "black friday videos",
    "black friday promo",
    "sale videos",
    "holiday marketing videos",
    "cyber monday videos",
    "discount promo videos",
    "social media sale ads",
    "black friday marketing",
  ],
  alternates: {
    canonical: "/black-friday-promo-videos",
  },
  openGraph: {
    title: "Black Friday Promo Videos | Captain Hacks",
    description: "See examples of our Black Friday promo videos that drive sales",
    type: "article",
    url: "/black-friday-promo-videos",
  },
  twitter: {
    card: "summary_large_image",
    title: "Black Friday Promo Videos | Captain Hacks",
    description: "See examples of our Black Friday promo videos that drive sales",
  },
}

export default function BlackFridayPage() {
  return <BlackFridayClient />
}

