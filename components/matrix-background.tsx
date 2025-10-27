"use client"

import { useEffect, useRef } from "react"

interface MatrixBackgroundProps {
  opacity?: number
}

export function MatrixBackground({ opacity = 0.1 }: MatrixBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let columns = Math.floor(canvas.width / 20)
    let drops: number[] = Array(columns).fill(1)

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}".split("")
    let animationFrameId: number

    function draw() {
      if (!ctx || !canvas) return

      ctx.fillStyle = `rgba(0, 0, 0, 0.04)`
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = `rgba(0, 255, 255, ${opacity})`
      ctx.font = "15px monospace"

      for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)]
        ctx.fillText(text, i * 20, drops[i] * 20)

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        drops[i]++
      }

      animationFrameId = requestAnimationFrame(draw)
    }

    animationFrameId = requestAnimationFrame(draw)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      columns = Math.floor(canvas.width / 20)
      drops = Array(columns).fill(1)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", handleResize)
    }
  }, [opacity])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ opacity }}
      aria-hidden="true"
    />
  )
}

