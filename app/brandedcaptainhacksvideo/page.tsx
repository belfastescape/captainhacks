import type { Metadata } from "next"
import BrandedOrderClient from "./branded-order-client"

export const metadata: Metadata = {
  title: "Order Branded Video - Captain Hacks | $39 Promo Video for Small Business",
  description:
    "Order a branded Captain Hacks promo video for your business. Get a professional 16-second video with our character and small logo. 24-hour delivery guaranteed. Only $39.",
  keywords: [
    "order promo video",
    "branded video",
    "cheap video marketing",
    "social media video",
    "business promo video",
    "$39 video",
    "fast video production",
  ],
  openGraph: {
    title: "Order Branded Video - Captain Hacks",
    description: "Professional promo video in 24 hours. Only $39.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Order Branded Video - Captain Hacks",
    description: "Get your business promo video in 24 hours for just $39.",
  },
}

export default function Page() {
  return <BrandedOrderClient />
}
