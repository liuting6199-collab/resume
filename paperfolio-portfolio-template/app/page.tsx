"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { DataProject1Content } from "@/components/data-project-content"
import { DataProject2Content } from "@/components/data-project2-content"
import { ProductWorks, VisualWorks } from "@/components/visual-works"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      <Navigation />

      {/* 第一部分：关于我 */}
      <HeroSection />

      {/* 第二部分：经历时间轴 */}
      <div className="bg-[#FFFBF0] border-y-[2px] border-dashed border-[#F5D0A9]">
        <ExperienceTimeline />
      </div>

      {/* 第三部分：数据分析项目 */}
      <section id="data-projects" className="bg-[#F0FFF4] border-y-[2px] border-dashed border-[#A5D6A7]">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="inline-block bg-[#E8F5E9] border-[2px] border-[#4CAF50] rounded-xl px-5 py-3 shadow-[3px_3px_0px_0px_#4CAF50] rotate-[0.5deg]">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">
                  数据分析 <span className="text-[#4CAF50]">Data Projects</span>
                </h2>
              </div>
              <p className="text-sm text-gray-500 mt-4 ml-2">
                以下两个项目基于真实业务场景，展示我从数据清洗到洞察输出的完整分析能力
              </p>
            </div>

            <DataProject1Content />

            {/* 项目分隔线 */}
            <div className="flex items-center justify-center py-8 px-4 no-print">
              <svg width="100%" height="40" viewBox="0 0 800 40" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-30 w-full max-w-4xl">
                <path d="M0 20C40 6 80 34 120 20C160 6 200 34 240 20C280 6 320 34 360 20C400 6 440 34 480 20C520 6 560 34 600 20C640 6 680 34 720 20C760 6 800 34 840 20" stroke="#4CAF50" strokeWidth="2" strokeDasharray="10 6" strokeLinecap="round"/>
              </svg>
            </div>

            <DataProject2Content />
          </div>
        </div>
      </section>

      {/* 第四部分：产品实践 */}
      <ProductWorks />

      {/* 第五部分：视觉设计 */}
      <VisualWorks />

      <Footer />
    </main>
  )
}
