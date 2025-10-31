"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Play, ArrowRight } from "lucide-react"

export default function NonBrandedOrderClient() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    websites: "",
    character: "",
    offer: "",
    orientation: "portrait"
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage(null)

    try {
      const emailBody = `
New Captain Hacks Video Order

Customer Name: ${formData.name}
Customer Email: ${formData.email}

Website/Social Links: ${formData.websites}

Character Description: ${formData.character}

Offer Description: ${formData.offer}

Video Orientation: ${formData.orientation}

---
This order was submitted from the Captain Hacks order page.
      `.trim()

      const response = await fetch('/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'sales@captainhacks.com',
          subject: `New Video Order - ${formData.name}`,
          message: emailBody,
          ...formData
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitMessage({ 
          type: 'success', 
          text: 'Order submitted! Redirecting to payment...' 
        })
        // Redirect to Stripe payment after 1.5 seconds
        setTimeout(() => {
          window.location.href = 'https://buy.stripe.com/7sY6oHe4Md6e1VP3c0fUQ02'
        }, 1500)
      } else {
        setSubmitMessage({ 
          type: 'error', 
          text: data.error || 'Failed to submit order. Please try again.' 
        })
      }
    } catch (error) {
      setSubmitMessage({ 
        type: 'error', 
        text: 'Network error. Please check your connection and try again.' 
      })
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
          25% { text-shadow: -2px 0 20px #00f0ff, 2px 2px 20px #fbbf24; }
          50% { text-shadow: 2px 0 20px #00f0ff, -2px -2px 20px #fbbf24; }
          75% { text-shadow: -2px 2px 20px #00f0ff, 2px 0 20px #fbbf24; }
        }
      `}} />

      <canvas ref={canvasRef} className="matrix-bg" />

      {/* Main Content */}
      <section className="relative z-10 min-h-screen px-6 md:px-[8%] py-16 md:py-32 bg-gray-950">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center">
            <span className="text-cyan-400 font-mono">ORDER YOUR</span>
            <br />
            <span className="text-yellow-400 font-mono">NON BRANDED VIDEO</span>
          </h2>

          {/* Introduction Section */}
          <div className="bg-black border-2 border-cyan-400 p-8 mb-12 shadow-[0_0_30px_rgba(0,240,255,0.2)]">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6 font-mono before:content-['//_'] before:text-gray-400 before:mr-4">
              WHAT WE NEED FROM YOU
            </h3>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <div className="flex items-start">
                <span className="text-cyan-400 mr-3 text-xl font-mono">▸</span>
                <p>
                  <strong className="text-white">Our NON branded videos</strong> will feature a character who will NOT have the name 
                  <span className="text-cyan-400 font-mono"> "Captain Hacks" </span> 
                  featured anywhere on their clothing.
                </p>
              </div>

              <div className="flex items-start">
                <span className="text-cyan-400 mr-3 text-xl font-mono">▸</span>
                <p>
                  The video will NOT have a small 
                  <span className="text-yellow-400 font-mono"> Captain Hacks logo </span> 
                  featured at the bottom of the video.
                </p>
              </div>

              <div className="flex items-start">
                <span className="text-cyan-400 mr-3 text-xl font-mono">▸</span>
                <p>
                  You can either choose to use one of the 
                  <strong className="text-white"> characters that we have already used </strong> 
                  in our featured videos, or give us the 
                  <span className="text-cyan-400"> age, gender, and physical appearance </span> 
                  of a new character that we will use to create your video. You can give us an entirely new scenario to create your promotional video idea.  
                </p>
              </div>

              <div className="flex items-start">
                <span className="text-yellow-400 mr-3 text-xl font-mono">N.B</span>
                <p>
                  <strong className="text-yellow-400">The video play time can be a maximum of 16 seconds.</strong> So try not to overcomplicate the scenario, otherwise it won't work as well. We want it to be short and catchy. We can add a card at the end of the video that displays the offer.
                </p>
              </div>

              <div className="flex items-start">
                <span className="text-cyan-400 mr-3 text-xl font-mono">▸</span>
                <p>
                  Describe the 
                  <strong className="text-white"> exact offer </strong> 
                  that you want the character to hack into your website, etc.
                </p>
              </div>

              <div className="flex items-start">
                <span className="text-cyan-400 mr-3 text-xl font-mono">▸</span>
                <p>
                  Give us the 
                  <span className="text-yellow-400"> links to your websites, socials, etc. </span>, 
                  so that we can get a feel for the style of your business.
                </p>
              </div>

              <div className="flex items-start">
                <span className="text-yellow-400 mr-3 text-xl font-mono">!</span>
                <p>
                  <strong className="text-yellow-400">IMPORTANT:</strong> Choose the video orientation 
                  <span className="text-white"> (portrait or landscape)</span>.
                </p>
              </div>

              <div className="flex items-start">
                <span className="text-cyan-400 mr-3 text-xl font-mono">▸</span>
                <p className="text-cyan-400 font-bold">
                  Leave the rest to us. We will have your video back to you within 24 hours!
                </p>
            </div>
          </div>
        </div>

        {/* Video Examples Section */}
        <div className="mb-16">
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
              <button className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
                We will be adding more example videos soon <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>

        {/* Order Form */}
        <div className="bg-black border-2 border-gray-700 p-8 mb-12">
            <h3 className="text-2xl font-bold text-yellow-400 mb-8 font-mono before:content-['//_'] before:text-gray-400 before:mr-4">
              ORDER DETAILS
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block font-mono text-cyan-400 mb-2 text-sm">
                  YOUR NAME: <span className="text-yellow-400">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-4 bg-gray-950 border-2 border-gray-700 text-white font-sans text-base focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300"
                  placeholder="John Smith"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block font-mono text-cyan-400 mb-2 text-sm">
                  YOUR EMAIL ADDRESS: <span className="text-yellow-400">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-4 bg-gray-950 border-2 border-gray-700 text-white font-sans text-base focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              {/* Website/Social Links */}
              <div>
                <label htmlFor="websites" className="block font-mono text-cyan-400 mb-2 text-sm">
                  YOUR WEBSITE, FACEBOOK, INSTAGRAM, ETC: <span className="text-yellow-400">*</span>
                </label>
                <textarea
                  id="websites"
                  required
                  value={formData.websites}
                  onChange={(e) => setFormData({ ...formData, websites: e.target.value })}
                  className="w-full p-4 bg-gray-950 border-2 border-gray-700 text-white font-sans text-base min-h-[100px] resize-y focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300"
                  placeholder="https://www.yourbusiness.com&#10;https://facebook.com/yourbusiness&#10;https://instagram.com/yourbusiness"
                />
              </div>

              {/* Character Description */}
              <div>
                <label htmlFor="character" className="block font-mono text-cyan-400 mb-2 text-sm">
                  DESCRIPTION OF CHARACTER: <span className="text-yellow-400">*</span>
                </label>
                <p className="text-gray-400 text-sm mb-2 font-mono">
                  (Choose from our featured videos OR describe: age, gender, physical appearance)
                </p>
                <textarea
                  id="character"
                  required
                  value={formData.character}
                  onChange={(e) => setFormData({ ...formData, character: e.target.value })}
                  className="w-full p-4 bg-gray-950 border-2 border-gray-700 text-white font-sans text-base min-h-[120px] resize-y focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300"
                  placeholder="Use the wizard from your featured videos OR: Male, 30s, wearing a suit and sunglasses, professional appearance"
                />
              </div>

              {/* Offer Description */}
              <div>
                <label htmlFor="offer" className="block font-mono text-cyan-400 mb-2 text-sm">
                  DESCRIPTION OF OFFER: <span className="text-yellow-400">*</span>
                </label>
                <p className="text-gray-400 text-sm mb-2 font-mono">
                  (The exact deal/offer you want Captain Hacks to hack into your site)
                </p>
                <textarea
                  id="offer"
                  required
                  value={formData.offer}
                  onChange={(e) => setFormData({ ...formData, offer: e.target.value })}
                  className="w-full p-4 bg-gray-950 border-2 border-gray-700 text-white font-sans text-base min-h-[120px] resize-y focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300"
                  placeholder="20% off all pizzas this weekend! Use code HACK20 at checkout."
                />
              </div>

              {/* Video Orientation */}
              <div>
                <label className="block font-mono text-cyan-400 mb-3 text-sm">
                  VIDEO ORIENTATION: <span className="text-yellow-400">*</span>
                </label>
                <div className="flex flex-col md:flex-row gap-6">
                  <label className="flex items-center cursor-pointer group">
                    <input
                      type="radio"
                      name="orientation"
                      value="portrait"
                      checked={formData.orientation === "portrait"}
                      onChange={(e) => setFormData({ ...formData, orientation: e.target.value })}
                      className="w-5 h-5 mr-3 accent-cyan-400"
                    />
                    <span className="text-white font-mono group-hover:text-cyan-400 transition-colors">
                      Portrait (9:16) - For Instagram/TikTok/Reels
                    </span>
                  </label>
                  <label className="flex items-center cursor-pointer group">
                    <input
                      type="radio"
                      name="orientation"
                      value="landscape"
                      checked={formData.orientation === "landscape"}
                      onChange={(e) => setFormData({ ...formData, orientation: e.target.value })}
                      className="w-5 h-5 mr-3 accent-yellow-400"
                    />
                    <span className="text-white font-mono group-hover:text-yellow-400 transition-colors">
                      Landscape (16:9) - For YouTube/Facebook
                    </span>
                  </label>
                </div>
              </div>

              {/* Price Display */}
              <div className="bg-gray-900 border-2 border-yellow-400 p-6 rounded-none">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-mono">TOTAL PRICE:</span>
                  <span className="text-4xl font-bold text-yellow-400 font-mono">$49</span>
                </div>
                <p className="text-gray-400 text-xs mt-2 font-mono">
                  ✓ 24 HOUR DELIVERY GUARANTEE • ✓ SECURE STRIPE PAYMENT
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-5 bg-transparent border-2 border-yellow-400 text-yellow-400 font-mono text-base uppercase tracking-widest cursor-pointer relative overflow-hidden hover:text-black transition-colors duration-300 before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-yellow-400 before:transition-all before:duration-300 before:-z-10 hover:before:left-0 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'PROCESSING...' : 'SUBMIT & PAY NOW → $49'}
              </button>

              {submitMessage && (
                <div className={`p-4 border-2 font-mono text-sm ${
                  submitMessage.type === 'success' 
                    ? 'border-cyan-400 text-cyan-400 bg-cyan-400/10' 
                    : 'border-red-400 text-red-400 bg-red-400/10'
                }`}>
                  {submitMessage.text}
                </div>
              )}
            </form>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <a 
              href="/" 
              className="text-cyan-400 hover:text-cyan-300 font-mono text-sm underline"
            >
              ← BACK TO CAPTAIN HACKS HOME
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

