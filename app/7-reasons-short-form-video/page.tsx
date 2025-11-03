import type { Metadata } from "next"
import { SevenReasonsClient } from "./seven-reasons-client"

export const metadata: Metadata = {
  title: "How Smart Brands Are Using Short-Form Video in Digital Marketing in 2025 | Captain Hacks",
  description:
    "Short-form video has officially taken over digital marketing. Discover why your brand needs to master this format in 2025 and what smart brands are doing to take advantage of it.",
  keywords: [
    "short-form video",
    "video marketing",
    "social media video",
    "TikTok marketing",
    "Instagram Reels",
    "YouTube Shorts",
    "video content strategy",
    "digital marketing 2025",
  ],
  alternates: {
    canonical: "/7-reasons-short-form-video",
  },
  openGraph: {
    title: "How Smart Brands Are Using Short-Form Video in Digital Marketing in 2025",
    description: "Master short-form video marketing and stay ahead of your competitors in 2025",
    type: "article",
    url: "/7-reasons-short-form-video",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Smart Brands Are Using Short-Form Video in Digital Marketing in 2025",
    description: "Master short-form video marketing and stay ahead of your competitors in 2025",
  },
}

export default function SevenReasonsPage() {
  return <SevenReasonsClient />
}

