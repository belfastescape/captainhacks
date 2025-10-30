"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { CollapsibleFAQ } from "@/components/collapsible-faq"
import { ArrowRight, Clock, Timer, TrendingUp, Zap, CheckCircle2, DollarSign, Target, AlertCircle, Star, Shield, Calendar, Sparkles, Users, ShoppingCart, Eye, Play } from "lucide-react"

const flashSaleFAQs = [
  {
    question: "How fast can you really deliver a flash-sale video?",
    answer: "24 hours. Sometimes faster. We know your sale doesn't wait, so neither do we. Order today, post tomorrow."
  },
  {
    question: "What makes a flash-sale video different from a regular promo?",
    answer: "Countdown timers, urgency copy, FOMO triggers, and bold CTAs. Everything is designed to make people feel like they'll miss out if they don't act NOW."
  },
  {
    question: "Can I use the same video for multiple platforms?",
    answer: "Yes! We deliver in vertical (Stories/Reels), square (Feed), and landscape (YouTube/Website) formats. One video, everywhere."
  },
  {
    question: "What if my sale is in 12 hours?",
    answer: "Contact us directly. Rush orders are usually possible for an extra fee. We've delivered videos in as little as 4 hours before."
  },
  {
    question: "Do you write the script or do I?",
    answer: "We write it. Just tell us your offer ('50% off,' 'Ends Sunday'), your business type, and your deadline. We'll handle the rest."
  },
  {
    question: "Can I get a revision if something needs tweaking?",
    answer: "One round of minor tweaks is included. We get it right 99% of the time on the first attempt, but we've got you covered if adjustments are needed."
  },
  {
    question: "Will this work for my industry?",
    answer: "If you have customers and a limited-time offer, yes. We've made flash-sale videos for cafés, gyms, boutiques, e-commerce stores, salons, and more."
  },
  {
    question: "What do I need to provide?",
    answer: "Your offer details, deadline, business name, and preferred character/voice style. That's it. We handle everything else."
  }
]

export function FlashSalesClient() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return
    
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ"
    const fontSize = 14
    const columns = canvas.width / fontSize
    const drops = Array(Math.floor(columns)).fill(1)

    const drawMatrix = () => {
      ctx.fillStyle = "rgba(10, 10, 10, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "#00f0ff"
      ctx.font = fontSize + "px monospace"

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(drawMatrix, 33)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener("resize", handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ opacity: 0.15 }}
      />
      
      <div className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
        <Navigation />

        {/* Hero Section */}
        <section className="px-6 md:px-[8%] pt-32 pb-20">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-3 bg-gradient-to-r from-red-500/20 to-pink-500/20 border-2 border-red-500/50 rounded-full animate-pulse">
              <span className="text-red-400 font-mono text-sm font-bold">⚡ URGENT • 24-HOUR DELIVERY</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-red-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent leading-tight animate-in fade-in duration-700">
              Flash-Sale Videos That Sell Fast
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
              Create urgency. <span className="text-red-400 font-black">Boost sales.</span> Move stock.
            </p>
            
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              Got a limited-time offer, weekend deal, or product launch?<br/>
              Captain Hacks makes Flash-Sale Videos that stop the scroll and spark instant action — delivered in 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/order-now">
                <Button 
                  size="lg" 
                  className="text-lg px-12 py-8 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold uppercase tracking-widest shadow-[0_0_40px_rgba(239,68,68,0.3)] hover:shadow-[0_0_60px_rgba(239,68,68,0.5)] transition-all duration-300 hover:scale-105"
                >
                  Order My Flash-Sale Video Now <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Flash-Sale Videos Work Section */}
        <section className="px-6 md:px-[8%] py-20 bg-black/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full">
                <span className="text-cyan-400 font-mono text-xs uppercase tracking-wider">The Science</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                ⏱️ Why Flash-Sale Videos Work
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                When people see a deadline, they <span className="text-red-400 font-bold">act</span>.
              </p>
              <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
                Our videos use countdown visuals, bold text, and FOMO messaging to turn browsers into buyers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                {
                  icon: Timer,
                  title: "Countdown timers",
                  description: "create urgency",
                  color: "red"
                },
                {
                  icon: AlertCircle,
                  title: '"Ends Soon" copy',
                  description: "sparks instant clicks",
                  color: "pink"
                },
                {
                  icon: Target,
                  title: "Strong CTA",
                  description: '"Shop Now," "Book Today," "Claim Before Midnight"',
                  color: "cyan"
                },
                {
                  icon: Sparkles,
                  title: "Bold colours and animation",
                  description: "perfect for mobile feeds",
                  color: "pink"
                }
              ].map((item, idx) => (
                <div key={idx} className={
                  item.color === 'red' 
                    ? 'bg-gradient-to-br from-red-900/30 to-black border-2 border-red-500/30 rounded-xl p-6 hover:border-red-400/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(239,68,68,0.2)]'
                    : item.color === 'cyan'
                    ? 'bg-gradient-to-br from-cyan-900/30 to-black border-2 border-cyan-500/30 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]'
                    : 'bg-gradient-to-br from-pink-900/30 to-black border-2 border-pink-500/30 rounded-xl p-6 hover:border-pink-400/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(236,72,153,0.2)]'
                }>
                  <div className={
                    item.color === 'red'
                      ? 'p-3 bg-red-500/20 rounded-lg inline-block mb-4'
                      : item.color === 'cyan'
                      ? 'p-3 bg-cyan-500/20 rounded-lg inline-block mb-4'
                      : 'p-3 bg-pink-500/20 rounded-lg inline-block mb-4'
                  }>
                    <item.icon className={
                      item.color === 'red'
                        ? 'w-8 h-8 text-red-400'
                        : item.color === 'cyan'
                        ? 'w-8 h-8 text-cyan-400'
                        : 'w-8 h-8 text-pink-400'
                    } />
                  </div>
                  <h3 className={
                    item.color === 'red'
                      ? 'text-lg font-bold text-red-400 mb-3'
                      : item.color === 'cyan'
                      ? 'text-lg font-bold text-cyan-400 mb-3'
                      : 'text-lg font-bold text-pink-400 mb-3'
                  }>{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-cyan-900/30 to-pink-900/30 border-2 border-cyan-400/50 rounded-2xl p-8 text-center">
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                Each video is crafted to make viewers feel like they'll <span className="text-red-400 font-bold">miss out</span> if they don't act now.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="px-6 md:px-[8%] py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-center bg-gradient-to-r from-red-400 to-cyan-400 bg-clip-text text-transparent">
              ⚡ Static Post vs Flash-Sale Video
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Static Post */}
              <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-700 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <div className="inline-block px-4 py-2 bg-gray-700 rounded-full mb-4">
                    <span className="text-gray-400 font-mono text-sm">STATIC IMAGE POST</span>
                  </div>
                </div>
                <ul className="space-y-4">
                  {[
                    { icon: "❌", text: "Easy to scroll past" },
                    { icon: "❌", text: "No sense of urgency" },
                    { icon: "❌", text: "Less engaging" },
                    { icon: "❌", text: "Lower click-through rate" },
                    { icon: "❌", text: "Forgettable" }
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-gray-400 text-lg">{item.text}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 p-4 bg-gray-800/50 rounded-lg text-center">
                  <p className="text-gray-500 text-sm font-mono">Average CTR: ~0.5%</p>
                </div>
              </div>

              {/* Flash-Sale Video */}
              <div className="bg-gradient-to-br from-red-900/30 to-pink-900/30 border-2 border-red-500/50 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/20 rounded-full blur-3xl"></div>
                <div className="relative">
                  <div className="text-center mb-6">
                    <div className="inline-block px-4 py-2 bg-red-500/30 border border-red-500/50 rounded-full mb-4 animate-pulse">
                      <span className="text-red-400 font-mono text-sm font-bold">FLASH-SALE VIDEO</span>
                    </div>
                  </div>
                  <ul className="space-y-4">
                    {[
                      { icon: "✅", text: "Stops the scroll instantly" },
                      { icon: "✅", text: "Creates urgency & FOMO" },
                      { icon: "✅", text: "Highly engaging motion" },
                      { icon: "✅", text: "3-5x higher CTR" },
                      { icon: "✅", text: "Memorable & shareable" }
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <span className="text-2xl">{item.icon}</span>
                        <span className="text-white text-lg font-semibold">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-center">
                    <p className="text-red-400 text-sm font-mono font-bold">Average CTR: ~2-3%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-2xl text-white font-bold mb-2">
                The choice is obvious.
              </p>
              <p className="text-lg text-gray-400">
                If you want sales, you need a video that creates urgency.
              </p>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="px-6 md:px-[8%] py-20 bg-black/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-4 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full">
                <span className="text-red-400 font-mono text-xs uppercase tracking-wider">Proven Results</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                📊 The Numbers Don't Lie
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Urgency-based marketing works. Here's why flash-sale videos outperform static posts:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-red-900/30 to-black border-2 border-red-500/30 rounded-xl p-8 text-center hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)]">
                <Eye className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <div className="text-5xl font-black text-red-400 mb-2">3.5x</div>
                <div className="text-gray-400 text-lg">Higher engagement than static images</div>
              </div>

              <div className="bg-gradient-to-br from-pink-900/30 to-black border-2 border-pink-500/30 rounded-xl p-8 text-center hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]">
                <ShoppingCart className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <div className="text-5xl font-black text-pink-400 mb-2">68%</div>
                <div className="text-gray-400 text-lg">of consumers act faster with countdown timers</div>
              </div>

              <div className="bg-gradient-to-br from-cyan-900/30 to-black border-2 border-cyan-500/30 rounded-xl p-8 text-center hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]">
                <TrendingUp className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <div className="text-5xl font-black text-cyan-400 mb-2">2.4x</div>
                <div className="text-gray-400 text-lg">More clicks with urgency-based CTAs</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-900/20 to-pink-900/20 border-l-4 border-red-400 rounded-lg p-6 text-center">
              <p className="text-xl text-white font-semibold">
                Bottom line: <span className="text-red-400">Urgency = Action</span>. 
                Flash-sale videos turn "I'll think about it" into "I need this now."
              </p>
            </div>
          </div>
        </section>

        {/* Ideal for Small Businesses Section */}
        <section className="px-6 md:px-[8%] py-20 bg-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-center bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
              💼 Ideal for Small Businesses
            </h2>
            <p className="text-xl text-center text-gray-300 mb-12">
              Flash-Sale Videos are perfect for:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { icon: "☕", text: "Cafés running weekend specials" },
                { icon: "🛍️", text: "Retail stores clearing stock" },
                { icon: "💅", text: "Salons or gyms offering first-time deals" },
                { icon: "🛒", text: "E-commerce stores promoting 24-hour discounts" },
                { icon: "🏪", text: "Local services offering holiday promotions" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-gradient-to-r from-gray-900 to-black border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-4xl">{item.icon}</div>
                  <span className="text-gray-300 text-lg">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-pink-900/30 to-cyan-900/30 border-2 border-pink-400/50 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 text-pink-400/10 text-9xl font-black leading-none">"</div>
                <div className="relative">
                  <div className="flex gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                    "We posted our flash-sale video on Facebook and sold out by the end of the weekend."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-400 to-cyan-400 flex items-center justify-center text-white font-bold text-xl">
                      L
                    </div>
                    <div>
                      <p className="text-pink-400 font-bold">Leo</p>
                      <p className="text-gray-500 text-sm">Boutique Owner</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-900/30 to-pink-900/30 border-2 border-cyan-400/50 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 text-cyan-400/10 text-9xl font-black leading-none">"</div>
                <div className="relative">
                  <div className="flex gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                    "Posted at 9am, fully booked by 2pm. The countdown timer did exactly what it's supposed to do."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-pink-400 flex items-center justify-center text-white font-bold text-xl">
                      M
                    </div>
                    <div>
                      <p className="text-cyan-400 font-bold">Maria</p>
                      <p className="text-gray-500 text-sm">Hair Salon Owner</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-900/30 to-pink-900/30 border-2 border-red-400/50 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 text-red-400/10 text-9xl font-black leading-none">"</div>
                <div className="relative">
                  <div className="flex gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                    "Best investment I ever made. We moved 3 months of inventory in 48 hours."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-400 to-pink-400 flex items-center justify-center text-white font-bold text-xl">
                      J
                    </div>
                    <div>
                      <p className="text-red-400 font-bold">James</p>
                      <p className="text-gray-500 text-sm">Fitness Gear Store</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-900/30 to-red-900/30 border-2 border-cyan-400/50 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 text-cyan-400/10 text-9xl font-black leading-none">"</div>
                <div className="relative">
                  <div className="flex gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                    "Our Instagram engagement tripled. People were tagging friends like crazy."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-red-400 flex items-center justify-center text-white font-bold text-xl">
                      S
                    </div>
                    <div>
                      <p className="text-cyan-400 font-bold">Sophie</p>
                      <p className="text-gray-500 text-sm">Café Owner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="px-6 md:px-[8%] py-20 bg-black/50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-center bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              🧩 What You Get
            </h2>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-cyan-500/30 rounded-xl overflow-hidden mb-8">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left p-6 text-cyan-400 font-mono text-sm uppercase tracking-wider">Included</th>
                    <th className="text-left p-6 text-cyan-400 font-mono text-sm uppercase tracking-wider">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800 hover:bg-gray-900/50 transition-colors">
                    <td className="p-6 text-white font-semibold">Custom script & voice</td>
                    <td className="p-6 text-gray-400">Built around your exact offer and deadline</td>
                  </tr>
                  <tr className="border-b border-gray-800 hover:bg-gray-900/50 transition-colors">
                    <td className="p-6 text-white font-semibold">Captions + platform-ready formats</td>
                    <td className="p-6 text-gray-400">Vertical, square, or landscape</td>
                  </tr>
                  <tr className="border-b border-gray-800 hover:bg-gray-900/50 transition-colors">
                    <td className="p-6 text-white font-semibold">Fast 24-hour delivery</td>
                    <td className="p-6 text-gray-400">Your deal can go live the next day</td>
                  </tr>
                  <tr className="hover:bg-gray-900/50 transition-colors">
                    <td className="p-6 text-white font-semibold">One free revision</td>
                    <td className="p-6 text-gray-400">We'll tweak if you need changes</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-center bg-gradient-to-r from-red-900/30 to-pink-900/30 border-2 border-red-500/50 rounded-2xl p-8">
              <p className="text-3xl md:text-4xl font-black text-white mb-2">
                All for just <span className="text-red-400">from $39 USD</span> per video.
              </p>
            </div>

            <div className="text-center mt-8">
              <Link href="/order-now">
                <Button 
                  size="lg" 
                  className="text-lg px-12 py-8 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold uppercase tracking-widest shadow-[0_0_40px_rgba(239,68,68,0.3)] hover:shadow-[0_0_60px_rgba(239,68,68,0.5)] transition-all duration-300 hover:scale-105"
                >
                  Get My Flash-Sale Video <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="px-6 md:px-[8%] py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-center bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
              ⚙️ How It Works
            </h2>

            <div className="space-y-6 mb-12">
              {[
                {
                  step: "1",
                  title: 'Send us your offer',
                  description: '"30% off," "Ends Sunday," etc.'
                },
                {
                  step: "2",
                  title: "Pick your character",
                  description: "or let us choose the perfect tone."
                },
                {
                  step: "3",
                  title: "We deliver your video in 24 hours",
                  description: ""
                },
                {
                  step: "4",
                  title: "You post it. Sales roll in.",
                  description: ""
                }
              ].map((item) => (
                <div key={item.step} className="flex gap-6 items-start bg-gradient-to-r from-gray-900 to-black border border-pink-500/30 rounded-xl p-6 hover:border-pink-400/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center text-2xl font-black flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    {item.description && <p className="text-gray-400">— {item.description}</p>}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-2xl text-cyan-400 font-bold mb-4">It's that simple.</p>
            </div>
          </div>
        </section>

        {/* Example Uses Section */}
        <section className="px-6 md:px-[8%] py-20 bg-black/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-center bg-gradient-to-r from-red-400 to-cyan-400 bg-clip-text text-transparent">
              🔥 Example Uses
            </h2>

            <div className="space-y-6 mb-8">
              {[
                '"48-Hour Flash Sale — Everything 50% Off"',
                '"Final 24 Hours — Don\'t Miss Out!"',
                '"New Season Launch — Ends Sunday"',
                '"Weekend Deal: 2-for-1 Bookings"'
              ].map((example, idx) => (
                <div key={idx} className="bg-gradient-to-r from-red-900/20 to-pink-900/20 border-l-4 border-red-400 rounded-lg p-6">
                  <p className="text-xl text-white font-semibold">{example}</p>
                </div>
              ))}
            </div>

            <p className="text-xl text-center text-gray-300 leading-relaxed">
              We'll wrap your message in punchy visuals, energetic voiceover, and captions optimised for mobile.
            </p>
          </div>
        </section>

        {/* Tips Section */}
        <section className="px-6 md:px-[8%] py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-center bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              🧠 Tips for Maximum Impact
            </h2>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-cyan-500/30 rounded-xl p-8 mb-8">
              <ul className="space-y-4">
                {[
                  "Post your video 12–24 hours before your sale starts.",
                  "Run it on Instagram Stories, Reels, and Facebook Feed.",
                  "Pair it with a countdown sticker or website timer.",
                  'Send an email with "Last Chance" in the subject line and embed your video thumbnail.'
                ].map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-lg">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center bg-gradient-to-r from-pink-900/30 to-cyan-900/30 border-2 border-pink-400/50 rounded-2xl p-8">
              <p className="text-2xl text-white font-bold mb-2">
                The goal: make your offer feel <span className="text-pink-400">unmissable</span>.
              </p>
            </div>
          </div>
        </section>

        {/* Video Examples Section */}
        <section className="px-6 md:px-[8%] py-20 bg-black/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-4 px-4 py-2 bg-pink-500/20 border border-pink-500/30 rounded-full">
                <span className="text-pink-400 font-mono text-xs uppercase tracking-wider">See It In Action</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                🎬 Flash-Sale Video Examples
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                These are the kinds of videos that stop the scroll and make people click "Buy Now"
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Weekend Flash Sale - Real Video */}
              <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-pink-500/30 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 hover:border-pink-400/70 hover:shadow-[0_0_30px_rgba(236,72,153,0.2)] group">
                <div className="relative aspect-[9/16] bg-black">
                  <video
                    className="w-full h-full object-cover"
                    loop
                    muted
                    playsInline
                    preload="auto"
                    onMouseEnter={(e) => {
                      e.currentTarget.play().catch(err => console.log('Play failed:', err))
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause()
                      e.currentTarget.currentTime = 0
                    }}
                  >
                    <source src="/videos/Chilled%20Bliss%20Promo%20No%20logo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/0 transition-all duration-300 flex items-center justify-center pointer-events-none">
                    <Play className="w-16 h-16 text-pink-400 group-hover:opacity-0 transition-opacity duration-300" />
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-pink-400 text-lg mb-2">Weekend Flash Sale</h4>
                  <p className="text-gray-400 text-sm">Buy 2 scoops, get 1 free. This Weekend Only</p>
                </div>
              </div>

              {/* New Product Launch - Placeholder */}
              <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-pink-500/30 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 hover:border-pink-400/70 hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]">
                <div className="relative aspect-[9/16] bg-gradient-to-br from-red-900/30 to-pink-900/30 flex items-center justify-center">
                  <div className="text-8xl">🚀</div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="w-16 h-16 text-white opacity-80" />
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-pink-400 text-lg mb-2">New Product Launch</h4>
                  <p className="text-gray-400 text-sm">First 24 hours special pricing</p>
                </div>
              </div>

              {/* Clearance Event - Placeholder */}
              <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-pink-500/30 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 hover:border-pink-400/70 hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]">
                <div className="relative aspect-[9/16] bg-gradient-to-br from-red-900/30 to-pink-900/30 flex items-center justify-center">
                  <div className="text-8xl">🔥</div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="w-16 h-16 text-white opacity-80" />
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-pink-400 text-lg mb-2">Clearance Event</h4>
                  <p className="text-gray-400 text-sm">Limited stock - ends midnight</p>
                </div>
              </div>
            </div>

            <div className="text-center bg-gradient-to-r from-cyan-900/30 to-pink-900/30 border-2 border-cyan-400/50 rounded-2xl p-8">
              <p className="text-xl text-white font-semibold mb-4">
                Want to see our full portfolio?
              </p>
              <Link href="/order-now">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white font-bold"
                >
                  View More Examples <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 md:px-[8%] py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-4 px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full">
                <span className="text-cyan-400 font-mono text-xs uppercase tracking-wider">Got Questions?</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                ❓ Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Everything you need to know about flash-sale videos
              </p>
            </div>

            <CollapsibleFAQ faqs={flashSaleFAQs} />
          </div>
        </section>

        {/* Quick, Affordable, Effective Section */}
        <section className="px-6 md:px-[8%] py-20 bg-black/50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-center bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
              💬 Quick, Affordable, Effective
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-cyan-900/30 to-black border-2 border-cyan-500/30 rounded-xl p-8 text-center hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                <Zap className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">⚡ 24-hour turnaround</h3>
              </div>
              
              <div className="bg-gradient-to-br from-pink-900/30 to-black border-2 border-pink-500/30 rounded-xl p-8 text-center hover:border-pink-400/50 transition-all duration-300 hover:scale-105">
                <DollarSign className="w-16 h-16 text-pink-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-pink-400 mb-2">💸 Only from $39 USD per video</h3>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-900/30 to-black border-2 border-cyan-500/30 rounded-xl p-8 text-center hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                <TrendingUp className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">🎯 Designed to drive immediate clicks and conversions</h3>
              </div>
            </div>

            <div className="text-center bg-gradient-to-r from-red-900/30 to-pink-900/30 border-2 border-red-500/50 rounded-2xl p-8">
              <p className="text-2xl md:text-3xl text-white font-bold">
                Your flash sale won't wait — and neither should you.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="px-6 md:px-[8%] py-20 bg-gradient-to-b from-black via-gray-900 to-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-red-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
              🚀 Ready to turn urgency into sales?
            </h2>
            
            <p className="text-2xl text-gray-300 mb-12">
              Let's make your flash sale impossible to ignore.
            </p>

            <Link href="/order-now">
              <Button 
                size="lg" 
                className="text-lg px-12 py-8 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold uppercase tracking-widest shadow-[0_0_40px_rgba(239,68,68,0.3)] hover:shadow-[0_0_60px_rgba(239,68,68,0.5)] transition-all duration-300 hover:scale-105"
              >
                Order My Video Now <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </Link>

            <p className="text-sm text-gray-500 mt-12 font-mono">
              ⚡ 24-hour delivery • 💸 from $39 per video • 🎯 Results-driven
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 md:px-[8%] py-12 bg-black border-t border-gray-800">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-500 font-mono text-sm">
              © {new Date().getFullYear()} Captain Hacks. Hacking deals since day one.
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}

