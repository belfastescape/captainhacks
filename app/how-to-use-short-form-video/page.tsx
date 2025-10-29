import type { Metadata } from "next"
import { HowToUseClient } from "./how-to-use-client"

export const metadata: Metadata = {
  title: "Using Short-Form Video to Elevate Your Digital Marketing Strategy | Captain Hacks",
  description:
    "Learn how to strategically use short-form video in your digital marketing mix. From driving reach to generating sales, discover the best practices and strategies for 2025.",
  keywords: [
    "short-form video",
    "digital marketing strategy",
    "video content",
    "TikTok marketing",
    "Instagram Reels",
    "YouTube Shorts",
    "video marketing best practices",
    "social media video",
    "video SEO",
  ],
  openGraph: {
    title: "Using Short-Form Video to Elevate Your Digital Marketing Strategy",
    description: "Master short-form video strategy and turn it into a growth engine for your brand",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Using Short-Form Video to Elevate Your Digital Marketing Strategy",
    description: "Master short-form video strategy and turn it into a growth engine for your brand",
  },
}

export default function HowToUsePage() {
  return <HowToUseClient />
}

