'use client'

import { Drawer, Burger, Stack, Flex, ScrollArea } from '@mantine/core'
import { NavLinks } from '@/components/layout/NavLinks'
import { Logo } from '@/components/layout/Logo'
import { useState } from 'react'

const Title = () => {
  return (
    <Flex>
      <Logo />
    </Flex>
  )
}

export const MobileNav = () => {
  const [opened, setOpened] = useState(false)

  return (
    <>
      <Burger opened={opened} onClick={() => setOpened((v) => !v)} size={18} />

      <Drawer
        size="xs"
        opened={opened}
        onClose={() => setOpened(false)}
        title={<Title />}
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        scrollAreaComponent={ScrollArea.Autosize}
      >
        <Stack gap="lg" mt="md">
          <NavLinks />
        </Stack>
      </Drawer>
    </>
  )
}
