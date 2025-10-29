"use client"

import { useState } from "react"
import { MatrixBackground } from "@/components/matrix-background"
import { Navigation } from "@/components/navigation"
import { FloatingCTA } from "@/components/floating-cta"
import { ProgressIndicator } from "@/components/progress-indicator"
import { CharacterGallery } from "@/components/character-gallery"
import { VideoExamples } from "@/components/video-examples"
import { CollapsibleFAQ } from "@/components/collapsible-faq"
import { sampleScenarios } from "@/lib/character-data"
import Link from "next/link"
import { Clock } from "lucide-react"

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

export function HowItWorksClient() {
  const [selectedType, setSelectedType] = useState<"branded" | "nonbranded">("branded")
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactForm),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Message sent! We'll get back to you within 24 hours.",
        })
        setContactForm({ name: "", email: "", message: "" })
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

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
      <ProgressIndicator />
      <FloatingCTA />

      <main id="main-content">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen relative z-10 pt-32 px-4 sm:px-6 md:px-[8%] bg-black flex items-center">
          <div className="max-w-6xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-mono mb-8">
              <span className="text-white">HOW IT</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent animate-glitch">
                WORKS
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-400 font-mono max-w-3xl">
              <span className="text-cyan-400">3 minutes to order.</span> 24 hours to delivery. Zero hassle.
            </p>
          </div>
        </section>

        {/* The Process - Step by Step */}
        <section id="process" className="min-h-screen px-4 sm:px-6 md:px-[8%] py-32 bg-gray-950 relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-12 text-cyan-400 font-mono before:content-['//_'] before:text-gray-400 before:mr-4">
            THE PROCESS
          </h2>
          <p className="text-xl text-gray-400 mb-16 max-w-3xl">
            Seriously, it's this simple. No complicated briefs. No endless revisions. No corporate BS.
          </p>

          <div className="max-w-5xl space-y-8">
            {[
              {
                step: "01",
                title: "CHOOSE YOUR VIDEO TYPE",
                desc: "Branded (with Captain Hacks logo) or Non-Branded (100% your brand only). Both are equally awesome.",
                icon: "🎬",
                time: "30 seconds",
              },
              {
                step: "02",
                title: "PICK YOUR CHARACTER",
                desc: "Select from our existing crew (wizard, nun, cop, surfer, etc.) OR describe a custom character (age, gender, appearance). We'll bring them to life.",
                icon: "🎭",
                time: "1 minute",
              },
              {
                step: "03",
                title: "TELL US YOUR OFFER",
                desc: "What deal are you promoting? 20% off? Free delivery? BOGOF? Keep it punchy and clear. We'll make it impossible to ignore.",
                icon: "💰",
                time: "1 minute",
              },
              {
                step: "04",
                title: "SHARE YOUR DETAILS",
                desc: "Drop us your website and social links so we can match your vibe. Choose portrait or landscape orientation.",
                icon: "🔗",
                time: "30 seconds",
              },
              {
                step: "05",
                title: "WE HACK IT TOGETHER",
                desc: "Our team creates your scroll-stopping video. No input needed from you. We've got this.",
                icon: "⚡",
                time: "24 hours",
              },
              {
                step: "06",
                title: "RECEIVE & POST",
                desc: "Within 24 hours, your video lands in your inbox. Download it. Post it. Watch the engagement roll in.",
                icon: "📱",
                time: "Instant",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start group animate-slide-in"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 border-2 border-cyan-400 bg-black flex items-center justify-center relative overflow-hidden group-hover:border-pink-500 transition-colors duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-pink-500/0 group-hover:from-cyan-400/10 group-hover:to-pink-500/10 transition-all duration-300" />
                    <span className="text-4xl relative z-10 animate-pulse-slow">{item.icon}</span>
                  </div>
                </div>

                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-cyan-400 text-sm tracking-wider">STEP {item.step}</span>
                    <span className="flex items-center gap-1 text-gray-500 text-xs font-mono">
                      <Clock className="w-3 h-3" />
                      {item.time}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-mono text-white mb-4 uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-base sm:text-lg leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Total Time Callout */}
          <div className="mt-16 max-w-5xl bg-black border-2 border-cyan-400 p-8 rounded-lg">
            <div className="flex items-center gap-4 justify-center">
              <Clock className="w-10 h-10 text-cyan-400" />
              <div>
                <p className="text-cyan-400 font-mono text-lg uppercase mb-1">Total Order Time</p>
                <p className="text-4xl font-mono text-white font-bold">~3 Minutes</p>
              </div>
            </div>
          </div>
        </section>

        {/* Video Types Comparison */}
        <section id="styles" className="min-h-screen px-4 sm:px-6 md:px-[8%] py-32 bg-black relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-12 text-cyan-400 font-mono before:content-['//_'] before:text-gray-400 before:mr-4">
            CHOOSE YOUR STYLE
          </h2>
          <p className="text-xl text-gray-400 mb-16 max-w-3xl">
            Two options. Same quality. Same 24-hour delivery. You decide how much Captain Hacks branding you want.
          </p>

          {/* Quick Reference Comparison Card */}
          <div className="mb-12 bg-gray-900 border-2 border-gray-700 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-center font-mono text-white text-sm uppercase mb-4 tracking-wider">
              Quick Comparison
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-black border border-cyan-400 rounded p-4">
                <div className="text-cyan-400 font-mono text-xs uppercase mb-2">Branded</div>
                <div className="text-white font-bold text-xl mb-2"> $39 USD</div>
                <div className="text-gray-400 text-sm">Captain Hacks logo • 24hr delivery</div>
              </div>
              <div className="bg-black border border-pink-500 rounded p-4">
                <div className="text-pink-500 font-mono text-xs uppercase mb-2">Non-Branded</div>
                <div className="text-white font-bold text-xl mb-2">$69 USD</div>
                <div className="text-gray-400 text-sm">100% your brand • 24hr delivery</div>
              </div>
            </div>
          </div>

          {/* Toggle Buttons */}
          <div className="flex flex-wrap gap-4 mb-16 justify-center">
            <button
              onClick={() => setSelectedType("branded")}
              className={`px-8 py-4 font-mono text-lg uppercase tracking-wider border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black ${
                selectedType === "branded"
                  ? "border-cyan-400 bg-cyan-400 text-black"
                  : "border-gray-700 bg-transparent text-gray-400 hover:border-cyan-400 hover:text-cyan-400"
              }`}
              aria-pressed={selectedType === "branded"}
            >
              Branded Videos
            </button>
            <button
              onClick={() => setSelectedType("nonbranded")}
              className={`px-8 py-4 font-mono text-lg uppercase tracking-wider border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-black ${
                selectedType === "nonbranded"
                  ? "border-cyan-400 bg-cyan-400 text-black"
                  : "border-gray-700 bg-transparent text-gray-400 hover:border-cyan-400 hover:text-cyan-400"
              }`}
              aria-pressed={selectedType === "nonbranded"}
            >
              Non-Branded Videos
            </button>
          </div>

          {/* Branded Content */}
          {selectedType === "branded" && (
            <div className="grid md:grid-cols-2 gap-12 items-start animate-fade-in">
              <div className="border-2 border-cyan-400 bg-gray-950 p-10">
                <div className="mb-8">
                  <div className="inline-block bg-cyan-400 text-black px-4 py-2 font-mono text-sm uppercase tracking-wider mb-6">
                    Branded Option
                  </div>
                  <h3 className="text-4xl font-mono text-cyan-400 mb-6">CAPTAIN HACKS BRANDED</h3>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="text-cyan-400 text-2xl flex-shrink-0" aria-hidden="true">
                      ✓
                    </span>
                    <p className="text-gray-300 text-lg">
                      Character wears <span className="text-cyan-400 font-mono">"Captain Hacks"</span> branding on
                      clothing
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-cyan-400 text-2xl flex-shrink-0" aria-hidden="true">
                      ✓
                    </span>
                    <p className="text-gray-300 text-lg">
                      Small <span className="text-cyan-400 font-mono">Captain Hacks logo</span> at bottom of video
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-cyan-400 text-2xl flex-shrink-0" aria-hidden="true">
                      ✓
                    </span>
                    <p className="text-gray-300 text-lg">
                      Choose from existing characters OR describe a custom one
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-cyan-400 text-2xl flex-shrink-0" aria-hidden="true">
                      ✓
                    </span>
                    <p className="text-gray-300 text-lg">
                      Select <span className="text-cyan-400 font-mono">portrait or landscape</span> orientation
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-cyan-400 text-2xl flex-shrink-0" aria-hidden="true">
                      ✓
                    </span>
                    <p className="text-gray-300 text-lg">24-hour delivery guarantee</p>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t-2 border-gray-700">
                  <div className="text-4xl font-mono text-cyan-400 mb-2"> $39 USD</div>
                  <p className="text-gray-400 text-sm">
                    Perfect if you like the Captain Hacks vibe and don't mind the co-branding
                  </p>
                </div>
              </div>

              <div className="bg-black border-2 border-gray-700 p-10">
                <h4 className="text-2xl font-mono text-white mb-6 uppercase">Best For:</h4>
                <ul className="space-y-4 text-gray-400 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 flex-shrink-0" aria-hidden="true">
                      ▸
                    </span>
                    Businesses who want edgy, memorable content
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 flex-shrink-0" aria-hidden="true">
                      ▸
                    </span>
                    Testing video content on a budget
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 flex-shrink-0" aria-hidden="true">
                      ▸
                    </span>
                    Companies that embrace quirky marketing
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 flex-shrink-0" aria-hidden="true">
                      ▸
                    </span>
                    Social media managers who want to stand out
                  </li>
                </ul>

                <div className="mt-10 bg-gray-950 border-l-4 border-cyan-400 p-6">
                  <p className="text-cyan-400 font-mono text-sm uppercase mb-2">Pro Tip:</p>
                  <p className="text-gray-300">
                    Most customers don't even notice the small logo. They're too busy watching the character hack your
                    deal.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Non-Branded Content */}
          {selectedType === "nonbranded" && (
            <div className="grid md:grid-cols-2 gap-12 items-start animate-fade-in">
              <div className="border-2 border-pink-500 bg-gray-950 p-10">
                <div className="mb-8">
                  <div className="inline-block bg-pink-500 text-black px-4 py-2 font-mono text-sm uppercase tracking-wider mb-6">
                    Non-Branded Option
                  </div>
                  <h3 className="text-4xl font-mono text-pink-500 mb-6">100% YOUR BRAND</h3>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="text-pink-500 text-2xl flex-shrink-0" aria-hidden="true">
                      ✓
                    </span>
                    <p className="text-gray-300 text-lg">
                      <span className="text-pink-500 font-mono">Zero Captain Hacks branding</span> on character or
                      video
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-pink-500 text-2xl flex-shrink-0" aria-hidden="true">
                      ✓
                    </span>
                    <p className="text-gray-300 text-lg">
                      Choose existing characters OR create a completely custom character
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-pink-500 text-2xl flex-shrink-0" aria-hidden="true">
                      ✓
                    </span>
                    <p className="text-gray-300 text-lg">Create your own scenario (keep it under 16 seconds)</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-pink-500 text-2xl flex-shrink-0" aria-hidden="true">
                      ✓
                    </span>
                    <p className="text-gray-300 text-lg">
                      Option to add <span className="text-pink-500 font-mono">end card</span> displaying your offer
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-pink-500 text-2xl flex-shrink-0" aria-hidden="true">
                      ✓
                    </span>
                    <p className="text-gray-300 text-lg">
                      Select <span className="text-pink-500 font-mono">portrait or landscape</span> orientation
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-pink-500 text-2xl flex-shrink-0" aria-hidden="true">
                      ✓
                    </span>
                    <p className="text-gray-300 text-lg">Same 24-hour delivery guarantee</p>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t-2 border-gray-700">
                  <div className="text-4xl font-mono text-pink-500 mb-2">$69 USD</div>
                  <p className="text-gray-400 text-sm">Pure white-label video content. It's all about YOUR brand.</p>
                </div>
              </div>

              <div className="bg-black border-2 border-gray-700 p-10">
                <h4 className="text-2xl font-mono text-white mb-6 uppercase">Best For:</h4>
                <ul className="space-y-4 text-gray-400 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 flex-shrink-0" aria-hidden="true">
                      ▸
                    </span>
                    Established brands with strict brand guidelines
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 flex-shrink-0" aria-hidden="true">
                      ▸
                    </span>
                    Agencies creating content for clients
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 flex-shrink-0" aria-hidden="true">
                      ▸
                    </span>
                    Businesses wanting 100% ownership of creative
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 flex-shrink-0" aria-hidden="true">
                      ▸
                    </span>
                    Companies with unique scenarios in mind
                  </li>
                </ul>

                <div className="mt-10 bg-gray-950 border-l-4 border-pink-500 p-6">
                  <p className="text-pink-500 font-mono text-sm uppercase mb-2">Important:</p>
                  <p className="text-gray-300">
                    Keep scenarios simple and under 16 seconds. Short and punchy = more engagement. We can add details
                    in the end card.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Character Gallery */}
          <CharacterGallery />
        </section>

        {/* Video Examples Section */}
        <section id="examples" className="min-h-screen px-4 sm:px-6 md:px-[8%] py-32 bg-gray-950 relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-12 text-cyan-400 font-mono before:content-['//_'] before:text-gray-400 before:mr-4">
            SEE IT IN ACTION
          </h2>
          <p className="text-xl text-gray-400 mb-16 max-w-3xl">
            Don't take our word for it. Watch actual videos we've created for businesses like yours.
          </p>

          <VideoExamples />
        </section>

        {/* What We Need From You */}
        <section id="requirements" className="min-h-screen px-4 sm:px-6 md:px-[8%] py-32 bg-black relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-12 text-cyan-400 font-mono before:content-['//_'] before:text-gray-400 before:mr-4">
            WHAT WE NEED FROM YOU
          </h2>
          <p className="text-xl text-gray-400 mb-16 max-w-3xl">The bare minimum. That's the point.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "YOUR OFFER",
                items: ["What's the deal/discount?", "Any special terms?", "Promo code if needed", "Valid dates"],
                icon: "💎",
              },
              {
                title: "CHARACTER CHOICE",
                items: ["Pick from our gallery", "OR describe custom character", "Age & gender", "Physical appearance"],
                icon: "👤",
              },
              {
                title: "YOUR LINKS",
                items: ["Website URL", "Social media profiles", "Any brand guidelines", "Logo if available"],
                icon: "🔗",
              },
              {
                title: "VIDEO SPECS",
                items: [
                  "Portrait (9:16) or Landscape (16:9)",
                  "Branded or non-branded",
                  "Any specific requests",
                  "Platform (TikTok/Insta/FB)",
                ],
                icon: "📐",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-950 border-2 border-cyan-400 p-8 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] transition-all duration-300 animate-slide-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-5xl mb-6 animate-float">{item.icon}</div>
                <h3 className="text-xl font-mono text-cyan-400 mb-6 uppercase tracking-wider">{item.title}</h3>
                <ul className="space-y-3">
                  {item.items.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400">
                      <span className="text-cyan-400 flex-shrink-0" aria-hidden="true">
                        ▸
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-4xl mx-auto bg-gray-950 border-2 border-cyan-400 p-10">
            <h3 className="text-3xl font-mono text-cyan-400 mb-6 uppercase">That's Literally It</h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              No lengthy creative briefs. No mood boards. No brand strategy sessions. No endless email chains.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              You give us the basics, we handle everything else. Within 24 hours, you'll have a professional video
              ready to post.
            </p>
          </div>
        </section>

        {/* Sample Scenarios Section */}
        <section id="scenarios" className="min-h-screen px-4 sm:px-6 md:px-[8%] py-32 bg-gray-950 relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-12 text-cyan-400 font-mono before:content-['//_'] before:text-gray-400 before:mr-4">
            WINNING SCENARIOS
          </h2>
          <p className="text-xl text-gray-400 mb-16 max-w-3xl">
            Need inspiration? Here are proven video concepts that drive engagement and sales.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleScenarios.map((scenario, idx) => (
              <div
                key={idx}
                className="bg-black border-2 border-gray-700 hover:border-pink-500 p-8 rounded-lg transition-all duration-300 hover:scale-105 animate-slide-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="inline-block bg-pink-500/20 border border-pink-500 text-pink-500 px-3 py-1 font-mono text-xs uppercase tracking-wider mb-4">
                  {scenario.industry}
                </div>
                <h3 className="text-2xl font-mono text-white mb-3 uppercase">{scenario.scenario}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{scenario.hook}</p>
                <div className="pt-4 border-t border-gray-800">
                  <p className="text-cyan-400 font-mono text-sm">
                    <span className="text-gray-500">Suggested character:</span> {scenario.character}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block bg-black border-2 border-cyan-400 p-8 rounded-lg">
              <p className="text-2xl font-mono text-cyan-400 mb-4 uppercase">Got Your Own Idea?</p>
              <p className="text-gray-300 max-w-2xl">
                These are just examples. You can create any scenario you want. The weirder and more creative, the
                better it usually performs.
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

        {/* CTA Section */}
        <section
          id="cta"
          className="min-h-screen px-4 sm:px-6 md:px-[8%] py-32 bg-black flex items-center justify-center relative z-10"
        >
          <div className="max-w-4xl text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 font-mono">
              <span className="text-white">READY TO</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
                GET STARTED?
              </span>
            </h2>
            <p className="text-2xl text-gray-400 mb-12 font-mono">Stop overthinking it. Order your video now.</p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/brandedcaptainhacksvideo"
                className="w-full sm:w-auto px-12 py-6 bg-transparent border-2 border-cyan-400 text-cyan-400 font-mono text-lg uppercase tracking-widest relative overflow-hidden hover:text-black transition-colors duration-300 before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-cyan-400 before:transition-all before:duration-300 before:-z-10 hover:before:left-0 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black text-center"
              >
                Order Branded Video
              </Link>
              <Link
                href="/nonbrandedcaptainhacksvideo"
                className="w-full sm:w-auto px-12 py-6 bg-transparent border-2 border-pink-500 text-pink-500 font-mono text-lg uppercase tracking-widest relative overflow-hidden hover:text-black transition-colors duration-300 before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-pink-500 before:transition-all before:duration-300 before:-z-10 hover:before:left-0 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-black text-center"
              >
                Order Non-Branded Video
              </Link>
            </div>

            <div className="mt-16 border-2 border-cyan-400 bg-gray-950 p-8 rounded-lg max-w-2xl mx-auto">
              <p className="text-cyan-400 text-2xl mb-2 font-mono uppercase text-center">
                <span className="text-4xl mr-2" aria-hidden="true">
                  ⚡
                </span>
                Still have questions?
              </p>
              <p className="text-gray-400 text-center mb-8 font-mono">Hit us up. We reply fast.</p>

              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label htmlFor="contact-name" className="block text-cyan-400 font-mono text-sm uppercase mb-2">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-black border-2 border-gray-700 text-white font-mono focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-cyan-400 font-mono text-sm uppercase mb-2">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-black border-2 border-gray-700 text-white font-mono focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-cyan-400 font-mono text-sm uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-black border-2 border-gray-700 text-white font-mono focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                    placeholder="What do you need help with?"
                  />
                </div>

                {submitStatus.type && (
                  <div
                    className={`p-4 border-2 font-mono text-sm ${
                      submitStatus.type === "success"
                        ? "border-green-500 bg-green-500/10 text-green-400"
                        : "border-red-500 bg-red-500/10 text-red-400"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 font-mono text-lg uppercase tracking-widest relative overflow-hidden hover:text-black transition-colors duration-300 before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-cyan-400 before:transition-all before:duration-300 before:-z-10 hover:before:left-0 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
