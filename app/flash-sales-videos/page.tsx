import type { Metadata } from "next"
import { FlashSalesClient } from "./flash-sales-client"

export const metadata: Metadata = {
  title: "Flash-Sale Videos | 24-Hour Promo Ads for Small Businesses | Captain Hacks",
  description:
    "Boost your next flash sale with a custom promo video made in 24 hours. Urgent, high-impact videos built to drive instant sales — only $49 USD.",
  keywords: [
    "flash sale videos",
    "urgent promo videos",
    "24 hour video delivery",
    "countdown videos",
    "limited time offer videos",
    "FOMO marketing videos",
    "small business flash sales",
    "weekend deal videos",
    "product launch videos",
  ],
  alternates: {
    canonical: "/flash-sales-videos",
  },
  openGraph: {
    title: "Flash-Sale Videos | 24-Hour Promo Ads for Small Businesses",
    description: "Create urgency. Boost sales. Move stock. Flash-sale videos delivered in 24 hours.",
    type: "article",
    url: "/flash-sales-videos",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flash-Sale Videos | 24-Hour Promo Ads for Small Businesses",
    description: "Create urgency. Boost sales. Move stock. Flash-sale videos delivered in 24 hours.",
  },
}

export default function FlashSalesPage() {
  return <FlashSalesClient />
}

