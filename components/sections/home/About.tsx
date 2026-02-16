import { Container, Flex, Title, Text, Box } from '@mantine/core'
import Image from 'next/image'

export const About = () => {
  return (
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
                I design clear, thoughtful visuals that help brands communicate
                with purpose, clarity, and long-term consistency.
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
  )
}
