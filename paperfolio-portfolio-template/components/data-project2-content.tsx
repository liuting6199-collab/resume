"use client"

import * as React from "react"
import Image from "next/image"

export function DataProject2Content() {
  return (
    <div className="space-y-4 mt-8">
      {/* Page 1: Header + Background + KPI (紧凑版) */}
      <div className="print-page print-avoid-break">
        <div className="bg-white border-[2px] border-[#2E7D32] p-6 rounded-2xl relative overflow-hidden shadow-[4px_4px_0px_0px_#2E7D32]">
          <div className="flex items-start justify-between mb-2">
            <div>
              <div className="text-xs font-medium text-[#2E7D32] mb-1 tracking-wider uppercase">Portfolio Project 02</div>
              <h2 className="text-xl font-bold text-[#1A1A1A]">优惠券投放ROI优化与用户分层分析</h2>
            </div>
            {/* 项目元信息 */}
            <div className="hidden sm:flex flex-col items-end gap-1">
              <span className="px-2 py-0.5 bg-[#E8F5E9] border border-dashed border-[#2E7D32] rounded text-[10px] text-[#2E7D32]">独立分析</span>
            </div>
          </div>
          <p className="text-gray-500 text-xs max-w-xl">
            基于1,200条优惠券发放记录，评估不同券类型、渠道、用户群体的ROI表现，提出精准投放策略
          </p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {["Python", "Pandas", "RFM模型", "ROI分析", "用户分层", "A/B测试设计"].map((tag) => (
              <span key={tag} className="px-2 py-0.5 bg-[#E8F5E9] rounded-full text-[10px] text-[#2E7D32] border border-[#2E7D32]/20">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="print-avoid-break">
            <h3 className="text-sm font-bold mb-2 pb-1 border-b-2 border-[#2E7D32] inline-block">项目背景与目标</h3>
            <p className="text-gray-600 text-xs mb-2 leading-relaxed">
              某外卖/到店平台每月发放大量优惠券，但缺乏系统的ROI评估体系。业务方希望了解：哪种券类型ROI最高？哪些用户群体对优惠券最敏感？
            </p>
            <p className="text-xs font-semibold mb-1">核心问题：</p>
            <ul className="text-xs text-gray-500 space-y-0.5 ml-3 list-disc leading-relaxed">
              <li>满减券/折扣券/无门槛券，哪种ROI最高？</li>
              <li>APP推送/短信/微信，哪个渠道发券最有效？</li>
              <li>新用户/老用户/会员，谁对优惠券更敏感？</li>
              <li>如何设计分层投放策略，实现补贴效率最大化？</li>
            </ul>
          </div>
          <div className="print-avoid-break">
            <h3 className="text-sm font-bold mb-2 pb-1 border-b-2 border-[#2E7D32] inline-block">关键指标概览</h3>
            <div className="grid grid-cols-3 gap-2">
              {[
                { value: "4.31", label: "平均ROI" },
                { value: "62.3%", label: "整体核销率" },
                { value: "5.18", label: "折扣券ROI" },
                { value: "100%", label: "APP推送核销" },
                { value: "100%", label: "会员核销率" },
                { value: "0%", label: "活动页核销率" },
              ].map((kpi) => (
                <div key={kpi.label} className="text-center p-2 bg-white border border-gray-200 rounded-lg">
                  <div className="text-base font-bold text-[#2E7D32]">{kpi.value}</div>
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
            <h3 className="text-sm font-bold mb-2 pb-1 border-b-2 border-[#2E7D32] inline-block">数据说明与清洗</h3>
            <p className="text-gray-600 text-xs mb-3 leading-relaxed">
              数据集包含1,200条优惠券发放记录，覆盖2024年2月。每条记录包含用户ID、券类型、发放渠道、用户类型、是否核销、订单金额、补贴金额等字段。
            </p>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-gray-50 p-2.5 rounded-lg border border-gray-200">
                <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">数据字段</div>
                <p className="text-[10px] text-gray-500 leading-relaxed">
                  user_id · coupon_type · channel · user_type · is_used · order_amount · subsidy_amount · roi
                </p>
              </div>
              <div className="bg-gray-50 p-2.5 rounded-lg border border-gray-200">
                <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">清洗过程</div>
                <p className="text-[10px] text-gray-500 leading-relaxed">
                  ① 去重：无重复发放记录<br/>
                  ② 缺失值：无缺失字段<br/>
                  ③ 异常值：ROI在0-20范围内<br/>
                  ④ 逻辑校验：核销订单必有金额
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold mb-2 pb-1 border-b-2 border-[#2E7D32] inline-block">分析思路与假设</h3>
            <p className="text-gray-600 text-xs mb-2 leading-relaxed">
              从原始发放记录出发，按「券类型对比 → 渠道效果 → 用户分层 → 交叉分析 → 策略设计」逐层深入。
            </p>
            <div className="flex flex-wrap items-center gap-1 text-xs text-gray-600 mb-2">
              {["券类型对比", "渠道效果", "用户分层", "交叉分析", "策略设计"].map((step, i) => (
                <span key={step} className="flex items-center gap-1">
                  <span className="bg-gray-100 px-2 py-0.5 rounded text-[10px] border border-gray-200">{step}</span>
                  {i < 4 && <span className="text-[#2E7D32] font-bold text-xs">→</span>}
                </span>
              ))}
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              <strong>核心假设：</strong>① 折扣券ROI最高但核销率低；② APP推送和短信渠道核销率最高；③ 会员用户对优惠券敏感度低于新用户；④ 满减券适合拉新，折扣券适合促活。
            </p>
          </div>
        </div>
      </div>

      {/* Page 3: Charts 1-2 并排 */}
      <div className="print-page print-avoid-break">
        <h3 className="text-sm font-bold mb-3 pb-1 border-b-2 border-[#2E7D32] inline-block">数据可视化与分析</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="print-avoid-break bg-white border border-gray-200 rounded-xl p-3">
            <Image src="/charts/coupon_01_type_roi.png" alt="券类型ROI对比" width={500} height={250} className="w-full" />
          </div>
          <div className="print-avoid-break bg-white border border-gray-200 rounded-xl p-3">
            <Image src="/charts/coupon_02_channel.png" alt="渠道核销率对比" width={500} height={250} className="w-full" />
          </div>
        </div>
      </div>

      {/* Page 4: Charts 3-4 并排 */}
      <div className="print-page print-avoid-break">
        <div className="grid grid-cols-2 gap-4">
          <div className="print-avoid-break bg-white border border-gray-200 rounded-xl p-3">
            <Image src="/charts/coupon_03_user_type.png" alt="用户类型分析" width={500} height={250} className="w-full" />
          </div>
          <div className="print-avoid-break bg-white border border-gray-200 rounded-xl p-3">
            <Image src="/charts/coupon_04_cross.png" alt="交叉分析" width={500} height={250} className="w-full" />
          </div>
        </div>
      </div>

      {/* Page 5: Charts 5-6 并排 */}
      <div className="print-page print-avoid-break">
        <div className="grid grid-cols-2 gap-4">
          <div className="print-avoid-break bg-white border border-gray-200 rounded-xl p-3">
            <Image src="/charts/coupon_05_rfm.png" alt="RFM用户分层" width={500} height={250} className="w-full" />
          </div>
          <div className="print-avoid-break bg-white border border-gray-200 rounded-xl p-3">
            <Image src="/charts/coupon_06_trend.png" alt="时间趋势分析" width={500} height={250} className="w-full" />
          </div>
        </div>
      </div>

      {/* Page 6: Findings + Table */}
      <div className="print-page print-avoid-break">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-sm font-bold mb-2 pb-1 border-b-2 border-[#2E7D32] inline-block">核心发现</h3>
            <ul className="space-y-1.5">
              {[
                { title: "折扣券ROI最高（5.18）但核销率最低（54.5%）", desc: "折扣券吸引高价值用户，每补贴1元带来5.18元订单，但覆盖范围有限。适合精准投放。" },
                { title: "满减券核销率最高（75.0%）但ROI中等（3.92）", desc: "满减券门槛低，用户易达标，适合拉新和促活。建议作为新用户首单券。" },
                { title: "APP推送和短信渠道核销率均为100%", desc: "精准推送渠道效果远超泛流量渠道。建议暂停活动页发券。" },
                { title: "会员核销率100% vs 普通用户35.7%", desc: "会员用户对平台信任度高，使用意愿强。建议扩大会员规模。" },
              ].map((item) => (
                <li key={item.title} className="flex gap-2 text-xs text-gray-600 leading-relaxed">
                  <span className="text-[#2E7D32] font-bold shrink-0">→</span>
                  <span>
                    <strong className="text-[#2E7D32]">{item.title}：</strong>
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold mb-2 pb-1 border-b-2 border-[#2E7D32] inline-block">券类型效果详表</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-[10px] border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-1 text-left border-b border-gray-200">券类型</th>
                    <th className="p-1 text-center border-b border-gray-200">发放</th>
                    <th className="p-1 text-center border-b border-gray-200">核销</th>
                    <th className="p-1 text-center border-b border-gray-200">核销率</th>
                    <th className="p-1 text-center border-b border-gray-200">ROI</th>
                    <th className="p-1 text-center border-b border-gray-200">场景</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="p-1 font-semibold">折扣券</td>
                    <td className="p-1 text-center">264</td>
                    <td className="p-1 text-center">144</td>
                    <td className="p-1 text-center"><span className="px-1 py-0.5 rounded text-[9px] font-semibold bg-orange-100 text-orange-700">54.5%</span></td>
                    <td className="p-1 text-center"><span className="px-1 py-0.5 rounded text-[9px] font-semibold bg-green-100 text-green-700">5.18</span></td>
                    <td className="p-1 text-center">老用户促活</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-1 font-semibold">无门槛券</td>
                    <td className="p-1 text-center">360</td>
                    <td className="p-1 text-center">240</td>
                    <td className="p-1 text-center"><span className="px-1 py-0.5 rounded text-[9px] font-semibold bg-green-100 text-green-700">66.7%</span></td>
                    <td className="p-1 text-center"><span className="px-1 py-0.5 rounded text-[9px] font-semibold bg-green-100 text-green-700">4.31</span></td>
                    <td className="p-1 text-center">大规模投放</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-1 font-semibold">满减券</td>
                    <td className="p-1 text-center">576</td>
                    <td className="p-1 text-center">432</td>
                    <td className="p-1 text-center"><span className="px-1 py-0.5 rounded text-[9px] font-semibold bg-green-100 text-green-700">75.0%</span></td>
                    <td className="p-1 text-center"><span className="px-1 py-0.5 rounded text-[9px] font-semibold bg-orange-100 text-orange-700">3.92</span></td>
                    <td className="p-1 text-center">拉新</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Page 7: Recommendations + A/B Test */}
      <div className="print-page print-avoid-break">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-sm font-bold mb-2 pb-1 border-b-2 border-[#2E7D32] inline-block">分层投放策略与预期收益</h3>
            <div className="space-y-1.5">
              {[
                { title: "新用户：满减券 + APP推送", desc: "发放「满30减10」低门槛券，通过APP推送精准触达。预计新用户转化率从11.8%提升至25%。" },
                { title: "老用户：折扣券 + 短信提醒", desc: "发放「8折券」（最高减30），通过短信+APP双渠道提醒。预计老用户复购率提升15%。" },
                { title: "会员：专属折扣券 + 生日礼", desc: "发放「7折会员专属券」+生日月双倍积分。预计会员客单价提升20%。" },
                { title: "沉睡用户：无门槛券 + 微信触达", desc: "发放「5元无门槛券」通过微信唤醒。预计沉睡用户召回率10%。" },
                { title: "暂停活动页发券", desc: "活动页核销率0%，立即暂停。将预算转移至APP推送和短信渠道。" },
                { title: "建立券效监控看板", desc: "实时监控各券类型、渠道、用户群的ROI和核销率，每周迭代优化投放策略。" },
              ].map((rec) => (
                <div key={rec.title} className="bg-[#E8F5E9] border-l-3 border-[#2E7D32] p-2 rounded-r-lg">
                  <strong className="text-[#2E7D32] text-[10px] uppercase tracking-wider block mb-0.5">{rec.title}</strong>
                  <p className="text-xs text-gray-600 leading-relaxed">{rec.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold mb-2 pb-1 border-b-2 border-[#2E7D32] inline-block">A/B测试验证方案</h3>
            <div className="space-y-2">
              <div className="bg-gray-50 p-2.5 rounded-lg border border-gray-200">
                <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">测试1：券类型效果验证</div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  <strong>假设：</strong>折扣券ROI &gt; 满减券ROI<br/>
                  <strong>实验组：</strong>500人发放折扣券<br/>
                  <strong>对照组：</strong>500人发放满减券<br/>
                  <strong>指标：</strong>ROI、核销率、客单价<br/>
                  <strong>周期：</strong>2周 | <strong>成功标准：</strong>ROI提升≥15%
                </p>
              </div>
              <div className="bg-gray-50 p-2.5 rounded-lg border border-gray-200">
                <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">测试2：渠道效果验证</div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  <strong>假设：</strong>APP推送核销率 &gt; 短信核销率<br/>
                  <strong>实验组：</strong>300人APP推送发券<br/>
                  <strong>对照组：</strong>300人短信发券<br/>
                  <strong>指标：</strong>核销率、7日留存、30日留存<br/>
                  <strong>周期：</strong>1周 | <strong>成功标准：</strong>核销率提升≥10%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page 8: Limitations */}
      <div className="print-page print-avoid-break">
        <div>
          <h3 className="text-sm font-bold mb-2 pb-1 border-b-2 border-[#2E7D32] inline-block">分析局限性与后续方向</h3>
          <ul className="text-xs text-gray-500 space-y-1 ml-3 list-disc leading-relaxed">
            <li><strong>数据周期：</strong>仅覆盖1个月数据，无法观察优惠券的长期效果。</li>
            <li><strong>券类型有限：</strong>缺少新人券、裂变券等新型优惠券的数据。</li>
            <li><strong>因果推断：</strong>当前为相关性分析，无法完全排除选择偏差。</li>
            <li><strong>外部因素：</strong>未考虑竞品活动、节假日等外部因素的影响。</li>
          </ul>
          <p className="text-[10px] text-gray-400 mt-3">
            数据来源：coupon_data_1200.csv | 分析脚本：generate_coupon_data.py
          </p>
        </div>
      </div>
    </div>
  )
}
