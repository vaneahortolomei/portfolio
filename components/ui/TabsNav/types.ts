import { Dispatch, SetStateAction } from 'react'

export type TabsNavItemBase = {
  title: string
  src: string
  disabled?: boolean
  slug?: string
}

export type TabsNavProps = {
  value: string
  active: string | null
  setActive: Dispatch<SetStateAction<string | null>>
  withLink?: boolean
  data: ReadonlyArray<TabsNavItemBase>
}
