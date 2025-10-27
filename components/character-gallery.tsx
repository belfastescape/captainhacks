"use client"

import { useState } from "react"
import { characters } from "@/lib/character-data"

export function CharacterGallery() {
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null)

  return (
    <div className="mt-16">
      <h3 className="text-3xl font-mono text-cyan-400 mb-8 uppercase text-center">
        Popular Characters
      </h3>
      <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
        Choose from our existing crew or describe your own custom character. All characters can be customized to fit your brand.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {characters.map((character, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedCharacter(selectedCharacter === character.name ? null : character.name)}
            className={`relative group bg-gray-900 border-2 rounded-lg p-6 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
              selectedCharacter === character.name
                ? "border-cyan-400 shadow-[0_0_30px_rgba(0,240,255,0.3)]"
                : "border-gray-700 hover:border-cyan-400"
            }`}
            aria-pressed={selectedCharacter === character.name}
          >
            <div className="text-6xl mb-4 animate-float" style={{ animationDelay: `${idx * 0.1}s` }}>
              {character.emoji}
            </div>
            <h4 className="text-lg font-mono text-white mb-2 uppercase tracking-wide">
              {character.name}
            </h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              {character.description}
            </p>
            
            {selectedCharacter === character.name && (
              <div className="mt-4 pt-4 border-t border-cyan-400/30 text-cyan-400 text-xs font-mono animate-fade-in">
                ✓ Selected
              </div>
            )}
          </button>
        ))}
      </div>

      <div className="mt-10 text-center">
        <div className="inline-block bg-gray-900 border-2 border-pink-500 rounded-lg p-8">
          <div className="text-5xl mb-4">✨</div>
          <h4 className="text-2xl font-mono text-pink-500 mb-3 uppercase">Custom Character</h4>
          <p className="text-gray-300 mb-4 max-w-md">
            Don't see what you need? Describe your ideal character and we'll create it for you.
          </p>
          <p className="text-sm text-gray-400 font-mono">
            Age • Gender • Appearance • Personality
          </p>
        </div>
      </div>
    </div>
  )
}

