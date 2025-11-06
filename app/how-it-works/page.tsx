import type { Metadata } from "next"
import { HowItWorksClient } from "./how-it-works-client"

export const metadata: Metadata = {
  title: "How It Works - Captain Hacks Promo Video Ordering Process for NZ Businesses",
  description:
    "3 minutes to order. 24 hours to delivery. Zero hassle. Learn how Captain Hacks creates scroll-stopping video content for businesses across Auckland, Wellington, Christchurch, and throughout New Zealand in just 6 simple steps.",
  keywords: [
    "video marketing process",
    "how to order video",
    "video creation process",
    "24 hour video delivery",
    "quick video marketing",
    "New Zealand video service",
  ],
  alternates: {
    canonical: "/how-it-works",
  },
  openGraph: {
    title: "How It Works - Captain Hacks for NZ Businesses",
    description: "3 minutes to order. 24 hours to delivery. Serving Kiwi businesses nationwide.",
    type: "website",
    url: "/how-it-works",
  },
  twitter: {
    card: "summary_large_image",
    title: "How It Works - Captain Hacks",
    description: "Simple video ordering for NZ businesses. Professional results in 24 hours.",
  },
}

export default function HowItWorksPage() {
  return <HowItWorksClient />
}

