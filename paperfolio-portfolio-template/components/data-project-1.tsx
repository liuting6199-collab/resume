"use client"

import { useState } from "react"
import { ArrowRight, ArrowLeft, TrendingDown, Smartphone, Monitor, MousePointer } from "lucide-react"

export function DataProject1() {
  const [activeTab, setActiveTab] = useState("overview")

  const tabs = [
    { id: "overview", label: "核心发现" },
    { id: "funnel", label: "转化漏斗" },
    { id: "device", label: "设备对比" },
    { id: "insight", label: "业务建议" },
  ]

  return (
    <section className="bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
      <div className="grid lg:grid-cols-5 min-h-[600px]">
        {/* 左侧：项目信息 */}
        <div className="lg:col-span-2 p-8 lg:p-12 bg-gradient-to-br from-[#2878B5] to-[#1a5a8a] text-white flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                数据分析
              </span>
              <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                用户行为
              </span>
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
              电商用户转化漏斗分析
            </h3>

            <p className="text-white/80 text-sm lg:text-base leading-relaxed mb-8">
              基于AIDA模型对电商平台用户行为进行深度拆解，定位移动端结账环节的核心流失瓶颈，
              提出可落地的优化策略。
            </p>

            {/* 关键指标卡片 */}
            <div className="space-y-3">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <Smartphone className="w-5 h-5 text-[#FF6B7A]" />
                  <div>
                    <div className="text-2xl font-bold">11.8%</div>
                    <div className="text-xs text-white/70">移动端结账转化率</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <Monitor className="w-5 h-5 text-[#4ADE80]" />
                  <div>
                    <div className="text-2xl font-bold">93.8%</div>
                    <div className="text-xs text-white/70">桌面端结账转化率</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <TrendingDown className="w-5 h-5 text-[#FFC224]" />
                  <div>
                    <div className="text-2xl font-bold">88.2%</div>
                    <div className="text-xs text-white/70">移动端结账流失率</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/20">
            <div className="flex items-center gap-2 text-sm text-white/70">
              <MousePointer className="w-4 h-4" />
              点击右侧标签查看详细分析
            </div>
          </div>
        </div>

        {/* 右侧：详细内容 */}
        <div className="lg:col-span-3 p-8 lg:p-12 bg-white">
          {/* 标签导航 */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-[#2878B5] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* 内容区域 */}
          <div className="min-h-[400px]">
            {activeTab === "overview" && (
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-gray-900">核心发现</h4>
                
                <div className="space-y-4">
                  <div className="flex gap-4 p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
                    <div className="flex-1">
                      <div className="font-semibold text-red-900 mb-1">移动端是核心瓶颈</div>
                      <div className="text-sm text-red-700">
                        移动端结账→购买转化率仅11.8%，与桌面端（93.8%）差距达82个百分点，
                        88.2%的用户在结账环节流失。
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                    <div className="flex-1">
                      <div className="font-semibold text-blue-900 mb-1">落地页类型显著影响转化</div>
                      <div className="text-sm text-blue-700">
                        首页落地页转化率88.9%，商品页仅6.2%，活动页0%。
                        用户意图明确度与转化率高度正相关。
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 bg-green-50 rounded-xl border-l-4 border-green-500">
                    <div className="flex-1">
                      <div className="font-semibold text-green-900 mb-1">直接访问用户价值最高</div>
                      <div className="text-sm text-green-700">
                        直接访问用户转化率41.7%，远超付费广告（30.8%）。
                        品牌认知度是转化关键驱动因素。
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "funnel" && (
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-gray-900">转化漏斗对比</h4>
                
                {/* 漏斗可视化 */}
                <div className="space-y-3">
                  {[
                    { stage: "浏览商品", mobile: 100, desktop: 100, total: 50 },
                    { stage: "加入购物车", mobile: 72.7, desktop: 100, total: 41 },
                    { stage: "进入结账", mobile: 70.8, desktop: 94.1, total: 33 },
                    { stage: "完成购买", mobile: 11.8, desktop: 93.8, total: 17 },
                  ].map((item, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between text-sm font-medium">
                        <span>{item.stage}</span>
                        <span className="text-gray-500">{item.total}人</span>
                      </div>
                      <div className="flex gap-2">
                        <div className="flex-1 bg-gray-100 rounded-full h-8 relative overflow-hidden">
                          <div
                            className="absolute left-0 top-0 h-full bg-red-400 rounded-full transition-all duration-1000"
                            style={{ width: `${item.mobile}%` }}
                          />
                          <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-700">
                            移动端 {item.mobile}%
                          </span>
                        </div>
                        <div className="flex-1 bg-gray-100 rounded-full h-8 relative overflow-hidden">
                          <div
                            className="absolute left-0 top-0 h-full bg-blue-400 rounded-full transition-all duration-1000"
                            style={{ width: `${item.desktop}%` }}
                          />
                          <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-700">
                            桌面端 {item.desktop}%
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-sm font-semibold text-gray-700 mb-2">关键洞察</div>
                  <div className="text-sm text-gray-600">
                    移动端在&quot;结账→购买&quot;环节出现断崖式下跌（70.8% → 11.8%），
                    说明结账流程存在严重体验问题，而非流量质量问题。
                  </div>
                </div>
              </div>
            )}

            {activeTab === "device" && (
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-gray-900">设备类型深度对比</h4>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 bg-red-50 rounded-xl text-center">
                    <Smartphone className="w-12 h-12 text-red-500 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-red-600">5.7%</div>
                    <div className="text-sm text-red-700 mt-1">移动端整体转化</div>
                    <div className="text-xs text-red-500 mt-2">35人访问 → 2人购买</div>
                  </div>

                  <div className="p-6 bg-blue-50 rounded-xl text-center">
                    <Monitor className="w-12 h-12 text-blue-500 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-blue-600">33.3%</div>
                    <div className="text-sm text-blue-700 mt-1">桌面端整体转化</div>
                    <div className="text-xs text-blue-500 mt-2">15人访问 → 5人购买</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h5 className="font-semibold text-gray-800">各环节流失率对比</h5>
                  {[
                    { step: "浏览→加购", mobile: 27.3, desktop: 0 },
                    { step: "加购→结账", mobile: 2.6, desktop: 5.9 },
                    { step: "结账→购买", mobile: 88.2, desktop: 6.2 },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-24 text-sm font-medium">{item.step}</div>
                      <div className="flex-1 flex gap-2">
                        <div className="flex-1 bg-gray-100 rounded-full h-6 relative">
                          <div
                            className="absolute left-0 top-0 h-full bg-red-400 rounded-full"
                            style={{ width: `${item.mobile}%` }}
                          />
                          <span className="absolute inset-0 flex items-center justify-center text-xs">
                            {item.mobile}%
                          </span>
                        </div>
                        <div className="flex-1 bg-gray-100 rounded-full h-6 relative">
                          <div
                            className="absolute left-0 top-0 h-full bg-blue-400 rounded-full"
                            style={{ width: `${item.desktop}%` }}
                          />
                          <span className="absolute inset-0 flex items-center justify-center text-xs">
                            {item.desktop}%
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "insight" && (
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-gray-900">业务优化建议</h4>
                
                <div className="space-y-4">
                  <div className="p-5 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">短期</span>
                      <span className="font-semibold text-gray-900">1-2周见效</span>
                    </div>
                    <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                      <li>简化移动端结账流程：减少表单字段，支持一键支付（Apple Pay/微信支付）</li>
                      <li>优化结账页加载速度：压缩图片、启用CDN、减少HTTP请求</li>
                      <li>增加支付安全感：显示安全标识、用户评价、退换货政策</li>
                    </ul>
                  </div>

                  <div className="p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">中期</span>
                      <span className="font-semibold text-gray-900">1-3个月</span>
                    </div>
                    <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                      <li>落地页个性化：根据来源渠道动态调整内容和CTA</li>
                      <li>商品页增加紧迫感元素：库存倒计时、限时优惠、最近购买提示</li>
                      <li>建立购物车挽回机制：邮件/短信提醒，提供小额优惠</li>
                    </ul>
                  </div>

                  <div className="p-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">长期</span>
                      <span className="font-semibold text-gray-900">3-6个月</span>
                    </div>
                    <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                      <li>建立用户分层运营体系：RFM模型分层，差异化运营策略</li>
                      <li>A/B测试框架：持续优化转化漏斗各环节</li>
                      <li>预测性分析：识别高流失风险用户，提前干预</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
