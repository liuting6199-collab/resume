"use client"

import * as React from "react"

const experiences = [
  {
    period: "2026.02 - 2026.05",
    company: "深圳慧通商务有限公司（华为全资子公司）",
    role: "销售运营实习生",
    location: "广州",
    highlights: [
      "经营数据支持：协助100+人销售运营团队完成渠道经营数据统计与经营分析报表整理，支持周/月度业务复盘及异常数据排查，累计跟踪20+项经营数据指标",
      "流程优化：参与销售运营SOP及业务规范梳理，协助推进知识管理与数字化协同流程建设，累计完成30+份业务文档标准化整理",
      "项目推进：支持区域业务运营推进及跨部门协同，参与业务流程异常问题跟踪与反馈机制梳理，累计支持10+项运营任务推进"
    ],
    color: "#B45F4D"
  },
  {
    period: "2025.09 - 2026.02",
    company: "看云控股集团（猿辅导母公司）- 飞象星球",
    role: "题库内容运营实习生",
    location: "北京",
    highlights: [
      "AI批改效果优化：构建分类归因框架，完成700+条错误案例归因分析，累计输出40+份专项分析报告反馈算法团队，推动模型迭代优化",
      "评测数据质检：设计「日常抽检→周期验证→交叉复核」三层质检机制，完成超1500页标准化题单生产与校验，将数据交付错误率从5%降至1%以内",
      "团队协作提效：管理20人兼职标注团队，结合评测需求拆解任务、建立进度跟踪与质量分级机制；协助完善AI算法评测SOP，制作FAQ提升团队工作效能"
    ],
    color: "#1565C0"
  },
  {
    period: "2024.03 - 2025.10",
    company: "北京师范大学 · 党委学生工作办公室",
    role: "学生资助管理中心 · 兼职辅导员",
    location: "北京",
    highlights: [
      "资助数据管理：参与新生入学资助绿色通道全程，通过问卷星收集困难生信息，运用Excel数据透视表、VLOOKUP等函数复核3000+条数据；动态维护资助台账，审核临时困难及灾害补助申请500+份",
      "奖助评审组织：参与制定5项社会类奖助学金细则，统筹信息通知、材料收集全流程；组织10余场评审面试，整合资助发放数据撰写20+份月度、季度、专项工作报告，发布50+条公示公告"
    ],
    color: "#2E7D32"
  },
  {
    period: "2023.09 - 2025.05",
    company: "北京师范大学",
    role: "学院团委副书记 / 班级团支部书记",
    location: "北京",
    highlights: [
      "需求调研：结合硕博群体差异化特点分层设计，搭建「问卷调研+座谈沟通+日常反馈」多维需求收集机制，常态化挖掘学院同学学业、生活、情绪等痛点，累计收集并闭环处理诉求50+条，诉求24小时响应、办结率100%",
      "内容运营：撰写推文20+篇，完成选题、文案、排版与推广全流程；策划公众号内容改版方案，推文阅读由日常200增长到800+，增长率超300%，带动用户投稿50+份，活动参与率达60%，提升账号活跃度与用户粘性",
      "流程管理：统筹组织10+项主题活动，协调多方资源推进项目落地；优化内部工作分工与信息管理流程，实现关键数据动态化维护及信息准确率100%"
    ],
    color: "#FF8F00"
  }
]

export function ExperienceTimeline() {
  return (
    <section id="experience" className="container mx-auto px-4 py-12 print-avoid-break">
      <div className="max-w-4xl mx-auto">
        {/* 标题 — 便签风格 */}
        <div className="mb-10">
          <div className="inline-block bg-[#FFF5E6] border-[2px] border-[#F5A623] rounded-xl px-5 py-3 shadow-[3px_3px_0px_0px_#F5A623] rotate-[-1deg]">
            <h2 className="text-2xl md:text-3xl font-black text-[#1A1A1A]">
              过去{" "}
              <span className="text-[#F5A623]">经历</span>
              <span className="text-sm font-normal text-gray-500 ml-2">Experience</span>
            </h2>
          </div>
          <p className="text-sm text-gray-500 mt-4 ml-2">实习与校园，从执行到统筹的积累</p>
        </div>

        <div className="relative">
          {/* 时间轴线 — 左侧虚线 */}
          <div className="absolute left-4 top-0 bottom-0 w-[2px] border-l-2 border-dashed border-black"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex gap-4">
                {/* 时间点 — 彩色大圆点 */}
                <div className="absolute left-4 w-4 h-4 rounded-full border-[3px] border-black z-10 -translate-x-2 mt-2"
                  style={{ backgroundColor: exp.color }}
                ></div>

                {/* 内容卡片 — 粗黑边框大圆角 */}
                <div className="ml-10 w-full max-w-2xl">
                  <div className="bg-white border-[2px] border-black rounded-2xl p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.08)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.12)] transition-shadow">
                    {/* 时间 + 地点标签 */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span
                        className="px-2.5 py-1 rounded-md text-[10px] font-black text-white"
                        style={{ backgroundColor: exp.color }}
                      >
                        {exp.period}
                      </span>
                      <span className="text-xs font-bold text-gray-400">{exp.location}</span>
                    </div>

                    <h3 className="text-sm font-black text-[#1A1A1A] mb-1">{exp.company}</h3>
                    <p className="text-xs font-bold mb-4" style={{ color: exp.color }}>{exp.role}</p>

                    <ul className="space-y-2.5">
                      {exp.highlights.map((item, i) => (
                        <li key={i} className="flex gap-2.5 text-xs text-gray-700 leading-relaxed">
                          <span
                            className="w-1.5 h-1.5 rounded-sm mt-1.5 shrink-0"
                            style={{ backgroundColor: exp.color }}
                          ></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
