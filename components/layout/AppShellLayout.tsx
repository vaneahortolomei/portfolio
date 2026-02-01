'use client'
import { AppShell } from '@mantine/core'
import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

export const AppShellLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <AppShell header={{ height: 80 }} footer={{ height: 120 }}>
      <AppShell.Header>
        <Header />
      </AppShell.Header>

      <AppShell.Main>{children}</AppShell.Main>

      <AppShell.Footer>
        <Footer />
      </AppShell.Footer>
    </AppShell>
  )
}
