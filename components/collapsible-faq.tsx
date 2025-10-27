"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQ {
  question: string
  answer: string
}

interface CollapsibleFAQProps {
  faqs: FAQ[]
}

export function CollapsibleFAQ({ faqs }: CollapsibleFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="max-w-4xl space-y-4">
      {faqs.map((faq, idx) => (
        <div
          key={idx}
          className="border-2 border-gray-700 bg-gray-950 rounded-lg overflow-hidden hover:border-cyan-400 transition-colors duration-300 animate-slide-in"
          style={{ animationDelay: `${idx * 0.08}s` }}
        >
          <button
            onClick={() => toggleFAQ(idx)}
            className="w-full p-6 md:p-8 text-left flex items-start justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-inset"
            aria-expanded={openIndex === idx}
          >
            <h3 className="text-lg md:text-xl font-mono text-cyan-400 flex-1 pr-4">
              Q: {faq.question}
            </h3>
            <ChevronDown
              className={`w-6 h-6 text-cyan-400 flex-shrink-0 transition-transform duration-300 ${
                openIndex === idx ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            />
          </button>

          {openIndex === idx && (
            <div className="px-6 md:px-8 pb-6 md:pb-8 animate-fade-in">
              <p className="text-base md:text-lg text-gray-300 leading-relaxed border-t border-gray-800 pt-6">
                A: {faq.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

