import type { Metadata } from "next"
import { WillItWorkClient } from "./will-it-work-client"

export const metadata: Metadata = {
  title: "Do Short Videos Work? - Captain Hacks Video Marketing Guide",
  description:
    "Discover why short social media videos work for small businesses. Learn about ROI, engagement rates, and practical tips for TikTok, Instagram Reels, and YouTube Shorts success.",
  keywords: [
    "short form video",
    "social media marketing",
    "video ROI",
    "tiktok marketing",
    "instagram reels",
    "youtube shorts",
    "small business video marketing",
    "video engagement",
  ],
  alternates: {
    canonical: "/will-it-work",
  },
  openGraph: {
    title: "Do Short Videos Work? - Video Marketing Guide",
    description: "73% of people prefer short videos to learn about products. Learn why video works and how to use it.",
    type: "article",
    url: "/will-it-work",
  },
  twitter: {
    card: "summary_large_image",
    title: "Do Short Videos Work for Small Business?",
    description: "Data-backed guide to short-form video marketing success.",
  },
}

export default function Page() {
  return <WillItWorkClient />
}

