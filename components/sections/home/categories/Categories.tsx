'use client'

import { useState } from 'react'
import { Container, Title, Box } from '@mantine/core'
import { CategoryAccordion } from '@/components/sections/home/categories/CategoryAccordion'
import { CategoryTabs } from '@/components/sections/home/categories/CategoryTabs'

export const Categories = () => {
  const [active, setActive] = useState<string | null>('Branding')
  return (
    <section className="categories">
      <Container size={1152}>
        <Title fw={500} lh={1.2} fz={{ base: 35, lg: 48 }}>
          My Service.
        </Title>
        <>
          <Box visibleFrom={'lg'} mt={50} mb={50}>
            <CategoryTabs active={active} setActive={setActive} />
          </Box>
          <Box hiddenFrom={'lg'} mt={10} mb={50}>
            <CategoryAccordion active={active} setActive={setActive} />
          </Box>
        </>
      </Container>
    </section>
  )
}
