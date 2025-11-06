import type { Metadata } from "next"
import { WhyChooseUsClient } from "./why-choose-us-client"

export const metadata: Metadata = {
  title: "Why Choose Captain Hacks - Professional Video's Creator for NZ Small Businesses",
  description:
    "Stop wasting time on DIY video marketing or expensive agencies. Get professional video's created by Captain Hacks within in 24 hours at affordable prices. Serving businesses across Auckland, Wellington, Christchurch, and all of New Zealand. Unlimited revisions included.",
  keywords: [
    "video marketing",
    "small business video",
    "professional video marketing",
    "affordable video marketing",
    "video marketing service",
    "New Zealand video production",
    "Auckland video marketing",
  ],
  alternates: {
    canonical: "/why-choose-us",
  },
  openGraph: {
    title: "Why Choose Captain Hacks - Professional Video's Creator for NZ Small Businesses",
    description: "Professional video's created by Captain Hacks for Kiwi businesses without the agency price tag",
    type: "website",
    url: "/why-choose-us",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Choose Captain Hacks",
    description: "Professional video's created by Captain Hacks for NZ businesses",
  },
}

export default function WhyChooseUsPage() {
  return <WhyChooseUsClient />
}
