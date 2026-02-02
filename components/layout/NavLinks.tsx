import Link from 'next/link'

export const NavLinks = () => {
  const nav = [
    { href: '/#works', label: 'works' },
    { href: '/#about', label: 'about' },
    { href: '/#contact', label: 'contact' },
    { href: '/resume', label: 'resume' },
  ] as const

  return (
    <ul className="nav-menu">
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
