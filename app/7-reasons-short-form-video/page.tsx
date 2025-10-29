import type { Metadata } from "next"
import { SevenReasonsClient } from "./seven-reasons-client"

export const metadata: Metadata = {
  title: "7 Reasons Your Brand Should Be Using Short-Form Video Content in 2025 | Captain Hacks",
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
  openGraph: {
    title: "7 Reasons Your Brand Should Be Using Short-Form Video Content in 2025",
    description: "Master short-form video marketing and stay ahead of your competitors in 2025",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "7 Reasons Your Brand Should Be Using Short-Form Video Content in 2025",
    description: "Master short-form video marketing and stay ahead of your competitors in 2025",
  },
}

export default function SevenReasonsPage() {
  return <SevenReasonsClient />
}

