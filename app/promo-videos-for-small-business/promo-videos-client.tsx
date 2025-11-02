"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { RelatedArticles } from "@/components/related-articles"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ArrowRight, Clock, Sparkles, TrendingUp, Zap, CheckCircle2, Play, Rocket, Target, Timer, DollarSign, Video, Instagram, Facebook, Youtube, Shield, Star } from "lucide-react"

export function PromoVideosClient() {
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
        <Breadcrumbs
          items={[
            { label: "Video Services", href: "/#" },
            { label: "Promo Videos for Small Business" }
          ]}
        />

        {/* Hero Section */}
        <section className="px-6 md:px-[8%] pt-32 pb-20">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 border-2 border-cyan-500/50 rounded-full animate-pulse">
              <span className="text-cyan-400 font-mono text-sm font-bold">🧾 24-Hour Delivery Guaranteed</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent leading-tight animate-in fade-in duration-700">
              Promo Videos for Small Businesses
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
              Launch your next sale, <span className="text-cyan-400 font-black italic">fast</span>.
            </p>
            
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              Running a weekend deal, new-product launch, or <Link href="/flash-sales-videos" className="text-red-400 hover:text-red-300 underline decoration-red-400/30 hover:decoration-red-400 transition-all duration-300">flash sale</Link>? Captain Hacks creates short, 
              scroll-stopping <Link href="/how-to-use-short-form-video" className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400/30 hover:decoration-cyan-400 transition-all duration-300">short-form promo videos</Link> made for small businesses — and we deliver them within 24 hours.
            </p>

            <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mb-12">
              <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/30 rounded-xl p-4 hover:border-cyan-400 transition-all duration-300 hover:scale-105">
                <Zap className="w-8 h-8 md:w-10 md:h-10 text-cyan-400 mx-auto mb-2" />
                <div className="font-mono text-sm md:text-base text-cyan-400 font-bold">Fast</div>
                <div className="text-xs text-gray-500 mt-1">24hrs</div>
              </div>
              <div className="bg-gradient-to-br from-pink-500/10 to-pink-500/5 border border-pink-500/30 rounded-xl p-4 hover:border-pink-400 transition-all duration-300 hover:scale-105">
                <DollarSign className="w-8 h-8 md:w-10 md:h-10 text-pink-400 mx-auto mb-2" />
                <div className="font-mono text-sm md:text-base text-pink-400 font-bold">Affordable</div>
                <div className="text-xs text-gray-500 mt-1">from $39</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/10 to-pink-500/5 border border-cyan-500/30 rounded-xl p-4 hover:border-cyan-400 transition-all duration-300 hover:scale-105">
                <Target className="w-8 h-8 md:w-10 md:h-10 text-cyan-400 mx-auto mb-2" />
                <div className="font-mono text-sm md:text-base text-cyan-400 font-bold">Effective</div>
                <div className="text-xs text-gray-500 mt-1">ROI+</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/order-now">
                <Button 
                  size="lg" 
                  className="text-lg px-12 py-8 bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white font-bold uppercase tracking-widest shadow-[0_0_40px_rgba(0,240,255,0.3)] hover:shadow-[0_0_60px_rgba(0,240,255,0.5)] transition-all duration-300 hover:scale-105"
                >
                  Get My Promo Video Now <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </Link>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Shield className="w-4 h-4" />
                <span>Money-back guarantee</span>
              </div>
            </div>
          </div>
        </section>

        {/* Perfect For Section */}
        <section className="px-6 md:px-[8%] py-20 bg-black/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-2 bg-pink-500/20 border border-pink-500/30 rounded-full">
                <span className="text-pink-400 font-mono text-xs uppercase tracking-wider">Perfect For</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                💼 Any Small Business That Needs Attention
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4">
                Whether you run a café, boutique, salon, gym, online shop, or local service — 
                your customers are scrolling <span className="text-cyan-400 font-bold">right now</span>.
              </p>
              <p className="text-xl text-pink-400 font-bold">
                You need a video that grabs them now, not next week.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-cyan-900/30 to-black border-2 border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-cyan-500/20 rounded-lg">
                    <Rocket className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-cyan-400">Use Captain Hacks videos to:</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    { icon: Zap, text: "Announce a flash sale or discount" },
                    { icon: Sparkles, text: "Launch a new product or service" },
                    { icon: Timer, text: "Promote a weekend or holiday offer" },
                    { icon: TrendingUp, text: "Drive bookings or foot traffic" },
                    { icon: Target, text: "Add punch to your Facebook / Instagram ads" }
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 group">
                      <div className="p-2 bg-cyan-500/10 rounded group-hover:bg-cyan-500/20 transition-colors">
                        <item.icon className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      </div>
                      <span className="text-gray-300 text-lg pt-2">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-pink-900/30 to-black border-2 border-pink-500/30 rounded-2xl p-8 flex flex-col justify-center hover:border-pink-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]">
                <div className="text-center">
                  <div className="relative inline-block mb-6">
                    <div className="absolute inset-0 bg-pink-500/20 blur-2xl rounded-full"></div>
                    <Play className="w-20 h-20 text-pink-400 relative animate-pulse" />
                  </div>
                  <p className="text-xl text-gray-300 leading-relaxed mb-4">
                    Every video is designed to <span className="text-pink-400 font-bold">stop the scroll</span>, 
                    deliver your message in seconds, and drive instant clicks or calls.
                  </p>
                  <div className="flex justify-center gap-4 mt-6">
                    <div className="text-center">
                      <div className="text-3xl font-black text-pink-400">3-15s</div>
                      <div className="text-xs text-gray-500">Video Length</div>
                    </div>
                    <div className="w-px bg-gray-700"></div>
                    <div className="text-center">
                      <div className="text-3xl font-black text-cyan-400">100%</div>
                      <div className="text-xs text-gray-500">Attention</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Small Businesses Love Section */}
        <section className="px-6 md:px-[8%] py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-center bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              ⚡ Why small businesses love Captain Hacks
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: Clock,
                  feature: "24-hour delivery",
                  benefit: "When you've got a deal, you can't wait a week for a video.",
                  color: "cyan"
                },
                {
                  icon: Video,
                  feature: "Custom character or narrator",
                  benefit: "Grab attention with a memorable voice and tone.",
                  color: "pink"
                },
                {
                  icon: Instagram,
                  feature: "Optimised for social media",
                  benefit: "Perfect aspect ratios for TikTok, Instagram Reels, and Facebook Ads.",
                  color: "cyan"
                },
                {
                  icon: Target,
                  feature: "Clear, persuasive copy",
                  benefit: "We use proven urgency and FOMO techniques that convert.",
                  color: "pink"
                },
                {
                  icon: DollarSign,
                  feature: "Affordable pricing",
                  benefit: "Designed for small-business budgets — no agency overhead.",
                  color: "cyan"
                },
                {
                  icon: Shield,
                  feature: "Quality guaranteed",
                  benefit: "One round of free tweaks. We get it right or make it right.",
                  color: "pink"
                }
              ].map((item, idx) => (
                <div key={idx} className={item.color === 'cyan' 
                  ? 'bg-gradient-to-br from-cyan-900/20 to-black border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]'
                  : 'bg-gradient-to-br from-pink-900/20 to-black border border-pink-500/30 rounded-xl p-6 hover:border-pink-400/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(236,72,153,0.2)]'}>
                  <div className={item.color === 'cyan' ? 'p-3 bg-cyan-500/20 rounded-lg inline-block mb-4' : 'p-3 bg-pink-500/20 rounded-lg inline-block mb-4'}>
                    <item.icon className={item.color === 'cyan' ? 'w-8 h-8 text-cyan-400' : 'w-8 h-8 text-pink-400'} />
                  </div>
                  <h3 className={item.color === 'cyan' ? 'text-lg font-bold text-cyan-400 mb-3' : 'text-lg font-bold text-pink-400 mb-3'}>{item.feature}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.benefit}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-cyan-900/30 to-pink-900/30 border-2 border-cyan-400/50 rounded-2xl p-8 md:p-12 mb-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 text-cyan-400/10 text-9xl font-black leading-none">"</div>
              <div className="relative">
                <div className="flex gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed">
                  "We needed a quick promo for our weekend sale. Captain Hacks had it ready the next day — 
                  our bookings <span className="text-cyan-400 font-bold">doubled</span>."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-pink-400 flex items-center justify-center text-white font-bold text-xl">
                    J
                  </div>
                  <div>
                    <p className="text-cyan-400 font-bold">Jess</p>
                    <p className="text-gray-500 text-sm">Spa Owner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Flash Sale Section */}
        <section className="px-6 md:px-[8%] py-20 bg-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-center bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
              ⏱️ Flash-Sale & Limited-Time Offer Videos
            </h2>
            <p className="text-2xl text-center text-cyan-400 font-bold mb-12">
              Urgency sells. <Link href="/7-reasons-short-form-video" className="text-pink-400 hover:text-pink-300 underline decoration-pink-400/30 hover:decoration-pink-400 transition-all duration-300">Learn why short-form video dominates digital marketing in 2025</Link>.
            </p>

            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-lg text-gray-300 mb-8">
                Our flash-sale videos are built around countdowns, "last chance" headlines, 
                and bold calls to action.
              </p>

              <div className="bg-gradient-to-br from-gray-900 to-black border border-pink-500/30 rounded-xl p-8">
                <h3 className="text-xl font-bold text-pink-400 mb-6">Common uses:</h3>
                <ul className="space-y-3">
                  {[
                    '"24 Hours Only" or "Ends Midnight" promotions',
                    "Product launches",
                    "Seasonal events (Mother's Day, Black Friday, EOFY Sales)",
                    '"Buy One Get One Free" or "50% Off" events'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-lg text-gray-300 mt-8 text-center">
                We'll make sure your offer is crystal-clear and your deadline impossible to ignore.
              </p>
            </div>

            <div className="text-center">
              <Link href="/order-now">
                <Button 
                  size="lg" 
                  className="text-lg px-12 py-8 bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white font-bold uppercase tracking-widest shadow-[0_0_40px_rgba(236,72,153,0.3)] hover:shadow-[0_0_60px_rgba(236,72,153,0.5)] transition-all duration-300 hover:scale-105"
                >
                  Order My Flash-Sale Video <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </Link>
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
                🎬 Promo Video Examples
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                These are the kinds of videos that stop the scroll and make people click "Buy Now"
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Weekend Flash Sale - Real Video */}
              <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-pink-500/30 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 hover:border-pink-400/70 hover:shadow-[0_0_30px_rgba(236,72,153,0.2)] group">
                <div className="relative aspect-[9/16] bg-black cursor-pointer"
                  onClick={(e) => {
                    const video = e.currentTarget.querySelector('video')
                    if (video) {
                      video.currentTime = 0
                      video.play().catch(err => console.log('Play failed:', err))
                    }
                  }}
                >
                  <video
                    className="w-full h-full object-cover"
                    playsInline
                    preload="auto"
                  >
                    <source src="/videos/Chilled-Bliss-Weekend-Promo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-black/50 transition-all duration-300 flex items-center justify-center pointer-events-none">
                    <Play className="w-16 h-16 text-pink-400 transition-opacity duration-300" />
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-pink-400 text-lg mb-2">Weekend Flash Sale</h4>
                  <p className="text-gray-400 text-sm">Buy 2 scoops, get 1 free. This Weekend Only</p>
                </div>
              </div>

              {/* New Product Launch - Real Video */}
              <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-pink-500/30 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 hover:border-pink-400/70 hover:shadow-[0_0_30px_rgba(236,72,153,0.2)] group">
                <div className="relative aspect-[9/16] bg-black cursor-pointer"
                  onClick={(e) => {
                    const video = e.currentTarget.querySelector('video')
                    if (video) {
                      video.currentTime = 0
                      video.play().catch(err => console.log('Play failed:', err))
                    }
                  }}
                >
                  <video
                    className="w-full h-full object-cover"
                    playsInline
                    preload="auto"
                  >
                    <source src="/videos/Zingers-Running-Shoes-New-Product.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-black/50 transition-all duration-300 flex items-center justify-center pointer-events-none">
                    <Play className="w-16 h-16 text-pink-400 transition-opacity duration-300" />
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-pink-400 text-lg mb-2">New Product Launch</h4>
                  <p className="text-gray-400 text-sm">First 24 hours special pricing</p>
                </div>
              </div>

              {/* Clearance Event - Real Video */}
              <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-pink-500/30 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 hover:border-pink-400/70 hover:shadow-[0_0_30px_rgba(236,72,153,0.2)] group">
                <div className="relative aspect-[9/16] bg-black cursor-pointer"
                  onClick={(e) => {
                    const video = e.currentTarget.querySelector('video')
                    if (video) {
                      video.currentTime = 0
                      video.play().catch(err => console.log('Play failed:', err))
                    }
                  }}
                >
                  <video
                    className="w-full h-full object-cover"
                    playsInline
                    preload="auto"
                  >
                    <source src="/videos/Greenland-Clothing-Clearance.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-black/50 transition-all duration-300 flex items-center justify-center pointer-events-none">
                    <Play className="w-16 h-16 text-pink-400 transition-opacity duration-300" />
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
                  We will be adding more videos soon <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="px-6 md:px-[8%] py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-center bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              🧩 How it works
            </h2>

            <div className="space-y-6 mb-12">
              {[
                {
                  step: "1",
                  title: "Choose your video style",
                  description: "pick from our characters or upload your own script."
                },
                {
                  step: "2",
                  title: "Tell us your offer",
                  description: "include your discount, product, or deadline."
                },
                {
                  step: "3",
                  title: "We create your video in 24 hours",
                  description: "ready to post on any social platform."
                }
              ].map((item) => (
                <div key={item.step} className="flex gap-6 items-start bg-gradient-to-r from-gray-900 to-black border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-pink-500 flex items-center justify-center text-2xl font-black flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">– {item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-2xl text-cyan-400 font-bold mb-4">That's it.</p>
              <p className="text-lg text-gray-300">
                No meetings. No revisions loop. Just fast, effective promo content.
              </p>
            </div>
          </div>
        </section>

        {/* What You Can Say Section */}
        <section className="px-6 md:px-[8%] py-20 bg-black/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-center bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
              💬 What you can say in your video
            </h2>

            <p className="text-lg text-gray-300 mb-8 text-center">
              Your message can be as simple as:
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-gradient-to-r from-cyan-900/20 to-pink-900/20 border-l-4 border-cyan-400 rounded-lg p-6">
                <p className="text-xl text-white font-semibold">
                  "This weekend only — 40% off everything!"
                </p>
              </div>
              
              <div className="text-center text-gray-500 font-mono">or</div>

              <div className="bg-gradient-to-r from-pink-900/20 to-cyan-900/20 border-l-4 border-pink-400 rounded-lg p-6">
                <p className="text-xl text-white font-semibold">
                  "Book today and your first session's half-price — offer ends Sunday."
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-300 text-center">
              We'll wrap it in sharp visuals, captions, and energy to make it pop.
            </p>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="px-6 md:px-[8%] py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-center bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              💸 Simple pricing
            </h2>

            <div className="relative bg-gradient-to-br from-cyan-900/30 to-pink-900/30 border-2 border-cyan-400 rounded-3xl p-8 md:p-12 mb-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"></div>
              
              <div className="relative">
                <div className="text-center mb-8">
                  <div className="inline-block mb-4 px-4 py-2 bg-pink-500/20 border border-pink-500/40 rounded-full">
                    <span className="text-pink-400 font-mono text-sm uppercase tracking-wider">Limited Time Intro Price</span>
                  </div>
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <span className="text-4xl text-gray-500 line-through">$99</span>
                    <div className="text-6xl md:text-8xl font-black bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">from $39</div>
                  </div>
                  <div className="text-xl text-gray-400">USD per video</div>
                  <div className="inline-block mt-4 px-6 py-2 bg-cyan-500/20 border border-cyan-500/40 rounded-full">
                    <span className="text-cyan-400 font-bold text-sm">Save 51% Today</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {[
                    { icon: CheckCircle2, text: "Professional script editing" },
                    { icon: Video, text: "Voice and character of your choice" },
                    { icon: Sparkles, text: "Captions & platform-ready format" },
                    { icon: Shield, text: "One round of free tweaks if needed" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-black/30 p-4 rounded-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all">
                      <div className="p-2 bg-cyan-500/20 rounded">
                        <item.icon className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      </div>
                      <span className="text-gray-200">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t-2 border-gray-700/50 pt-6 text-center">
                  <div className="flex flex-wrap justify-center gap-6 mb-4">
                    <div className="flex items-center gap-2 text-gray-400">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                      <span>No subscriptions</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                      <span>No hidden fees</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                      <span>24hr guarantee</span>
                    </div>
                  </div>
                  <p className="text-white text-2xl font-bold">
                    Just great videos — <span className="text-cyan-400">fast</span>.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link href="/order-now">
                <Button 
                  size="lg" 
                  className="text-lg px-12 py-8 bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white font-bold uppercase tracking-widest shadow-[0_0_40px_rgba(0,240,255,0.3)] hover:shadow-[0_0_60px_rgba(0,240,255,0.5)] transition-all duration-300 hover:scale-105"
                >
                  Get Started from $39 <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Platform Optimization Section */}
        <section className="px-6 md:px-[8%] py-20 bg-black/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-center bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
              🔍 Optimised for your platforms
            </h2>

            <p className="text-lg text-gray-300 mb-8 text-center">
              We deliver your promo in all the formats you need:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  format: "9 × 16",
                  type: "vertical",
                  use: "Reels / TikTok / Stories",
                  icon: Instagram,
                  color: "pink"
                },
                {
                  format: "1 × 1",
                  type: "square",
                  use: "Facebook and Instagram feed",
                  icon: Facebook,
                  color: "cyan"
                },
                {
                  format: "16 × 9",
                  type: "landscape",
                  use: "websites or YouTube",
                  icon: Youtube,
                  color: "pink"
                }
              ].map((item, idx) => (
                <div key={idx} className={item.color === 'cyan'
                  ? 'bg-gradient-to-br from-cyan-900/20 to-black border-2 border-cyan-500/30 rounded-xl p-6 text-center hover:border-cyan-400/70 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]'
                  : 'bg-gradient-to-br from-pink-900/20 to-black border-2 border-pink-500/30 rounded-xl p-6 text-center hover:border-pink-400/70 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]'}>
                  <div className={item.color === 'cyan' ? 'p-4 bg-cyan-500/20 rounded-lg inline-block mb-4' : 'p-4 bg-pink-500/20 rounded-lg inline-block mb-4'}>
                    <item.icon className={item.color === 'cyan' ? 'w-10 h-10 text-cyan-400' : 'w-10 h-10 text-pink-400'} />
                  </div>
                  <div className={item.color === 'cyan' ? 'text-4xl font-black text-cyan-400 mb-2' : 'text-4xl font-black text-pink-400 mb-2'}>{item.format}</div>
                  <div className="text-sm text-gray-400 font-mono uppercase mb-3">({item.type})</div>
                  <div className="text-gray-300 text-sm font-semibold">{item.use}</div>
                </div>
              ))}
            </div>

            <p className="text-xl text-center text-white font-semibold">
              So you can post it everywhere — instantly.
            </p>
          </div>
        </section>

        {/* Tips Section */}
        <section className="px-6 md:px-[8%] py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-center bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              🧠 Tips from Captain Hacks
            </h2>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-cyan-500/30 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-bold text-cyan-400 mb-6">Use your video to:</h3>
              <ul className="space-y-4">
                {[
                  "Announce a new deal each week",
                  "Add countdown timers to your social posts",
                  "Pin the video to the top of your page during sales",
                  "Pair the video with a website banner or email blast"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Sparkles className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <p className="text-2xl text-pink-400 font-bold mb-4">The key? Momentum.</p>
              <p className="text-lg text-gray-300">
                Keep your audience excited, and they'll keep buying.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="px-6 md:px-[8%] py-20 bg-gradient-to-b from-black via-gray-900 to-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
              🚀 Ready to make your next offer impossible to ignore?
            </h2>
            
            <p className="text-2xl text-gray-300 mb-12">
              Your sale's waiting. Let's get your promo video ready today.
            </p>

            <Link href="/order-now">
              <Button 
                size="lg" 
                className="text-lg px-12 py-8 bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white font-bold uppercase tracking-widest shadow-[0_0_40px_rgba(0,240,255,0.3)] hover:shadow-[0_0_60px_rgba(0,240,255,0.5)] transition-all duration-300 hover:scale-105"
              >
                Order My Promo Video <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </Link>

            <p className="text-sm text-gray-500 mt-12 font-mono">
              ⚡ 24-hour delivery • 💸 from $39 per video • 🚀 Results-driven
            </p>
          </div>
        </section>

        {/* Related Articles */}
        <RelatedArticles
          articles={[
            {
              title: "Flash-Sale Videos That Sell Fast",
              href: "/flash-sales-videos",
              description: "Create urgency and boost sales with videos designed for limited-time offers."
            },
            {
              title: "Black Friday Promo Videos",
              href: "/black-friday-promo-videos",
              description: "Make your biggest sale impossible to miss with high-impact Black Friday videos."
            },
            {
              title: "How To Use Short-Form Video in Digital Marketing",
              href: "/how-to-use-short-form-video",
              description: "Master the format and turn it into a growth engine for your brand."
            }
          ]}
        />

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

