import Link from 'next/link'

type NavLinksProps = {
  variant?: string
}

export const NavLinks = ({ variant }: NavLinksProps) => {
  const nav = [
    { href: '/#works', label: 'works' },
    { href: '/#about', label: 'about' },
    { href: '/#contact', label: 'contact' },
    { href: '/resume', label: 'resume' },
  ] as const

  return (
    <ul className={variant === 'footer' ? 'footer-nav-menu' : 'nav-menu'}>
      {nav.map((item) => (
        <li key={item.label} className="nav-menu__item">
          <Link className="nav-menu__link" href={item.href}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}
