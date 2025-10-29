import { Metadata } from "next"
import { OrderNowClient } from "./order-now-client"

export const metadata: Metadata = {
  title: "Order Now - Professional Short Video Production",
  description: "Choose your perfect video package. 24-hour delivery guarantee. Professional short videos for social media starting at $39. Captain Hacks branded or your own branding.",
  keywords: "order video, buy video, video production, social media video, short video, TikTok video, Instagram Reel, video pricing",
  openGraph: {
    title: "Order Now - Captain Hacks Video Production",
    description: "Choose your perfect video package. 24-hour delivery guarantee. Professional short videos starting at $39.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Order Now - Captain Hacks Video Production",
    description: "Choose your perfect video package. 24-hour delivery guarantee. Starting at $39.",
  },
}

export default function OrderNowPage() {
  return <OrderNowClient />
}

