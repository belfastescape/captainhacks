"use client"

import { MatrixBackground } from "@/components/matrix-background"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { RelatedArticles } from "@/components/related-articles"
import { Breadcrumbs } from "@/components/breadcrumbs"
import Link from "next/link"
import { ArrowRight, Clock, Eye, TrendingUp, Video, Users, Zap, DollarSign, ChevronRight, Play } from "lucide-react"
import { useEffect, useState } from "react"

// Stat Card Component
function StatCard({ number, label, color = "cyan" }: { number: string; label: string; color?: "cyan" | "pink" }) {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])
  
  const colorClasses = color === "cyan" 
    ? "border-cyan-400 bg-cyan-500/10" 
    : "border-pink-400 bg-pink-500/10"
  const textColor = color === "cyan" ? "text-cyan-400" : "text-pink-400"
  
  return (
    <div 
      className={`p-6 border-2 ${colorClasses} transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } hover:scale-105 hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]`}
    >
      <div className={`text-4xl md:text-5xl font-bold ${textColor} mb-2 font-mono`}>
        {number}
      </div>
      <p className="text-gray-300 text-sm md:text-base">{label}</p>
    </div>
  )
}

export function SevenReasonsClient() {
  const [activeSection, setActiveSection] = useState(0)
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]')
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(index)
        }
      })
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const scrollToSection = (index: number) => {
    const sections = document.querySelectorAll('[data-section]')
    sections[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  
  const reasons = [
    "The Attention Economy Is Fiercer Than Ever",
    "Your Customers Have Already Chosen Video",
    "Short-Form Content Outperforms Everything Else",
    "Complex Products Deserve Simple Explanations",
    "Trust Comes From Authenticity",
    "The Algorithm Loves Short-Form Video",
    "The ROI Speaks for Itself"
  ]
  
  return (
    <>
      <MatrixBackground />
      <Navigation />
      
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-900 z-50">
        <div 
          className="h-full bg-gradient-to-r from-cyan-400 to-pink-500 transition-all duration-300"
          style={{ width: `${(activeSection / 7) * 100}%` }}
        />
      </div>
      
      <Breadcrumbs
        items={[
          { label: "Resources", href: "/#" },
          { label: "7 Reasons to Use Short-Form Video" }
        ]}
      />
      
      <div className="min-h-screen bg-black text-white relative z-10">
        {/* Hero Section */}
        <section className="px-6 md:px-[8%] pt-32 pb-16">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-400/30 rounded-full mb-6">
                <span className="text-cyan-400 font-mono text-sm uppercase tracking-wider">
                  Digital Marketing 2025
                </span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-center">
              <span className="text-white">How Smart Brands Are Using </span>
              <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent animate-pulse">
                Short-Form Video
              </span>
              <span className="text-white"> in Digital Marketing in 2025</span>
            </h1>
            
            <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-12">
              Master the format that's dominating digital marketing and stay ahead of your competitors
            </p>
            
            {/* Quick Jump Navigation */}
            <div className="bg-gray-950/50 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
              <p className="text-cyan-400 font-mono text-sm uppercase mb-4 text-center">
                Jump to Section:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {reasons.map((reason, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(index)}
                    className={`text-left px-4 py-2 rounded transition-all duration-300 ${
                      activeSection === index
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/50'
                        : 'bg-gray-900/50 text-gray-400 hover:bg-gray-800 hover:text-cyan-400 border border-transparent'
                    }`}
                  >
                    <span className="font-mono text-sm mr-2">{index + 1}.</span>
                    <span className="text-sm">{reason}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="px-6 md:px-[8%] py-16 bg-gradient-to-b from-black to-gray-950">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 via-gray-950 to-black border border-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl">
              <div className="space-y-6 text-lg md:text-xl leading-relaxed">
                <p className="text-gray-300">
                  Short-form video has officially taken over digital marketing. Whether you're a business owner, marketing director, or brand strategist, mastering this format is <span className="text-white font-semibold">no longer optional — it's essential</span>.
                </p>
                
                <p className="text-gray-300">
                  Your competitors are already using short, scroll-stopping clips to win attention and convert customers. While others are still tweaking web copy or planning campaigns, they're <span className="text-cyan-400 font-semibold">generating thousands of views with 15-second videos</span> that make people stop and think, "I need that."
                </p>
                
                <div className="bg-cyan-500/10 border-l-4 border-cyan-400 p-6 rounded-r-lg my-8">
                  <p className="text-cyan-400 font-bold text-xl">
                    Here's why short-form video marketing is dominating in 2025 — and what smart brands are doing to take advantage of it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reason 1 */}
        <section data-section className="px-6 md:px-[8%] py-20 bg-gray-950">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent border border-cyan-500/20 rounded-2xl p-8 md:p-12">
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-cyan-500/20 flex items-center justify-center border-2 border-cyan-400 shadow-[0_0_30px_rgba(0,240,255,0.3)]">
                  <Clock className="w-10 h-10 text-cyan-400" />
                </div>
                <div>
                  <div className="text-cyan-400 font-mono text-sm mb-2">REASON #1</div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    The Attention Economy Is Fiercer Than Ever
                  </h2>
                </div>
              </div>
              
              {/* Highlighted Stat */}
              <div className="mb-8">
                <StatCard 
                  number="1.7 SEC" 
                  label="Average time to capture attention before users scroll away"
                  color="cyan"
                />
              </div>
              
              <div className="space-y-6 text-lg leading-relaxed text-gray-300">
                <p>
                  You have <span className="text-cyan-400 font-bold">1.7 seconds</span> to stop someone from scrolling past your content. That's barely enough time to show your logo — but just enough for a quick video to grab attention, deliver value, and leave a lasting impression.
                </p>
                
                <p>
                  That's why brands are pivoting toward short-form video content designed for speed and impact — <span className="text-white font-semibold">15- to 60-second clips</span> that make every moment count.
                </p>
                
                <div className="bg-gradient-to-r from-cyan-500/10 to-transparent border-l-4 border-cyan-400 p-6 rounded-r-lg backdrop-blur-sm">
                  <p className="font-bold text-white mb-2 flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 text-cyan-400" />
                    The reality:
                  </p>
                  <p className="text-gray-300">Audiences aren't waiting for your message; they're scrolling away from it. The question is whether your content is strong enough to make them stop.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reason 2 */}
        <section data-section className="px-6 md:px-[8%] py-20 bg-black">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-pink-500/5 via-transparent to-transparent border border-pink-500/20 rounded-2xl p-8 md:p-12">
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-pink-500/20 flex items-center justify-center border-2 border-pink-400 shadow-[0_0_30px_rgba(255,0,128,0.3)]">
                  <Users className="w-10 h-10 text-pink-400" />
                </div>
                <div>
                  <div className="text-pink-400 font-mono text-sm mb-2">REASON #2</div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    Your Customers Have Already Chosen Video
                  </h2>
                </div>
              </div>
              
              <p className="text-2xl font-bold text-white mb-8">The data says it all.</p>
              
              {/* Highlighted Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <StatCard 
                  number="73%" 
                  label="Consumers prefer short-form videos to learn about products"
                  color="pink"
                />
                <StatCard 
                  number="92%" 
                  label="Gen Z consumers watch short-form video daily"
                  color="pink"
                />
                <StatCard 
                  number="90%" 
                  label="Millennials consume short-form content daily"
                  color="pink"
                />
              </div>
              
              <div className="space-y-6 text-lg leading-relaxed text-gray-300">
                <p>
                  <span className="text-pink-400 font-bold">73% of consumers</span> prefer short-form videos to learn about products or services. Among Gen Z — the generation shaping future buying power — <span className="text-white font-semibold">57% use short videos for product research</span>.
                </p>
                
                <p>
                  Even more striking: <span className="text-pink-400 font-bold">92% of Gen Z and 90% of Millennials</span> consume short-form video content daily. If your brand isn't showing up where they already spend time, <span className="text-white font-semibold">you're invisible</span>.
                </p>
                
                <div className="bg-gradient-to-r from-pink-500/10 to-transparent border-l-4 border-pink-400 p-6 rounded-r-lg backdrop-blur-sm">
                  <p className="font-bold text-white mb-2 flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 text-pink-400" />
                    The reality:
                  </p>
                  <p className="text-gray-300">You can't wait for customers to come to you. You have to meet them where they are — on TikTok, Instagram Reels, and YouTube Shorts.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reason 3 */}
        <section data-section className="px-6 md:px-[8%] py-20 bg-gray-950">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent border border-cyan-500/20 rounded-2xl p-8 md:p-12">
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-cyan-500/20 flex items-center justify-center border-2 border-cyan-400 shadow-[0_0_30px_rgba(0,240,255,0.3)]">
                  <TrendingUp className="w-10 h-10 text-cyan-400" />
                </div>
                <div>
                  <div className="text-cyan-400 font-mono text-sm mb-2">REASON #3</div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    Short-Form Content Outperforms Everything Else
                  </h2>
                </div>
              </div>
              
              {/* Highlighted Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <StatCard 
                  number="2.5×" 
                  label="More engagement vs long-form content"
                  color="cyan"
                />
                <StatCard 
                  number="66%" 
                  label="Marketers rank short-form as most engaging format"
                  color="cyan"
                />
              </div>
              
              <div className="space-y-6 text-lg leading-relaxed text-gray-300">
                <p>
                  Numbers don't lie. Short-form videos generate <span className="text-cyan-400 font-bold">2.5× more engagement</span> than long-form content.
                </p>
                
                <p>
                  <span className="font-semibold text-white">Why it matters:</span> engagement fuels algorithms. It drives reach, awareness, and conversions. That's why <span className="text-cyan-400 font-bold">66% of marketers</span> rank short-form as the most engaging format — and nearly half report higher viral potential than any other type of content.
                </p>
                
                <div className="bg-gradient-to-r from-cyan-500/10 to-transparent border-l-4 border-cyan-400 p-6 rounded-r-lg backdrop-blur-sm">
                  <p className="font-bold text-white mb-2 flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 text-cyan-400" />
                    The reality:
                  </p>
                  <p className="text-gray-300">You don't need a bigger ad budget — you need a better short-form video strategy.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reason 4 */}
        <section data-section className="px-6 md:px-[8%] py-20 bg-black">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-pink-500/5 via-transparent to-transparent border border-pink-500/20 rounded-2xl p-8 md:p-12">
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-pink-500/20 flex items-center justify-center border-2 border-pink-400 shadow-[0_0_30px_rgba(255,0,128,0.3)]">
                  <Video className="w-10 h-10 text-pink-400" />
                </div>
                <div>
                  <div className="text-pink-400 font-mono text-sm mb-2">REASON #4</div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    Complex Products Deserve Simple, Visual Explanations
                  </h2>
                </div>
              </div>
              
              {/* Highlighted Stat */}
              <div className="mb-8">
                <StatCard 
                  number="72%" 
                  label="Customers prefer learning about products through video"
                  color="pink"
                />
              </div>
              
              <div className="space-y-6 text-lg leading-relaxed text-gray-300">
                <p>
                  If your product or service takes more than a few sentences to explain, <Link href="/how-to-use-short-form-video" className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400/30 hover:decoration-cyan-400 transition-all duration-300">video marketing</Link> can do what text can't.
                </p>
                
                <p>
                  <span className="text-pink-400 font-bold">72% of customers</span> prefer learning about products through video, and shorter clips perform best. A <span className="text-white font-semibold">30-second "before and after"</span> or quick transformation story communicates value faster than any paragraph ever could.
                </p>
                
                <div className="bg-gradient-to-r from-pink-500/10 to-transparent border-l-4 border-pink-400 p-6 rounded-r-lg backdrop-blur-sm">
                  <p className="font-bold text-white mb-2 flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 text-pink-400" />
                    The reality:
                  </p>
                  <p className="text-gray-300">If you can't explain your offer clearly and visually in 30 seconds, you're losing conversions.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reason 5 */}
        <section data-section className="px-6 md:px-[8%] py-20 bg-gray-950">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent border border-cyan-500/20 rounded-2xl p-8 md:p-12">
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-cyan-500/20 flex items-center justify-center border-2 border-cyan-400 shadow-[0_0_30px_rgba(0,240,255,0.3)]">
                  <Eye className="w-10 h-10 text-cyan-400" />
                </div>
                <div>
                  <div className="text-cyan-400 font-mono text-sm mb-2">REASON #5</div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    Trust Comes From Authenticity, Not Ad Spend
                  </h2>
                </div>
              </div>
              
              <div className="space-y-6 text-lg leading-relaxed text-gray-300">
                <p className="text-2xl font-semibold text-white">
                  People buy from people they trust — not faceless corporations.
                </p>
                
                <p>
                  Short-form video humanizes your brand by featuring your team, your customers, and real stories. The best-performing videos on social media <span className="text-cyan-400 font-bold">don't look like ads</span> — they look like <span className="text-white font-semibold">genuine, helpful content from real people</span>.
                </p>
                
                <div className="bg-gradient-to-r from-cyan-500/10 to-transparent border-l-4 border-cyan-400 p-6 rounded-r-lg backdrop-blur-sm">
                  <p className="font-bold text-white mb-2 flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 text-cyan-400" />
                    The reality:
                  </p>
                  <p className="text-gray-300">Authenticity always wins. Viewers can spot overproduced or fake content instantly. Keep it real, and your engagement will rise.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reason 6 */}
        <section data-section className="px-6 md:px-[8%] py-20 bg-black">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-pink-500/5 via-transparent to-transparent border border-pink-500/20 rounded-2xl p-8 md:p-12">
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-pink-500/20 flex items-center justify-center border-2 border-pink-400 shadow-[0_0_30px_rgba(255,0,128,0.3)]">
                  <Zap className="w-10 h-10 text-pink-400" />
                </div>
                <div>
                  <div className="text-pink-400 font-mono text-sm mb-2">REASON #6</div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    The Algorithm Loves Short-Form Video
                  </h2>
                </div>
              </div>
              
              {/* Highlighted Stat */}
              <div className="mb-8">
                <StatCard 
                  number="82%" 
                  label="Of all internet traffic in 2025 is video content"
                  color="pink"
                />
              </div>
              
              <div className="space-y-6 text-lg leading-relaxed text-gray-300">
                <p>
                  Social media algorithms now prioritize video — especially short-form. Platforms like <span className="text-white font-semibold">TikTok, Instagram, and YouTube</span> push these clips to the top of feeds because that's what keeps users watching.
                </p>
                
                <p>
                  By 2025, <span className="text-pink-400 font-bold">82% of all internet traffic</span> is video. That means consistent short-form content gets <span className="text-white font-semibold">organic reach worth thousands in paid ads</span>.
                </p>
                
                <div className="bg-gradient-to-r from-pink-500/10 to-transparent border-l-4 border-pink-400 p-6 rounded-r-lg backdrop-blur-sm">
                  <p className="font-bold text-white mb-2 flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 text-pink-400" />
                    The reality:
                  </p>
                  <p className="text-gray-300">Short-form video gives your business a built-in algorithm advantage your competitors are still paying for.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reason 7 */}
        <section data-section className="px-6 md:px-[8%] py-20 bg-gray-950">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent border border-cyan-500/20 rounded-2xl p-8 md:p-12">
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-cyan-500/20 flex items-center justify-center border-2 border-cyan-400 shadow-[0_0_30px_rgba(0,240,255,0.3)]">
                  <DollarSign className="w-10 h-10 text-cyan-400" />
                </div>
                <div>
                  <div className="text-cyan-400 font-mono text-sm mb-2">REASON #7</div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    The ROI Speaks for Itself
                  </h2>
                </div>
              </div>
              
              {/* Highlighted Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <StatCard 
                  number="67%" 
                  label="Marketers plan to invest MORE in short-form video in 2025"
                  color="cyan"
                />
                <StatCard 
                  number="~1 HR" 
                  label="Adults spend per day on TikTok alone"
                  color="cyan"
                />
              </div>
              
              <div className="space-y-6 text-lg leading-relaxed text-gray-300">
                <p>
                  <span className="text-cyan-400 font-bold">67% of marketers</span> plan to invest more in short-form video in 2025 — because it consistently delivers <span className="text-white font-semibold">the highest ROI in digital marketing</span>.
                </p>
                
                <p>
                  Low production costs, high engagement, and huge organic reach make it unbeatable. With adults spending <span className="text-cyan-400 font-bold">nearly an hour per day</span> on TikTok alone, that's an enormous pool of potential customer attention.
                </p>
                
                <p>
                  But success requires more than just posting clips. You need expertise in <span className="text-white font-semibold">hooks, editing rhythm, and platform trends</span> — exactly what <Link href="/how-to-use-short-form-video" className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400/30 hover:decoration-cyan-400 transition-all duration-300">professional short-form video teams</Link> specialize in.
                </p>
                
                <div className="bg-gradient-to-r from-cyan-500/10 to-transparent border-l-4 border-cyan-400 p-6 rounded-r-lg backdrop-blur-sm">
                  <p className="font-bold text-white mb-2 flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 text-cyan-400" />
                    The reality:
                  </p>
                  <p className="text-gray-300">Every hour you spend guessing at video strategy is an hour not spent growing your business.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Smart Brands Are Doing */}
        <section className="px-6 md:px-[8%] py-24 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>
          <div className="max-w-5xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
              <span className="text-white">What </span>
              <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
                Smart Brands
              </span>
              <span className="text-white"> Are Doing Right Now</span>
            </h2>
            
            <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
              Winning brands aren't experimenting — they're executing. Here's how they're leading the short-form video marketing game:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-400">
                    <Play className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Go All-In on Video</h3>
                    <p className="text-gray-400">Not dabbling, but treating it as a core growth channel.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-500/10 to-transparent border border-pink-500/30 rounded-xl p-6 hover:border-pink-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,0,128,0.2)]">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center border border-pink-400">
                    <Eye className="w-5 h-5 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Focus on the Hook</h3>
                    <p className="text-gray-400">The first 3 seconds matter most.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-400">
                    <Zap className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Consistency Over Perfection</h3>
                    <p className="text-gray-400">Five good videos a week beat one "perfect" video a month.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-500/10 to-transparent border border-pink-500/30 rounded-xl p-6 hover:border-pink-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,0,128,0.2)]">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center border border-pink-400">
                    <TrendingUp className="w-5 h-5 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Repurpose Everything</h3>
                    <p className="text-gray-400">Turn testimonials, demos, and clips into dozens of short assets.</p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 bg-gradient-to-br from-cyan-500/10 via-pink-500/10 to-transparent border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,240,255,0.2)]">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500/20 to-pink-500/20 flex items-center justify-center border border-cyan-400">
                    <Users className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Work With Experts</h3>
                    <p className="text-gray-400">Creators who live and breathe short-form strategy, not generalists.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Don't Wait Section */}
        <section className="px-6 md:px-[8%] py-24 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-pink-500/5 to-cyan-500/5"></div>
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="bg-gradient-to-br from-gray-900 via-gray-950 to-black border-2 border-gradient-to-r from-cyan-500 to-pink-500 rounded-3xl p-8 md:p-16 text-center shadow-2xl">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
                Don't Wait — Start Building Your Video Presence <span className="text-cyan-400">Now</span>
              </h2>
              
              <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-300 mb-12">
                <p>
                  In 2025, short-form video marketing <span className="text-white font-semibold">isn't a trend</span> — it's how your customers <span className="text-cyan-400 font-bold">discover products, make decisions, and build trust</span>.
                </p>
                
                <p>
                  Every week you delay is a week your competitors grow their audience. The brands winning today <span className="text-white font-semibold">aren't spending the most</span> — they're <span className="text-pink-400 font-bold">moving the fastest</span>.
                </p>
              </div>
              
              <div className="inline-block bg-gradient-to-r from-cyan-500/20 to-pink-500/20 border-2 border-cyan-400 rounded-2xl p-8 mb-12">
                <p className="text-2xl md:text-3xl font-bold text-white mb-2">
                  The question isn't <span className="text-gray-400">"Should we start?"</span>
                </p>
                <p className="text-2xl md:text-3xl font-bold">
                  It's <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">"How fast can we start?"</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 md:px-[8%] py-32 bg-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-[128px]"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500 rounded-full filter blur-[128px]"></div>
          </div>
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="mb-8">
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 border border-cyan-400/50 rounded-full mb-8">
                <span className="text-cyan-400 font-mono text-sm uppercase tracking-wider">
                  Your Next Step
                </span>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                Ready to Turn Viewers Into Customers?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
              At <span className="text-cyan-400 font-bold">Captain Hacks</span>, we create <Link href="/promo-videos-for-small-business" className="text-pink-400 hover:text-pink-300 underline decoration-pink-400/30 hover:decoration-pink-400 transition-all duration-300">short-form promo videos for small businesses</Link> that don't just get views — they <span className="text-white font-semibold">drive results</span>. From <Link href="/flash-sales-videos" className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400/30 hover:decoration-cyan-400 transition-all duration-300">viral-ready flash-sale videos</Link> to full content calendars, we handle everything: <span className="text-pink-400">scripting, production, and optimization</span>.
            </p>
            
            <div className="bg-gradient-to-r from-cyan-500/10 via-pink-500/10 to-cyan-500/10 border-2 border-cyan-400/50 rounded-2xl p-8 mb-12 max-w-3xl mx-auto backdrop-blur-sm">
              <p className="text-2xl md:text-3xl font-bold text-white">
                Your audience is already watching.
              </p>
              <p className="text-2xl md:text-3xl font-bold text-cyan-400">
                Let's make sure they're watching <span className="text-pink-400">you</span>.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/#contact">
                <Button 
                  size="lg" 
                  className="text-lg px-12 py-8 bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white font-bold uppercase tracking-widest shadow-[0_0_40px_rgba(0,240,255,0.3)] hover:shadow-[0_0_60px_rgba(0,240,255,0.5)] transition-all duration-300 hover:scale-105"
                >
                  Get in touch <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </Link>
              
              <Link href="/#pricing">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-12 py-8 bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-500/10 font-bold uppercase tracking-widest transition-all duration-300"
                >
                  View Pricing
                </Button>
              </Link>
            </div>
            
            <p className="text-sm text-gray-500 mt-12 font-mono">
              ⚡ 24-hour delivery • 💯 Money-back guarantee • 🚀 Results-driven
            </p>
          </div>
        </section>

        {/* Related Articles */}
        <RelatedArticles
          articles={[
            {
              title: "How To Use Short-Form Video in Digital Marketing",
              href: "/how-to-use-short-form-video",
              description: "Master the format and turn it into a growth engine for your brand with strategic deployment."
            },
            {
              title: "Flash-Sale Videos That Sell Fast",
              href: "/flash-sales-videos",
              description: "Create urgency and boost sales with videos designed for limited-time offers and flash sales."
            },
            {
              title: "Promo Videos for Small Businesses",
              href: "/promo-videos-for-small-business",
              description: "Launch your next sale fast with scroll-stopping promo videos delivered in 24 hours."
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

