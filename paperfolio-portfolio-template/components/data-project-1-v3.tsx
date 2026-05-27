"use client"

import { useRef } from "react"
import { Lightbulb, Search, Target, BarChart3, AlertCircle, CheckCircle, ArrowDown } from "lucide-react"

export function DataProject1V3() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const steps = [
    {
      id: "background",
      label: "业务背景",
      icon: Lightbulb,
      color: "bg-amber-500",
      borderColor: "border-amber-500",
      bgColor: "bg-amber-50",
      content: {
        title: "销售额增长乏力，问题出在哪？",
        text: "某电商平台发现近期销售额增长停滞，老板提出疑问：'我们的流量不差，但为什么用户买了东西不付款？'\n\n作为数据分析师，我需要定位转化瓶颈，找出用户在哪个环节流失，以及为什么流失。",
        highlight: "核心诉求：找到转化率低的原因，提出可落地的优化建议"
      }
    },
    {
      id: "problem",
      label: "问题拆解",
      icon: Target,
      color: "bg-red-500",
      borderColor: "border-red-500",
      bgColor: "bg-red-50",
      content: {
        title: "把大问题拆成小问题",
        text: "我使用AIDA模型（注意-兴趣-欲望-行动）将转化过程拆解为4个环节：\n\n1. 浏览商品 → 用户是否看到感兴趣的商品？\n2. 加入购物车 → 用户是否有购买意愿？\n3. 进入结账 → 用户是否决定购买？\n4. 完成购买 → 用户是否顺利支付？\n\n同时，我增加'设备类型'维度，因为移动端和桌面端的用户体验差异很大。",
        highlight: "假设：移动端用户可能在结账环节遇到体验问题"
      }
    },
    {
      id: "explore",
      label: "数据探索",
      icon: Search,
      color: "bg-blue-500",
      borderColor: "border-blue-500",
      bgColor: "bg-blue-50",
      content: {
        title: "先看看数据长什么样",
        text: "数据集包含50个用户的行为记录：\n• 35个移动端用户，15个桌面端用户\n• 4个来源渠道：自然搜索、付费广告、社交媒体、直接访问\n• 3种落地页：首页、商品页、活动页\n\n初步观察：\n• 整体购买转化率34%（17/50）\n• 移动端用户占比70%，是主要流量来源\n• 直接访问用户最少，但可能质量最高",
        highlight: "关键发现：移动端用户多，但转化率可能更低"
      }
    },
    {
      id: "analyze",
      label: "分析过程",
      icon: BarChart3,
      color: "bg-purple-500",
      borderColor: "border-purple-500",
      bgColor: "bg-purple-50",
      content: {
        title: "验证假设：移动端真的是瓶颈吗？",
        text: "我制作了转化漏斗对比图，结果验证了我的假设：\n\n移动端转化漏斗：\n• 浏览→加购：72.7%（25/35）\n• 加购→结账：70.8%（17/24）→ 流失3人\n• 结账→购买：11.8%（2/17）→ 流失15人！\n\n桌面端转化漏斗：\n• 浏览→加购：100%（15/15）\n• 加购→结账：94.1%（16/17）\n• 结账→购买：93.8%（15/16）\n\n移动端在'结账→购买'环节出现断崖式下跌！",
        highlight: "核心发现：移动端结账→购买转化率仅11.8%，桌面端93.8%"
      }
    },
    {
      id: "insight",
      label: "深入洞察",
      icon: AlertCircle,
      color: "bg-orange-500",
      borderColor: "border-orange-500",
      bgColor: "bg-orange-50",
      content: {
        title: "为什么移动端用户在结账环节流失？",
        text: "我进一步分析了流失用户的特征：\n\n1. 来源渠道分析：\n   • 流失用户中，付费广告来源占比最高\n   • 直接访问用户转化率最高（41.7%）\n\n2. 落地页分析：\n   • 首页落地页转化率88.9%\n   • 商品页转化率仅6.2%\n   • 活动页转化率0%\n\n3. 根因推断：\n   • 移动端结账流程复杂（表单多、加载慢）\n   • 付费广告带来的用户意图不强\n   • 商品页缺乏紧迫感元素",
        highlight: "88.2%的移动端用户在结账后流失，这是体验问题而非流量问题"
      }
    },
    {
      id: "suggest",
      label: "业务建议",
      icon: CheckCircle,
      color: "bg-green-500",
      borderColor: "border-green-500",
      bgColor: "bg-green-50",
      content: {
        title: "三步走优化策略",
        text: "基于分析结果，我提出分阶段优化建议：\n\n🟡 短期（1-2周见效）：\n• 简化移动端结账流程，支持一键支付\n• 优化结账页加载速度（压缩图片、启用CDN）\n• 增加支付安全感（安全标识、用户评价）\n\n🔵 中期（1-3个月）：\n• 落地页个性化（按渠道动态调整内容）\n• 商品页增加紧迫感（库存倒计时、限时优惠）\n• 建立购物车挽回机制\n\n🟢 长期（3-6个月）：\n• 建立用户分层运营体系（RFM模型）\n• A/B测试框架持续优化\n• 预测性分析识别高流失风险用户",
        highlight: "预计优化后移动端转化率可从11.8%提升至30%+"
      }
    }
  ]

  const scrollToNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ top: 400, behavior: "smooth" })
    }
  }

  return (
    <section className="bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
      {/* 顶部标题区 */}
      <div className="p-8 lg:p-12 bg-gradient-to-br from-[#2878B5] to-[#1a5a8a] text-white text-center relative">
        <h3 className="text-3xl font-bold mb-2">电商用户转化漏斗分析</h3>
        <p className="text-white/70 text-sm mb-6">版本B：垂直故事线（向下滚动探索完整分析过程）</p>
        <button
          onClick={scrollToNext}
          className="inline-flex items-center gap-2 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold hover:bg-white/30 transition-all"
        >
          开始阅读
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>

      {/* 垂直故事线内容区 */}
      <div ref={scrollRef} className="max-h-[700px] overflow-y-auto p-8 lg:p-12 space-y-12">
        {steps.map((step, index) => {
          const StepIcon = step.icon
          const isLast = index === steps.length - 1

          return (
            <div key={step.id} className="relative">
              {/* 时间线连接线 */}
              {!isLast && (
                <div className="absolute left-6 top-14 w-0.5 h-16 bg-gray-200" />
              )}

              <div className="flex gap-6">
                {/* 左侧：步骤图标和标签 */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center shadow-lg`}>
                    <StepIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="mt-2 text-xs font-semibold text-gray-500">{step.label}</div>
                  <div className="text-xs text-gray-400">步骤 {index + 1}/{steps.length}</div>
                </div>

                {/* 右侧：内容卡片 */}
                <div className={`flex-1 p-6 rounded-2xl border-2 ${step.borderColor} ${step.bgColor}`}>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{step.content.title}</h4>
                  <div className="whitespace-pre-line text-gray-700 leading-relaxed mb-4">
                    {step.content.text}
                  </div>
                  {/* 图表嵌入 */}
                  {step.id === "analyze" && (
                    <div className="mb-4">
                      <img src="/chart1_funnel.png" alt="转化漏斗对比图" className="w-full max-w-md mx-auto rounded-lg border border-gray-200" />
                      <p className="text-xs text-gray-500 text-center mt-1">图：移动端 vs 桌面端转化漏斗对比</p>
                    </div>
                  )}
                  {step.id === "insight" && (
                    <div className="mb-4">
                      <img src="/chart1_deep.png" alt="多维度流失分析" className="w-full max-w-md mx-auto rounded-lg border border-gray-200" />
                      <p className="text-xs text-gray-500 text-center mt-1">图：渠道与落地页流失分析</p>
                    </div>
                  )}
                  <div className={`p-4 bg-white rounded-xl border-l-4 ${step.borderColor} shadow-sm`}>
                    <div className="flex items-start gap-2">
                      <Lightbulb className={`w-5 h-5 mt-0.5 flex-shrink-0 ${step.color.replace("bg-", "text-")}`} />
                      <div className="text-sm font-medium text-gray-800">
                        {step.content.highlight}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}

        {/* 结尾 */}
        <div className="text-center py-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-100 text-green-800 rounded-full font-semibold">
            <CheckCircle className="w-5 h-5" />
            分析完成
          </div>
          <p className="text-gray-500 text-sm mt-4">完整分析过程已展示完毕</p>
        </div>
      </div>
    </section>
  )
}
