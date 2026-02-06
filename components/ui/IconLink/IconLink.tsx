import clsx from 'clsx'
import classes from '@/components/ui/IconLink/IconLink.module.css'
import { IconArrowUpRight } from '@tabler/icons-react'
import Link from 'next/link'
import { IconLinkProps } from '@/components/ui/IconLink/types'

export const IconLink = ({
  isActive,
  title,
  slug,
  disabled,
}: IconLinkProps) => {
  return (
    <Link
      onClick={(e) => e.stopPropagation()}
      aria-label={`Open ${title}`}
      href={`/${slug}`}
      className={clsx(classes.arrow, {
        [classes.arrowVisible]: isActive && !disabled,
      })}
    >
      <IconArrowUpRight size={18} stroke={1.5} />
    </Link>
  )
}
