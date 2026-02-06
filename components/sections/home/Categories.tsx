'use client'

import { useState } from 'react'
import { Container, Title, Box } from '@mantine/core'
import { TabsNav } from '../../ui/TabsNav'
import { AccordionNav } from '../../ui/AccordionNav'
import { categories } from '@/data/categories'

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
            <TabsNav
              value={'Branding'}
              active={active}
              setActive={setActive}
              withLink={true}
              data={categories}
            />
          </Box>
          <Box hiddenFrom={'lg'} mt={10} mb={50}>
            <AccordionNav
              value={'Branding'}
              active={active}
              setActive={setActive}
              withLink={true}
              data={categories}
            />
          </Box>
        </>
      </Container>
    </section>
  )
}
