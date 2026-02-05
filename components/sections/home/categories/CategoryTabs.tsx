import { Tabs } from '@mantine/core'
import classes from '@/components/sections/home/categories/CategoriesTabs.module.css'
import { categories, categoriesPreviews } from '@/data/categories'
import Link from 'next/link'
import clsx from 'clsx'
import { IconArrowUpRight } from '@tabler/icons-react'
import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'

type CategoryTabsProps = {
  active: string | null
  setActive: Dispatch<SetStateAction<string | null>>
}

export const CategoryTabs = ({ active, setActive }: CategoryTabsProps) => {
  return (
    <Tabs
      value={active}
      onChange={setActive}
      unstyled
      defaultValue="Branding"
      orientation="vertical"
      w={'100%'}
      classNames={{
        root: classes.root,
        list: classes.list,
        tab: classes.tab,
        panel: classes.panel,
      }}
    >
      <Tabs.List style={{ gap: 20, alignItems: 'flex-start' }}>
        {categories.map((c) => {
          const isActive = active === c.title

          return (
            <Tabs.Tab
              className={classes.tab}
              fz={18}
              fw={500}
              color={'#1A2A8'}
              key={c.title}
              p={0}
              value={c.title}
              disabled={c.disabled}
            >
              <span>{c.title}</span>
              <Link
                onClick={(e) => e.stopPropagation()}
                aria-label={`Open ${c.title}`}
                href={`/${c.slug}`}
                className={clsx(classes.arrow, {
                  [classes.arrowVisible]: isActive && !c.disabled,
                })}
              >
                <IconArrowUpRight size={18} stroke={1.5} />
              </Link>
            </Tabs.Tab>
          )
        })}
      </Tabs.List>
      {categoriesPreviews.map((prev) => (
        <Tabs.Panel key={prev.title} value={prev.title} w={'100%'}>
          <Image
            src={prev.src}
            alt=""
            width={250}
            height={350}
            loading={'eager'}
            style={{ width: '100%', height: 'auto', maxWidth: '100%' }}
          />
        </Tabs.Panel>
      ))}
    </Tabs>
  )
}
