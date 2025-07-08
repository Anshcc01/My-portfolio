"use client"

import { useEffect, useState } from "react"

interface SkillBarProps {
  skill: string
  percentage: number
  color?: string
}

export function SkillBar({ skill, percentage, color = "bg-blue-500" }: SkillBarProps) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setWidth(percentage), 500)
    return () => clearTimeout(timer)
  }, [percentage])

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-slate-700">{skill}</span>
        <span className="text-sm text-slate-500">{percentage}%</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full ${color} transition-all duration-1000 ease-out`}
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  )
}
