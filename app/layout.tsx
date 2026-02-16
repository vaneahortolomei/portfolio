import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { MantineProvider } from '@mantine/core'
import { AppShellLayout } from '@/components/layout/AppShellLayout'
import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css'
import './globals.css'

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
      <body>
        <MantineProvider
          theme={{
            fontFamily: 'var(--font-inter)',
          }}
          defaultColorScheme="light"
        >
          <AppShellLayout>{children}</AppShellLayout>
        </MantineProvider>
      </body>
    </html>
  )
}
