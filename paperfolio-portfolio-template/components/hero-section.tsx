import { Mail, Phone, Github, BarChart3, FolderKanban, Wand2 } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="about" className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-5xl mx-auto">
        {/* 顶部行：标题 + 关于我标签 */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-[#1A1A1A] leading-tight mb-3">
              你好，我是{" "}
              <span className="bg-[#FF6B8A] text-white px-2 py-0.5 rounded-lg">刘婷</span>
            </h1>
            <p className="text-sm text-gray-500">北京师范大学 · 2026届硕士研究生</p>
          </div>
          {/* 关于我标签 — 与标题平齐 */}
          <div className="inline-block bg-[#FFEBEE] border-[2px] border-[#FF6B8A] rounded-xl px-5 py-3 shadow-[3px_3px_0px_0px_#FF6B8A] shrink-0">
            <h2 className="text-2xl md:text-3xl font-black text-[#1A1A1A]">
              关于我 <span className="text-[#FF6B8A]">Me</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* 左侧内容区 */}
          <div className="md:col-span-3 space-y-6">
            {/* 三个核心能力 — 小卡片 */}
            <div className="space-y-3">
              <div className="flex gap-3 bg-[#FFF5F7] border border-[#FF6B8A]/20 rounded-xl p-4">
                <div className="w-8 h-8 rounded-lg bg-[#FF6B8A] flex items-center justify-center shrink-0">
                  <BarChart3 className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-[#1A1A1A] mb-1">在数据中发现规律</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    数学与管理学背景，用数据拆解业务逻辑。从数据质检优化到销售数据分析，让决策有量化支撑。
                  </p>
                </div>
              </div>

              <div className="flex gap-3 bg-[#F0F7FF] border border-[#4A90D9]/20 rounded-xl p-4">
                <div className="w-8 h-8 rounded-lg bg-[#4A90D9] flex items-center justify-center shrink-0">
                  <FolderKanban className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-[#1A1A1A] mb-1">于项目中沉淀闭环</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    从校园活动统筹到实习项目执行，擅长跨角色协同，把零散需求变成可落地的方案。
                  </p>
                </div>
              </div>

              <div className="flex gap-3 bg-[#FFF8E6] border border-[#F5A623]/20 rounded-xl p-4">
                <div className="w-8 h-8 rounded-lg bg-[#F5A623] flex items-center justify-center shrink-0">
                  <Wand2 className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-[#1A1A1A] mb-1">用工具提效创作</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    主动探索大模型与自动化工具，在数据处理和视觉设计中寻找效率与创意的平衡。
                  </p>
                </div>
              </div>
            </div>

            {/* 联系方式 */}
            <div className="flex flex-wrap gap-x-4 gap-y-2 pt-2">
              <a href="mailto:202321099011@mail.bnu.edu.cn" className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#B45F4D] transition-colors">
                <Mail className="w-3.5 h-3.5" />
                202321099011@mail.bnu.edu.cn
              </a>
              <span className="text-gray-300">|</span>
              <a href="tel:19939380656" className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#B45F4D] transition-colors">
                <Phone className="w-3.5 h-3.5" />
                19939380656
              </a>
              <span className="text-gray-300">|</span>
              <a href="https://github.com/liuting6199-collab" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#B45F4D] transition-colors">
                <Github className="w-3.5 h-3.5" />
                github.com/liuting6199-collab
              </a>
            </div>
          </div>

          {/* 右侧照片/插画区 */}
          <div className="md:col-span-2 flex justify-center">
            <div className="relative w-full max-w-[260px] aspect-square border-[4px] border-black rounded-[24px] overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <Image
                src="/images/avatar.jpg"
                alt="刘婷"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
