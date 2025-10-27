"use client"

import { useState, useEffect } from "react"

const sections = [
  { id: "hero", label: "Start" },
  { id: "process", label: "Process" },
  { id: "styles", label: "Styles" },
  { id: "examples", label: "Examples" },
  { id: "requirements", label: "Requirements" },
  { id: "scenarios", label: "Ideas" },
  { id: "pricing", label: "Pricing" },
  { id: "faq", label: "FAQ" },
  { id: "cta", label: "Order" },
]

export function ProgressIndicator() {
  const [activeSection, setActiveSection] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero
      setIsVisible(window.scrollY > 400)

      // Find active section
      const sectionElements = sections.map((s) => document.getElementById(s.id))
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i]
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(i)
          break
        }
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!isVisible) return null

  return (
    <div className="hidden lg:block fixed left-6 top-1/2 -translate-y-1/2 z-30">
      <div className="flex flex-col gap-3">
        {sections.map((section, idx) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group relative flex items-center gap-3 focus:outline-none"
            aria-label={`Go to ${section.label}`}
          >
            {/* Dot */}
            <div
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                idx === activeSection
                  ? "bg-cyan-400 border-cyan-400 scale-125"
                  : "bg-transparent border-gray-600 hover:border-cyan-400"
              }`}
            />

            {/* Label (appears on hover) */}
            <span
              className={`absolute left-6 whitespace-nowrap bg-black border border-gray-700 px-3 py-1 rounded font-mono text-sm transition-all duration-300 ${
                idx === activeSection
                  ? "text-cyan-400 opacity-100 translate-x-0"
                  : "text-gray-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
              }`}
            >
              {section.label}
            </span>

            {/* Connecting line */}
            {idx < sections.length - 1 && (
              <div
                className={`absolute top-6 left-1 w-0.5 h-3 transition-colors duration-300 ${
                  idx < activeSection ? "bg-cyan-400" : "bg-gray-700"
                }`}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

