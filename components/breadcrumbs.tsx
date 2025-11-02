"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4 px-6 md:px-[8%] bg-black/50 border-b border-gray-800">
      <ol className="flex items-center space-x-2 text-sm max-w-7xl mx-auto">
        {/* Home link */}
        <li>
          <Link 
            href="/" 
            className="flex items-center gap-1 text-gray-400 hover:text-cyan-400 transition-colors duration-300 group"
          >
            <Home className="w-4 h-4" />
            <span className="sr-only md:not-sr-only">Home</span>
          </Link>
        </li>

        {/* Breadcrumb items */}
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-gray-600" />
              {isLast || !item.href ? (
                <span className="text-cyan-400 font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  {item.label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

