import Image from 'next/image'
import Link from 'next/link'

type LogoProps = {
  variant?: string
}

export const Logo = ({ variant }: LogoProps) => {
  return (
    <Link href="/">
      <Image
        className={'logo'}
        src={variant === 'footer' ? '/LogoWhite.svg' : '/Logo.svg'}
        alt="Logo"
        width={250}
        height={53}
        loading={'eager'}
      />
    </Link>
  )
}
