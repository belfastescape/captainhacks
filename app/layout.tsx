import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: {
    default: "Captain Hacks - Professional Video Marketing | 24-Hour Delivery",
    template: "%s | Captain Hacks",
  },
  description:
    "Professional video editing for small businesses. Scroll-stopping promo videos delivered in 24 hours from $49. Perfect for social media, restaurants, retail & services.",
  keywords: [
    "video marketing",
    "video editing service",
    "promo videos",
    "social media videos",
    "business marketing",
  ],
  authors: [{ name: "Captain Hacks" }],
  creator: "Captain Hacks",
  publisher: "Captain Hacks",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Captain Hacks",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@captainhacks",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${jetBrainsMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
