import type { Metadata } from "next"
import BrandedOrderClient from "./branded-order-client"

export const metadata: Metadata = {
  title: "Order Branded Video - Captain Hacks | $60 NZD Promo Video for NZ Small Businesses",
  description:
    "Order a branded Captain Hacks promo video for your business. Get a professional 16-second video with our character and small logo. Serving Auckland, Wellington, Christchurch & all of NZ. 24-hour delivery guaranteed. Only $60 NZD.",
  keywords: [
    "order promo video",
    "branded video",
    "cheap video marketing",
    "social media video",
    "business promo video",
    "$60 NZD video",
    "fast video production",
    "New Zealand video service",
  ],
  alternates: {
    canonical: "/brandedcaptainhacksvideo",
  },
  openGraph: {
    title: "Order Branded Video - Captain Hacks for NZ Businesses",
    description: "Professional promo video for Kiwi businesses in 24 hours. Only $60 NZD.",
    type: "website",
    url: "/brandedcaptainhacksvideo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Order Branded Video - Captain Hacks",
    description: "Get your NZ business promo video in 24 hours for just $60 NZD.",
  },
}

export default function Page() {
  return <BrandedOrderClient />
}
