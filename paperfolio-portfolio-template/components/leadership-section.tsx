"use client"

import { Calendar, Users, FileText, TrendingUp, Award } from "lucide-react"

const leadershipItems = [
  {
    icon: Users,
    title: "团务统筹",
    desc: "统筹学院团务工作，策划组织10余场主题教育活动",
    metric: "10+ 场",
    color: "#B45F4D"
  },
  {
    icon: FileText,
    title: "公众号运营",
    desc: "管理学院官方公众号，累计发布推文80+篇",
    metric: "80+ 篇",
    color: "#1565C0"
  },
  {
    icon: TrendingUp,
    title: "阅读增长",
    desc: "通过内容优化与选题策划，平均阅读量提升30%",
    metric: "↑ 30%",
    color: "#2E7D32"
  }
]

export function LeadershipSection() {
  return (
    <section id="leadership" className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            学生干部 <span className="text-gray-400 font-normal text-lg">Leadership</span>
          </h2>
          <div className="w-16 h-1 bg-[#B45F4D] rounded-full"></div>
          <p className="text-sm text-gray-500 mt-3">
            在组织管理与内容运营中积累团队协作与项目推进经验
          </p>
        </div>

        {/* 主卡片 */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-5 pb-5 border-b border-gray-100">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Award className="w-4 h-4 text-[#B45F4D]" />
                <h3 className="text-base font-bold text-[#1A1A1A]">
                  学院团委副书记 / 班级团支部书记
                </h3>
              </div>
              <p className="text-xs text-gray-500">北京师范大学</p>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-50 px-3 py-1.5 rounded-lg w-fit">
              <Calendar className="w-3 h-3" />
              <span>2023.09 - 2025.05</span>
            </div>
          </div>

          {/* 三列数据 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {leadershipItems.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-4 hover:shadow-sm transition-shadow"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="w-7 h-7 rounded-md flex items-center justify-center"
                      style={{ backgroundColor: item.color + "15" }}
                    >
                      <Icon className="w-3.5 h-3.5" style={{ color: item.color }} />
                    </div>
                    <span className="text-xs font-bold text-[#1A1A1A]">{item.title}</span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed mb-2">{item.desc}</p>
                  <span
                    className="inline-block px-2 py-0.5 rounded text-[10px] font-bold"
                    style={{
                      backgroundColor: item.color + "12",
                      color: item.color
                    }}
                  >
                    {item.metric}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
