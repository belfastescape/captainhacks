"use client"

import { MatrixBackground } from "@/components/matrix-background"
import { Navigation } from "@/components/navigation"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { AnimatedSection } from "@/components/animated-section"
import { CheckCircle, TrendingUp, Users, Zap, AlertTriangle, Target, Play, BarChart3, Eye, Heart } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const benefits = [
  {
    benefit: "Faster Discoverability",
    description: "Short videos are favored in \"For You\" and \"Explore\" feeds, exposing your business to new local audiences.",
    dataPoint: "Videos under 90 seconds have a 50% viewer retention rate.",
    icon: TrendingUp,
  },
  {
    benefit: "Better Conversion at Low Cost",
    description: "Video builds trust and drives purchases. You don't need a big budget; a smartphone is often enough.",
    dataPoint: "93% of marketers say short-form videos help them acquire new customers.",
    icon: Target,
  },
  {
    benefit: "Authenticity Builds Trust",
    description: "Raw, behind-the-scenes content resonates with audiences who prefer relatable brands over polished ads.",
    dataPoint: "69% of consumers value authenticity over high-quality production in marketing videos.",
    icon: Users,
  },
]

const platforms = [
  { name: "TikTok", icon: "📱", color: "cyan", reach: "1B+ users", bestFor: "Discovery & viral potential" },
  { name: "Instagram Reels", icon: "📷", color: "pink", reach: "2B+ users", bestFor: "Visual brands & lifestyle" },
  { name: "YouTube Shorts", icon: "▶️", color: "red", reach: "2.5B+ users", bestFor: "Long-term SEO value" },
  { name: "Facebook Reels", icon: "👍", color: "blue", reach: "3B+ users", bestFor: "Local businesses & older demos" },
]

const stats = [
  { number: "73%", label: "Prefer video to learn about products", icon: Eye },
  { number: "91%", label: "Of businesses use video marketing", icon: BarChart3 },
  { number: "50%", label: "Viewer retention under 90 seconds", icon: Play },
  { number: "93%", label: "Acquire customers via short video", icon: Heart },
]

const quickTips = [
  {
    title: "Hook Viewers in 1–3 Seconds",
    description: "Start with a bold claim, a visually interesting shot, or a direct question. The first 3 seconds determine if viewers keep watching.",
    icon: "⚡",
    example: "\"Wait, you can get 50% off?\" or \"This changed my business...\"",
  },
  {
    title: "Keep It Concise",
    description: "The sweet spot for most platforms is 15–60 seconds. Videos in this range are proven to hold viewer attention and drive action.",
    icon: "⏱️",
    example: "15-30 sec for attention, 30-60 sec for explanation + CTA",
  },
  {
    title: "Add Captions and Text Overlays",
    description: "85% watch on Facebook without sound, 80% on LinkedIn. Captions make your content accessible and algorithm-friendly.",
    icon: "💬",
    example: "Use large, readable text. Highlight key phrases in color.",
  },
  {
    title: "Include a Single, Clear Call to Action",
    description: "Tell viewers exactly what to do next. Confusion kills conversions. One clear action performs better than multiple options.",
    icon: "🎯",
    example: "\"DM us DEAL\" or \"Show this video for 10% off\"",
  },
  {
    title: "Post Consistently",
    description: "Algorithms favor active accounts. Regular posting (3-5x/week minimum) keeps you top-of-mind and compounds your reach over time.",
    icon: "📅",
    example: "Set a schedule: Mon/Wed/Fri or Daily at peak times",
  },
]

const videoTypes = [
  { type: "Behind-the-Scenes", engagement: "High", difficulty: "Easy", example: "Show how you make/prepare products" },
  { type: "Customer Testimonials", engagement: "Very High", difficulty: "Medium", example: "Real customers sharing results" },
  { type: "Product Demos", engagement: "High", difficulty: "Easy", example: "Quick features & benefits showcase" },
  { type: "Problem/Solution", engagement: "Very High", difficulty: "Medium", example: "Identify pain point → show your fix" },
  { type: "Before/After", engagement: "Very High", difficulty: "Easy", example: "Visual transformation stories" },
  { type: "Educational Tips", engagement: "Medium", difficulty: "Easy", example: "Quick how-tos related to your niche" },
]

export function WillItWorkClient() {
  const prefersReducedMotion = useReducedMotion()
  const [activeTab, setActiveTab] = useState<"benefits" | "platforms">("benefits")

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"
      >
        Skip to main content
      </a>

      <Navigation />
      <MatrixBackground opacity={0.15} />

      <main id="main-content">
        {/* Hero Section */}
        <section className="min-h-screen relative z-10 pt-32 px-4 sm:px-6 md:px-[8%] bg-black flex items-center">
          <div className="max-w-6xl mx-auto w-full">
            <AnimatedSection animation={prefersReducedMotion ? "none" : "slideIn"}>
              <div className="inline-block bg-cyan-400/10 border border-cyan-400 rounded-full px-4 py-2 mb-6">
                <span className="text-cyan-400 font-mono text-sm uppercase tracking-wider">Evidence-Based Guide</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-mono mb-8 leading-tight">
                <span className="text-white">DO SHORT VIDEOS</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent animate-glitch">
                  ACTUALLY WORK?
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation={prefersReducedMotion ? "none" : "float"} className="mb-12">
              <div className="bg-gradient-to-r from-cyan-500/10 to-pink-500/10 border-l-4 border-cyan-400 p-6 md:p-8 mb-8">
                <p className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  Short answer: <span className="text-pink-500">YES</span> — when done right.
                </p>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  A data-backed guide for small business owners on TikTok, Instagram Reels, and YouTube Shorts.
                </p>
              </div>

              {/* Key Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, idx) => {
                  const Icon = stat.icon
                  return (
                    <div
                      key={idx}
                      className="bg-black border-2 border-gray-700 hover:border-cyan-400 p-4 md:p-6 text-center transition-all duration-300 group"
                    >
                      <Icon className="w-8 h-8 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                      <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2 font-mono">{stat.number}</div>
                      <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
                    </div>
                  )
                })}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Why Videos Work Section */}
        <section className="relative z-10 py-24 md:py-32 px-4 sm:px-6 md:px-[8%] bg-gray-950">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation={prefersReducedMotion ? "none" : "slideIn"}>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-cyan-400 font-mono before:content-['//_'] before:text-gray-400 before:mr-4">
                WHY SHORT VIDEOS DOMINATE
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-3xl">
                In 2025, short-form video isn't optional—it's the primary way consumers discover, research, and decide
                to buy.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <AnimatedSection
                animation={prefersReducedMotion ? "none" : "slideIn"}
                className="bg-black border-2 border-cyan-400/30 p-6 md:p-8 rounded-lg hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] group"
              >
                <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-12 h-12 md:w-16 md:h-16" />
                </div>
                <h3 className="text-xl md:text-2xl font-mono text-white mb-4 uppercase">
                  Consumers Prefer Video
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-base">
                  People overwhelmingly choose video when researching products. It's fast, visual, and builds trust
                  faster than text or images.
                </p>
                <div className="bg-cyan-400/10 border-l-4 border-cyan-400 p-4">
                  <p className="text-cyan-400 font-bold text-xl md:text-2xl">73%</p>
                  <p className="text-gray-400 text-xs md:text-sm">prefer short videos to learn about products</p>
                </div>
              </AnimatedSection>

              <AnimatedSection
                animation={prefersReducedMotion ? "none" : "slideIn"}
                className="bg-black border-2 border-pink-500/30 p-6 md:p-8 rounded-lg hover:border-pink-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,0,128,0.2)] group"
                style={{ animationDelay: "0.15s" }}
              >
                <div className="text-pink-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-12 h-12 md:w-16 md:h-16" />
                </div>
                <h3 className="text-xl md:text-2xl font-mono text-white mb-4 uppercase">Highest ROI Format</h3>
                <p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-base">
                  Short videos deliver better returns than any other content type. Businesses that don't use video are
                  losing market share.
                </p>
                <div className="bg-pink-500/10 border-l-4 border-pink-500 p-4">
                  <p className="text-pink-500 font-bold text-xl md:text-2xl">91%</p>
                  <p className="text-gray-400 text-xs md:text-sm">of businesses use video as marketing tool in 2025</p>
                </div>
              </AnimatedSection>

              <AnimatedSection
                animation={prefersReducedMotion ? "none" : "slideIn"}
                className="bg-black border-2 border-cyan-400/30 p-6 md:p-8 rounded-lg hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] group"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-12 h-12 md:w-16 md:h-16" />
                </div>
                <h3 className="text-xl md:text-2xl font-mono text-white mb-4 uppercase">Algorithmic Amplification</h3>
                <p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-base">
                  Platforms reward engaging videos with organic reach. One great video can reach thousands without ad
                  spend.
                </p>
                <div className="bg-cyan-400/10 border-l-4 border-cyan-400 p-4">
                  <p className="text-cyan-400 font-bold text-xl md:text-2xl">50%</p>
                  <p className="text-gray-400 text-xs md:text-sm">retention rate for videos under 90 seconds</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Platform Comparison */}
        <section className="relative z-10 py-24 md:py-32 px-4 sm:px-6 md:px-[8%] bg-black">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation={prefersReducedMotion ? "none" : "slideIn"}>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-pink-500 font-mono before:content-['//_'] before:text-gray-400 before:mr-4">
                WHERE TO POST YOUR VIDEOS
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-3xl">
                Each platform has unique strengths. The smartest strategy? Use multiple platforms to reduce risk.
              </p>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {platforms.map((platform, idx) => (
                <AnimatedSection
                  key={idx}
                  animation={prefersReducedMotion ? "none" : "slideIn"}
                  className="bg-gray-950 border-2 border-gray-700 hover:border-pink-500 p-6 rounded-lg transition-all duration-300 group"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{platform.icon}</div>
                  <h3 className="text-xl font-mono text-white mb-2 uppercase">{platform.name}</h3>
                  <p className="text-pink-500 font-bold mb-3">{platform.reach}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{platform.bestFor}</p>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection animation={prefersReducedMotion ? "none" : "pulse"} className="mt-12">
              <div className="bg-yellow-500/10 border-2 border-yellow-500 rounded-lg p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-10 h-10 text-yellow-500 flex-shrink-0 animate-pulse-slow" />
                  <div>
                    <h3 className="text-xl md:text-2xl font-mono text-yellow-500 mb-3 uppercase">
                      ⚠️ Platform Diversification
                    </h3>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                      Don't put all your eggs in one basket. Algorithm changes and regulations can kill your reach
                      overnight. <span className="text-white font-bold">Build an email list</span> and post across
                      multiple platforms to protect your business.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Tab Section - Benefits vs Types */}
        <section className="relative z-10 py-24 md:py-32 px-4 sm:px-6 md:px-[8%] bg-gray-950">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation={prefersReducedMotion ? "none" : "slideIn"}>
              <h2 className="text-4xl md:text-6xl font-bold mb-12 text-cyan-400 font-mono before:content-['//_'] before:text-gray-400 before:mr-4">
                MAXIMIZE YOUR RESULTS
              </h2>

              {/* Tab Buttons */}
              <div className="flex flex-wrap gap-4 mb-12">
                <button
                  onClick={() => setActiveTab("benefits")}
                  className={`px-6 md:px-8 py-3 md:py-4 font-mono text-base md:text-lg uppercase tracking-wider border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                    activeTab === "benefits"
                      ? "border-cyan-400 bg-cyan-400 text-black"
                      : "border-gray-700 bg-transparent text-gray-400 hover:border-cyan-400 hover:text-cyan-400"
                  }`}
                >
                  Real Benefits
                </button>
                <button
                  onClick={() => setActiveTab("platforms")}
                  className={`px-6 md:px-8 py-3 md:py-4 font-mono text-base md:text-lg uppercase tracking-wider border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400 ${
                    activeTab === "platforms"
                      ? "border-pink-500 bg-pink-500 text-black"
                      : "border-gray-700 bg-transparent text-gray-400 hover:border-pink-500 hover:text-pink-500"
                  }`}
                >
                  Video Types
                </button>
              </div>
            </AnimatedSection>

            {/* Benefits Tab */}
            {activeTab === "benefits" && (
              <div className="space-y-6 animate-fade-in">
                {benefits.map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={idx}
                      className="bg-black border-2 border-gray-700 hover:border-cyan-400 transition-all duration-300 p-6 md:p-8 rounded-lg group"
                    >
                      <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                          <Icon className="w-12 h-12" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-mono text-cyan-400 mb-3 uppercase">{item.benefit}</h3>
                          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4">{item.description}</p>
                          <div className="bg-cyan-400/10 border-l-4 border-cyan-400 p-4">
                            <p className="text-cyan-400 font-mono flex items-center gap-2">
                              <CheckCircle className="w-5 h-5" />
                              {item.dataPoint}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}

            {/* Video Types Tab */}
            {activeTab === "platforms" && (
              <div className="animate-fade-in">
                <p className="text-gray-400 text-lg mb-8">
                  Not all videos are created equal. Here are the highest-performing formats for small businesses:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-black rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-gray-800/80">
                        <th className="p-4 text-left text-cyan-400 font-mono text-sm md:text-base">Video Type</th>
                        <th className="p-4 text-center text-cyan-400 font-mono text-sm md:text-base">Engagement</th>
                        <th className="p-4 text-center text-cyan-400 font-mono text-sm md:text-base">Difficulty</th>
                        <th className="p-4 text-left text-cyan-400 font-mono text-sm md:text-base">Example</th>
                      </tr>
                    </thead>
                    <tbody>
                      {videoTypes.map((type, idx) => (
                        <tr
                          key={idx}
                          className="border-t border-gray-800 hover:bg-gray-900/50 transition-colors"
                        >
                          <td className="p-4 font-semibold text-white text-sm md:text-base">{type.type}</td>
                          <td className="p-4 text-center">
                            <span
                              className={`inline-block px-3 py-1 rounded font-mono text-xs ${
                                type.engagement === "Very High"
                                  ? "bg-pink-500/20 text-pink-500"
                                  : type.engagement === "High"
                                    ? "bg-cyan-400/20 text-cyan-400"
                                    : "bg-gray-700 text-gray-300"
                              }`}
                            >
                              {type.engagement}
                            </span>
                          </td>
                          <td className="p-4 text-center">
                            <span
                              className={`inline-block px-3 py-1 rounded font-mono text-xs ${
                                type.difficulty === "Easy"
                                  ? "bg-green-500/20 text-green-400"
                                  : "bg-yellow-500/20 text-yellow-400"
                              }`}
                            >
                              {type.difficulty}
                            </span>
                          </td>
                          <td className="p-4 text-gray-400 text-sm">{type.example}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Quick Tips Section */}
        <section className="relative z-10 py-24 md:py-32 px-4 sm:px-6 md:px-[8%] bg-black">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation={prefersReducedMotion ? "none" : "slideIn"}>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-pink-500 font-mono before:content-['//_'] before:text-gray-400 before:mr-4">
                5 TIPS THAT ACTUALLY WORK
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-3xl">
                Forget the fluff. These are the only rules that matter for small business video success.
              </p>
            </AnimatedSection>

            <div className="space-y-6">
              {quickTips.map((tip, idx) => (
                <AnimatedSection
                  key={idx}
                  animation={prefersReducedMotion ? "none" : "slideIn"}
                  className="bg-gray-950 border-2 border-gray-700 hover:border-pink-500 transition-all duration-300 p-6 md:p-8 rounded-lg group"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex flex-col sm:flex-row gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-pink-500/10 border-2 border-pink-500 rounded-lg flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                        {tip.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-pink-500 font-mono text-sm">TIP {String(idx + 1).padStart(2, "0")}</span>
                        <div className="h-px flex-1 bg-pink-500/30"></div>
                      </div>
                      <h3 className="text-xl md:text-2xl font-mono text-white mb-3 uppercase">{tip.title}</h3>
                      <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4">{tip.description}</p>
                      <div className="bg-pink-500/10 border-l-4 border-pink-500 p-4">
                        <p className="text-pink-400 font-mono text-sm">
                          <span className="text-gray-500">Example:</span> {tip.example}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 py-24 md:py-32 px-4 sm:px-6 md:px-[8%] bg-gray-950">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation={prefersReducedMotion ? "none" : "pulse"}>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 font-mono">
                <span className="text-white">THE DATA IS CLEAR.</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                  WILL YOU ACT ON IT?
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
                Short videos work. The question isn't IF they'll help your business—it's WHEN you'll start using them.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-12">
                <Link
                  href="/how-it-works"
                  className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-6 bg-transparent border-2 border-cyan-400 text-cyan-400 font-mono text-base md:text-lg uppercase tracking-widest relative overflow-hidden hover:text-black transition-colors duration-300 before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-cyan-400 before:transition-all before:duration-300 before:-z-10 hover:before:left-0 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-950 text-center"
                >
                  See How It Works
                </Link>
                <Link
                  href="/why-choose-us"
                  className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-6 bg-transparent border-2 border-pink-500 text-pink-500 font-mono text-base md:text-lg uppercase tracking-widest relative overflow-hidden hover:text-black transition-colors duration-300 before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-pink-500 before:transition-all before:duration-300 before:-z-10 hover:before:left-0 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-gray-950 text-center"
                >
                  Why Captain Hacks
                </Link>
              </div>

              <div className="bg-black border-2 border-cyan-400 rounded-lg p-6 md:p-10">
                <div className="mb-6">
                  <p className="text-gray-300 text-lg md:text-xl mb-4">
                    <span className="text-cyan-400 font-mono text-2xl">📊</span> Every day without video is a day your
                    competitors are pulling ahead.
                  </p>
                  <p className="text-gray-400 text-base">
                    Let Captain Hacks create professional, scroll-stopping videos for your business. No filming. No
                    editing. Just results.
                  </p>
                </div>
                <Link
                  href="/brandedcaptainhacksvideo"
                  className="inline-block bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white font-mono font-bold px-8 md:px-12 py-4 md:py-5 rounded-lg transition-all duration-300 hover:scale-105 uppercase tracking-wider text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  Start Creating Videos - From $49
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
    </>
  )
}
