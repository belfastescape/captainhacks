"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/why-choose-us", label: "Why Choose Us" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/will-it-work", label: "Will It Work?" },
  { href: "/brandedcaptainhacksvideo", label: "Branded Videos" },
  { href: "/nonbrandedcaptainhacksvideo", label: "Non-Branded Videos" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md border-b border-gray-800" : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 group focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black rounded-lg px-2 py-1"
          >
            <span className="text-2xl md:text-3xl font-bold font-mono bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-pink-400 transition-all duration-300">
              Captain Hacks
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 lg:px-4 py-2 text-sm lg:text-base text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              size="sm"
              className="ml-4 bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-black"
            >
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800 animate-in slide-in-from-top duration-200">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-base text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              size="sm"
              className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white font-semibold px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}

