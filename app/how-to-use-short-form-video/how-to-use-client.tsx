"use client"

import { MatrixBackground } from "@/components/matrix-background"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Target, Eye, TrendingUp, Video, DollarSign, CheckCircle2, XCircle, Clock, Smartphone, Hash, PlayCircle, Zap, BarChart3, Users, MessageCircle } from "lucide-react"
import { useEffect, useState } from "react"

// Animated Number Counter Component
function AnimatedNumber({ end, duration = 2000, prefix = "", suffix = "" }: { end: number, duration?: number, prefix?: string, suffix?: string }) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [end, duration])
  
  return <span>{prefix}{count}{suffix}</span>
}

export function HowToUseClient() {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])
  
  return (
    <>
      <MatrixBackground />
      <Navigation />
      
      <main className="relative z-10 min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="px-6 md:px-[8%] pt-32 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-4 py-2 border border-cyan-400 bg-cyan-400/10 rounded-sm">
              <span className="text-cyan-400 font-mono text-sm uppercase tracking-wider">// 2025 Strategy Guide</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-white">Using </span>
              <span className="text-cyan-400" style={{ textShadow: "0 0 20px #00f0ff" }}>
                Short-Form Video
              </span>
              <span className="text-white"> to Elevate Your Digital Marketing Strategy</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              In 2025, short-form video isn't simply a nice extra — it's one of the most strategic tools your brand can use to engage, convert and grow.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <div className="bg-gray-950 border border-gray-800 p-4 hover:border-cyan-400 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1">
                  {isVisible && <AnimatedNumber end={60} suffix="%" />}
                </div>
                <div className="text-xs text-gray-400 uppercase font-mono">Higher Engagement</div>
              </div>
              <div className="bg-gray-950 border border-gray-800 p-4 hover:border-pink-500 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-bold text-pink-500 mb-1">
                  {isVisible && <AnimatedNumber end={15} suffix="sec" />}
                </div>
                <div className="text-xs text-gray-400 uppercase font-mono">Optimal Length</div>
              </div>
              <div className="bg-gray-950 border border-gray-800 p-4 hover:border-cyan-400 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1">
                  {isVisible && <AnimatedNumber end={85} suffix="%" />}
                </div>
                <div className="text-xs text-gray-400 uppercase font-mono">Watch w/o Sound</div>
              </div>
              <div className="bg-gray-950 border border-gray-800 p-4 hover:border-pink-500 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-bold text-pink-500 mb-1">
                  {isVisible && <AnimatedNumber end={3} suffix="x" />}
                </div>
                <div className="text-xs text-gray-400 uppercase font-mono">More Shares</div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Mean Section */}
        <section className="px-6 md:px-[8%] py-16 bg-gradient-to-b from-black to-gray-950">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-cyan-400 font-mono before:content-['>_'] before:text-gray-600 before:mr-4">
              What We Mean by "Short-Form Video"
            </h2>
            
            <div className="bg-black border-l-4 border-cyan-400 p-8 mb-8">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Short-form video refers to <span className="text-cyan-400 font-bold">mobile-first clips</span> designed for quick consumption — think <span className="text-pink-500 font-bold">15 to 60 seconds</span>, vertical orientation, strong visuals and fast hooks. The format is built for the scroll, the thumb-tap and the "just one more" moment.
              </p>
            </div>
            
            {/* Key Characteristics */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-black border-2 border-gray-800 p-6 hover:border-cyan-400 transition-all duration-300 group">
                <Clock className="w-12 h-12 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-2">15-60 Seconds</h3>
                <p className="text-gray-400 text-sm">Bite-sized content optimized for short attention spans</p>
              </div>
              
              <div className="bg-black border-2 border-gray-800 p-6 hover:border-pink-500 transition-all duration-300 group">
                <Smartphone className="w-12 h-12 text-pink-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-2">Vertical Format</h3>
                <p className="text-gray-400 text-sm">Mobile-first 9:16 ratio for native social feeds</p>
              </div>
              
              <div className="bg-black border-2 border-gray-800 p-6 hover:border-cyan-400 transition-all duration-300 group">
                <Zap className="w-12 h-12 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-2">Fast Hooks</h3>
                <p className="text-gray-400 text-sm">Grab attention in the first 2-3 seconds</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why It Works Section */}
        <section className="px-6 md:px-[8%] py-16 bg-gray-950">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-pink-500 font-mono before:content-['>_'] before:text-gray-600 before:mr-4">
              Why Short-Form Video Works for Brands
            </h2>
            
            <p className="text-xl text-gray-400 mb-12">
              Short-form video stands out because:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-black border-2 border-gray-800 p-6 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-400/10 rounded-lg group-hover:bg-cyan-400/20 transition-colors">
                    <Clock className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-cyan-400 mb-2">It's Digestible</h3>
                    <p className="text-gray-300">Viewers can consume it quickly, even on the move. Perfect for today's fast-paced attention economy.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-black border-2 border-gray-800 p-6 hover:border-pink-500 hover:shadow-[0_0_30px_rgba(255,0,128,0.2)] transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-pink-500/10 rounded-lg group-hover:bg-pink-500/20 transition-colors">
                    <Users className="w-8 h-8 text-pink-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-pink-500 mb-2">It's Authentic</h3>
                    <p className="text-gray-300">Viewers are drawn to real-people, real stories—not overly polished ads. Authenticity wins.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-black border-2 border-gray-800 p-6 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-400/10 rounded-lg group-hover:bg-cyan-400/20 transition-colors">
                    <Hash className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-cyan-400 mb-2">Memorable & Platform-Friendly</h3>
                    <p className="text-gray-300">Easily discovered via hashtags, trending sounds, native feeds. Built for viral potential.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-black border-2 border-gray-800 p-6 hover:border-pink-500 hover:shadow-[0_0_30px_rgba(255,0,128,0.2)] transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-pink-500/10 rounded-lg group-hover:bg-pink-500/20 transition-colors">
                    <TrendingUp className="w-8 h-8 text-pink-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-pink-500 mb-2">Supports SEO & Discoverability</h3>
                    <p className="text-gray-300">Short videos drive traffic, boost search visibility and can be repurposed across channels.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Five Key Ways Section */}
        <section className="px-6 md:px-[8%] py-16 bg-black">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400 font-mono before:content-['>_'] before:text-gray-600 before:mr-4">
              Five Key Ways to Deploy Short-Form Video
            </h2>
            
            <p className="text-xl text-gray-400 mb-12">
              Here are the primary ways your brand can use short-form video in your digital marketing mix:
            </p>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-gray-950 to-black border-2 border-gray-800 p-8 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] transition-all duration-300 group">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-cyan-400/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
                    <Target className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl font-bold text-cyan-400 font-mono">01</span>
                      <h3 className="text-2xl font-bold text-white">
                        Drive Reach & Engagement
                      </h3>
                    </div>
                    <p className="text-gray-300 text-lg">
                      Create videos that tap into your audience's desires, curiosities or pain points. Use hooks in the first few seconds to make them stop scrolling and engage.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-950 to-black border-2 border-gray-800 p-8 hover:border-pink-500 hover:shadow-[0_0_30px_rgba(255,0,128,0.2)] transition-all duration-300 group">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-pink-500/10 rounded-lg flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                    <Eye className="w-8 h-8 text-pink-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl font-bold text-pink-500 font-mono">02</span>
                      <h3 className="text-2xl font-bold text-white">
                        Build Brand Awareness
                      </h3>
                    </div>
                    <p className="text-gray-300 text-lg">
                      Short videos are ideal to show your brand in action—who you are, what you stand for, in under a minute. They're particularly useful on platforms like TikTok, Instagram Reels and YouTube Shorts.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-950 to-black border-2 border-gray-800 p-8 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] transition-all duration-300 group">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-cyan-400/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
                    <BarChart3 className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl font-bold text-cyan-400 font-mono">03</span>
                      <h3 className="text-2xl font-bold text-white">
                        Support SEO & Web Traffic
                      </h3>
                    </div>
                    <p className="text-gray-300 text-lg">
                      Short-form videos can link back to your website, product pages or blog posts. They help amplify content, boost discovery and support conversion-funnels.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-950 to-black border-2 border-gray-800 p-8 hover:border-pink-500 hover:shadow-[0_0_30px_rgba(255,0,128,0.2)] transition-all duration-300 group">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-pink-500/10 rounded-lg flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                    <Video className="w-8 h-8 text-pink-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl font-bold text-pink-500 font-mono">04</span>
                      <h3 className="text-2xl font-bold text-white">
                        Advertising
                      </h3>
                    </div>
                    <p className="text-gray-300 text-lg">
                      Short-form videos make effective ads because they feel native, snackable and aligned with what users expect on social platforms—not long, "traditional" commercials.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-950 to-black border-2 border-gray-800 p-8 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] transition-all duration-300 group">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-cyan-400/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
                    <DollarSign className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl font-bold text-cyan-400 font-mono">05</span>
                      <h3 className="text-2xl font-bold text-white">
                        Drive Leads & Sales
                      </h3>
                    </div>
                    <p className="text-gray-300 text-lg">
                      Beyond views and likes, short-form video can push real business outcomes: demos, product reveals, social commerce integrations, CTAs built in.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategy Section */}
        <section className="px-6 md:px-[8%] py-16 bg-gradient-to-b from-gray-950 to-black">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-pink-500 font-mono before:content-['>_'] before:text-gray-600 before:mr-4">
              Getting Started: A Short-Form Video Strategy
            </h2>
            
            <p className="text-xl text-gray-400 mb-8">
              To succeed, you'll need more than just "upload a video and hope". Here's your checklist:
            </p>
            
            <div className="space-y-4">
              <div className="bg-black border-l-4 border-cyan-400 p-6 hover:bg-gray-950 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
                      <span className="text-cyan-400 font-mono font-bold">1</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-cyan-400 mb-2 font-mono">Know your audience</h3>
                    <p className="text-gray-300">What interests them? What problems do they have? What platforms do they use?</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-black border-l-4 border-pink-500 p-6 hover:bg-gray-950 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                      <span className="text-pink-500 font-mono font-bold">2</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-pink-500 mb-2 font-mono">Pick your platforms carefully</h3>
                    <p className="text-gray-300">Each has different norms. TikTok, Instagram Reels, YouTube Shorts: pick where your audience lives.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-black border-l-4 border-cyan-400 p-6 hover:bg-gray-950 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
                      <span className="text-cyan-400 font-mono font-bold">3</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-cyan-400 mb-2 font-mono">Define goals</h3>
                    <p className="text-gray-300">Are you aiming for awareness, traffic, conversions, or loyalty? The goal shapes the format.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-black border-l-4 border-pink-500 p-6 hover:bg-gray-950 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                      <span className="text-pink-500 font-mono font-bold">4</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-pink-500 mb-2 font-mono">Create with the format in mind</h3>
                    <p className="text-gray-300">Keep it short. Hook early. Vertical orientation. Captions (many watch without sound). Clear CTA.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-black border-l-4 border-cyan-400 p-6 hover:bg-gray-950 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
                      <span className="text-cyan-400 font-mono font-bold">5</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-cyan-400 mb-2 font-mono">Measure & iterate</h3>
                    <p className="text-gray-300">Views are nice, but engagement, watch time, click-through and conversions matter more. Test what works, refine what doesn't.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices Section */}
        <section className="px-6 md:px-[8%] py-16 bg-black">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400 font-mono before:content-['>_'] before:text-gray-600 before:mr-4">
              Best Practices & Common Mistakes
            </h2>
            
            <p className="text-xl text-gray-400 mb-12">
              What you should do — and what to avoid:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Do's */}
              <div className="bg-gradient-to-br from-green-500/10 to-transparent border-2 border-green-500/30 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-3 font-mono">
                  <div className="p-2 bg-green-400/20 rounded-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  DO:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 p-3 bg-black/50 rounded hover:bg-black/70 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Start with a <span className="text-green-400 font-semibold">strong hook</span> in the first 2-3 seconds.</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-black/50 rounded hover:bg-black/70 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Use <span className="text-green-400 font-semibold">vertical video</span> (or at least mobile-friendly aspect ratios).</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-black/50 rounded hover:bg-black/70 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Add <span className="text-green-400 font-semibold">captions/subtitles</span> because many users scroll with sound off.</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-black/50 rounded hover:bg-black/70 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Include a <span className="text-green-400 font-semibold">clear CTA</span>: follow, click link, visit page.</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-black/50 rounded hover:bg-black/70 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300"><span className="text-green-400 font-semibold">Batch content</span>, repurpose across platforms.</span>
                  </li>
                </ul>
              </div>
              
              {/* Don'ts */}
              <div className="bg-gradient-to-br from-red-500/10 to-transparent border-2 border-red-500/30 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-3 font-mono">
                  <div className="p-2 bg-red-400/20 rounded-lg">
                    <XCircle className="w-8 h-8" />
                  </div>
                  AVOID:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 p-3 bg-black/50 rounded hover:bg-black/70 transition-colors">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300"><span className="text-red-400 font-semibold">Long intros</span>, slow build-ups — attention is short.</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-black/50 rounded hover:bg-black/70 transition-colors">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300"><span className="text-red-400 font-semibold">Ignoring platform norms</span> (what works on Instagram might not work on TikTok).</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-black/50 rounded hover:bg-black/70 transition-colors">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Publishing <span className="text-red-400 font-semibold">without a plan</span> or not measuring what matters.</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-black/50 rounded hover:bg-black/70 transition-colors">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Assuming "<span className="text-red-400 font-semibold">video" means "movie-length</span>" — short-form means just that.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Captain Hacks Section */}
        <section className="px-6 md:px-[8%] py-16 bg-gradient-to-b from-gray-950 to-black">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-pink-500 font-mono before:content-['>_'] before:text-gray-600 before:mr-4">
              How This Fits Into Your Brand's Growth
            </h2>
            
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p className="text-xl">
                At <span className="text-cyan-400 font-bold">Captain Hacks</span>, we believe short-form video is not just a tactic—it's a <span className="text-pink-500 font-bold">core channel</span>. If your brand isn't leveraging it, you're leaving visibility, engagement and growth on the table.
              </p>
              
              <p className="text-xl">
                By being <span className="text-cyan-400 font-semibold">consistent</span>, <span className="text-cyan-400 font-semibold">strategic</span> and <span className="text-cyan-400 font-semibold">platform-smart</span> you'll build an audience that knows, likes and trusts you.
              </p>
              
              <div 
                className="p-8 my-8 border-2 border-cyan-400 bg-black/50 relative hover:shadow-[0_0_40px_rgba(0,240,255,0.3)] transition-all duration-300"
                style={{ boxShadow: "0 0 30px rgba(0, 240, 255, 0.2)" }}
              >
                <div className="absolute -top-3 left-6 bg-black px-3 font-mono text-cyan-400 text-sm">
                  READY_TO_START?
                </div>
                <p className="text-xl md:text-2xl text-center mb-6">
                  If you're ready to turn short-form video into a <span className="text-cyan-400 font-bold">growth engine</span> rather than an after-thought, we're here to help.
                </p>
                <div className="text-center">
                  <Link 
                    href="/#contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-mono text-base uppercase tracking-widest hover:scale-105 hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] transition-all duration-300 no-underline"
                  >
                    Get in Touch
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-pink-500/10 to-cyan-400/10 border-l-4 border-pink-500 p-6 rounded-r-lg">
                <p className="text-xl font-bold text-white mb-2">
                  👉 We can build high-impact short-form content for your brand.
                </p>
                <p className="text-gray-300">
                  From strategy to execution, we help brands like yours create videos that don't just get views—they drive results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 md:px-[8%] py-24 bg-black border-t border-gray-800">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 border border-pink-500 bg-pink-500/10 rounded-sm text-pink-500 font-mono text-sm uppercase tracking-wider mb-6">
                Start Today
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Ready to <span className="text-cyan-400" style={{ textShadow: "0 0 20px #00f0ff" }}>Hack Your Marketing</span>?
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-12">
              Get started with scroll-stopping short-form video from <span className="text-cyan-400 font-bold">$39</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                href="/#pricing"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-black font-mono text-base uppercase tracking-widest transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] no-underline group"
              >
                See Pricing
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="/#RECENT"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-black font-mono text-base uppercase tracking-widest transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,0,128,0.5)] no-underline group"
              >
                View Our Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Bottom Stats */}
            <div className="grid grid-cols-3 gap-6 pt-12 border-t border-gray-800">
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2 font-mono">24h</div>
                <div className="text-sm text-gray-500 uppercase">Delivery</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-500 mb-2 font-mono">$39</div>
                <div className="text-sm text-gray-500 uppercase">Starting Price</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2 font-mono">100%</div>
                <div className="text-sm text-gray-500 uppercase">You Own It</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

