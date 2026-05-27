"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"

export function Navigation() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {/* 主导航 */}
      <div className="container mx-auto px-4 pt-6 pb-3 no-print">
        <nav className="flex items-center justify-center bg-white border-[3px] border-black rounded-2xl px-5 py-3 max-w-3xl mx-auto shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-sm font-bold hover:opacity-70 transition-opacity">
            关于我
          </a>
          <a href="#experience" className="text-sm font-bold hover:opacity-70 transition-opacity">
            过去经历
          </a>
          <a href="#data-projects" className="text-sm font-bold hover:opacity-70 transition-opacity">
            数据分析
          </a>
          <a href="#product" className="text-sm font-bold hover:opacity-70 transition-opacity">
            产品实践
          </a>
          <a href="#visual" className="text-sm font-bold hover:opacity-70 transition-opacity">
            视觉设计
          </a>
        </div>
      </nav>
    </div>

      {/* 返回顶部按钮 */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-white border-[2px] border-black rounded-full p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] transition-all no-print"
          aria-label="返回顶部"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  )
}
