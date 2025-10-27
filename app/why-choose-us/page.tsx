import type { Metadata } from "next"
import { WhyChooseUsClient } from "./why-choose-us-client"

export const metadata: Metadata = {
  title: "Why Choose Captain Hacks - Professional Video Editing for Small Business",
  description:
    "Stop wasting time on DIY video editing or expensive agencies. Get professional video editing in 24-48 hours at affordable prices. Unlimited revisions included.",
  keywords: [
    "video editing",
    "small business video",
    "professional video editing",
    "affordable video editing",
    "video editing service",
  ],
  openGraph: {
    title: "Why Choose Captain Hacks - Professional Video Editing",
    description: "Professional video editing without the agency price tag or DIY headaches",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Choose Captain Hacks",
    description: "Professional video editing without the agency price tag",
  },
}

export default function WhyChooseUsPage() {
  return <WhyChooseUsClient />
}
