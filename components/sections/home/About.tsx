import { Container, Flex, Title, Text, Box } from '@mantine/core'
import Image from 'next/image'

export const About = () => {
  return (
    <>
      <section id={'about'} style={{ background: '#F8F8F8' }}>
        <Container size={1200}>
          <Box p={{ base: '20px 0', lg: '80px 0' }}>
            <Title
              fw={500}
              lh={1.2}
              fz={{ base: 35, lg: 48 }}
              mb={{ base: 20, lg: 40 }}
            >
              About me
            </Title>
            <Flex
              gap={{ base: 20, lg: 100 }}
              direction={{ base: 'column', lg: 'row' }}
            >
              <Text
                hiddenFrom={'lg'}
                maw={500}
                fw={400}
                lh={1.2}
                fz={{ base: 25, lg: 35 }}
              >
                I design clear, thoughtful visuals that help brands communicate
                with purpose, clarity, and long-term consistency.
              </Text>
              <Image
                src={'/about.png'}
                width={700}
                height={700}
                alt={''}
                quality={95}
                loading="eager"
                style={{
                  height: 'auto',
                  maxWidth: '100%',
                  display: 'block',
                  width: '100%',
                }}
              />
              <Flex
                direction={'column'}
                justify={'space-between'}
                align={{ base: 'center', lg: 'flex-start' }}
              >
                <Text
                  visibleFrom={'lg'}
                  maw={500}
                  fw={400}
                  lh={1.2}
                  fz={{ base: 25, lg: 35 }}
                  ta={{ base: 'center', lg: 'left' }}
                >
                  I design clear, thoughtful visuals that help brands
                  communicate with purpose, clarity, and long-term consistency.
                </Text>
                <Flex direction={'column'} gap={20}>
                  <Flex
                    direction={'column'}
                    align={{ base: 'center', lg: 'flex-start' }}
                  >
                    <Text c={'#E29C54'} fz={40} fw={600}>
                      5+
                    </Text>
                    <Text>Years of experience</Text>
                  </Flex>
                  <Flex
                    direction={'column'}
                    align={{ base: 'center', lg: 'flex-start' }}
                  >
                    <Text c={'#E29C54'} fz={40} fw={600}>
                      100+
                    </Text>
                    <Text>Completed projects</Text>
                  </Flex>
                  <Flex
                    direction={'column'}
                    align={{ base: 'center', lg: 'flex-start' }}
                  >
                    <Text c={'#E29C54'} fz={40} fw={600}>
                      30+
                    </Text>
                    <Text>Clients on wordwide</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Box>
        </Container>
      </section>
      <section style={{ background: '#141626' }}>
        <Container size={1200}>
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            align={'center'}
            p={{ base: '20px 0', lg: '80px 0' }}
            justify={'space-between'}
            gap={{ base: 40, lg: 0 }}
          >
            <Flex direction={'column'} gap={{ base: 40, lg: 100 }}>
              <Box ta={'center'}>
                <Image src={'/about_1.svg'} width={92} height={92} alt={''} />
                <Text c={'#fff'} fz={35} fw={500} mt={20} mb={10}>
                  Strategic Clarity
                </Text>
                <Text maw={400} m={'0 auto'} c={'#fff'}>
                  Design decisions are always rooted in purpose, not decoration.
                </Text>
              </Box>
              <Box ta={'center'}>
                <Image src={'/about_2.svg'} width={92} height={92} alt={''} />
                <Text c={'#fff'} fz={35} fw={500} mt={20} mb={10}>
                  Detail Driven
                </Text>
                <Text maw={400} m={'0 auto'} c={'#fff'}>
                  Precision in typography, layout and visual consistency.
                </Text>
              </Box>
            </Flex>
            <Flex direction={'column'} gap={{ base: 40, lg: 100 }}>
              <Box ta={'center'}>
                <Image src={'/about_3.svg'} width={92} height={92} alt={''} />
                <Text c={'#fff'} fz={35} fw={500} mt={20} mb={10}>
                  Timeless Design
                </Text>
                <Text maw={400} m={'0 auto'} c={'#fff'}>
                  Minimal, durable aesthetics that stay relevant over time.
                </Text>
              </Box>
              <Box ta={'center'}>
                <Image src={'/about_4.svg'} width={92} height={92} alt={''} />
                <Text c={'#fff'} fz={35} fw={500} mt={20} mb={10}>
                  Multi-disciplinary
                </Text>
                <Text maw={400} m={'0 auto'} c={'#fff'}>
                  Experience across branding, editorial, product and fine art.
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Container>
      </section>
    </>
  )
}
