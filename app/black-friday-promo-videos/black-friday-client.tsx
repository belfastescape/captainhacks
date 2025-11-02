"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { CollapsibleFAQ } from "@/components/collapsible-faq"
import { ArrowRight, Clock, Sparkles, TrendingUp, Zap, CheckCircle2, Play, Heart, DollarSign, Target, Timer, Tag, ShoppingBag, Gift } from "lucide-react"

const blackFridayFAQs = [
  {
    question: "How fast can you deliver a Black Friday video?",
    answer: "We deliver in 24 hours or less. For rush orders during Black Friday week, contact us directly for same-day delivery options."
  },
  {
    question: "Can I customize the discount percentage?",
    answer: "Absolutely! Whether it's 20%, 35%, 50% off, or BOGO deals — we'll create a video around your exact offer."
  },
  {
    question: "What formats do you deliver?",
    answer: "You'll get vertical (Stories/Reels), square (Feed), and landscape (YouTube/Website) formats. All optimized for maximum impact."
  },
  {
    question: "Can I use the video for paid ads?",
    answer: "Yes! Our videos work perfectly for Facebook Ads, Instagram Ads, TikTok Ads, and more. You own the video and can use it anywhere."
  },
  {
    question: "What if I need multiple videos for different products?",
    answer: "We offer bulk discounts for multiple videos. Contact us to discuss your Black Friday campaign needs."
  }
]

export function BlackFridayClient() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [likes, setLikes] = useState<Record<string, boolean>>({})
  const [likeCounts, setLikeCounts] = useState<Record<string, number>>({})

  // Initial like counts (random between 20-30 for each video)
  const initialLikeCounts: Record<string, number> = {
    'black-friday-hacker': 27,
    'hacker-35-off': 23,
    'phone-shop-promo': 29,
  }

  // Load likes and like counts from localStorage on mount
  useEffect(() => {
    const savedLikes = localStorage.getItem('blackFridayVideoLikes')
    if (savedLikes) {
      setLikes(JSON.parse(savedLikes))
    }

    const savedLikeCounts = localStorage.getItem('blackFridayVideoLikeCounts')
    if (savedLikeCounts) {
      setLikeCounts(JSON.parse(savedLikeCounts))
    } else {
      setLikeCounts(initialLikeCounts)
      localStorage.setItem('blackFridayVideoLikeCounts', JSON.stringify(initialLikeCounts))
    }
  }, [])

  // Toggle like for a video
  const toggleLike = (videoId: string, e: React.MouseEvent) => {
    e.stopPropagation() // Prevent video play when clicking like button
    const wasLiked = likes[videoId]
    const newLikes = { ...likes, [videoId]: !wasLiked }
    setLikes(newLikes)
    localStorage.setItem('blackFridayVideoLikes', JSON.stringify(newLikes))

    // Update like count
    const currentCount = likeCounts[videoId] || initialLikeCounts[videoId]
    const newCount = wasLiked ? currentCount - 1 : currentCount + 1
    const newLikeCounts = { ...likeCounts, [videoId]: newCount }
    setLikeCounts(newLikeCounts)
    localStorage.setItem('blackFridayVideoLikeCounts', JSON.stringify(newLikeCounts))
  }

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
            <div className="inline-block mb-6 px-6 py-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 border-2 border-orange-500/50 rounded-full animate-pulse">
              <span className="text-orange-400 font-mono text-sm font-bold">🛍️ BLACK FRIDAY • CYBER MONDAY</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-orange-400 via-red-500 to-pink-400 bg-clip-text text-transparent leading-tight animate-in fade-in duration-700">
              Black Friday Promo Videos
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
              Make your <span className="text-orange-400 font-black">biggest sale</span> impossible to miss.
            </p>
            
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              Black Friday is the biggest shopping event of the year. Stand out from the noise with 
              scroll-stopping promo videos that drive clicks, traffic, and sales — delivered in 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/order-now">
                <Button 
                  size="lg" 
                  className="text-lg px-12 py-8 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold uppercase tracking-widest shadow-[0_0_40px_rgba(249,115,22,0.3)] hover:shadow-[0_0_60px_rgba(249,115,22,0.5)] transition-all duration-300 hover:scale-105"
                >
                  Order My Black Friday Video <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Black Friday Videos Work Section */}
        <section className="px-6 md:px-[8%] py-20 bg-black/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full">
                <span className="text-orange-400 font-mono text-xs uppercase tracking-wider">The Power of Video</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                📊 Why Black Friday Videos Crush Static Posts
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                On the busiest shopping day of the year, you need content that <span className="text-orange-400 font-bold">stops thumbs mid-scroll</span>.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                {
                  icon: ShoppingBag,
                  title: "5x more engagement",
                  description: "than static images during sale events",
                  color: "orange"
                },
                {
                  icon: Timer,
                  title: "Creates urgency",
                  description: "countdown timers and FOMO messaging",
                  color: "red"
                },
                {
                  icon: Target,
                  title: "Higher CTR",
                  description: "video ads get 3x more clicks",
                  color: "orange"
                },
                {
                  icon: Gift,
                  title: "Memorable",
                  description: "people remember 95% of video vs 10% of text",
                  color: "red"
                }
              ].map((item, idx) => (
                <div key={idx} className={
                  item.color === 'orange' 
                    ? 'bg-gradient-to-br from-orange-900/30 to-black border-2 border-orange-500/30 rounded-xl p-6 hover:border-orange-400/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(249,115,22,0.2)]'
                    : 'bg-gradient-to-br from-red-900/30 to-black border-2 border-red-500/30 rounded-xl p-6 hover:border-red-400/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(239,68,68,0.2)]'
                }>
                  <div className={
                    item.color === 'orange'
                      ? 'p-3 bg-orange-500/20 rounded-lg inline-block mb-4'
                      : 'p-3 bg-red-500/20 rounded-lg inline-block mb-4'
                  }>
                    <item.icon className={
                      item.color === 'orange'
                        ? 'w-8 h-8 text-orange-400'
                        : 'w-8 h-8 text-red-400'
                    } />
                  </div>
                  <h3 className={
                    item.color === 'orange'
                      ? 'text-lg font-bold text-orange-400 mb-3'
                      : 'text-lg font-bold text-red-400 mb-3'
                  }>{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 border-2 border-orange-400/50 rounded-2xl p-8 text-center">
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                When everyone's competing for attention, <span className="text-orange-400 font-bold">video wins</span>.
              </p>
            </div>
          </div>
        </section>

        {/* Video Examples Section */}
        <section className="px-6 md:px-[8%] py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-4 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full">
                <span className="text-red-400 font-mono text-xs uppercase tracking-wider">See It In Action</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                🎬 Black Friday Video Examples
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                These portrait-style videos are optimized for Instagram Reels, TikTok, and Stories — 
                perfect for capturing mobile shoppers during the Black Friday rush.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Black Friday Hacker Video */}
              <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-orange-500/30 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 hover:border-orange-400/70 hover:shadow-[0_0_30px_rgba(249,115,22,0.2)] group">
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
                    <source src="/videos/Captain-Hacks-Hacker-Black-Friday-35-Off.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-black/50 transition-all duration-300 flex items-center justify-center pointer-events-none">
                    <Play className="w-16 h-16 text-orange-400 transition-opacity duration-300" />
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-orange-400 text-lg">Black Friday 35% Off</h4>
                    <button
                      onClick={(e) => toggleLike('black-friday-hacker', e)}
                      className="transition-all duration-300 hover:scale-110 flex items-center gap-2"
                      aria-label="Like this video"
                    >
                      <span className="text-gray-400 font-mono text-sm">
                        {likeCounts['black-friday-hacker'] || initialLikeCounts['black-friday-hacker']}
                      </span>
                      <Heart
                        className={`w-6 h-6 ${
                          likes['black-friday-hacker']
                            ? 'fill-orange-500 text-orange-500'
                            : 'text-gray-400 hover:text-orange-400'
                        }`}
                      />
                    </button>
                  </div>
                  <p className="text-gray-400 text-sm">Hacker character announcing Black Friday deal</p>
                </div>
              </div>

              {/* Hacker 35% Off Video */}
              <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-red-500/30 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 hover:border-red-400/70 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] group">
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
                    <source src="/videos/Captain-Hacks-Hacker-35-Off.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-black/50 transition-all duration-300 flex items-center justify-center pointer-events-none">
                    <Play className="w-16 h-16 text-red-400 transition-opacity duration-300" />
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-red-400 text-lg">Cyber Sale Promo</h4>
                    <button
                      onClick={(e) => toggleLike('hacker-35-off', e)}
                      className="transition-all duration-300 hover:scale-110 flex items-center gap-2"
                      aria-label="Like this video"
                    >
                      <span className="text-gray-400 font-mono text-sm">
                        {likeCounts['hacker-35-off'] || initialLikeCounts['hacker-35-off']}
                      </span>
                      <Heart
                        className={`w-6 h-6 ${
                          likes['hacker-35-off']
                            ? 'fill-red-500 text-red-500'
                            : 'text-gray-400 hover:text-red-400'
                        }`}
                      />
                    </button>
                  </div>
                  <p className="text-gray-400 text-sm">35% off discount announcement</p>
                </div>
              </div>

              {/* Phone Shop Female Hacker Video */}
              <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-orange-500/30 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 hover:border-orange-400/70 hover:shadow-[0_0_30px_rgba(249,115,22,0.2)] group">
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
                    <source src="/videos/the-phone-shop-female-hacker-yellow.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-black/50 transition-all duration-300 flex items-center justify-center pointer-events-none">
                    <Play className="w-16 h-16 text-orange-400 transition-opacity duration-300" />
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-orange-400 text-lg">Phone Shop Sale</h4>
                    <button
                      onClick={(e) => toggleLike('phone-shop-promo', e)}
                      className="transition-all duration-300 hover:scale-110 flex items-center gap-2"
                      aria-label="Like this video"
                    >
                      <span className="text-gray-400 font-mono text-sm">
                        {likeCounts['phone-shop-promo'] || initialLikeCounts['phone-shop-promo']}
                      </span>
                      <Heart
                        className={`w-6 h-6 ${
                          likes['phone-shop-promo']
                            ? 'fill-orange-500 text-orange-500'
                            : 'text-gray-400 hover:text-orange-400'
                        }`}
                      />
                    </button>
                  </div>
                  <p className="text-gray-400 text-sm">Product promo with female hacker character</p>
                </div>
              </div>
            </div>

            <div className="text-center bg-gradient-to-r from-orange-900/30 to-red-900/30 border-2 border-orange-400/50 rounded-2xl p-8">
              <p className="text-xl text-white font-semibold mb-4">
                Ready to dominate Black Friday with video?
              </p>
              <Link href="/order-now">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold"
                >
                  Order Your Black Friday Video <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Perfect For Section */}
        <section className="px-6 md:px-[8%] py-20 bg-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-center bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              🎯 Perfect for Black Friday & Cyber Monday
            </h2>
            <p className="text-xl text-center text-gray-300 mb-12">
              Our videos work for any sale event:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { icon: "🛍️", text: "Black Friday doorbusters & early bird specials" },
                { icon: "💻", text: "Cyber Monday tech deals" },
                { icon: "📦", text: "Small Business Saturday promotions" },
                { icon: "🎄", text: "Holiday season kickoff sales" },
                { icon: "⚡", text: "Flash sales & limited-time offers" },
                { icon: "🎁", text: "Bundle deals & gift packages" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-gradient-to-r from-gray-900 to-black border border-orange-500/30 rounded-xl p-6 hover:border-orange-400/50 transition-all duration-300">
                  <div className="text-4xl">{item.icon}</div>
                  <span className="text-gray-300 text-lg">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="px-6 md:px-[8%] py-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-center bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              📦 What You Get
            </h2>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-orange-500/30 rounded-xl overflow-hidden mb-8">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left p-6 text-orange-400 font-mono text-sm uppercase tracking-wider">Included</th>
                    <th className="text-left p-6 text-orange-400 font-mono text-sm uppercase tracking-wider">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800 hover:bg-gray-900/50 transition-colors">
                    <td className="p-6 text-white font-semibold">Custom Black Friday script</td>
                    <td className="p-6 text-gray-400">Built around your exact discount and offer</td>
                  </tr>
                  <tr className="border-b border-gray-800 hover:bg-gray-900/50 transition-colors">
                    <td className="p-6 text-white font-semibold">Professional voiceover</td>
                    <td className="p-6 text-gray-400">Choose from our character library</td>
                  </tr>
                  <tr className="border-b border-gray-800 hover:bg-gray-900/50 transition-colors">
                    <td className="p-6 text-white font-semibold">All social media formats</td>
                    <td className="p-6 text-gray-400">Vertical, square, and landscape versions</td>
                  </tr>
                  <tr className="border-b border-gray-800 hover:bg-gray-900/50 transition-colors">
                    <td className="p-6 text-white font-semibold">Captions included</td>
                    <td className="p-6 text-gray-400">Perfect for sound-off viewing</td>
                  </tr>
                  <tr className="hover:bg-gray-900/50 transition-colors">
                    <td className="p-6 text-white font-semibold">24-hour delivery</td>
                    <td className="p-6 text-gray-400">Ready to post before your sale starts</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-center bg-gradient-to-r from-orange-900/30 to-red-900/30 border-2 border-orange-500/50 rounded-2xl p-8">
              <p className="text-3xl md:text-4xl font-black text-white mb-2">
                All for just <span className="text-orange-400">from $39 USD</span> per video.
              </p>
            </div>

            <div className="text-center mt-8">
              <Link href="/order-now">
                <Button 
                  size="lg" 
                  className="text-lg px-12 py-8 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold uppercase tracking-widest shadow-[0_0_40px_rgba(249,115,22,0.3)] hover:shadow-[0_0_60px_rgba(249,115,22,0.5)] transition-all duration-300 hover:scale-105"
                >
                  Get My Black Friday Video <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="px-6 md:px-[8%] py-20 bg-black/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-center bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              ⚙️ How It Works
            </h2>

            <div className="space-y-6 mb-12">
              {[
                {
                  step: "1",
                  title: 'Tell us your Black Friday offer',
                  description: '"50% off," "Buy 2 Get 1," etc.'
                },
                {
                  step: "2",
                  title: "Choose your character style",
                  description: "or let us match one to your brand."
                },
                {
                  step: "3",
                  title: "We deliver in 24 hours",
                  description: "ready to post across all your channels"
                },
                {
                  step: "4",
                  title: "Watch the sales roll in",
                  description: ""
                }
              ].map((item) => (
                <div key={item.step} className="flex gap-6 items-start bg-gradient-to-r from-gray-900 to-black border border-orange-500/30 rounded-xl p-6 hover:border-orange-400/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-2xl font-black flex-shrink-0">
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
              <p className="text-2xl text-orange-400 font-bold mb-4">It's that simple.</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 md:px-[8%] py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-4 px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full">
                <span className="text-orange-400 font-mono text-xs uppercase tracking-wider">Got Questions?</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                ❓ Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Everything you need to know about Black Friday promo videos
              </p>
            </div>

            <CollapsibleFAQ faqs={blackFridayFAQs} />
          </div>
        </section>

        {/* Urgency Section */}
        <section className="px-6 md:px-[8%] py-20 bg-black/50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-center bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              ⏰ Don't Wait Until Black Friday Week
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-orange-900/30 to-black border-2 border-orange-500/30 rounded-xl p-8 text-center hover:border-orange-400/50 transition-all duration-300 hover:scale-105">
                <Clock className="w-16 h-16 text-orange-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-orange-400 mb-2">⚡ Order early</h3>
                <p className="text-gray-400">Get your video ready before the rush</p>
              </div>
              
              <div className="bg-gradient-to-br from-red-900/30 to-black border-2 border-red-500/30 rounded-xl p-8 text-center hover:border-red-400/50 transition-all duration-300 hover:scale-105">
                <Target className="w-16 h-16 text-red-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-red-400 mb-2">🎯 Build hype</h3>
                <p className="text-gray-400">Start teasing your sale days in advance</p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-900/30 to-black border-2 border-orange-500/30 rounded-xl p-8 text-center hover:border-orange-400/50 transition-all duration-300 hover:scale-105">
                <TrendingUp className="w-16 h-16 text-orange-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-orange-400 mb-2">📈 Maximize sales</h3>
                <p className="text-gray-400">Launch strong with professional video</p>
              </div>
            </div>

            <div className="text-center bg-gradient-to-r from-red-900/30 to-orange-900/30 border-2 border-red-500/50 rounded-2xl p-8">
              <p className="text-2xl md:text-3xl text-white font-bold">
                Black Friday waits for no one. Order your video today.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="px-6 md:px-[8%] py-20 bg-gradient-to-b from-black via-gray-900 to-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent leading-tight">
              🚀 Ready to win Black Friday?
            </h2>
            
            <p className="text-2xl text-gray-300 mb-12">
              Let's create a video that turns browsers into buyers.
            </p>

            <Link href="/order-now">
              <Button 
                size="lg" 
                className="text-lg px-12 py-8 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold uppercase tracking-widest shadow-[0_0_40px_rgba(249,115,22,0.3)] hover:shadow-[0_0_60px_rgba(249,115,22,0.5)] transition-all duration-300 hover:scale-105"
              >
                Order My Black Friday Video Now <ArrowRight className="ml-2 w-6 h-6" />
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

