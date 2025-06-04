import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aditya Pippal - Full Stack Developer",
  description: "Portfolio of Aditya Pippal, a passionate full-stack developer specializing in modern web technologies.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
     <body className={`${inter.className} bg-background text-foreground`}>
     {children}</body>
    </html>
  )
}
