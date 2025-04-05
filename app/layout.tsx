import type { Metadata } from 'next'
import { Hi_Melody } from 'next/font/google'
import './globals.css'

const hiMelody = Hi_Melody({
  weight: '400',
  style: 'normal'
})

export const metadata: Metadata = {
  title: 'Ato-labs',
  description: 'Pick me Pick me'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${hiMelody.style} antialiased`}>{children}</body>
    </html>
  )
}
