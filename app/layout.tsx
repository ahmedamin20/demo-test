import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Demo Prototyping',
  description: 'Cutting-edge prototyping, 3D printing services and Finishing',
  authors: [{ name: 'Ahmed Amin', url: "https://ahmedamin.tech" }]

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
