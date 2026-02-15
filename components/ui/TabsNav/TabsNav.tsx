import { Tabs } from '@mantine/core'
import classes from '@/components/ui/TabsNav/TabsNav.module.css'
import Image from 'next/image'
import { TabsNavProps } from '@/components/ui/TabsNav/types'
import { IconLink } from '@/components/ui/IconLink'
// import { useMediaQuery } from '@mantine/hooks';

export const TabsNav = (props: TabsNavProps) => {
  const { value, active, setActive, withLink, data } = props
  // const isDesktop = useMediaQuery('(min-width: 62em)');

  return (
    <Tabs
      value={active}
      onChange={setActive}
      unstyled
      defaultValue={value}
      w={'100%'}
      classNames={{
        root: classes.root,
        list: classes.list,
        tab: classes.tab,
        panel: classes.panel,
      }}
    >
      <Tabs.List style={{ gap: 20, alignItems: 'flex-start' }}>
        {data.map((c) => {
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
              {withLink && (
                <IconLink
                  isActive={isActive}
                  title={c.title}
                  slug={c.slug ?? ''}
                  disabled={c.disabled ?? false}
                />
              )}
            </Tabs.Tab>
          )
        })}
      </Tabs.List>
      {data.map((prev) => (
        <Tabs.Panel key={prev.title} value={prev.title} w={'100%'}>
          <Image
            src={prev.src}
            alt=""
            width={250}
            height={350}
            sizes="(min-width: 768px) 100vw, 350px"
            loading={'eager'}
            quality={95}
            style={{ width: '100%', height: 'auto', maxWidth: '100%' }}
          />
        </Tabs.Panel>
      ))}
    </Tabs>
  )
}
