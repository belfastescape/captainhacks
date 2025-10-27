"use client"

import { useState } from "react"
import Link from "next/link"
import { Calculator } from "lucide-react"

export function PricingCalculator() {
  const [videoCount, setVideoCount] = useState(1)
  const [videoType, setVideoType] = useState<"branded" | "nonbranded">("branded")

  const basePrices = {
    branded: 49,
    nonbranded: 149,
  }

  const getDiscount = (count: number) => {
    if (count >= 10) return 0.3 // 30% off
    if (count >= 5) return 0.2 // 20% off
    if (count >= 3) return 0.1 // 10% off
    return 0
  }

  const calculateTotal = () => {
    const basePrice = basePrices[videoType]
    const discount = getDiscount(videoCount)
    const subtotal = basePrice * videoCount
    const total = subtotal * (1 - discount)
    return {
      subtotal,
      discount: subtotal * discount,
      total,
      perVideo: total / videoCount,
      discountPercent: discount * 100,
    }
  }

  const pricing = calculateTotal()

  return (
    <div className="bg-gray-950 border-2 border-cyan-400 rounded-lg p-8 md:p-10 max-w-3xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <Calculator className="w-8 h-8 text-cyan-400" aria-hidden="true" />
        <h3 className="text-3xl font-mono text-cyan-400 uppercase">Price Calculator</h3>
      </div>

      <p className="text-gray-400 mb-8">
        Estimate your investment. The more you order, the less you pay per video.
      </p>

      {/* Video Type Toggle */}
      <div className="mb-8">
        <label className="block text-white font-mono text-sm mb-3 uppercase tracking-wider">Video Type</label>
        <div className="flex gap-4">
          <button
            onClick={() => setVideoType("branded")}
            className={`flex-1 px-6 py-4 font-mono uppercase border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
              videoType === "branded"
                ? "bg-cyan-400 text-black border-cyan-400"
                : "bg-transparent text-gray-400 border-gray-700 hover:border-cyan-400"
            }`}
          >
            Branded
          </button>
          <button
            onClick={() => setVideoType("nonbranded")}
            className={`flex-1 px-6 py-4 font-mono uppercase border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400 ${
              videoType === "nonbranded"
                ? "bg-pink-500 text-black border-pink-500"
                : "bg-transparent text-gray-400 border-gray-700 hover:border-pink-500"
            }`}
          >
            Non-Branded
          </button>
        </div>
      </div>

      {/* Video Count Slider */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <label htmlFor="video-count" className="text-white font-mono text-sm uppercase tracking-wider">
            Number of Videos
          </label>
          <span className="text-cyan-400 font-mono text-2xl font-bold">{videoCount}</span>
        </div>
        <input
          id="video-count"
          type="range"
          min="1"
          max="20"
          value={videoCount}
          onChange={(e) => setVideoCount(Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <div className="flex justify-between text-xs text-gray-500 font-mono mt-2">
          <span>1</span>
          <span>5</span>
          <span>10</span>
          <span>15</span>
          <span>20</span>
        </div>
      </div>

      {/* Pricing Breakdown */}
      <div className="bg-black border border-gray-800 rounded-lg p-6 mb-6">
        <div className="space-y-3 mb-4 pb-4 border-b border-gray-800">
          <div className="flex justify-between text-gray-400">
            <span>Base Price ({videoCount} × ${basePrices[videoType]})</span>
            <span>${pricing.subtotal.toFixed(2)}</span>
          </div>
          {pricing.discountPercent > 0 && (
            <div className="flex justify-between text-green-400">
              <span>Volume Discount ({pricing.discountPercent}% off)</span>
              <span>-${pricing.discount.toFixed(2)}</span>
            </div>
          )}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-white font-mono text-xl uppercase">Total</span>
          <span className="text-cyan-400 font-mono text-3xl font-bold">${pricing.total.toFixed(2)}</span>
        </div>
        <div className="text-right text-gray-500 text-sm mt-2 font-mono">
          ${pricing.perVideo.toFixed(2)} per video
        </div>
      </div>

      {/* Discount Tiers */}
      {videoCount < 10 && (
        <div className="bg-gray-900 border-l-4 border-cyan-400 p-4 mb-6">
          <p className="text-cyan-400 font-mono text-sm uppercase mb-2">💡 Save More:</p>
          <ul className="text-gray-300 text-sm space-y-1">
            {videoCount < 3 && <li>• Order 3+ videos → Save 10%</li>}
            {videoCount < 5 && <li>• Order 5+ videos → Save 20%</li>}
            {videoCount < 10 && <li>• Order 10+ videos → Save 30%</li>}
          </ul>
        </div>
      )}

      {/* CTA */}
      <Link
        href={videoType === "branded" ? "/brandedcaptainhacksvideo" : "/nonbrandedcaptainhacksvideo"}
        className="block w-full bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white font-mono font-bold text-center px-6 py-4 rounded-lg transition-all duration-300 hover:scale-105 uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-cyan-400"
      >
        Order {videoCount} {videoType === "branded" ? "Branded" : "Non-Branded"} Video{videoCount > 1 ? "s" : ""}
      </Link>

      <p className="text-center text-gray-500 text-sm mt-4">
        Need more? <Link href="/contact" className="text-cyan-400 hover:underline">Contact us for custom packages</Link>
      </p>
    </div>
  )
}

