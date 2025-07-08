import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ansh portfolio',
  description: 'Ansh\'s personal portfolio website showcasing projects and skills.',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
