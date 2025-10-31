import type { Metadata } from "next"
import NonBrandedOrderClient from "./nonbranded-order-client"

export const metadata: Metadata = {
  title: "Order Non-Branded Video - Captain Hacks | Custom  Promo Video for Small Business",
  description:
    "Order a 100% white-label video for your business. Custom characters, your branding only, no logos. Professional video's created by Captain Hacks with 24-hour delivery. Custom pricing.",
  keywords: [
    "white label video",
    "custom video marketing",
    "non-branded video",
    "business video production",
    "custom promo video",
    "professional video marketing",
    "custom character video",
  ],
  openGraph: {
    title: "Order Non-Branded Video - Captain Hacks",
    description: "100% your brand. Custom characters. Professional quality in 24 hours.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Order Non-Branded Video - Captain Hacks",
    description: "White-label video production with your branding only.",
  },
}

export default function Page() {
  return <NonBrandedOrderClient />
}
