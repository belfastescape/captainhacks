import type { Metadata } from "next"
import { HowToUseClient } from "./how-to-use-client"

export const metadata: Metadata = {
  title: "Using Short-Form Video to Elevate Your Digital Marketing Strategy in NZ | Captain Hacks",
  description:
    "Learn how to strategically use short-form video in your digital marketing mix. From driving reach to generating sales, discover the best practices and strategies for New Zealand businesses in 2025.",
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
    "New Zealand digital marketing",
    "video marketing NZ",
  ],
  alternates: {
    canonical: "/how-to-use-short-form-video",
  },
  openGraph: {
    title: "Using Short-Form Video to Elevate Your Digital Marketing Strategy in NZ",
    description: "Master short-form video strategy and turn it into a growth engine for your Kiwi brand",
    type: "article",
    url: "/how-to-use-short-form-video",
  },
  twitter: {
    card: "summary_large_image",
    title: "Using Short-Form Video to Elevate Your Digital Marketing Strategy in NZ",
    description: "Master short-form video strategy for New Zealand businesses",
  },
}

export default function HowToUsePage() {
  return <HowToUseClient />
}

