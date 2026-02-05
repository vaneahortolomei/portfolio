'use client'

import { Group, Flex, Text, Container } from '@mantine/core'
import { FooterAddress, FooterNavLinks } from '@/components/layout/footer'
import { NavLinks } from '@/components/layout/NavLinks'
import { Logo } from '@/components/layout/Logo'

export const Footer = () => {
  const today = new Date()
  const year = today.getFullYear()

  return (
    <Container size={1152}>
      <Group p={'20px 0'} className={'footer'}>
        <Flex align={'center'} justify={'space-between'} w={'100%'}>
          <Logo variant={'footer'} />
        </Flex>
        <Flex>
          <Group mt={40} mb={20} align={'flex-start'} gap={100}>
            <FooterAddress />
            <NavLinks variant={'footer'} />
          </Group>
        </Flex>
        <Flex align={'center'} justify={'space-between'} w={'100%'}>
          <Text c={'#fff'} fz={14}>
            © Hortdesignandfineart {year}
          </Text>
          <FooterNavLinks />
        </Flex>
      </Group>
    </Container>
  )
}
