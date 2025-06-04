import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Diverse LTDA",
  description: "Diversidade é o nosso ativo, seu crescimento é nosso objetivo.",
  openGraph: {
    images: [
      {
        url: "/logo.png",
        width: 256,
        height: 256,
        alt: 'Logo da Diverse LTDA',
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
