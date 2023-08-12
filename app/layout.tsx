import './globals.css'
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'

const inter = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dojo Helpdesk',
  description: 'A helpdesk for the Dojo community',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
