"use client"

import { useEffect, useRef, useState } from "react"

export default function CaptainHacks() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [hasPlayedOnScroll, setHasPlayedOnScroll] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert("Message sent! (Demo only)")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <>
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
      <section className="min-h-[40vh] md:min-h-screen relative z-10 pt-20 md:pt-28 lg:pt-32 px-6 md:px-10" id="home">
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-10">
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
                  onClick={(e) => handleScroll(e, "#work")}
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

      {/* Video Section */}
      <section className="min-h-screen flex items-center justify-center px-[8%] py-16 relative bg-gradient-to-b from-black to-gray-950">
        <div
          className="w-full max-w-7xl aspect-video bg-black border-2 border-cyan-400 relative overflow-hidden"
          style={{ boxShadow: "0 0 40px rgba(0, 240, 255, 0.3)" }}
        >
          <div className="absolute top-5 left-5 font-mono text-xs text-cyan-400 z-10">SHOWCASE REEL</div>
          <div className="relative w-full h-full">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src="/videos/captainhacksintro.mp4"
              controls
              playsInline
              preload="metadata"
            />
            {!isPlaying && (
              <button
                onClick={handleManualPlay}
                className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-black/60 border-2 border-cyan-400 text-cyan-400 flex items-center justify-center hover:scale-105 transition-transform duration-200"
                aria-label="Play video"
                style={{ width: 80, height: 80 }}
              >
                <span className="text-3xl">▶</span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="min-h-screen px-[8%] py-32 bg-gray-950" id="bio">
        <h2 className="text-5xl md:text-7xl font-bold mb-12 text-cyan-400 font-mono before:content-['//_'] before:text-gray-400 before:mr-4">
          BIO
        </h2>
        <div className="max-w-4xl text-xl leading-relaxed text-gray-400 space-y-6">
          <p>
          Captain Hacks is a cheeky rogue hacker who scans the internet to conjuring up  deals for ordinary people. He stealthily slips into ticketing websites  and merchants menus sneakily  nudging  prices down.
          </p>
          <p>
          He has made it his mission is to bring you deals that will help with todays cost of living crisis. 
          </p>
          <p>
          He spends his nights scouring the internet stealthily seeking out weaknesses in security systems worldwide , sneakily hacking the internet to bring down prices one deal at a time.
          </p>
        </div>
      </section>

      {/* Work Section */}
      <section className="min-h-screen px-[8%] py-32 bg-black" id="work">
        <h2 className="text-5xl md:text-7xl font-bold mb-12 text-cyan-400 font-mono before:content-['//_'] before:text-gray-400 before:mr-4">
          WORK
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className="aspect-[9/16] bg-gray-950 border-2 border-transparent relative overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300 group"
            >
              {num === 1 ? (
                <video
                  className="w-full h-full object-cover"
                  src="/videos/captainhackssun.mp4"
                  controls
                  playsInline
                  preload="metadata"
                />
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <div className="w-full h-full flex items-center justify-center font-mono text-cyan-400 text-5xl">
                    [{num}]
                  </div>
                  <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="font-mono text-xl text-cyan-400 mb-2">HACK #{String(num).padStart(3, "0")}</div>
                    <div className="text-sm text-gray-400">
                      {num === 2 ? "Flash Sale Video" : "Limited Offer Promo"}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen flex flex-col md:flex-row bg-gray-950" id="contact">
        <div className="flex-1 bg-black relative overflow-hidden min-h-[400px] md:min-h-0">
          <div
            className="w-full h-full flex items-center justify-center font-mono text-2xl text-cyan-400"
            style={{
              background:
                "linear-gradient(45deg, #0a0a0a 25%, transparent 25%, transparent 75%, #0a0a0a 75%, #0a0a0a), linear-gradient(45deg, #0a0a0a 25%, transparent 25%, transparent 75%, #0a0a0a 75%, #0a0a0a)",
              backgroundSize: "30px 30px",
              backgroundPosition: "0 0, 15px 15px",
            }}
          >
            MAP_LOCATION://LOADING...
          </div>
        </div>
        <div className="flex-1 px-[6%] py-32 flex flex-col justify-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-12 text-cyan-400 font-mono before:content-['//_'] before:text-gray-400 before:mr-4">
            CONTACT
          </h2>
          <form onSubmit={handleSubmit} className="max-w-2xl">
            <div className="mb-8">
              <label htmlFor="name" className="block font-mono text-cyan-400 mb-2 text-sm">NAME:</label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-4 bg-black border-2 border-gray-700 text-white font-sans text-base focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300"
              />
            </div>
            <div className="mb-8">
              <label htmlFor="email" className="block font-mono text-cyan-400 mb-2 text-sm">EMAIL:</label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-4 bg-black border-2 border-gray-700 text-white font-sans text-base focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300"
              />
            </div>
            <div className="mb-8">
              <label htmlFor="message" className="block font-mono text-cyan-400 mb-2 text-sm">MESSAGE:</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-4 bg-black border-2 border-gray-700 text-white font-sans text-base min-h-[150px] resize-y focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300"
              />
            </div>
            <button
              type="submit"
              className="px-12 py-5 bg-transparent border-2 border-cyan-400 text-cyan-400 font-mono text-base uppercase tracking-widest cursor-pointer relative overflow-hidden hover:text-black transition-colors duration-300 before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-cyan-400 before:transition-all before:duration-300 before:-z-10 hover:before:left-0"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
