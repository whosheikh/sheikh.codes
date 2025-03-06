import type React from "react"
import type { Metadata } from "next"
import "./print.css"

export const metadata: Metadata = {
  title: "CV | Likhon Sheikh",
  description: "Professional resume of Likhon Sheikh, Full-stack Developer",
}

export default function CVLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className="cv-layout">{children}</div>
}

