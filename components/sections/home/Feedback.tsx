'use client'

import { useRef } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import { Container, Box, Title, Flex, Text, Group } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import Image from 'next/image'

export const Feedback = () => {
  const autoplay = useRef(Autoplay({ delay: 10000 }))

  const slides = [
    {
      id: 1,
      image: '/feedback_1.png',
      text: 'Working with Alexandru was a great experience. Communication was clear, fast, and easy throughout the entire process. The final result exceeded my expectations as I received a beautifully designed logo in all the necessary formats, and it perfectly meets everything I hoped for',
      name: 'Daria',
      company: 'Makeup Academy',
    },
    {
      id: 2,
      image: '/feedback_1.png',
      text: 'Slide2',
      name: 'Daria',
      company: 'Makeup Academy',
    },
    {
      id: 3,
      image: '/feedback_1.png',
      text: 'Slide3',
      name: 'Daria',
      company: 'Makeup Academy',
    },
  ]

  return (
    <section>
      <Container size={1200}>
        <Box p={{ base: '20px 0', lg: '80px 0' }}>
          <Title
            fw={500}
            lh={1.2}
            fz={{ base: 35, lg: 48 }}
            mb={{ base: 20, lg: 40 }}
          >
            Clients feedback.
          </Title>
          <Carousel
            height={550}
            withIndicators
            withControls={false}
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={() => autoplay.current.play()}
            styles={{
              indicator: {
                width: 8,
                height: 8,
                backgroundColor: '#ccc',
                transition: 'all 300ms ease',

                // '&[data-active]': {
                //   width: 32,
                //   backgroundColor: '#E29C54',
                // },
              },
            }}
          >
            {slides.map((s) => (
              <Carousel.Slide key={s.id}>
                <Flex gap={100} align={'flex-start'} key={s.id}>
                  <Image
                    src={s.image}
                    width={615}
                    height={660}
                    alt={''}
                    quality={75}
                    loading="eager"
                    style={{
                      height: 'auto',
                      maxWidth: '100%',
                      display: 'block',
                      width: '100%',
                    }}
                  />
                  <Box pt={150}>
                    <Text
                      w={650}
                      fw={400}
                      lh={1.2}
                      fz={{ base: 25, lg: 25 }}
                      pos={'relative'}
                    >
                      <span
                        style={{
                          display: 'block',
                          lineHeight: 1,
                          color: '#E29C54',
                          fontSize: '135px',
                          fontFamily: '"Kdam Thmor Pro", Georgia, serif',
                          position: 'absolute',
                          top: '-70px',
                        }}
                      >
                        “
                      </span>
                      {s.text}
                    </Text>
                    <Group mt={30} display={'block'}>
                      <Text>
                        <strong>{s.name}</strong>
                      </Text>
                      <Text>{s.company}</Text>
                    </Group>
                  </Box>
                </Flex>
              </Carousel.Slide>
            ))}
          </Carousel>
        </Box>
      </Container>
    </section>
  )
}
