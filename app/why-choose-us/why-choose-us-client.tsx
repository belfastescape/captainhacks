"use client"

import { MatrixBackground } from "@/components/matrix-background"
import { AnimatedSection } from "@/components/animated-section"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { painPoints, benefits, comparisonData } from "@/lib/why-choose-us-data"
import {
  Clock,
  DollarSign,
  Zap,
  TrendingDown,
  Users,
  Target,
  Rocket,
  Palette,
  MessageSquare,
  Sparkles,
  Shield,
  Check,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { Suspense } from "react"

const iconMap = {
  Clock,
  DollarSign,
  Zap,
  TrendingDown,
  Users,
  Target,
  Rocket,
  Palette,
  MessageSquare,
  Sparkles,
  Shield,
}

function PageSkeleton() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="animate-pulse">
        <div className="h-16 w-64 bg-gray-800 rounded mb-4"></div>
        <div className="h-8 w-96 bg-gray-800 rounded"></div>
      </div>
    </div>
  )
}

export function WhyChooseUsClient() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <Suspense fallback={<PageSkeleton />}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"
      >
        Skip to main content
      </a>

      <Navigation />

      <main id="main-content" className="min-h-screen bg-black text-white overflow-hidden">
        <MatrixBackground opacity={0.15} />

        {/* Hero Section */}
        <section className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-6xl mx-auto text-center">
            <AnimatedSection animation={prefersReducedMotion ? "none" : "slideIn"}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-mono">
                <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
                  STOP
                </span>{" "}
                Wasting Time
                <br />
                <span className="bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
                  START
                </span>{" "}
                Creating
              </h1>
            </AnimatedSection>

            <AnimatedSection animation={prefersReducedMotion ? "none" : "float"} className="mb-12">
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Professional video editing for small businesses who need quality content without the agency price tag
                or DIY headaches.
              </p>
            </AnimatedSection>

            <AnimatedSection animation={prefersReducedMotion ? "none" : "pulse"}>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white font-bold text-lg px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
              >
                <Link href="#cta">
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="relative z-10 py-20 px-4" aria-labelledby="pain-points-heading">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation={prefersReducedMotion ? "none" : "slideIn"}>
              <h2 id="pain-points-heading" className="text-4xl md:text-5xl font-bold text-center mb-4 font-mono">
                <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  The Problem
                </span>
              </h2>
              <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
                You know video content is essential, but...
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {painPoints.map((point, index) => {
                const Icon = iconMap[point.icon as keyof typeof iconMap]
                return (
                  <AnimatedSection
                    key={index}
                    animation={prefersReducedMotion ? "none" : "slideIn"}
                    className="bg-gray-900/50 backdrop-blur-sm border border-red-500/30 rounded-lg p-6 hover:border-red-500/60 transition-all duration-300 hover:scale-105 focus-within:ring-2 focus-within:ring-red-500/50"
                  >
                    <article>
                      <div className="text-red-500 mb-4" aria-hidden="true">
                        <Icon className="w-12 h-12" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-red-400">{point.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{point.description}</p>
                    </article>
                  </AnimatedSection>
                )
              })}
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section
          className="relative z-10 py-20 px-4 bg-gradient-to-b from-black to-gray-900"
          aria-labelledby="solution-heading"
        >
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation={prefersReducedMotion ? "none" : "slideIn"}>
              <h2 id="solution-heading" className="text-4xl md:text-5xl font-bold text-center mb-4 font-mono">
                <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                  The Solution
                </span>
              </h2>
              <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
                Captain Hacks delivers professional video editing that fits your business
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = iconMap[benefit.icon as keyof typeof iconMap]
                return (
                  <AnimatedSection
                    key={index}
                    animation={prefersReducedMotion ? "none" : "float"}
                    className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-500/60 transition-all duration-300 hover:scale-105 focus-within:ring-2 focus-within:ring-cyan-500/50"
                  >
                    <article>
                      <div className="text-cyan-400 mb-4" aria-hidden="true">
                        <Icon className="w-12 h-12" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-cyan-400">{benefit.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                    </article>
                  </AnimatedSection>
                )
              })}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="relative z-10 py-20 px-4" aria-labelledby="comparison-heading">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation={prefersReducedMotion ? "none" : "slideIn"}>
              <h2 id="comparison-heading" className="text-4xl md:text-5xl font-bold text-center mb-16 font-mono">
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  How We Compare
                </span>
              </h2>
            </AnimatedSection>

            <AnimatedSection animation={prefersReducedMotion ? "none" : "slideIn"}>
              {/* Mobile: Card Layout */}
              <div className="md:hidden space-y-6">
                {comparisonData.map((row, index) => (
                  <div
                    key={index}
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-cyan-500/50 transition-colors"
                  >
                    <h3 className="text-lg font-bold text-cyan-400 mb-4 pb-3 border-b border-gray-800">
                      {row.feature}
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">DIY:</span>
                        <span className="text-gray-300 text-sm font-medium">{row.diy}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">Agency:</span>
                        <span className="text-gray-300 text-sm font-medium">{row.agency}</span>
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t border-gray-800">
                        <span className="text-cyan-400 text-sm font-bold">Captain Hacks:</span>
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-400" aria-hidden="true" />
                          <span className="text-cyan-400 font-semibold text-sm">{row.captainHacks}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop: Table Layout */}
              <div className="hidden md:block relative">
                {/* Scroll hint for mobile/tablet */}
                <div className="absolute -top-8 right-0 text-sm text-gray-500 md:hidden flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  <span>Scroll to see more</span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-gray-800/80">
                        <th
                          scope="col"
                          className="p-4 text-left text-gray-300 font-mono text-sm md:text-base sticky left-0 bg-gray-800/80 z-10"
                        >
                          Feature
                        </th>
                        <th scope="col" className="p-4 text-center text-gray-300 font-mono text-sm md:text-base">
                          DIY
                        </th>
                        <th scope="col" className="p-4 text-center text-gray-300 font-mono text-sm md:text-base">
                          Agency
                        </th>
                        <th
                          scope="col"
                          className="p-4 text-center text-cyan-400 font-mono font-bold text-sm md:text-base"
                        >
                          Captain Hacks
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row, index) => (
                        <tr
                          key={index}
                          className="border-t border-gray-800 hover:bg-gray-800/50 transition-colors focus-within:bg-gray-800/50"
                        >
                          <td className="p-4 font-semibold text-gray-200 text-sm md:text-base sticky left-0 bg-gray-900/50 backdrop-blur-sm">
                            {row.feature}
                          </td>
                          <td className="p-4 text-center text-gray-400 text-sm md:text-base">{row.diy}</td>
                          <td className="p-4 text-center text-gray-400 text-sm md:text-base">{row.agency}</td>
                          <td className="p-4 text-center text-cyan-400 font-semibold text-sm md:text-base">
                            <div className="flex items-center justify-center gap-2">
                              <Check className="w-5 h-5 text-green-400" aria-hidden="true" />
                              <span>{row.captainHacks}</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="cta"
          className="relative z-10 py-20 px-4 bg-gradient-to-t from-black to-gray-900"
          aria-labelledby="cta-heading"
        >
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation={prefersReducedMotion ? "none" : "pulse"}>
              <h2 id="cta-heading" className="text-4xl md:text-6xl font-bold mb-6 font-mono">
                <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Ready to Level Up?
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Join hundreds of small businesses creating pro-quality content without the hassle
              </p>

              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white font-bold text-lg px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105 mb-6 focus:outline-none focus:ring-4 focus:ring-pink-400/50"
              >
                <Link href="/contact">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
                </Link>
              </Button>

              <p className="text-sm text-gray-400 flex items-center justify-center gap-2 flex-wrap">
                <Shield className="w-5 h-5 text-green-400" aria-hidden="true" />
                <span>100% Money-Back Guarantee • No Credit Card Required</span>
              </p>
            </AnimatedSection>
          </div>
        </section>
      </main>
    </Suspense>
  )
}

