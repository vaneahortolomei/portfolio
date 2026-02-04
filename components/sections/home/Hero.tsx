'use client'

import {
  Grid,
  Container,
  Text,
  Title,
  Divider,
  Flex,
  Group,
} from '@mantine/core'
import Link from 'next/link'
import Image from 'next/image'

export const Hero = () => {
  return (
    <section>
      <Container size={1800}>
        <Grid>
          <Grid.Col
            span={{ base: 12, lg: 6 }}
            order={{ base: 2, lg: 1 }}
            mt={{ base: -220, lg: 0 }}
          >
            <Title
              fw={400}
              lh={1.2}
              ta={{ base: 'center', lg: 'left' }}
              fz={{ base: 35, lg: 65 }}
              pt={{ base: 0, lg: 150 }}
              pr={{ base: 0, lg: 200 }}
              style={{ lineHeight: 1.2 }}
            >
              I create Clarity through{' '}
              <Text
                span
                fw={400}
                lh={1.2}
                fz={{ base: 35, lg: 65 }}
                c={'#e29c54'}
              >
                design.
              </Text>{' '}
              Thoughtful strategy and visual precision for meaningful brands.
            </Title>
            <Flex
              direction={'column'}
              mt={{ base: 0, lg: 50 }}
              mb={{ base: 50, lg: 0 }}
              align={{ base: 'center', lg: 'flex-start' }}
            >
              <Divider
                size={7}
                color={'#e29c54'}
                w={{ base: 68, lg: 124 }}
                mt={{ base: 20, lg: 0 }}
                mb={{ base: 20, lg: 50 }}
              />
              <Text display={'inline-block'} fw={500}>
                Graphic Designer
              </Text>
              <Text display={'inline-block'} mb={{ base: 20, lg: 50 }}>
                Alexandru Hortolomei
              </Text>
              <Image
                src={'./sign.svg'}
                width={220}
                height={220}
                style={{ height: 'auto', maxWidth: '100%' }}
                alt={''}
              ></Image>
            </Flex>
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 6 }} order={{ base: 1, lg: 2 }}>
            <Image
              src={'/portrait.png'}
              width={850}
              height={1400}
              alt={''}
              style={{ height: 'auto', maxWidth: '100%' }}
            />
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  )
}
