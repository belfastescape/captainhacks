"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronUp, X } from "lucide-react"

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-400 border border-gray-700"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>

      {/* Expanded Options */}
      {isExpanded && (
        <div className="flex flex-col gap-2 animate-fade-in">
          <Link
            href="/brandedcaptainhacksvideo"
            className="bg-cyan-500 hover:bg-cyan-600 text-black font-mono font-bold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            Branded Video
          </Link>
          <Link
            href="/nonbrandedcaptainhacksvideo"
            className="bg-pink-500 hover:bg-pink-600 text-black font-mono font-bold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            Non-Branded Video
          </Link>
        </div>
      )}

      {/* Main CTA Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white font-mono font-bold px-6 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        aria-label={isExpanded ? "Close order options" : "Show order options"}
        aria-expanded={isExpanded}
      >
        {isExpanded ? (
          <>
            <X className="w-5 h-5" />
            <span className="text-sm">Close</span>
          </>
        ) : (
          <span className="text-sm">Order Now</span>
        )}
      </button>
    </div>
  )
}

