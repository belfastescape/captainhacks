import { Metadata } from "next"
import { OrderNowClient } from "./order-now-client"

export const metadata: Metadata = {
  title: "Order Now - Professional Short Promo Video Production",
  description: "Choose your perfect video package. 24-hour delivery guarantee. Professional short videos for social media starting at $60 NZD. Captain Hacks branded or your own branding.",
  keywords: "order video, buy video, video production, social media video, short video, TikTok video, Instagram Reel, video pricing",
  alternates: {
    canonical: "/order-now",
  },
  openGraph: {
    title: "Order Now - Captain Hacks Video Production",
    description: "Choose your perfect video package. 24-hour delivery guarantee. Professional short videos starting at $60 NZD.",
    type: "website",
    url: "/order-now",
  },
  twitter: {
    card: "summary_large_image",
    title: "Order Now - Captain Hacks Video Production",
    description: "Choose your perfect  Promo Video package. 24-hour delivery guarantee. Starting at $60 NZD.",
  },
}

export default function OrderNowPage() {
  return <OrderNowClient />
}

