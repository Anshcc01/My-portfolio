"use client"

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/20 rounded-full animate-float-slow"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200/20 rounded-full animate-float-medium"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-green-200/20 rounded-full animate-float-fast"></div>
      <div className="absolute bottom-20 right-40 w-24 h-24 bg-yellow-200/20 rounded-full animate-float-slow"></div>

      {/* Floating code symbols */}
      <div className="absolute top-60 left-1/4 text-4xl text-blue-300/30 animate-float-medium font-mono">{"<>"}</div>
      <div className="absolute top-80 right-1/3 text-3xl text-purple-300/30 animate-float-fast font-mono">{"{}"}</div>
      <div className="absolute bottom-60 left-1/3 text-5xl text-green-300/30 animate-float-slow font-mono">{"[]"}</div>
    </div>
  )
}
