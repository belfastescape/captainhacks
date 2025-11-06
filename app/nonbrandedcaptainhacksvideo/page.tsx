import type { Metadata } from "next"
import NonBrandedOrderClient from "./nonbranded-order-client"

export const metadata: Metadata = {
  title: "Order Non-Branded Video - Captain Hacks | Custom Promo Video for NZ Small Businesses",
  description:
    "Order a 100% white-label video for your business. Custom characters, your branding only, no logos. Professional video's created by Captain Hacks with 24-hour delivery. Serving Auckland, Wellington, Christchurch & all of New Zealand. Custom pricing.",
  keywords: [
    "white label video",
    "custom video marketing",
    "non-branded video",
    "business video production",
    "custom promo video",
    "professional video marketing",
    "custom character video",
    "New Zealand custom video",
  ],
  alternates: {
    canonical: "/nonbrandedcaptainhacksvideo",
  },
  openGraph: {
    title: "Order Non-Branded Video - Captain Hacks for NZ Businesses",
    description: "100% your brand. Custom characters. Professional quality for Kiwi businesses in 24 hours.",
    type: "website",
    url: "/nonbrandedcaptainhacksvideo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Order Non-Branded Video - Captain Hacks",
    description: "White-label video production for NZ businesses with your branding only.",
  },
}

export default function Page() {
  return <NonBrandedOrderClient />
}
