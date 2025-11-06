import type { Metadata } from "next"
import { BlackFridayClient } from "./black-friday-client"

export const metadata: Metadata = {
  title: "Black Friday Promo Videos for NZ Businesses | Boost Your Sales | Captain Hacks",
  description:
    "Check out our Black Friday promo video examples. Get your custom Black Friday sale video made in 24 hours. Serving Auckland, Wellington, Christchurch & all of New Zealand. Perfect for social media, ads, and your website.",
  keywords: [
    "black friday videos",
    "black friday promo",
    "sale videos",
    "holiday marketing videos",
    "cyber monday videos",
    "discount promo videos",
    "social media sale ads",
    "black friday marketing",
    "New Zealand Black Friday",
    "Auckland holiday sales",
  ],
  alternates: {
    canonical: "/black-friday-promo-videos",
  },
  openGraph: {
    title: "Black Friday Promo Videos for NZ Businesses | Captain Hacks",
    description: "Black Friday promo videos for Kiwi businesses that drive sales",
    type: "article",
    url: "/black-friday-promo-videos",
  },
  twitter: {
    card: "summary_large_image",
    title: "Black Friday Promo Videos for NZ Businesses | Captain Hacks",
    description: "Black Friday promo videos for Kiwi businesses that drive sales",
  },
}

export default function BlackFridayPage() {
  return <BlackFridayClient />
}

