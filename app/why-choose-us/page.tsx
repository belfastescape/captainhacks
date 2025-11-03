import type { Metadata } from "next"
import { WhyChooseUsClient } from "./why-choose-us-client"

export const metadata: Metadata = {
  title: "Why Choose Captain Hacks - Professional Video's Creator for Small Business",
  description:
    "Stop wasting time on DIY video marketing or expensive agencies. Get professional video's created by Captain Hacks within in 24 hours at affordable prices. Unlimited revisions included.",
  keywords: [
    "video marketing",
    "small business video",
    "professional video marketing",
    "affordable video marketing",
    "video marketing service",
  ],
  alternates: {
    canonical: "/why-choose-us",
  },
  openGraph: {
    title: "Why Choose Captain Hacks - Professional Video's Creator for Small Business",
    description: "Professional video's created by Captain Hacks without the agency price tag or DIY headaches",
    type: "website",
    url: "/why-choose-us",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Choose Captain Hacks",
    description: "Professional video's created by Captain Hacks without the agency price tag",
  },
}

export default function WhyChooseUsPage() {
  return <WhyChooseUsClient />
}
