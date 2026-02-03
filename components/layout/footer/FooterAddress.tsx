import { Group, List } from '@mantine/core'
import { IconMail, IconPhone } from '@tabler/icons-react'
import Link from 'next/link'
import Image from 'next/image'

export const FooterAddress = () => {
  return (
    <address className={'address'}>
      <List className={'address__list'}>
        <List.Item className={'address__item'}>
          <IconMail size={20} className={'address__icon'} stroke={1} />
          <Link
            className={'address__link'}
            href="mailto:alex@hortdesignfineart.de"
          >
            alex@hortdesignfineart.de
          </Link>
        </List.Item>
        <List.Item className={'address__item'}>
          <IconPhone size={20} className={'address__icon'} stroke={1} />
          <Link className={'address__link'} href="tel:+4915734819050">
            +49 157 348 19050
          </Link>
        </List.Item>
      </List>
      <Group>
        <Link href={'/'} title={''} target={''}>
          <Image
            src={'/Linkedin.svg'}
            width={30}
            height={30}
            title={'Linkedin'}
            alt={''}
          />
        </Link>
        <Link href={'/'} title={''} target={''}>
          <Image
            src={'/Instagram.svg'}
            width={30}
            height={30}
            title={'instagram'}
            alt={''}
          />
        </Link>
      </Group>
    </address>
  )
}
