import { Metadata } from "next"
import { OrderNowClient } from "./order-now-client"

export const metadata: Metadata = {
  title: "Order Now - Professional Promo Video Production for NZ Businesses",
  description: "Choose your perfect video package. 24-hour delivery guarantee. Professional short videos for social media starting at $60 NZD. Serving Auckland, Wellington, Christchurch & all of New Zealand. Captain Hacks branded or your own branding.",
  keywords: "order video, buy video, video production, social media video, short video, TikTok video, Instagram Reel, video pricing, Auckland video, Wellington video production, New Zealand promo videos",
  alternates: {
    canonical: "/order-now",
  },
  openGraph: {
    title: "Order Now - Captain Hacks Video Production for NZ",
    description: "Choose your perfect video package. 24-hour delivery for Kiwi businesses. Starting at $60 NZD.",
    type: "website",
    url: "/order-now",
  },
  twitter: {
    card: "summary_large_image",
    title: "Order Now - Captain Hacks Video Production",
    description: "Choose your perfect Promo Video package. 24-hour delivery for NZ businesses. Starting at $60 NZD.",
  },
}

export default function OrderNowPage() {
  return <OrderNowClient />
}

