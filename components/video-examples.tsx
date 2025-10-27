"use client"

import { Play } from "lucide-react"

const brandedVideos = [
  {
    title: "Dog Spa - Branded",
    video: "/videos/dogspawithlogo2.mp4",
    description: "Cute character with Captain Hacks branding",
  },
  {
    title: "Wizard Emporium - Branded",
    video: "/videos/wizardemporium.mp4",
    description: "Mystical wizard promoting magical deals",
  },
  {
    title: "Captain Hacks Intro",
    video: "/videos/captainhacksintro.mp4",
    description: "High-energy branded intro video",
  },
]

const nonBrandedVideos = [
  {
    title: "Dog Spa - Non-Branded",
    video: "/videos/dogspa.mp4",
    description: "Clean, professional without branding",
  },
  {
    title: "Aussie Surfer",
    video: "/videos/aussiesurfer.mp4",
    description: "Beach vibes, pure brand focus",
  },
  {
    title: "Sister Jane",
    video: "/videos/sisterjane.mp4",
    description: "Character-driven, client branded",
  },
]

interface VideoCardProps {
  title: string
  video: string
  description: string
  color?: "cyan" | "pink"
}

function VideoCard({ title, video, description, color = "cyan" }: VideoCardProps) {
  const borderColor = color === "cyan" ? "border-cyan-400" : "border-pink-500"
  const textColor = color === "cyan" ? "text-cyan-400" : "text-pink-500"

  return (
    <div className={`bg-gray-900 border-2 ${borderColor} rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 group`}>
      <div className="relative aspect-[9/16] bg-black">
        <video
          className="w-full h-full object-cover"
          loop
          muted
          playsInline
          preload="metadata"
          onMouseEnter={(e) => e.currentTarget.play()}
          onMouseLeave={(e) => {
            e.currentTarget.pause()
            e.currentTarget.currentTime = 0
          }}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/0 transition-all duration-300 flex items-center justify-center">
          <Play className={`w-16 h-16 ${textColor} group-hover:opacity-0 transition-opacity duration-300`} />
        </div>
      </div>
      <div className="p-4">
        <h4 className={`font-mono ${textColor} text-sm uppercase mb-2`}>{title}</h4>
        <p className="text-gray-400 text-xs">{description}</p>
      </div>
    </div>
  )
}

export function VideoExamples() {
  return (
    <div className="space-y-16">
      {/* Branded Examples */}
      <div>
        <div className="text-center mb-10">
          <div className="inline-block bg-cyan-400 text-black px-4 py-2 font-mono text-sm uppercase tracking-wider mb-4">
            Branded Examples
          </div>
          <h3 className="text-3xl font-mono text-cyan-400 mb-3 uppercase">With Captain Hacks Branding</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Small logo at the bottom and character wearing branded clothing. Still looks professional and gets the job done.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {brandedVideos.map((video, idx) => (
            <VideoCard key={idx} {...video} color="cyan" />
          ))}
        </div>
      </div>

      {/* Non-Branded Examples */}
      <div>
        <div className="text-center mb-10">
          <div className="inline-block bg-pink-500 text-black px-4 py-2 font-mono text-sm uppercase tracking-wider mb-4">
            Non-Branded Examples
          </div>
          <h3 className="text-3xl font-mono text-pink-500 mb-3 uppercase">100% Your Brand</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Zero Captain Hacks branding. Completely white-label. Your brand, your message, our expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {nonBrandedVideos.map((video, idx) => (
            <VideoCard key={idx} {...video} color="pink" />
          ))}
        </div>
      </div>

      {/* Platform Icons */}
      <div className="text-center">
        <h4 className="text-xl font-mono text-white mb-6 uppercase">Works Everywhere</h4>
        <div className="flex flex-wrap justify-center gap-6 items-center">
          <div className="flex items-center gap-2 text-gray-400">
            <span className="text-2xl">📱</span>
            <span className="font-mono text-sm">TikTok</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <span className="text-2xl">📷</span>
            <span className="font-mono text-sm">Instagram</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <span className="text-2xl">👍</span>
            <span className="font-mono text-sm">Facebook</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <span className="text-2xl">💼</span>
            <span className="font-mono text-sm">LinkedIn</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <span className="text-2xl">▶️</span>
            <span className="font-mono text-sm">YouTube</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <span className="text-2xl">✉️</span>
            <span className="font-mono text-sm">Email</span>
          </div>
        </div>
        <p className="text-gray-500 text-sm mt-4 font-mono">
          MP4 format • Portrait (9:16) or Landscape (16:9) • Ready to upload
        </p>
      </div>
    </div>
  )
}

