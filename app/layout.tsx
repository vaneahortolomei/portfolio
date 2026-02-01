import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Alex — Graphic & UI Designer',
    template: '%s · Alex',
  },
  description:
    'Graphic and UI designer focused on branding, web and visual systems.',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body style={{ background: '#000000' }}>
        <MantineProvider
          theme={{
            fontFamily: 'var(--font-inter)',
          }}
          defaultColorScheme="light"
        >
          {children}
        </MantineProvider>
      </body>
    </html>
  )
}
