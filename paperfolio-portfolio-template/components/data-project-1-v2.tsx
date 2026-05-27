"use client"

import { useState } from "react"
import { ChevronRight, ChevronLeft, Lightbulb, Search, Target, BarChart3, AlertCircle, CheckCircle } from "lucide-react"

export function DataProject1V2() {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    {
      id: "background",
      label: "业务背景",
      icon: Lightbulb,
      color: "bg-amber-500",
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
      content: {
        title: "三步走优化策略",
        text: "基于分析结果，我提出分阶段优化建议：\n\n🟡 短期（1-2周见效）：\n• 简化移动端结账流程，支持一键支付\n• 优化结账页加载速度（压缩图片、启用CDN）\n• 增加支付安全感（安全标识、用户评价）\n\n🔵 中期（1-3个月）：\n• 落地页个性化（按渠道动态调整内容）\n• 商品页增加紧迫感（库存倒计时、限时优惠）\n• 建立购物车挽回机制\n\n🟢 长期（3-6个月）：\n• 建立用户分层运营体系（RFM模型）\n• A/B测试框架持续优化\n• 预测性分析识别高流失风险用户",
        highlight: "预计优化后移动端转化率可从11.8%提升至30%+"
      }
    }
  ]

  const nextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1)
  }

  const CurrentIcon = steps[currentStep].icon

  return (
    <section className="bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
      <div className="grid lg:grid-cols-5 min-h-[600px]">
        {/* 左侧：步骤导航 */}
        <div className="lg:col-span-2 p-8 lg:p-12 bg-gradient-to-br from-[#2878B5] to-[#1a5a8a] text-white">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">电商用户转化漏斗分析</h3>
            <p className="text-white/70 text-sm">版本A：步骤式分析流程</p>
          </div>

          {/* 步骤指示器 */}
          <div className="space-y-3">
            {steps.map((step, index) => {
              const StepIcon = step.icon
              const isActive = index === currentStep
              const isCompleted = index < currentStep

              return (
                <button
                  key={step.id}
                  onClick={() => setCurrentStep(index)}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${
                    isActive
                      ? "bg-white/20 backdrop-blur-sm"
                      : isCompleted
                      ? "bg-white/10"
                      : "hover:bg-white/5"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    isCompleted ? "bg-green-400" : isActive ? step.color : "bg-white/20"
                  }`}>
                    {isCompleted ? (
                      <CheckCircle className="w-5 h-5 text-white" />
                    ) : (
                      <StepIcon className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <div className="text-left">
                    <div className={`text-sm font-semibold ${isActive ? "text-white" : "text-white/70"}`}>
                      {step.label}
                    </div>
                    {isActive && (
                      <div className="text-xs text-white/60 mt-0.5">
                        步骤 {index + 1} / {steps.length}
                      </div>
                    )}
                  </div>
                  {isActive && <ChevronRight className="w-4 h-4 text-white ml-auto" />}
                </button>
              )
            })}
          </div>

          {/* 进度条 */}
          <div className="mt-8">
            <div className="flex justify-between text-xs text-white/60 mb-2">
              <span>分析进度</span>
              <span>{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div
                className="bg-white rounded-full h-2 transition-all duration-500"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* 右侧：内容展示 */}
        <div className="lg:col-span-3 p-8 lg:p-12 bg-white flex flex-col">
          {/* 步骤标题 */}
          <div className="flex items-center gap-3 mb-6">
            <div className={`w-10 h-10 rounded-full ${steps[currentStep].color} flex items-center justify-center`}>
              <CurrentIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-sm text-gray-500">{steps[currentStep].label}</div>
              <h4 className="text-xl font-bold text-gray-900">{steps[currentStep].content.title}</h4>
            </div>
          </div>

          {/* 内容 */}
          <div className="flex-1">
            <div className="prose prose-lg max-w-none">
              <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                {steps[currentStep].content.text}
              </div>
            </div>

            {/* 高亮框 */}
            <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-l-4 border-blue-500">
              <div className="flex items-start gap-2">
                <Lightbulb className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-blue-800 font-medium">
                  {steps[currentStep].content.highlight}
                </div>
              </div>
            </div>
          </div>

          {/* 导航按钮 */}
          <div className="flex justify-between mt-8 pt-6 border-t">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                currentStep === 0
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              上一步
            </button>

            <button
              onClick={nextStep}
              disabled={currentStep === steps.length - 1}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg font-semibold transition-all ${
                currentStep === steps.length - 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-[#2878B5] text-white hover:bg-[#1a5a8a]"
              }`}
            >
              {currentStep === steps.length - 1 ? "分析完成" : "下一步"}
              {currentStep !== steps.length - 1 && <ChevronRight className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
