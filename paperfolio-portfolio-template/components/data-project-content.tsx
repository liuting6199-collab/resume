"use client"

import * as React from "react"
import Image from "next/image"

export function DataProject1Content() {
  return (
    <div className="space-y-4">
      {/* Page 1: Header + Background + KPI (紧凑版) */}
      <div className="print-page print-avoid-break">
        <div className="bg-white border-[2px] border-[#B45F4D] p-6 rounded-2xl relative overflow-hidden shadow-[4px_4px_0px_0px_#B45F4D]">
          <div className="flex items-start justify-between mb-2">
            <div>
              <div className="text-xs font-medium text-[#B45F4D] mb-1 tracking-wider uppercase">Portfolio Project 01</div>
              <h2 className="text-xl font-bold text-[#1A1A1A]">电商用户转化漏斗分析与流失定位</h2>
            </div>
            {/* 项目元信息 */}
            <div className="hidden sm:flex flex-col items-end gap-1">
              <span className="px-2 py-0.5 bg-[#FDF1ED] border border-dashed border-[#B45F4D] rounded text-[10px] text-[#B45F4D]">独立分析</span>
            </div>
          </div>
          <p className="text-gray-500 text-xs max-w-xl">
            基于1,500条用户行为数据，拆解全链路转化，定位最大流失环节并提出优化策略
          </p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {["Python", "Pandas", "漏斗分析", "渠道归因", "用户分层", "Matplotlib"].map((tag) => (
              <span key={tag} className="px-2 py-0.5 bg-[#FDF1ED] rounded-full text-[10px] text-[#B45F4D] border border-[#B45F4D]/20">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="print-avoid-break">
            <h3 className="text-sm font-bold mb-2 pb-1 border-b-2 border-[#B45F4D] inline-block">项目背景与目标</h3>
            <p className="text-gray-600 text-xs mb-2 leading-relaxed">
              某电商平台1月份产生1,500条用户行为记录，覆盖浏览、点击、加购、下单、支付全链路。发现整体转化率低于行业均值，希望定位流失最严重的环节，针对性优化。
            </p>
            <p className="text-xs font-semibold mb-1">核心问题：</p>
            <ul className="text-xs text-gray-500 space-y-0.5 ml-3 list-disc leading-relaxed">
              <li>哪个环节流失用户最多？流失率是多少？</li>
              <li>不同渠道的转化差异？</li>
              <li>不同品类、设备、用户类型的转化表现？</li>
              <li>如何量化优化后的潜在收益？</li>
            </ul>
          </div>
          <div className="print-avoid-break">
            <h3 className="text-sm font-bold mb-2 pb-1 border-b-2 border-[#B45F4D] inline-block">关键指标概览</h3>
            <div className="grid grid-cols-3 gap-2">
              {[
                { value: "14.7%", label: "整体转化率" },
                { value: "68.5%", label: "浏览→点击" },
                { value: "43.1%", label: "点击→加购" },
                { value: "61.2%", label: "加购→下单" },
                { value: "81.2%", label: "下单→支付" },
                { value: "56.9%", label: "最大流失率" },
              ].map((kpi) => (
                <div key={kpi.label} className="text-center p-2 bg-white border border-gray-200 rounded-lg">
                  <div className="text-base font-bold text-[#B45F4D]">{kpi.value}</div>
                  <div className="text-[10px] text-gray-500 mt-0.5">{kpi.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Page 2: Data + Method */}
      <div className="print-page print-avoid-break">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-sm font-bold mb-2 pb-1 border-b-2 border-[#B45F4D] inline-block">数据说明与清洗</h3>
            <p className="text-gray-600 text-xs mb-3 leading-relaxed">
              数据集包含1,500条用户行为记录，覆盖2024年1月1日-1月31日。每条记录包含用户ID、设备类型、来源渠道、商品品类、用户类型、行为链路及订单金额。
            </p>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-gray-50 p-2.5 rounded-lg border border-gray-200">
                <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">数据字段</div>
                <p className="text-[10px] text-gray-500 leading-relaxed">
                  user_id · device · channel · category · user_type · view/click/cart/order/pay · amount · date
                </p>
              </div>
              <div className="bg-gray-50 p-2.5 rounded-lg border border-gray-200">
                <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">清洗过程</div>
                <p className="text-[10px] text-gray-500 leading-relaxed">
                  ① 去重：无重复记录<br/>
                  ② 缺失值：无缺失字段<br/>
                  ③ 异常值：订单金额在合理范围内<br/>
                  ④ 逻辑校验：行为链路符合顺序
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold mb-2 pb-1 border-b-2 border-[#B45F4D] inline-block">分析思路与假设</h3>
            <p className="text-gray-600 text-xs mb-2 leading-relaxed">
              从原始行为日志出发，按「漏斗概览 → 流失定位 → 渠道拆解 → 品类对比 → 用户分层 → 设备分析」逐层下钻。
            </p>
            <div className="flex flex-wrap items-center gap-1 text-xs text-gray-600 mb-2">
              {["漏斗概览", "流失定位", "渠道拆解", "品类对比", "用户分层", "设备分析"].map((step, i) => (
                <span key={step} className="flex items-center gap-1">
                  <span className="bg-gray-100 px-2 py-0.5 rounded text-[10px] border border-gray-200">{step}</span>
                  {i < 5 && <span className="text-[#B45F4D] font-bold text-xs">→</span>}
                </span>
              ))}
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              <strong>核心假设：</strong>① 百亿补贴渠道「高点击、低加购」；② 活动页渠道转化效率最低；③ 会员用户转化率显著高于新用户；④ 移动端转化率低于PC端。
            </p>
          </div>
        </div>
      </div>

      {/* Page 3: Charts 1-2 并排 */}
      <div className="print-page print-avoid-break">
        <h3 className="text-sm font-bold mb-3 pb-1 border-b-2 border-[#B45F4D] inline-block">数据可视化与分析</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="print-avoid-break bg-white border border-gray-200 rounded-xl p-3">
            <Image src="/charts/01_funnel.png" alt="整体转化漏斗" width={500} height={250} className="w-full" />
          </div>
          <div className="print-avoid-break bg-white border border-gray-200 rounded-xl p-3">
            <Image src="/charts/02_channel_efficiency.png" alt="渠道转化效率对比" width={500} height={250} className="w-full" />
          </div>
        </div>
      </div>

      {/* Page 4: Charts 3-4 并排 */}
      <div className="print-page print-avoid-break">
        <div className="grid grid-cols-2 gap-4">
          <div className="print-avoid-break bg-white border border-gray-200 rounded-xl p-3">
            <Image src="/charts/03_channel_sales.png" alt="渠道销售额与转化率" width={500} height={250} className="w-full" />
          </div>
          <div className="print-avoid-break bg-white border border-gray-200 rounded-xl p-3">
            <Image src="/charts/04_category.png" alt="品类转化分析" width={500} height={250} className="w-full" />
          </div>
        </div>
      </div>

      {/* Page 5: Charts 5-6 并排 */}
      <div className="print-page print-avoid-break">
        <div className="grid grid-cols-2 gap-4">
          <div className="print-avoid-break bg-white border border-gray-200 rounded-xl p-3">
            <Image src="/charts/05_user_type.png" alt="用户类型分析" width={500} height={250} className="w-full" />
          </div>
          <div className="print-avoid-break bg-white border border-gray-200 rounded-xl p-3">
            <Image src="/charts/06_device.png" alt="设备类型分析" width={500} height={250} className="w-full" />
          </div>
        </div>
      </div>

      {/* Page 6: Charts 7-8 并排 */}
      <div className="print-page print-avoid-break">
        <div className="grid grid-cols-2 gap-4">
          <div className="print-avoid-break bg-white border border-gray-200 rounded-xl p-3">
            <Image src="/charts/07_churn.png" alt="流失环节分析" width={500} height={250} className="w-full" />
          </div>
          <div className="print-avoid-break bg-white border border-gray-200 rounded-xl p-3">
            <Image src="/charts/08_trend.png" alt="时间趋势分析" width={500} height={250} className="w-full" />
          </div>
        </div>
      </div>

      {/* Page 7: Findings + Table */}
      <div className="print-page print-avoid-break">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-sm font-bold mb-2 pb-1 border-b-2 border-[#B45F4D] inline-block">核心发现</h3>
            <ul className="space-y-1.5">
              {[
                { title: "点击→加购是最大流失环节（56.9%）", desc: "1,028个点击用户中仅443个加购，超过一半用户点击后流失。说明商品详情页吸引力不足。" },
                { title: "分享渠道「少而精」，活动页完全无效", desc: "分享渠道整体转化率23.6%为全渠道最高，而活动页仅3.2%。建议暂停活动页发券。" },
                { title: "百亿补贴「高点击、低加购」", desc: "点击率85%全渠道最高，但加购率仅35%，用户被低价吸引但决策犹豫。" },
                { title: "会员转化率16.2% vs 新用户11.8%", desc: "会员用户转化率比新用户高37%，建议加大会员权益投入。" },
              ].map((item) => (
                <li key={item.title} className="flex gap-2 text-xs text-gray-600 leading-relaxed">
                  <span className="text-[#B45F4D] font-bold shrink-0">→</span>
                  <span>
                    <strong className="text-[#B45F4D]">{item.title}：</strong>
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold mb-2 pb-1 border-b-2 border-[#B45F4D] inline-block">渠道转化效率详表</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-[10px] border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-1 text-left border-b border-gray-200">渠道</th>
                    <th className="p-1 text-center border-b border-gray-200">浏览</th>
                    <th className="p-1 text-center border-b border-gray-200">点击</th>
                    <th className="p-1 text-center border-b border-gray-200">加购</th>
                    <th className="p-1 text-center border-b border-gray-200">下单</th>
                    <th className="p-1 text-center border-b border-gray-200">支付</th>
                    <th className="p-1 text-center border-b border-gray-200">转化</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { ch: "分享", v: 216, c1: "72.2%", c2: "58.3%", c3: "68.3%", c4: "87.2%", total: "23.6%", badge: "bg-green-100 text-green-700" },
                    { ch: "搜索", v: 367, c1: "76.8%", c2: "52.1%", c3: "65.4%", c4: "91.8%", total: "19.3%", badge: "bg-green-100 text-green-700" },
                    { ch: "推荐", v: 302, c1: "62.9%", c2: "48.7%", c3: "62.1%", c4: "88.5%", total: "16.9%", badge: "bg-orange-100 text-orange-700" },
                    { ch: "百亿补贴", v: 301, c1: "85.4%", c2: "35.2%", c3: "58.6%", c4: "84.3%", total: "15.3%", badge: "bg-orange-100 text-orange-700" },
                    { ch: "活动页", v: 314, c1: "48.4%", c2: "28.9%", c3: "52.3%", c4: "78.6%", total: "3.2%", badge: "bg-red-100 text-red-700" },
                  ].map((row) => (
                    <tr key={row.ch} className="border-b border-gray-100">
                      <td className="p-1 font-semibold">{row.ch}</td>
                      <td className="p-1 text-center">{row.v}</td>
                      <td className="p-1 text-center">{row.c1}</td>
                      <td className="p-1 text-center">{row.c2}</td>
                      <td className="p-1 text-center">{row.c3}</td>
                      <td className="p-1 text-center">{row.c4}</td>
                      <td className="p-1 text-center"><span className={`px-1 py-0.5 rounded text-[9px] font-semibold ${row.badge}`}>{row.total}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Page 8: Recommendations + Limitations */}
      <div className="print-page print-avoid-break">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-sm font-bold mb-2 pb-1 border-b-2 border-[#B45F4D] inline-block">业务建议与预期收益</h3>
            <div className="space-y-1.5">
              {[
                { title: "优化商品详情页（ROI最高）", desc: "针对点击→加购流失56.9%，优化详情页首屏信息、增加用户评价。若加购率提升至55%，预计每月增收¥20,000+。" },
                { title: "暂停活动页发券", desc: "活动页转化率仅3.2%，将预算转移至分享和搜索渠道。预计整体转化率提升至16.5%。" },
                { title: "百亿补贴加紧迫感", desc: "增加「仅剩XX件」等提示，利用损失厌恶心理。若加购率从35%提升至45%，预计每月增加订单120+。" },
                { title: "扩大分享裂变机制", desc: "分享渠道转化效率最高（23.6%），建议增加分享奖励。预计分享流量占比可从14%提升至20%。" },
                { title: "会员权益升级", desc: "会员转化率比新用户高37%，建议推出会员专属价、免邮券等权益。" },
                { title: "移动端体验优化", desc: "PC端转化率（18.5%）比移动端（13.2%）高40%，需优化移动端体验。" },
              ].map((rec) => (
                <div key={rec.title} className="bg-[#FDF1ED] border-l-3 border-[#B45F4D] p-2 rounded-r-lg">
                  <strong className="text-[#B45F4D] text-[10px] uppercase tracking-wider block mb-0.5">{rec.title}</strong>
                  <p className="text-xs text-gray-600 leading-relaxed">{rec.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold mb-2 pb-1 border-b-2 border-[#B45F4D] inline-block">分析局限性与后续方向</h3>
            <ul className="text-xs text-gray-500 space-y-1 ml-3 list-disc leading-relaxed">
              <li><strong>数据周期：</strong>仅覆盖1个月数据，建议补充季度数据验证结论稳定性。</li>
              <li><strong>用户画像：</strong>缺少年龄、地域等维度，无法做更精细的用户分层。</li>
              <li><strong>因果推断：</strong>当前为相关性分析，建议通过A/B测试验证优化效果。</li>
              <li><strong>竞品对比：</strong>缺少行业基准数据，无法判断转化率相对位置。</li>
            </ul>
            <p className="text-[10px] text-gray-400 mt-3">
              数据来源：ecommerce_data_1500.csv | 分析脚本：generate_ecommerce_data.py
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
