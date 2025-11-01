"use client"

import { useEffect, useRef, useState } from "react"
import { Navigation } from "@/components/navigation"
import { CollapsibleFAQ } from "@/components/collapsible-faq"
import { Play, ArrowRight, Heart } from "lucide-react"

const faqs = [
  {
    question: "What if I don't like the video?",
    answer:
      "We refund you. No questions asked. But this basically never happens because we're good at this.",
  },
  {
    question: "Can I request revisions?",
    answer:
      "Minor tweaks? Usually yes. Complete re-do? That's a new order. We get it right the first time 99% of the time.",
  },
  {
    question: "Do I own the video?",
    answer: "100%. Use it wherever, whenever. We don't care. It's yours.",
  },
  {
    question: "What video formats do you deliver?",
    answer:
      "MP4, ready to upload anywhere. TikTok, Instagram, Facebook, LinkedIn, your gran's email - works everywhere.",
  },
  {
    question: "Can I order multiple videos?",
    answer:
      "Of course. Bulk discounts available. The more you order, the less you pay per video.",
  },
  {
    question: "What if I need it faster than 24 hours?",
    answer:
      "Get in touch. Rush jobs usually possible for an extra fee. But 24 hours is already pretty damn fast.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "All of them. Restaurants, gyms, retail, services, e-commerce, real estate, coaches - if you have a deal, we can make it memorable.",
  },
  {
    question: "Is this a subscription service?",
    answer:
      "No. You will only ever make a one off deal with us for the video that you are ordering.",
  },
]

export default function CaptainHacksHome() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [hasPlayedOnScroll, setHasPlayedOnScroll] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [likes, setLikes] = useState<Record<string, boolean>>({})
  const [likeCounts, setLikeCounts] = useState<Record<string, number>>({})

  // Initial like counts (random between 50-90 for each video)
  const initialLikeCounts: Record<string, number> = {
    'weekend-flash-sale': 73,
    'new-product-launch': 85,
    'clearance-event': 62,
    'fem-barista': 78,
    'newyork-cop': 54,
    'wizard-emporium': 89,
    'aussie-surfer': 67,
    'sister-jane': 71,
    'dog-spa': 56,
  }

  // Load likes and like counts from localStorage on mount
  useEffect(() => {
    const savedLikes = localStorage.getItem('videoLikes')
    if (savedLikes) {
      setLikes(JSON.parse(savedLikes))
    }

    const savedLikeCounts = localStorage.getItem('videoLikeCounts')
    if (savedLikeCounts) {
      setLikeCounts(JSON.parse(savedLikeCounts))
    } else {
      // Initialize with starting counts
      setLikeCounts(initialLikeCounts)
      localStorage.setItem('videoLikeCounts', JSON.stringify(initialLikeCounts))
    }
  }, [])

  // Toggle like for a video
  const toggleLike = (videoId: string, e: React.MouseEvent) => {
    e.stopPropagation() // Prevent video play when clicking like button
    const wasLiked = likes[videoId]
    const newLikes = { ...likes, [videoId]: !wasLiked }
    setLikes(newLikes)
    localStorage.setItem('videoLikes', JSON.stringify(newLikes))

    // Update like count
    const currentCount = likeCounts[videoId] || initialLikeCounts[videoId]
    const newCount = wasLiked ? currentCount - 1 : currentCount + 1
    const newLikeCounts = { ...likeCounts, [videoId]: newCount }
    setLikeCounts(newLikeCounts)
    localStorage.setItem('videoLikeCounts', JSON.stringify(newLikeCounts))
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
      if (!ctx || !canvas) return
      
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

    const interval = setInterval(drawMatrix, 50)

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

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const onPlay = () => setIsPlaying(true)
    const onEnded = () => setIsPlaying(false)

    video.addEventListener("play", onPlay)
    video.addEventListener("ended", onEnded)

    return () => {
      video.removeEventListener("play", onPlay)
      video.removeEventListener("ended", onEnded)
    }
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayedOnScroll) {
            video.muted = true
            try {
              video.currentTime = 0
            } catch {}
            video.play().then(() => {
              setHasPlayedOnScroll(true)
            }).catch(() => {
              // Autoplay might be blocked; user can press the play button
            })
          }
        })
      },
      { threshold: 0.5 }
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [hasPlayedOnScroll])

  const handleManualPlay = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const video = videoRef.current
    if (!video) return
    video.muted = false
    try {
      video.currentTime = 0
    } catch {}
    video.play().catch(() => {})
  }

  const handleScroll = (e: React.MouseEvent<HTMLButtonElement>, targetId: string) => {
    e.preventDefault()
    const target = document.querySelector(targetId)
    target?.scrollIntoView({ behavior: "smooth" })
  }

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitMessage({ type: 'success', text: data.message || 'Message sent successfully!' })
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitMessage({ type: 'error', text: data.error || 'Failed to send message. Please try again.' })
      }
    } catch (error) {
      setSubmitMessage({ type: 'error', text: 'Network error. Please check your connection and try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Navigation />
      
      <style dangerouslySetInnerHTML={{__html: `
        .matrix-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          opacity: 0.15;
          pointer-events: none;
        }
        
        @keyframes glitch {
          0%, 100% { text-shadow: 0 0 20px #00f0ff; }
          25% { text-shadow: -2px 0 20px #00f0ff, 2px 2px 20px #ff0080; }
          50% { text-shadow: 2px 0 20px #00f0ff, -2px -2px 20px #ff0080; }
          75% { text-shadow: -2px 2px 20px #00f0ff, 2px 0 20px #ff0080; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}} />

      <canvas ref={canvasRef} className="matrix-bg" />

      {/* Hero Section */}
      <section className="min-h-[40vh] md:min-h-screen relative z-10 pt-20 md:pt-28 lg:pt-32 px-6 md:px-10 bg-black" id="home">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
          {/* Left: CAPTAIN HACKS */}
          <div className="order-1 md:order-1 flex items-start md:items-start justify-center">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none text-center">
                <span className="block mt-[100px] text-white">CAPTAIN</span>
                <span
                  className="block bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent"
                  style={{ animation: "float 3s ease-in-out infinite" }}
                >
                  HACKS
                </span>
              </h2>
              <div className="mt-6 md:mt-8 font-mono text-xs md:text-sm text-cyan-400 opacity-60">
                <div className="mb-2">$ ./captainhacks.exe</div>
                <div style={{ animation: "blink 1s step-end infinite" }}>&gt; Status: ACTIVE █</div>
              </div>
            </div>
          </div>

          {/* Right: Tagline and Nav */}
          <div className="order-2 md:order-2 relative before:content-[''] before:absolute before:left-0 before:top-0 before:w-[3px] before:h-[60%] before:bg-gradient-to-b before:from-transparent before:via-cyan-400 before:to-transparent before:animate-pulse">
            <div className="px-6 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-10 text-white md:mt-[130px]">
                Hacking the internet
                <br />
                one{" "}
                <span
                  className="text-cyan-400 animate-pulse"
                  style={{ textShadow: "0 0 20px #00f0ff", animation: "glitch 3s infinite" }}
                >
                  DEAL
                </span>{" "}
                at a time.
              </h1>
              <nav className="flex gap-8 mt-[100px] justify-center">
                <button
                  onClick={(e) => handleScroll(e, "#RECENT")}
                  className="text-gray-400 no-underline font-mono text-base md:text-lg uppercase tracking-widest cursor-pointer hover:text-cyan-400 transition-all duration-300 relative before:content-['>_'] before:opacity-0 before:-translate-x-2 before:transition-all before:duration-300 hover:before:opacity-100 hover:before:translate-x-0 bg-transparent border-0"
                >
                  work
                </button>
                <button
                  onClick={(e) => handleScroll(e, "#bio")}
                  className="text-gray-400 no-underline font-mono text-base md:text-lg uppercase tracking-widest cursor-pointer hover:text-cyan-400 transition-all duration-300 relative before:content-['>_'] before:opacity-0 before:-translate-x-2 before:transition-all before:duration-300 hover:before:opacity-100 hover:before:translate-x-0 bg-transparent border-0"
                >
                  bio
                </button>
                <button
                  onClick={(e) => handleScroll(e, "#contact")}
                  className="text-gray-400 no-underline font-mono text-base md:text-lg uppercase tracking-widest cursor-pointer hover:text-cyan-400 transition-all duration-300 relative before:content-['>_'] before:opacity-0 before:-translate-x-2 before:transition-all before:duration-300 hover:before:opacity-100 hover:before:translate-x-0 bg-transparent border-0"
                >
                  contact
                </button>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Video for Flash Sales Section */}
      <section className="min-h-[40vh] px-[8%] py-24 bg-gray-950 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Get a promo video for your small business.
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-cyan-400 mb-6 leading-tight">
              Delivery within 24 hours - Guaranteed.
            </p>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Fast, affordable videos designed for small businesses running flash deals or limited-time offers.
            </p>
            <div className="inline-block mb-4 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full">
              <span className="text-red-400 font-mono text-xs uppercase tracking-wider">⚡ 24-Hour Delivery</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Perfect for Flash Sales, Special Offers & Product Launches
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Left Column - Benefits */}
            <div className="bg-gradient-to-br from-black to-gray-900 border-2 border-cyan-500/30 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6 font-mono">
                Ideal for Small Businesses Who Need Video Ads — Fast.
              </h3>
              <ul className="space-y-4">
                {[
                  { icon: "⚡", text: "Ready in 24 hours" },
                  { icon: "🎭", text: "Custom character & message" },
                  { icon: "📱", text: "Optimised for Instagram, Facebook, and TikTok" },
                  { icon: "💰", text: "Priced for small business budgets" }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <span className="text-gray-300 text-lg pt-1">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - CTA Box */}
            <div className="bg-gradient-to-br from-red-900/30 to-pink-900/30 border-2 border-red-500/50 rounded-xl p-8 flex flex-col justify-center items-center text-center hover:scale-105 transition-all duration-300">
              <div className="mb-6">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-3xl font-black text-white mb-4">
                  Launch Your Sale Today
                </h3>
                <p className="text-lg text-gray-300">
                  Don't wait weeks for a video. Get yours in 24 hours.
                </p>
              </div>
              <a href="/flash-sales-videos">
                <button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold px-10 py-5 rounded-lg text-xl transition-all duration-300 hover:scale-105 shadow-[0_0_40px_rgba(239,68,68,0.3)] hover:shadow-[0_0_60px_rgba(239,68,68,0.5)] inline-flex items-center gap-2 uppercase tracking-wide">
                  Get My Promo Video Now <ArrowRight className="w-6 h-6" />
                </button>
              </a>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-cyan-900/30 to-pink-900/30 border-2 border-cyan-400/50 rounded-xl p-6">
            <p className="text-lg text-gray-300 mb-4">
              <span className="text-cyan-400 font-bold">Perfect for:</span> Weekend sales, product launches, clearance events, holiday promos, and any limited-time offer that needs urgency.
            </p>
            <p className="text-base text-gray-400 leading-relaxed">
              We promise to deliver you a quality promo ad very quickly. We would say it's best to plan ahead. Black Friday orders are flying in as well as Christmas promos. We will never take on any more work than we can deliver in the agreed turnaround time. We always aim for 24 hours, but don't be disappointed by leaving it too late.
            </p>
          </div>
        </div>
      </section>

      {/* Black Friday Special Video */}
      <section className="px-6 md:px-[8%] py-16 bg-black border-y-2 border-yellow-400">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block mb-4 px-6 py-3 bg-yellow-400/20 border-2 border-yellow-400 rounded-lg">
              <span className="text-yellow-400 font-mono text-lg uppercase tracking-wider font-bold">🔥 Black Friday Special</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-yellow-400 font-mono">
              35% OFF ALL VIDEOS
            </h2>
            <p className="text-xl text-gray-300 mb-2">
              Use code: <span className="text-cyan-400 font-mono font-bold">BLACK35%</span> at checkout
            </p>
            <p className="text-gray-400 text-sm">Limited time offer - Don't miss out!</p>
          </div>

          <div className="relative max-w-md mx-auto">
            <div className="relative aspect-[9/16] bg-black border-4 border-yellow-400 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(251,191,36,0.3)] cursor-pointer group"
              onClick={(e) => {
                const video = e.currentTarget.querySelector('video')
                if (video) {
                  if (video.paused) {
                    video.currentTime = 0
                    video.play().catch(err => console.log('Play failed:', err))
                  }
                }
              }}
            >
              <video
                className="w-full h-full object-cover"
                playsInline
                preload="auto"
              >
                <source src="/videos/Captain-Hacks-Hacker-Black-Friday-35%-Off.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center pointer-events-none">
                <Play className="w-20 h-20 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Examples Section */}
      <section className="px-6 md:px-[8%] py-20 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-pink-500/20 border border-pink-500/30 rounded-full">
              <span className="text-pink-400 font-mono text-xs uppercase tracking-wider">See It In Action</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
              🎬 Video Examples
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
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-pink-400 text-lg">Weekend Flash Sale</h4>
                  <button
                    onClick={(e) => toggleLike('weekend-flash-sale', e)}
                    className="transition-all duration-300 hover:scale-110 flex items-center gap-2"
                    aria-label="Like this video"
                  >
                    <span className="text-gray-400 font-mono text-sm">
                      {likeCounts['weekend-flash-sale'] || initialLikeCounts['weekend-flash-sale']}
                    </span>
                    <Heart
                      className={`w-6 h-6 ${
                        likes['weekend-flash-sale']
                          ? 'fill-pink-500 text-pink-500'
                          : 'text-gray-400 hover:text-pink-400'
                      }`}
                    />
                  </button>
                </div>
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
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-pink-400 text-lg">New Product Launch</h4>
                  <button
                    onClick={(e) => toggleLike('new-product-launch', e)}
                    className="transition-all duration-300 hover:scale-110 flex items-center gap-2"
                    aria-label="Like this video"
                  >
                    <span className="text-gray-400 font-mono text-sm">
                      {likeCounts['new-product-launch'] || initialLikeCounts['new-product-launch']}
                    </span>
                    <Heart
                      className={`w-6 h-6 ${
                        likes['new-product-launch']
                          ? 'fill-pink-500 text-pink-500'
                          : 'text-gray-400 hover:text-pink-400'
                      }`}
                    />
                  </button>
                </div>
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
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-pink-400 text-lg">Clearance Event</h4>
                  <button
                    onClick={(e) => toggleLike('clearance-event', e)}
                    className="transition-all duration-300 hover:scale-110 flex items-center gap-2"
                    aria-label="Like this video"
                  >
                    <span className="text-gray-400 font-mono text-sm">
                      {likeCounts['clearance-event'] || initialLikeCounts['clearance-event']}
                    </span>
                    <Heart
                      className={`w-6 h-6 ${
                        likes['clearance-event']
                          ? 'fill-pink-500 text-pink-500'
                          : 'text-gray-400 hover:text-pink-400'
                      }`}
                    />
                  </button>
                </div>
                <p className="text-gray-400 text-sm">Limited stock - ends midnight</p>
              </div>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-cyan-900/30 to-pink-900/30 border-2 border-cyan-400/50 rounded-2xl p-8">
            <p className="text-xl text-white font-semibold mb-4">
              Want to see our full portfolio?
            </p>
            <a href="/order-now">
              <button className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
                We will be adding more videos soon <ArrowRight className="w-5 h-5" />
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Service Offering Section */}
      <section className="min-h-[60vh] px-[8%] py-24 bg-gradient-to-b from-black to-gray-950 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-12 leading-tight">
            <span className="text-white">We'll Hack Your Brand</span>
            <br />
            <span className="text-cyan-400" style={{ textShadow: "0 0 20px #00f0ff" }}>
              Into People's Brains
            </span>
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-300">
            <p>
              Need a promo video that actually stops the scroll? We create short, sharp, attention-hijacking Facebook reels that make your business impossible to ignore.
            </p>
            
            <p>
              Each 15-20 second video features our Captain Hacks crew "infiltrating" your business to unleash your latest deal, discount, or offer. Think: a wizard conjuring 20% off wands, a nun blessing book discounts, a cop commandeering free pizza nights. Weird? Yes. Memorable? Absolutely.
            </p>
            
            <div 
              className="p-8 my-8 border-2 border-cyan-400 bg-black/50 relative"
              style={{ boxShadow: "0 0 30px rgba(0, 240, 255, 0.2)" }}
            >
              <div className="absolute -top-3 left-6 bg-gray-950 px-3 font-mono text-cyan-400 text-sm">
                PACKAGE_DETAILS
              </div>
              <p className="text-2xl md:text-3xl font-bold text-center">
                <span className="text-white">Your video. Your deal. 24 hours. </span>
                <span className="text-cyan-400" style={{ textShadow: "0 0 15px #00f0ff" }}>from $39.</span>
              </p>
            </div>
            
            <p>
              Perfect for restaurants, retail stores, service businesses, or anyone who needs fast, affordable video content that doesn't look like every other boring promo out there. No lengthy contracts. No corporate fluff. Just pay upfront, tell us your deal, and we'll hack it into existence.
            </p>
            
            <p className="text-xl md:text-2xl font-bold text-cyan-400 pt-4">
              Why settle for forgettable when you can be unforgettable?
            </p>
          </div>
        </div>
      </section>

      {/* Opening Statement Section */}
      <section className="px-[8%] py-24 bg-gradient-to-b from-black via-gray-950 to-black relative z-10 overflow-hidden">
        {/* Background accent elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto relative">
          {/* Top badge */}
          <div className="text-center mb-8">
            <span className="inline-block px-6 py-2 border-2 border-cyan-400 bg-cyan-400/10 text-cyan-400 font-mono text-sm uppercase tracking-widest">
              // Industry Alert
            </span>
          </div>
          
          {/* Main statement box */}
          <div 
            className="relative bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 p-8 md:p-12 lg:p-16 transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_50px_rgba(0,240,255,0.2)] group"
          >
            {/* Corner accent */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-cyan-400 opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-pink-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative z-10">
              <p className="text-2xl md:text-3xl lg:text-5xl leading-relaxed text-white font-bold mb-8">
                Short-form video has officially taken over{" "}
                <a 
                  href="/how-to-use-short-form-video" 
                  className="relative text-cyan-400 hover:text-pink-500 transition-all duration-300 underline decoration-2 underline-offset-8 decoration-cyan-400 hover:decoration-pink-500 inline-block group/link"
                  style={{ textShadow: "0 0 15px rgba(0, 240, 255, 0.5)" }}
                >
                  <span className="relative z-10">digital marketing</span>
                  <span className="absolute -right-6 top-0 opacity-0 group-hover/link:opacity-100 group-hover/link:-right-8 transition-all duration-300">→</span>
                </a>
              </p>
              
              <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-pink-500 mb-8"></div>
              
              <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-300">
                It's changing the game for small businesses everywhere. Whether you run a café, a startup, or an online store, mastering this format is{" "}
                <span className="relative inline-block">
                  <span className="text-pink-500 font-bold relative z-10">no longer optional</span>
                  <span className="absolute bottom-0 left-0 w-full h-2 bg-pink-500/20"></span>
                </span>
                {" "}— it's{" "}
                <span className="relative inline-block">
                  <span className="text-cyan-400 font-bold relative z-10">essential</span>
                  <span className="absolute bottom-0 left-0 w-full h-2 bg-cyan-400/20"></span>
                </span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="min-h-screen px-[8%] py-32 bg-gray-950" id="pricing">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-cyan-400 font-mono mb-4">
            Short video pricing options.
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-mono">
            Perfect for social media. <span className="text-pink-500">Fast Delivery</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Column 1 - Captain Hacks Video */}
          <div className="bg-black border-2 border-gray-700 p-8 hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] group">
            <h3 className="text-2xl font-bold text-white mb-2 font-mono">
              CAPTAIN HACKS VIDEO
            </h3>
            <div className="text-5xl font-bold text-cyan-400 my-6 font-mono">
              $39 USD
            </div>
            <ul className="space-y-4 mb-8 text-gray-400">
              <li className="flex items-start font-mono text-sm">
                <span className="text-cyan-400 mr-3 text-lg">▸</span>
                <span>UP TO 16 SEC VIDEO + END CARD</span>
              </li>
              <li className="flex items-start font-mono text-sm">
                <span className="text-cyan-400 mr-3 text-lg">▸</span>
                <span>24 HOUR DELIVERY GUARANTEE</span>
              </li>
              <li className="flex items-start font-mono text-sm">
                <span className="text-cyan-400 mr-3 text-lg">▸</span>
                <span>USE CAPTAIN HACKS CHARACTER</span>
              </li>
              <li className="flex items-start font-mono text-sm">
                <span className="text-cyan-400 mr-3 text-lg">▸</span>
                <span>SMALL CAPTAIN HACKS LOGO</span>
              </li>
            </ul>
            <a 
              href="/brandedcaptainhacksvideo"
              className="block w-full px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 font-mono text-base uppercase tracking-widest cursor-pointer relative overflow-hidden hover:text-black transition-colors duration-300 before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-cyan-400 before:transition-all before:duration-300 before:-z-10 hover:before:left-0 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] text-center no-underline"
            >
              ORDER NOW
            </a>
          </div>

          {/* Column 2 - Your Branding */}
          <div className="bg-black border-2 border-gray-700 p-8 hover:border-pink-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,0,128,0.3)] group">
            <h3 className="text-2xl font-bold text-white mb-2 font-mono">
              YOUR BRANDING ONLY
            </h3>
            <div className="text-5xl font-bold text-pink-500 my-6 font-mono">
              $49 USD
            </div>
            <ul className="space-y-4 mb-8 text-gray-400">
              <li className="flex items-start font-mono text-sm">
                <span className="text-pink-500 mr-3 text-lg">▸</span>
                <span>UP TO 16 SEC VIDEO + END CARD</span>
              </li>
              <li className="flex items-start font-mono text-sm">
                <span className="text-pink-500 mr-3 text-lg">▸</span>
                <span>24 HOUR DELIVERY GUARANTEE</span>
              </li>
              <li className="flex items-start font-mono text-sm">
                <span className="text-pink-500 mr-3 text-lg">▸</span>
                <span>CREATE YOUR OWN CHARACTER</span>
              </li>
              <li className="flex items-start font-mono text-sm">
                <span className="text-pink-500 mr-3 text-lg">▸</span>
                <span>NO CAPTAIN HACKS LOGO</span>
              </li>
            </ul>
            <a 
              href="/nonbrandedcaptainhacksvideo"
              className="block w-full px-8 py-4 bg-transparent border-2 border-pink-500 text-pink-500 font-mono text-base uppercase tracking-widest cursor-pointer relative overflow-hidden hover:text-black transition-colors duration-300 before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-pink-500 before:transition-all before:duration-300 before:-z-10 hover:before:left-0 group-hover:shadow-[0_0_20px_rgba(255,0,128,0.5)] text-center no-underline"
            >
              ORDER NOW
            </a>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm font-mono uppercase mb-2">// BULK ORDERS</p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Need multiple videos? <a href="#contact" className="text-cyan-400 hover:underline">Contact us</a> for bulk pricing. The more you order, the better the deal.
          </p>
        </div>
      </section>

      {/* RECENT Section */}
      <section className="min-h-screen px-[8%] py-32 bg-black" id="RECENT">
        <h2 className="text-5xl md:text-7xl font-bold mb-16 text-cyan-400 font-mono before:content-['//_'] before:text-gray-400 before:mr-4">
          RECENT CAPTAIN HACKS MISSIONS
        </h2>
        
        <p className="text-gray-400 text-center mb-8 font-mono text-sm">
          // HOVER TO PREVIEW • CLICK TO PLAY WITH SOUND
        </p>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Video 1 - femBARISTA */}
          <div 
            className="relative group bg-gray-950 border-2 border-gray-700 overflow-hidden hover:border-cyan-400 transition-all duration-300 cursor-pointer"
            style={{ aspectRatio: "9/16" }}
            onClick={(e) => {
              const video = e.currentTarget.querySelector('video')
              if (video) {
                if (video.paused) {
                  video.loop = false
                  video.muted = false
                  video.currentTime = 0
                  video.play()
                } else {
                  video.pause()
                  video.currentTime = 0
                  video.muted = true
                  video.loop = true
                }
              }
            }}
          >
            <video
              className="w-full h-full object-cover"
              loop
              muted
              playsInline
              preload="metadata"
              onMouseEnter={(e) => {
                if (e.currentTarget.muted) {
                  e.currentTarget.loop = true
                  e.currentTarget.play().catch(() => {})
                }
              }}
              onMouseLeave={(e) => {
                if (e.currentTarget.muted) {
                  e.currentTarget.pause()
                  e.currentTarget.currentTime = 0
                }
              }}
              onEnded={(e) => {
                e.currentTarget.loop = true
                e.currentTarget.muted = true
              }}
            >
              <source src="/videos/femBARISTA.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between pointer-events-none">
              <div className="p-4 flex justify-end pointer-events-auto">
                <button
                  onClick={(e) => toggleLike('fem-barista', e)}
                  className="transition-all duration-300 hover:scale-110 bg-black/50 p-2 rounded-full flex items-center gap-2"
                  aria-label="Like this video"
                >
                  <span className="text-gray-300 font-mono text-sm">
                    {likeCounts['fem-barista'] || initialLikeCounts['fem-barista']}
                  </span>
                  <Heart
                    className={`w-6 h-6 ${
                      likes['fem-barista']
                        ? 'fill-pink-500 text-pink-500'
                        : 'text-gray-400 hover:text-pink-400'
                    }`}
                  />
                </button>
              </div>
              <div className="p-6 text-white">
                <p className="font-mono text-sm text-cyan-400 mb-2">CLIENT: COFFEE SHOP</p>
                <p className="text-lg">Barista hacks your morning routine</p>
              </div>
            </div>
          </div>

          {/* Video 2 - newyorkcop */}
          <div 
            className="relative group bg-gray-950 border-2 border-gray-700 overflow-hidden hover:border-cyan-400 transition-all duration-300 cursor-pointer"
            style={{ aspectRatio: "9/16" }}
            onClick={(e) => {
              const video = e.currentTarget.querySelector('video')
              if (video) {
                if (video.paused) {
                  video.loop = false
                  video.muted = false
                  video.currentTime = 0
                  video.play()
                } else {
                  video.pause()
                  video.currentTime = 0
                  video.muted = true
                  video.loop = true
                }
              }
            }}
          >
            <video
              className="w-full h-full object-cover"
              loop
              muted
              playsInline
              preload="metadata"
              onMouseEnter={(e) => {
                if (e.currentTarget.muted) {
                  e.currentTarget.loop = true
                  e.currentTarget.play().catch(() => {})
                }
              }}
              onMouseLeave={(e) => {
                if (e.currentTarget.muted) {
                  e.currentTarget.pause()
                  e.currentTarget.currentTime = 0
                }
              }}
              onEnded={(e) => {
                e.currentTarget.loop = true
                e.currentTarget.muted = true
              }}
            >
              <source src="/videos/newyorkcop.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between pointer-events-none">
              <div className="p-4 flex justify-end pointer-events-auto">
                <button
                  onClick={(e) => toggleLike('newyork-cop', e)}
                  className="transition-all duration-300 hover:scale-110 bg-black/50 p-2 rounded-full flex items-center gap-2"
                  aria-label="Like this video"
                >
                  <span className="text-gray-300 font-mono text-sm">
                    {likeCounts['newyork-cop'] || initialLikeCounts['newyork-cop']}
                  </span>
                  <Heart
                    className={`w-6 h-6 ${
                      likes['newyork-cop']
                        ? 'fill-pink-500 text-pink-500'
                        : 'text-gray-400 hover:text-pink-400'
                    }`}
                  />
                </button>
              </div>
              <div className="p-6 text-white">
                <p className="font-mono text-sm text-cyan-400 mb-2">CLIENT: SECURITY SERVICES</p>
                <p className="text-lg">Cop catches the best deal</p>
              </div>
            </div>
          </div>

          {/* Video 3 - wizardemporium */}
          <div 
            className="relative group bg-gray-950 border-2 border-gray-700 overflow-hidden hover:border-cyan-400 transition-all duration-300 cursor-pointer"
            style={{ aspectRatio: "9/16" }}
            onClick={(e) => {
              const video = e.currentTarget.querySelector('video')
              if (video) {
                if (video.paused) {
                  video.loop = false
                  video.muted = false
                  video.currentTime = 0
                  video.play()
                } else {
                  video.pause()
                  video.currentTime = 0
                  video.muted = true
                  video.loop = true
                }
              }
            }}
          >
            <video
              className="w-full h-full object-cover"
              loop
              muted
              playsInline
              preload="metadata"
              onMouseEnter={(e) => {
                if (e.currentTarget.muted) {
                  e.currentTarget.loop = true
                  e.currentTarget.play().catch(() => {})
                }
              }}
              onMouseLeave={(e) => {
                if (e.currentTarget.muted) {
                  e.currentTarget.pause()
                  e.currentTarget.currentTime = 0
                }
              }}
              onEnded={(e) => {
                e.currentTarget.loop = true
                e.currentTarget.muted = true
              }}
            >
              <source src="/videos/wizardemporium.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between pointer-events-none">
              <div className="p-4 flex justify-end pointer-events-auto">
                <button
                  onClick={(e) => toggleLike('wizard-emporium', e)}
                  className="transition-all duration-300 hover:scale-110 bg-black/50 p-2 rounded-full flex items-center gap-2"
                  aria-label="Like this video"
                >
                  <span className="text-gray-300 font-mono text-sm">
                    {likeCounts['wizard-emporium'] || initialLikeCounts['wizard-emporium']}
                  </span>
                  <Heart
                    className={`w-6 h-6 ${
                      likes['wizard-emporium']
                        ? 'fill-pink-500 text-pink-500'
                        : 'text-gray-400 hover:text-pink-400'
                    }`}
                  />
                </button>
              </div>
              <div className="p-6 text-white">
                <p className="font-mono text-sm text-cyan-400 mb-2">CLIENT: MYSTICAL EMPORIUM</p>
                <p className="text-lg">Wizard conjures magical savings</p>
              </div>
            </div>
          </div>

          {/* Video 4 - aussiesurfer */}
          <div 
            className="relative group bg-gray-950 border-2 border-gray-700 overflow-hidden hover:border-cyan-400 transition-all duration-300 cursor-pointer"
            style={{ aspectRatio: "9/16" }}
            onClick={(e) => {
              const video = e.currentTarget.querySelector('video')
              if (video) {
                if (video.paused) {
                  video.loop = false
                  video.muted = false
                  video.currentTime = 0
                  video.play()
                } else {
                  video.pause()
                  video.currentTime = 0
                  video.muted = true
                  video.loop = true
                }
              }
            }}
          >
            <video
              className="w-full h-full object-cover"
              loop
              muted
              playsInline
              preload="metadata"
              onMouseEnter={(e) => {
                if (e.currentTarget.muted) {
                  e.currentTarget.loop = true
                  e.currentTarget.play().catch(() => {})
                }
              }}
              onMouseLeave={(e) => {
                if (e.currentTarget.muted) {
                  e.currentTarget.pause()
                  e.currentTarget.currentTime = 0
                }
              }}
              onEnded={(e) => {
                e.currentTarget.loop = true
                e.currentTarget.muted = true
              }}
            >
              <source src="/videos/aussiesurfer.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between pointer-events-none">
              <div className="p-4 flex justify-end pointer-events-auto">
                <button
                  onClick={(e) => toggleLike('aussie-surfer', e)}
                  className="transition-all duration-300 hover:scale-110 bg-black/50 p-2 rounded-full flex items-center gap-2"
                  aria-label="Like this video"
                >
                  <span className="text-gray-300 font-mono text-sm">
                    {likeCounts['aussie-surfer'] || initialLikeCounts['aussie-surfer']}
                  </span>
                  <Heart
                    className={`w-6 h-6 ${
                      likes['aussie-surfer']
                        ? 'fill-pink-500 text-pink-500'
                        : 'text-gray-400 hover:text-pink-400'
                    }`}
                  />
                </button>
              </div>
              <div className="p-6 text-white">
                <p className="font-mono text-sm text-cyan-400 mb-2">CLIENT: BEACH BRAND</p>
                <p className="text-lg">Surfer rides the wave of savings</p>
              </div>
            </div>
          </div>

          {/* Video 5 - sisterjane */}
          <div 
            className="relative group bg-gray-950 border-2 border-gray-700 overflow-hidden hover:border-cyan-400 transition-all duration-300 cursor-pointer"
            style={{ aspectRatio: "9/16" }}
            onClick={(e) => {
              const video = e.currentTarget.querySelector('video')
              if (video) {
                if (video.paused) {
                  video.loop = false
                  video.muted = false
                  video.currentTime = 0
                  video.play()
                } else {
                  video.pause()
                  video.currentTime = 0
                  video.muted = true
                  video.loop = true
                }
              }
            }}
          >
            <video
              className="w-full h-full object-cover"
              loop
              muted
              playsInline
              preload="metadata"
              onMouseEnter={(e) => {
                if (e.currentTarget.muted) {
                  e.currentTarget.loop = true
                  e.currentTarget.play().catch(() => {})
                }
              }}
              onMouseLeave={(e) => {
                if (e.currentTarget.muted) {
                  e.currentTarget.pause()
                  e.currentTarget.currentTime = 0
                }
              }}
              onEnded={(e) => {
                e.currentTarget.loop = true
                e.currentTarget.muted = true
              }}
            >
              <source src="/videos/sisterjane.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between pointer-events-none">
              <div className="p-4 flex justify-end pointer-events-auto">
                <button
                  onClick={(e) => toggleLike('sister-jane', e)}
                  className="transition-all duration-300 hover:scale-110 bg-black/50 p-2 rounded-full flex items-center gap-2"
                  aria-label="Like this video"
                >
                  <span className="text-gray-300 font-mono text-sm">
                    {likeCounts['sister-jane'] || initialLikeCounts['sister-jane']}
                  </span>
                  <Heart
                    className={`w-6 h-6 ${
                      likes['sister-jane']
                        ? 'fill-pink-500 text-pink-500'
                        : 'text-gray-400 hover:text-pink-400'
                    }`}
                  />
                </button>
              </div>
              <div className="p-6 text-white">
                <p className="font-mono text-sm text-cyan-400 mb-2">CLIENT: CHARITY</p>
                <p className="text-lg">Sister Jane blesses your discount</p>
              </div>
            </div>
          </div>

          {/* Video 6 - dogspa */}
          <div 
            className="relative group bg-gray-950 border-2 border-gray-700 overflow-hidden hover:border-cyan-400 transition-all duration-300 cursor-pointer"
            style={{ aspectRatio: "9/16" }}
            onClick={(e) => {
              const video = e.currentTarget.querySelector('video')
              if (video) {
                if (video.paused) {
                  video.loop = false
                  video.muted = false
                  video.currentTime = 0
                  video.play()
                } else {
                  video.pause()
                  video.currentTime = 0
                  video.muted = true
                  video.loop = true
                }
              }
            }}
          >
            <video
              className="w-full h-full object-cover"
              loop
              muted
              playsInline
              preload="metadata"
              onMouseEnter={(e) => {
                if (e.currentTarget.muted) {
                  e.currentTarget.loop = true
                  e.currentTarget.play().catch(() => {})
                }
              }}
              onMouseLeave={(e) => {
                if (e.currentTarget.muted) {
                  e.currentTarget.pause()
                  e.currentTarget.currentTime = 0
                }
              }}
              onEnded={(e) => {
                e.currentTarget.loop = true
                e.currentTarget.muted = true
              }}
            >
              <source src="/videos/dogspa.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between pointer-events-none">
              <div className="p-4 flex justify-end pointer-events-auto">
                <button
                  onClick={(e) => toggleLike('dog-spa', e)}
                  className="transition-all duration-300 hover:scale-110 bg-black/50 p-2 rounded-full flex items-center gap-2"
                  aria-label="Like this video"
                >
                  <span className="text-gray-300 font-mono text-sm">
                    {likeCounts['dog-spa'] || initialLikeCounts['dog-spa']}
                  </span>
                  <Heart
                    className={`w-6 h-6 ${
                      likes['dog-spa']
                        ? 'fill-pink-500 text-pink-500'
                        : 'text-gray-400 hover:text-pink-400'
                    }`}
                  />
                </button>
              </div>
              <div className="p-6 text-white">
                <p className="font-mono text-sm text-cyan-400 mb-2">CLIENT: PET SPA</p>
                <p className="text-lg">Pups get pampered for less</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-xl text-gray-400 mb-8 font-mono">
            <span className="text-cyan-400">// RESULT:</span> HIGHER ENGAGEMENT, MORE SALES, HAPPIER CLIENTS
          </p>
          <a 
            href="#pricing"
            className="inline-block px-10 py-5 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-mono text-lg uppercase tracking-widest hover:scale-105 transition-transform duration-300 no-underline"
          >
            HIRE US FOR YOUR HACK
          </a>
        </div>
      </section>

      {/* Video Comparison Section */}
      <section className="px-[8%] py-24 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white font-mono mb-8 text-center">
            Captain Hacks Video vs Your Brand Video — What's the Difference?
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed text-gray-300">
            <p className="text-xl text-center">
              Both deliver the same quality and punch — the only real difference is the style.
            </p>
            
            <div className="border-l-4 border-cyan-400 pl-6 py-4 bg-gray-950/50">
              <p className="font-mono text-cyan-400 uppercase text-sm mb-2">Captain Hacks Videos</p>
              <p>
                Feature our fun "hacker" characters who break into websites to unlock deals. They're fast for us to make and help spread the Captain Hacks story.
              </p>
            </div>
            
            <div className="border-l-4 border-pink-500 pl-6 py-4 bg-gray-950/50">
              <p className="font-mono text-pink-500 uppercase text-sm mb-2">Your Brand Videos</p>
              <p>
                Fully customized around your business — no hackers, just your message.
              </p>
            </div>
            
            <p className="text-center text-xl font-mono text-cyan-400 pt-4">
              Whichever you choose, you get a short, scroll-stopping video that gets attention fast.
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="min-h-screen px-[8%] py-32 bg-gray-950" id="bio">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-16 text-cyan-400 font-mono before:content-['//_'] before:text-gray-400 before:mr-4">
            WHO ARE WE?
          </h2>

          {/* Video Section */}
          <div className="mb-16 max-w-2xl mx-auto">
            <div className="relative border-2 border-cyan-400 p-2 bg-black/50 group">
              <video
                ref={videoRef}
                className="w-full rounded"
                controls
                playsInline
                preload="metadata"
              >
                <source src="/videos/captainhacksintro.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <button
                    onClick={handleManualPlay}
                    className="bg-cyan-500 hover:bg-cyan-400 text-black rounded-full p-6 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-400 pointer-events-auto"
                    aria-label="Play video"
                  >
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                </div>
              )}
            </div>
            <p className="text-center text-gray-500 font-mono text-sm mt-4">
              // CLICK PLAY TO MEET THE CREW
            </p>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-gray-300">
            <p>
              We're a crew of digital renegades, video hackers, and marketing misfits who got tired of watching small businesses waste money on boring ads that nobody remembers.
            </p>
            
            <p>
              While the big marketing agencies charge $5,000 for a single video and make you wait weeks for "revisions" and "creative consultations", we're out here delivering scroll-stopping content in 24 hours for the price of a decent dinner.
            </p>

            <div 
              className="p-6 my-8 border-l-4 border-cyan-400 bg-black/80"
            >
              <p className="text-xl font-mono text-cyan-400 mb-4">
                OUR MISSION:
              </p>
              <p className="text-lg">
                Hijack people's attention and redirect it to businesses that deserve it. No fluff. No corporate speak. Just fast, affordable, memorable video content that actually works.
              </p>
            </div>

            <p>
              Whether you're a restaurant promoting taco tuesday, a gym offering new member deals, or a retail store with a flash sale, we'll hack your message into the minds of your target audience using weird characters, punchy editing, and pure creative chaos.
            </p>

            <p className="text-xl font-bold text-pink-500">
              Too weird for mainstream. Too effective to ignore.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="min-h-screen px-4 sm:px-6 md:px-[8%] py-32 bg-gray-950 relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold mb-12 text-cyan-400 font-mono before:content-['//_'] before:text-gray-400 before:mr-4">
          QUICK QUESTIONS
        </h2>
        <p className="text-xl text-gray-400 mb-16 max-w-3xl">
          The answers you need. Click any question to expand.
        </p>

        <CollapsibleFAQ faqs={faqs} />
      </section>

      {/* Contact Section */}
      <section className="min-h-screen px-[8%] py-32 bg-black flex items-center" id="contact">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-5xl md:text-7xl font-bold mb-16 text-cyan-400 font-mono before:content-['//_'] before:text-gray-400 before:mr-4">
            INITIATE CONTACT
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left: Contact Form */}
            <div>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Ready to hack your marketing? Got questions? Need a custom package? Drop us a line.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-cyan-400 font-mono text-sm uppercase mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-gray-950 border-2 border-gray-700 text-white px-4 py-3 focus:border-cyan-400 focus:outline-none transition-colors font-mono"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-cyan-400 font-mono text-sm uppercase mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-gray-950 border-2 border-gray-700 text-white px-4 py-3 focus:border-cyan-400 focus:outline-none transition-colors font-mono"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-cyan-400 font-mono text-sm uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={6}
                    className="w-full bg-gray-950 border-2 border-gray-700 text-white px-4 py-3 focus:border-cyan-400 focus:outline-none transition-colors font-mono resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-mono text-base uppercase tracking-widest hover:from-cyan-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                </button>

                {submitMessage && (
                  <div className={`p-4 border-2 font-mono text-sm ${
                    submitMessage.type === 'success' 
                      ? 'border-green-500 bg-green-500/10 text-green-400' 
                      : 'border-red-500 bg-red-500/10 text-red-400'
                  }`}>
                    {submitMessage.text}
                  </div>
                )}
              </form>
            </div>

            {/* Right: Info */}
            <div className="flex flex-col justify-center">
              <div className="space-y-8">
                <div className="border-2 border-gray-700 p-6 hover:border-cyan-400 transition-colors">
                  <p className="text-cyan-400 font-mono text-sm uppercase mb-3">Response Time</p>
                  <p className="text-2xl font-bold text-white">
                    &lt; 24 HOURS
                  </p>
                  <p className="text-gray-400 mt-2">
                    We reply fast. If we are awake. We will answer you ASAP.
                  </p>
                </div>

                <div className="border-2 border-gray-700 p-6 hover:border-pink-500 transition-colors">
                  <p className="text-pink-500 font-mono text-sm uppercase mb-3">Bulk Orders</p>
                  <p className="text-2xl font-bold text-white">
                    CUSTOM PRICING
                  </p>
                  <p className="text-gray-400 mt-2">
                    Need multiple videos? Let's talk packages and discounts.
                  </p>
                </div>

                <div className="border-2 border-gray-700 p-6 hover:border-cyan-400 transition-colors">
                  <p className="text-cyan-400 font-mono text-sm uppercase mb-3">Questions</p>
                  <p className="text-lg text-white">
                    Not sure which package? Want to see more examples? Need something custom? Just ask.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-24 pt-12 border-t border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Column 1 - Resources */}
              <div>
                <h3 className="text-cyan-400 font-mono text-sm uppercase mb-4 tracking-wider">
                  Resources
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a 
                      href="/7-reasons-short-form-video" 
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    >
                      7 Reasons Your Brand Should Use Short-Form Video in 2025
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/how-to-use-short-form-video" 
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    >
                      How To Use Short Form Video in Digital Marketing
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/flash-sales-videos" 
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    >
                      Flash-Sale Videos That Sell Fast
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 2 - Quick Links */}
              <div>
                <h3 className="text-cyan-400 font-mono text-sm uppercase mb-4 tracking-wider">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a 
                      href="/#pricing" 
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/#RECENT" 
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    >
                      Our Work
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/#faq" 
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    >
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/promo-videos-for-small-business" 
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    >
                      Promo Videos for Small Business
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 3 - Contact */}
              <div>
                <h3 className="text-cyan-400 font-mono text-sm uppercase mb-4 tracking-wider">
                  Contact
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a 
                      href="#contact" 
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    >
                      Get in Touch
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center pt-8 border-t border-gray-700">
              <p className="text-gray-500 font-mono text-sm">
                © {new Date().getFullYear()} Captain Hacks. Hacking deals since day one.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

