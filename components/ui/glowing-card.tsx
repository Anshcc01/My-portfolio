"use client"

import type { ReactNode } from "react"

interface GlowingCardProps {
  children: ReactNode
  className?: string
  glowColor?: string
}

export function GlowingCard({ children, className = "", glowColor = "blue" }: GlowingCardProps) {
  const glowClasses = {
    blue: "hover:shadow-blue-500/25",
    purple: "hover:shadow-purple-500/25",
    green: "hover:shadow-green-500/25",
    yellow: "hover:shadow-yellow-500/25",
  }

  return (
    <div
      className={`
      relative group cursor-pointer transition-all duration-300
      hover:shadow-2xl ${glowClasses[glowColor as keyof typeof glowClasses]}
      hover:-translate-y-1 hover:scale-[1.02]
      ${className}
    `}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      {children}
    </div>
  )
}
