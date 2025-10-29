"use client"

import { useEffect, useRef, useState } from "react"
import { Navigation } from "@/components/navigation"
import { CollapsibleFAQ } from "@/components/collapsible-faq"

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

      {/* Digital Marketing Section */}
      <section className="min-h-[40vh] px-[8%] py-24 bg-black relative z-10 flex items-center justify-center">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cyan-400 uppercase tracking-tight">
            DIGITAL MARKETING DONE DIFFERENTLY
          </h2>
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
                <span className="text-cyan-400" style={{ textShadow: "0 0 15px #00f0ff" }}>from $49.</span>
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
              $49 USD
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
                <span>SMALL CAPTAIN HACKS WATERMARK</span>
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
              $69 USD
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
                <span>NO CAPTAIN HACKS WATERMARK</span>
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end pointer-events-none">
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end pointer-events-none">
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end pointer-events-none">
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end pointer-events-none">
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end pointer-events-none">
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end pointer-events-none">
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

