import { Group, List } from '@mantine/core'
import Link from 'next/link'

export const FooterNavLinks = () => {
  return (
    <Group>
      <nav className={'footer-nav'}>
        <List className={'footer-nav__list'}>
          <List.Item className={'footer-nav__item'}>
            <Link
              className={'footer-nav__link'}
              href={'/terms'}
              title={''}
              target={''}
            >
              Terms
            </Link>
          </List.Item>
          <List.Item className={'footer-nav__item'}>
            <Link
              className={'footer-nav__link'}
              href={'/privacy'}
              title={''}
              target={''}
            >
              Privacy
            </Link>
          </List.Item>
        </List>
      </nav>
    </Group>
  )
}
