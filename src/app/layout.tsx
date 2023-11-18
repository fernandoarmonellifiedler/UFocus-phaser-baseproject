import { ColorProvider } from '@/context/ColorContext'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UFocus Level 2',
  description: 'Color theory interactive game',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ColorProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ColorProvider>
  )
}
