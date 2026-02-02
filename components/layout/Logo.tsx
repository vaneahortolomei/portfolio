import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href="/">
      <Image
        className={'logo'}
        src="/Logo.svg"
        alt="Logo"
        width={250}
        height={53}
        loading={'eager'}
      />
    </Link>
  )
}
