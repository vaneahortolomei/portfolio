import { Dispatch, SetStateAction } from 'react'

export type TabsNavItem = {
  slug: string
  title: string
  src: string
  disabled: boolean
}

export type AccordionNavProps = {
  value: string
  active: string | null
  setActive: Dispatch<SetStateAction<string | null>>
  withLink: boolean
  data: TabsNavItem[]
}
