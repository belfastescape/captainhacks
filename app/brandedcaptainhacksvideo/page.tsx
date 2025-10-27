import type { Metadata } from "next"
import BrandedOrderClient from "./branded-order-client"

export const metadata: Metadata = {
  title: "Order Branded Video - Captain Hacks | $49 Video Editing",
  description:
    "Order a branded Captain Hacks promo video for your business. Get a professional 16-second video with our character and small watermark. 24-hour delivery guaranteed. Only $49.",
  keywords: [
    "order promo video",
    "branded video",
    "cheap video editing",
    "social media video",
    "business promo video",
    "$49 video",
    "fast video production",
  ],
  openGraph: {
    title: "Order Branded Video - Captain Hacks",
    description: "Professional promo video in 24 hours. Only $49.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Order Branded Video - Captain Hacks",
    description: "Get your business promo video in 24 hours for just $49.",
  },
}

export default function Page() {
  return <BrandedOrderClient />
}
