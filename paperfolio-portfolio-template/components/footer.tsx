import { Mail, Phone, Download } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#F8F6F3] border-t border-gray-200 py-10 md:py-14 no-print">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* 左侧：姓名 + 定位 */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-1">刘婷</h3>
              <p className="text-sm text-gray-500">北京师范大学 · 硕士</p>
            </div>

            {/* 中间：下载简历按钮 */}
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 bg-[#1A1A1A] text-white text-sm font-bold rounded-lg hover:bg-[#333] transition-colors shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:translate-y-[-1px] transition-all"
            >
              <Download className="w-4 h-4" />
              <span>下载简历 PDF</span>
            </a>

            {/* 右侧：联系方式 */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <a
                href="mailto:202321099011@mail.bnu.edu.cn"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#B45F4D] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>202321099011@mail.bnu.edu.cn</span>
              </a>
              <a
                href="tel:19939380656"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#B45F4D] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>19939380656</span>
              </a>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-6 text-center">
            <p className="text-xs text-gray-400">
              © 2026 刘婷 · 作品集持续更新中
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
