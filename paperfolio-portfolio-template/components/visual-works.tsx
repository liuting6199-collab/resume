"use client"

import * as React from "react"
import Image from "next/image"

// 原型作品
const prototypeWorks = {
  title: "原型制作",
  desc: "为 Midoo 出海语言学习软件设计付费页原型",
  ability: "产品思维与交互设计能力",
  tools: ["Figma", "墨刀"],
  color: "#1565C0",
  images: [
    "/images/原型11.png",
    "/images/原型22.png",
    "/images/原型33.png",
  ],
  saasImages: [
    "/images/原型SaaS.png",
    "/images/原型SaaS2.png",
    "/images/原型SaaS3.png",
    "/images/原型SaaS流程图.png",
  ],
}

// 项目1：高校课程考核全流程
const flowchartWorks = {
  title: "流程拆解",
  desc: "实现高校课程考核场景中课程考核信息、考务编排、命题、组卷、考试、评卷、评价等全流程的数智化管理",
  ability: "业务梳理与方案拆解能力",
  tools: ["draw.io", "飞书"],
  color: "#2E7D32",
  images: [
    "/images/流程图1.png",
    "/images/流程图2.png",
    "/images/流程图3.png",
  ],
}

// CAJ Converter
const cajWorks = {
  title: "CAJ Converter",
  desc: "独立设计并开发 Web 工具，实现知网 CAJ 格式文献的零安装、批量转换",
  ability: "从 0 到 1 的产品实践经验",
  tools: ["Trae", "Codex"],
  color: "#7B1FA2",
  images: [
    "/images/caj.png",
    "/images/caj2.png",
  ],
}

// 封面设计
const posterWorks = {
  title: "封面设计",
  desc: "参加小红书封面设计小赛",
  ability: "视觉审美与内容创作能力",
  tools: ["Canva", "PS", "Nano Banana", "豆包", "即梦"],
  color: "#FF8F00",
  images: [
    "/images/作图.png",
    "/images/作图2.png",
    "/images/作图3.png",
    "/images/作图4.png",
  ],
}

// 学院活动物料
const eventWorks = {
  title: "学院活动物料",
  desc: "为学院活动设计宣传海报、推文配图等视觉物料",
  ability: "视觉审美与内容创作能力",
  tools: ["Canva", "PS"],
  color: "#028090",
  images: [
    "/images/学院活动1.png",
    "/images/学院活动2.png",
    "/images/学院活动3.png",
    "/images/学院活动4.png",
    "/images/学院活动5.png",
    "/images/学院活动6.png",
    "/images/学院活动7.png",
    "/images/学院活动8.png",
  ],
}

// 竖屏手机框组件
function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex flex-col items-center flex-1 max-w-[180px]">
      <div className="w-full bg-[#1a1a1a] rounded-[24px] p-[6px] shadow-xl">
        {/* 手机顶部细节 */}
        <div className="w-full flex justify-center py-1">
          <div className="w-12 h-[3px] bg-[#333] rounded-full"></div>
        </div>
        {/* 屏幕 - 固定高度，图片cover填充 */}
        <div className="relative w-full aspect-[9/19] overflow-hidden rounded-[16px] bg-white">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="180px"
          />
        </div>
      </div>
    </div>
  )
}

// 横屏手机框组件（用于SaaS长图）
function PhoneFrameLandscape({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex flex-col items-center flex-1">
      <div className="relative w-full aspect-[19/9] bg-[#1a1a1a] rounded-[24px] p-2 shadow-xl">
        {/* 手机侧面细节 */}
        <div className="absolute left-2.5 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#333] rounded-full z-10"></div>
        {/* 屏幕 */}
        <div className="relative w-full h-full bg-white rounded-[16px] overflow-hidden">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 33vw, 25vw"
          />
        </div>
      </div>
    </div>
  )
}

// 海报卡片组件 - 带阴影和悬停
function PosterCard({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow ${className}`}>
      <div className="relative w-full aspect-[3/4]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>
    </div>
  )
}

// 全宽展示卡片（流程图/SaaS页面）
function WideCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="relative w-full aspect-[16/9]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  )
}

// 产品实践模块
export function ProductWorks() {
  return (
    <section id="product" className="bg-[#F3E5F5] border-y-[2px] border-dashed border-[#CE93D8] print-avoid-break">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-block bg-[#F3E5F5] border-[2px] border-[#7B1FA2] rounded-xl px-5 py-3 shadow-[3px_3px_0px_0px_#7B1FA2] rotate-[0.5deg]">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">
                产品实践 <span className="text-[#7B1FA2]">Product</span>
              </h2>
            </div>
            <p className="text-sm text-gray-500 mt-4 ml-2">
              从原型设计到流程拆解，展示产品思维与方案落地能力
            </p>
          </div>

          <div className="space-y-6">
            {/* CAJ Converter */}
            <div className="bg-white border-[2px] border-[#7B1FA2] rounded-2xl p-5 shadow-[4px_4px_0px_0px_#7B1FA2] hover:shadow-[6px_6px_0px_0px_#7B1FA2] transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-base font-bold text-[#1A1A1A] mb-1">{cajWorks.title}</h3>
                  <p className="text-[10px] font-semibold text-[#7B1FA2] mb-1">{cajWorks.ability}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{cajWorks.desc}</p>
                </div>
                <span
                  className="w-3 h-3 rounded-full shrink-0 mt-1.5 border border-black"
                  style={{ backgroundColor: cajWorks.color }}
                ></span>
              </div>

              {/* 横向时间轴：需求 → 设计 → 开发 → 上线 */}
              <div className="relative mb-4">
                {/* 时间轴线 */}
                <div className="hidden md:block absolute top-[22px] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-[#CE93D8]"></div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 relative">
                  {[
                    { step: "需求", title: "痛点识别", desc: "CAJ格式阅读体验差，现有工具操作繁琐", icon: "🔍" },
                    { step: "设计", title: "原型设计", desc: "梳理上传→转换→下载流程，明确用户路径", icon: "✏️" },
                    { step: "开发", title: "技术实现", desc: "FastAPI后端，拖拽上传、实时转换、批量下载", icon: "⚙️" },
                    { step: "上线", title: "部署运营", desc: "完成在线部署，实现零安装、即开即用", icon: "🚀" },
                  ].map((item, i) => (
                    <div key={i} className="relative flex flex-col items-center text-center">
                      {/* 节点圆点 */}
                      <div className="w-11 h-11 rounded-full bg-[#F3E5F5] border-[2px] border-[#7B1FA2] flex items-center justify-center z-10 mb-2 shadow-sm">
                        <span className="text-base">{item.icon}</span>
                      </div>
                      {/* 标签 */}
                      <div className="px-2 py-0.5 bg-[#7B1FA2] text-white text-[10px] font-bold rounded mb-1">
                        {item.step}
                      </div>
                      <div className="text-xs font-bold text-[#1A1A1A] mb-0.5">{item.title}</div>
                      <p className="text-[10px] text-gray-500 leading-relaxed px-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 项目截图 */}
              {cajWorks.images.length > 0 && (
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {cajWorks.images.map((img, i) => (
                    <div key={i} className="bg-gray-50 rounded-lg p-3">
                      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-lg border border-gray-200">
                        <Image
                          src={img}
                          alt={`CAJ Converter 截图 ${i + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-1">
                {cajWorks.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-0.5 bg-gray-100 rounded text-[10px] text-gray-600 border border-gray-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* 原型制作 */}
            <div className="bg-white border-[2px] border-[#1565C0] rounded-2xl p-5 shadow-[4px_4px_0px_0px_#1565C0] hover:shadow-[6px_6px_0px_0px_#1565C0] transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-base font-bold text-[#1A1A1A] mb-1">{prototypeWorks.title}</h3>
                  <p className="text-[10px] font-semibold text-[#1565C0] mb-1">{prototypeWorks.ability}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{prototypeWorks.desc}</p>
                </div>
                <span
                  className="w-3 h-3 rounded-full shrink-0 mt-1.5 border border-black"
                  style={{ backgroundColor: prototypeWorks.color }}
                ></span>
              </div>

              <div className="flex justify-center gap-4 md:gap-8 mb-6 py-6 bg-gray-50 rounded-lg px-4">
                {prototypeWorks.images.map((img, i) => (
                  <PhoneFrame key={i} src={img} alt={`原型页面 ${i + 1}`} />
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                {prototypeWorks.saasImages.map((img, i) => (
                  <WideCard key={i} src={img} alt={`SaaS原型 ${i + 1}`} />
                ))}
              </div>

              <div className="flex flex-wrap gap-1">
                {prototypeWorks.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-0.5 bg-gray-100 rounded text-[10px] text-gray-600 border border-gray-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* 流程拆解 */}
            <div className="bg-white border-[2px] border-[#2E7D32] rounded-2xl p-5 shadow-[4px_4px_0px_0px_#2E7D32] hover:shadow-[6px_6px_0px_0px_#2E7D32] transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-base font-bold text-[#1A1A1A] mb-1">{flowchartWorks.title}</h3>
                  <p className="text-[10px] font-semibold text-[#2E7D32] mb-1">{flowchartWorks.ability}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{flowchartWorks.desc}</p>
                </div>
                <span
                  className="w-3 h-3 rounded-full shrink-0 mt-1.5 border border-black"
                  style={{ backgroundColor: flowchartWorks.color }}
                ></span>
              </div>

              <div className="space-y-4 mb-4">
                {flowchartWorks.images.map((img, i) => (
                  <div key={i} className="bg-gray-50 rounded-lg p-3">
                    <WideCard src={img} alt={`流程图 ${i + 1}`} />
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1">
                {flowchartWorks.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-0.5 bg-gray-100 rounded text-[10px] text-gray-600 border border-gray-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// 视觉设计模块
export function VisualWorks() {
  return (
    <section id="visual" className="bg-[#F0F7FF] border-y-[2px] border-dashed border-[#A9C8F5] print-avoid-break">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-block bg-[#E3F2FD] border-[2px] border-[#2196F3] rounded-xl px-5 py-3 shadow-[3px_3px_0px_0px_#2196F3] rotate-[-0.5deg]">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">
                视觉设计 <span className="text-[#2196F3]">Visual Design</span>
              </h2>
            </div>
            <p className="text-sm text-gray-500 mt-4 ml-2">
              从封面创作到活动物料，展示视觉审美与内容创作能力
            </p>
          </div>

          <div className="space-y-10">
            {/* 封面设计 */}
            <div className="bg-white border-[2px] border-[#FF8F00] rounded-2xl p-5 shadow-[4px_4px_0px_0px_#FF8F00] hover:shadow-[6px_6px_0px_0px_#FF8F00] transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-base font-bold text-[#1A1A1A] mb-1">{posterWorks.title}</h3>
                  <p className="text-[10px] font-semibold text-[#FF8F00] mb-1">{posterWorks.ability}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{posterWorks.desc}</p>
                </div>
                <span
                  className="w-3 h-3 rounded-full shrink-0 mt-1.5 border border-black"
                  style={{ backgroundColor: posterWorks.color }}
                ></span>
              </div>

              <div className="columns-2 gap-3 mb-4">
                {posterWorks.images.map((img, i) => (
                  <div key={i} className="break-inside-avoid mb-3">
                    <div className="relative bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                      <Image
                        src={img}
                        alt={`封面 ${i + 1}`}
                        width={400}
                        height={500}
                        className="w-full h-auto object-contain"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1">
                {posterWorks.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-0.5 bg-gray-100 rounded text-[10px] text-gray-600 border border-gray-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* 学院活动物料 */}
            <div className="bg-white border-[2px] border-[#028090] rounded-2xl p-5 shadow-[4px_4px_0px_0px_#028090] hover:shadow-[6px_6px_0px_0px_#028090] transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-base font-bold text-[#1A1A1A] mb-1">{eventWorks.title}</h3>
                  <p className="text-[10px] font-semibold text-[#028090] mb-1">{eventWorks.ability}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{eventWorks.desc}</p>
                </div>
                <span
                  className="w-3 h-3 rounded-full shrink-0 mt-1.5 border border-black"
                  style={{ backgroundColor: eventWorks.color }}
                ></span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                {eventWorks.images.map((img, i) => (
                  <div key={i} className="relative bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
                    <Image
                      src={img}
                      alt={`学院活动 ${i + 1}`}
                      width={300}
                      height={400}
                      className="w-full h-auto object-contain"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1">
                {eventWorks.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-0.5 bg-gray-100 rounded text-[10px] text-gray-600 border border-gray-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
