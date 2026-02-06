'use client'

import { useState } from 'react'
import { Container, Group } from '@mantine/core'
import { TabsNav } from '@/components/ui/TabsNav'
import { resumeList } from '@/data/categories'

export const ResumeHero = () => {
  const [active, setActive] = useState<string | null>('CV')

  return (
    <section className="resume-hero">
      <Container size={1152}>
        <Group mt={50}>
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
