import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'International Fan Media',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <head>
          <script  src="https://www.instagram.com/embed.js"></script>
        </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
