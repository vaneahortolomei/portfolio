import { Group, List } from '@mantine/core'
import Link from 'next/link'

export const FooterNavLinks = () => {
  const links = [
    { href: '/terms', label: 'terms' },
    { href: '/privacy', label: 'privacy' },
  ]

  return (
    <Group>
      <nav className={'footer-nav'}>
        <List className={'footer-nav__list'}>
          {links.map((link) => (
            <List.Item key={link.label} className={'footer-nav__item'}>
              <Link
                key={link.label}
                className={'footer-nav__link'}
                href={link.href}
                title={link.label}
                target={''}
              >
                {link.label}
                <span className={'footer-nav__link-mark'}>.</span>
              </Link>
            </List.Item>
          ))}
        </List>
      </nav>
    </Group>
  )
}
