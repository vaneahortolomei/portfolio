import { Dispatch, SetStateAction } from 'react'
import { Accordion } from '@mantine/core'
import { categories } from '@/data/categories'
import classes from '@/components/sections/home/categories/CategoriesTabs.module.css'
import Link from 'next/link'
import clsx from 'clsx'
import { IconArrowUpRight } from '@tabler/icons-react'
import Image from 'next/image'

type CategoryAccordionProps = {
  active: string | null
  setActive: Dispatch<SetStateAction<string | null>>
}

export const CategoryAccordion = ({
  active,
  setActive,
}: CategoryAccordionProps) => {
  return (
    <Accordion
      styles={{
        content: {
          padding: '15px 0',
        },
      }}
      value={active}
      onChange={setActive}
      chevron={null}
      variant="unstyled"
      radius="md"
      defaultValue="Branding"
    >
      {categories.map((c) => {
        const isActive = active === c.title

        return (
          <Accordion.Item value={c.title} key={c.title}>
            <Accordion.Control
              className={classes.accordion}
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
            </Accordion.Control>
            <Accordion.Panel>
              <Image
                src={c.src}
                alt=""
                width={250}
                height={350}
                loading={'eager'}
                style={{ width: '100%', height: 'auto', maxWidth: '100%' }}
              />
            </Accordion.Panel>
          </Accordion.Item>
        )
      })}
    </Accordion>
  )
}
