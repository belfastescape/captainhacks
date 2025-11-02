"use client"

import { useEffect, useRef, useState, ReactNode, CSSProperties } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  animation?: "slideIn" | "float" | "pulse" | "none"
  className?: string
  style?: CSSProperties
}

export function AnimatedSection({ children, animation = "slideIn", className = "", style }: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const getAnimationClass = () => {
    if (animation === "none") return ""
    
    if (!isVisible) {
      return "opacity-0 translate-y-10"
    }

    switch (animation) {
      case "slideIn":
        return "opacity-100 translate-y-0 transition-all duration-700 ease-out"
      case "float":
        return "opacity-100 animate-float"
      case "pulse":
        return "opacity-100 animate-pulse-slow"
      default:
        return "opacity-100"
    }
  }

  return (
    <div ref={ref} className={`${getAnimationClass()} ${className}`} style={style}>
      {children}
    </div>
  )
}

