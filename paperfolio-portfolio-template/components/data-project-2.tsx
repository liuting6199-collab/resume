"use client"

import { useState } from "react"
import { TrendingUp, Users, Share2, Bell, Tag, DollarSign } from "lucide-react"

export function DataProject2() {
  const [activeTab, setActiveTab] = useState("overview")

  const tabs = [
    { id: "overview", label: "核心发现" },
    { id: "coupon", label: "券类型分析" },
    { id: "user", label: "用户分层" },
    { id: "channel", label: "渠道效果" },
  ]

  return (
    <section className="bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
      <div className="grid lg:grid-cols-5 min-h-[600px]">
        {/* 左侧：项目信息 */}
        <div className="lg:col-span-2 p-8 lg:p-12 bg-gradient-to-br from-[#2E8B57] to-[#1a5a3a] text-white flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                营销策略
              </span>
              <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                ROI分析
              </span>
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
              美团优惠券投放提效分析
            </h3>

            <p className="text-white/80 text-sm lg:text-base leading-relaxed mb-8">
              基于RFM模型对美团外卖/到店业务的优惠券投放策略进行深度分析，
              识别高ROI券类型与低效渠道，提出精准投放建议。
            </p>

            {/* 关键指标卡片 */}
            <div className="space-y-3">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-[#4ADE80]" />
                  <div>
                    <div className="text-2xl font-bold">5.18</div>
                    <div className="text-xs text-white/70">折扣券ROI</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-[#FFC224]" />
                  <div>
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-xs text-white/70">会员核销率</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5 text-[#FF6B7A]" />
                  <div>
                    <div className="text-2xl font-bold">0%</div>
                    <div className="text-xs text-white/70">活动页核销率</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/20">
            <div className="flex items-center gap-2 text-sm text-white/70">
              <Share2 className="w-4 h-4" />
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
                    ? "bg-[#2E8B57] text-white"
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
                  <div className="flex gap-4 p-4 bg-green-50 rounded-xl border-l-4 border-green-500">
                    <div className="flex-1">
                      <div className="font-semibold text-green-900 mb-1">折扣券ROI最高但核销率低</div>
                      <div className="text-sm text-green-700">
                        折扣券ROI达5.18（每补贴1元带来5.18元订单），但核销率仅54.5%。
                        说明折扣券吸引的是高价值用户，但覆盖范围有限。
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                    <div className="flex-1">
                      <div className="font-semibold text-blue-900 mb-1">会员与普通用户差异极端</div>
                      <div className="text-sm text-blue-700">
                        会员核销率100%，普通用户仅35.7%。会员平均订单金额89.5元，
                        是普通用户（52.3元）的1.7倍。
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
                    <div className="flex-1">
                      <div className="font-semibold text-red-900 mb-1">活动页渠道完全无效</div>
                      <div className="text-sm text-red-700">
                        活动页获券核销率为0%，而推送和分享渠道核销率均为100%。
                        渠道质量差异巨大，需立即优化投放策略。
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "coupon" && (
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-gray-900">券类型效果对比</h4>

                {/* 图表 */}
                <div className="mb-4">
                  <img src="/chart2_coupon.png" alt="优惠券效果分析" className="w-full max-w-md mx-auto rounded-lg border border-gray-200" />
                  <p className="text-xs text-gray-500 text-center mt-1">图：券类型ROI与核销率对比</p>
                </div>

                {/* 券类型对比表 */}
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 rounded-tl-lg">券类型</th>
                        <th className="text-center p-3">发放数</th>
                        <th className="text-center p-3">核销数</th>
                        <th className="text-center p-3">核销率</th>
                        <th className="text-center p-3 rounded-tr-lg">ROI</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3 font-medium">满减券</td>
                        <td className="text-center p-3">24</td>
                        <td className="text-center p-3">18</td>
                        <td className="text-center p-3">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-bold">75.0%</span>
                        </td>
                        <td className="text-center p-3">3.92</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">无门槛券</td>
                        <td className="text-center p-3">15</td>
                        <td className="text-center p-3">10</td>
                        <td className="text-center p-3">
                          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-bold">66.7%</span>
                        </td>
                        <td className="text-center p-3">4.31</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">折扣券</td>
                        <td className="text-center p-3">11</td>
                        <td className="text-center p-3">6</td>
                        <td className="text-center p-3">
                          <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-bold">54.5%</span>
                        </td>
                        <td className="text-center p-3">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-bold">5.18</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* ROI可视化 */}
                <div className="space-y-3">
                  <h5 className="font-semibold text-gray-800">ROI对比</h5>
                  {[
                    { type: "折扣券", roi: 5.18, color: "bg-green-500" },
                    { type: "无门槛券", roi: 4.31, color: "bg-blue-500" },
                    { type: "满减券", roi: 3.92, color: "bg-yellow-500" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-20 text-sm font-medium">{item.type}</div>
                      <div className="flex-1 bg-gray-100 rounded-full h-8 relative">
                        <div
                          className={`absolute left-0 top-0 h-full ${item.color} rounded-full`}
                          style={{ width: `${(item.roi / 5.18) * 100}%` }}
                        />
                        <span className="absolute inset-0 flex items-center justify-center text-xs font-bold">
                          {item.roi}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-sm font-semibold text-gray-700 mb-2">关键洞察</div>
                  <div className="text-sm text-gray-600">
                    核销率与ROI呈负相关：满减券核销率高但ROI低（用户门槛低），
                    折扣券ROI高但核销率低（吸引高价值用户）。建议分层投放。
                  </div>
                </div>
              </div>
            )}

            {activeTab === "user" && (
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-gray-900">用户分层分析</h4>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl text-center border-2 border-green-200">
                    <Users className="w-12 h-12 text-green-600 mx-auto mb-3" />
                    <div className="text-4xl font-bold text-green-700">100%</div>
                    <div className="text-sm text-green-800 mt-1 font-semibold">会员核销率</div>
                    <div className="text-xs text-green-600 mt-2">20人获券 → 20人使用</div>
                    <div className="text-xs text-green-600">平均订单: ¥89.5</div>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl text-center border-2 border-red-200">
                    <Users className="w-12 h-12 text-red-500 mx-auto mb-3" />
                    <div className="text-4xl font-bold text-red-600">35.7%</div>
                    <div className="text-sm text-red-800 mt-1 font-semibold">普通用户核销率</div>
                    <div className="text-xs text-red-600 mt-2">30人获券 → 14人使用</div>
                    <div className="text-xs text-red-600">平均订单: ¥52.3</div>
                  </div>
                </div>

                {/* 用户价值对比 */}
                <div className="space-y-4">
                  <h5 className="font-semibold text-gray-800">用户价值对比</h5>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>平均订单金额</span>
                        <span className="font-semibold">会员 vs 普通</span>
                      </div>
                      <div className="flex gap-2">
                        <div className="flex-1 bg-gray-100 rounded-full h-6 relative">
                          <div className="absolute left-0 top-0 h-full bg-green-500 rounded-full" style={{ width: '89.5%' }} />
                          <span className="absolute inset-0 flex items-center justify-center text-xs font-bold">¥89.5</span>
                        </div>
                        <div className="flex-1 bg-gray-100 rounded-full h-6 relative">
                          <div className="absolute left-0 top-0 h-full bg-red-400 rounded-full" style={{ width: '52.3%' }} />
                          <span className="absolute inset-0 flex items-center justify-center text-xs font-bold">¥52.3</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>补贴效率</span>
                        <span className="font-semibold">每元补贴带来订单</span>
                      </div>
                      <div className="flex gap-2">
                        <div className="flex-1 bg-gray-100 rounded-full h-6 relative">
                          <div className="absolute left-0 top-0 h-full bg-green-500 rounded-full" style={{ width: '85%' }} />
                          <span className="absolute inset-0 flex items-center justify-center text-xs font-bold">¥6.2</span>
                        </div>
                        <div className="flex-1 bg-gray-100 rounded-full h-6 relative">
                          <div className="absolute left-0 top-0 h-full bg-red-400 rounded-full" style={{ width: '45%' }} />
                          <span className="absolute inset-0 flex items-center justify-center text-xs font-bold">¥3.8</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                  <div className="text-sm font-semibold text-blue-900 mb-1">分层策略建议</div>
                  <div className="text-sm text-blue-700">
                    会员用户：推送高ROI折扣券，提升客单价  <br/>
                    普通用户：推送高核销率满减券，培养消费习惯
                  </div>
                </div>
              </div>
            )}

            {activeTab === "channel" && (
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-gray-900">渠道效果分析</h4>

                {/* 图表 */}
                <div className="mb-4">
                  <img src="/chart2_deep.png" alt="优惠券深度分析" className="w-full max-w-md mx-auto rounded-lg border border-gray-200" />
                  <p className="text-xs text-gray-500 text-center mt-1">图：渠道效果与ROI深度分析</p>
                </div>

                <div className="space-y-4">
                  {/* 渠道卡片 */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 bg-green-50 rounded-xl text-center border-2 border-green-300">
                      <Bell className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-green-700">100%</div>
                      <div className="text-xs text-green-800 mt-1">推送核销率</div>
                      <div className="text-xs text-green-600 mt-1">20/20</div>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-xl text-center border-2 border-blue-300">
                      <Share2 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-blue-700">100%</div>
                      <div className="text-xs text-blue-800 mt-1">分享核销率</div>
                      <div className="text-xs text-blue-600 mt-1">12/12</div>
                    </div>

                    <div className="p-4 bg-red-50 rounded-xl text-center border-2 border-red-300">
                      <Tag className="w-8 h-8 text-red-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-red-700">0%</div>
                      <div className="text-xs text-red-800 mt-1">活动页核销率</div>
                      <div className="text-xs text-red-600 mt-1">0/18</div>
                    </div>
                  </div>

                  {/* 渠道分析 */}
                  <div className="space-y-3">
                    <h5 className="font-semibold text-gray-800">渠道特征分析</h5>
                    
                    <div className="p-4 bg-green-50 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <Bell className="w-5 h-5 text-green-600" />
                        <span className="font-semibold text-green-900">推送渠道</span>
                      </div>
                      <div className="text-sm text-green-700">
                        精准触达活跃用户，时机恰当。建议：增加推送频次，
                        针对会员用户推送高ROI折扣券。
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <Share2 className="w-5 h-5 text-blue-600" />
                        <span className="font-semibold text-blue-900">分享渠道</span>
                      </div>
                      <div className="text-sm text-blue-700">
                        社交背书增强信任，用户质量高。建议：增加分享奖励机制，
                        扩大高质量获客渠道。
                      </div>
                    </div>

                    <div className="p-4 bg-red-50 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <Tag className="w-5 h-5 text-red-600" />
                        <span className="font-semibold text-red-900">活动页渠道</span>
                      </div>
                      <div className="text-sm text-red-700">
                        用户被动领取，缺乏即时使用场景。建议：暂停活动页发券，
                        将预算转移至推送和分享渠道。
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
                  <div className="text-sm font-semibold text-gray-800 mb-2">优化建议</div>
                  <div className="text-sm text-gray-700">
                    <span className="font-semibold">短期：</span>暂停活动页发券，增加推送频次  <br/>
                    <span className="font-semibold">中期：</span>优化分享机制，扩大高质量渠道  <br/>
                    <span className="font-semibold">长期：</span>建立渠道ROI监控体系，动态调整预算分配
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
