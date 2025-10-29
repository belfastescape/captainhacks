"use client"

import { Navigation } from "@/components/navigation"
import { MatrixBackground } from "@/components/matrix-background"
import Link from "next/link"

export function OrderNowClient() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <MatrixBackground opacity={0.15} />
      <Navigation />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-[8%] py-32 pt-32">
          <div className="max-w-7xl mx-auto w-full">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-cyan-400 font-mono">
                <span className="text-gray-400 text-2xl sm:text-3xl md:text-4xl block mb-4">
                  // ORDER NOW
                </span>
                SHORT VIDEO PRICING
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-4 font-mono">
                Perfect for social media. Fast Delivery
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Card 1 - Captain Hacks Video */}
              <div className="bg-gray-950 border-2 border-cyan-400 rounded-lg p-8 hover:border-cyan-300 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/20">
                <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-4 font-mono text-center">
                  CAPTAIN HACKS VIDEO
                </h2>
                <div className="text-5xl font-bold text-cyan-400 my-6 font-mono text-center">
                  $39 USD
                </div>
                <ul className="space-y-4 mb-8 text-gray-400">
                  <li className="flex items-start font-mono text-sm">
                    <span className="text-cyan-400 mr-3 text-lg flex-shrink-0">▸</span>
                    <span>UP TO 16 SEC VIDEO + END CARD</span>
                  </li>
                  <li className="flex items-start font-mono text-sm">
                    <span className="text-cyan-400 mr-3 text-lg flex-shrink-0">▸</span>
                    <span>24 HOUR DELIVERY GUARANTEE</span>
                  </li>
                  <li className="flex items-start font-mono text-sm">
                    <span className="text-cyan-400 mr-3 text-lg flex-shrink-0">▸</span>
                    <span>USE CAPTAIN HACKS CHARACTER</span>
                  </li>
                  <li className="flex items-start font-mono text-sm">
                    <span className="text-cyan-400 mr-3 text-lg flex-shrink-0">▸</span>
                    <span>SMALL CAPTAIN HACKS WATERMARK</span>
                  </li>
                </ul>
                <Link
                  href="/nonbrandedcaptainhacksvideo"
                  className="block w-full px-8 py-4 bg-cyan-500 text-black font-mono text-base uppercase tracking-widest hover:bg-cyan-400 transition-all duration-300 text-center no-underline hover:scale-105"
                >
                  ORDER NOW
                </Link>
              </div>

              {/* Card 2 - Your Branding Only */}
              <div className="bg-gray-950 border-2 border-pink-500 rounded-lg p-8 hover:border-pink-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-pink-500 text-black px-6 py-2 font-mono text-xs uppercase tracking-wider font-bold">
                  MOST POPULAR
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-pink-500 mb-4 font-mono text-center">
                  YOUR BRANDING ONLY
                </h2>
                <div className="text-5xl font-bold text-pink-500 my-6 font-mono text-center">
                  $49 USD
                </div>
                <ul className="space-y-4 mb-8 text-gray-400">
                  <li className="flex items-start font-mono text-sm">
                    <span className="text-pink-500 mr-3 text-lg flex-shrink-0">▸</span>
                    <span>UP TO 16 SEC VIDEO + END CARD</span>
                  </li>
                  <li className="flex items-start font-mono text-sm">
                    <span className="text-pink-500 mr-3 text-lg flex-shrink-0">▸</span>
                    <span>24 HOUR DELIVERY GUARANTEE</span>
                  </li>
                  <li className="flex items-start font-mono text-sm">
                    <span className="text-pink-500 mr-3 text-lg flex-shrink-0">▸</span>
                    <span>CREATE YOUR OWN CHARACTER</span>
                  </li>
                  <li className="flex items-start font-mono text-sm">
                    <span className="text-pink-500 mr-3 text-lg flex-shrink-0">▸</span>
                    <span>NO CAPTAIN HACKS WATERMARK</span>
                  </li>
                </ul>
                <Link
                  href="/brandedcaptainhacksvideo"
                  className="block w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-mono text-base uppercase tracking-widest hover:from-cyan-600 hover:to-pink-600 transition-all duration-300 text-center no-underline hover:scale-105"
                >
                  ORDER NOW
                </Link>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-16 text-center">
              <p className="text-gray-400 font-mono text-sm mb-4">
                <span className="text-cyan-400">// GUARANTEE:</span> IF YOU ARE NOT HAPPY, WE WILL NOT BE HAPPY. WE WILL REFUND.
              </p>
              <p className="text-gray-400 font-mono text-sm">
                <span className="text-pink-500">// QUESTIONS?</span>{" "}
                <Link href="/#contact" className="text-cyan-400 hover:text-cyan-300 underline">
                  CONTACT US
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

