'use client'
import Link from 'next/link'
import Image from 'next/image'
import { SwitchLanguage } from '@/components/layout/SwitchLanguage'
import { DesktopNav } from '@/components/layout/DesktopNav'
import { MobileNav } from '@/components/layout/MobileNav'
import { Logo } from '@/components/layout/Logo'
import { Container, Flex, Box } from '@mantine/core'

export const Header = () => {
  return (
    <Container size={1800}>
      <Flex align={'center'} justify="space-between" pt={{ base: 15, lg: 100 }}>
        <Box hiddenFrom={'lg'}>
          <SwitchLanguage />
        </Box>
        <Logo variant={'header'} />
        <Box hiddenFrom={'lg'}>
          <MobileNav />
        </Box>
        <Flex visibleFrom={'lg'} gap={100}>
          <DesktopNav />
          <SwitchLanguage />
        </Flex>
      </Flex>
    </Container>
  )
}
