'use client'

import { useState } from 'react'
import { Container, Group, Box, Title } from '@mantine/core'
import { TabsNav } from '@/components/ui/TabsNav'
import { AccordionNav } from '@/components/ui/AccordionNav'
import { resumeList } from '@/data/categories'
import classes from '@/components/ui/TabsNav/TabsNav.module.css'

export const ResumeHero = () => {
  const [active, setActive] = useState<string | null>('CV')

  return (
    <section className={classes.resumeHero}>
      <Container size={1152}>
        <Group
          mt={{ base: 0, lg: 50 }}
          mb={{ base: 50, lg: 150 }}
          styles={{
            root: { flexDirection: 'column', alignItems: 'flex-start' },
          }}
        >
          <Title
            fw={500}
            fz={{ base: 35, lg: 48 }}
            lh={1.2}
            pb={{ base: 0, lg: 50 }}
          >
            Documents & credentials
          </Title>
          <TabsNav
            value={'CV'}
            active={active}
            setActive={setActive}
            data={resumeList}
            withLink={false}
          />
        </Group>
      </Container>
    </section>
  )
}
