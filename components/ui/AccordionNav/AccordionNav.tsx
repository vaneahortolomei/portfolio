import { IconLink } from '@/components/ui/IconLink'
import { Accordion } from '@mantine/core'
import Image from 'next/image'
import { AccordionNavProps } from '@/components/ui/AccordionNav/types'
import classes from '@/components/ui/AccordionNav/AccordionNav.module.css'

export const AccordionNav = (props: AccordionNavProps) => {
  const { value, active, setActive, withLink, data } = props

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
      defaultValue={value}
    >
      {data.map((c) => {
        const isActive = active === c.title

        return (
          <Accordion.Item value={c.title} key={c.title}>
            <Accordion.Control
              className={classes.accordion}
              disabled={c.disabled}
            >
              <span>{c.title}</span>
              {withLink && (
                <IconLink
                  isActive={isActive}
                  title={c.title}
                  slug={c.slug ?? ''}
                  disabled={c.disabled}
                />
              )}
            </Accordion.Control>
            <Accordion.Panel>
              <Image
                src={c.src}
                alt=""
                width={250}
                height={350}
                sizes="(min-width: 768px) 100vw, 350px"
                loading={'eager'}
                quality={95}
                style={{ width: '100%', height: 'auto', maxWidth: '100%' }}
              />
            </Accordion.Panel>
          </Accordion.Item>
        )
      })}
    </Accordion>
  )
}
