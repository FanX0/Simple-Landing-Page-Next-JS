import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Mindory",
  description: "A simple learning dashboard landing page.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
