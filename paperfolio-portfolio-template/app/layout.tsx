import type React from "react"
import type { Metadata } from "next"

import "./globals.css"

import { Onest, JetBrains_Mono } from "next/font/google"

// Initialize fonts
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-mono",
})

// Initialize Onest font with weights 500 and 700
const onest = Onest({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-onest",
})

export const metadata: Metadata = {
  title: "Paperfolio - Portfolio Landing Page",
  description: "A playful portfolio landing page",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${onest.variable} ${jetbrainsMono.variable} font-sans antialiased overflow-x-hidden`}>{children}</body>
    </html>
  )
}
