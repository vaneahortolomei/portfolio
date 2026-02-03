'use client'
import { AppShell } from '@mantine/core'
import React from 'react'
import { Header } from './Header'
import { Footer } from './footer/Footer'

export const AppShellLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <AppShell
      header={{ height: 180 }}
      footer={{ height: 'auto' }}
      withBorder={false}
    >
      <AppShell.Header pos={'relative'}>
        <Header />
      </AppShell.Header>

      <AppShell.Main p={0}>{children}</AppShell.Main>

      <AppShell.Footer pos={'relative'} bg={'#141626'}>
        <Footer />
      </AppShell.Footer>
    </AppShell>
  )
}
