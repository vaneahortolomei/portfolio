'use client'

import { Avatar, Group, Flex, Text, Modal, Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

const ModalHeader = () => {
  return (
    <Flex align={'center'} gap={10}>
      <Avatar
        src="https://fineartamerica.com/images/artistlogos/alex-hortolomei-1715078519-medium.jpg"
        alt=""
        radius="xl"
      />
      <Text>{name}</Text>
    </Flex>
  )
}

const name = 'Alexandru Hortolomei'

export default function Home() {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <Group p={20} bg={'#000000'}>
      <Flex align={'center'} gap={10}>
        <Avatar
          onClick={open}
          style={{
            border: '1px solid #fff',
            cursor: 'pointer',
          }}
          src="https://fineartamerica.com/images/artistlogos/alex-hortolomei-1715078519-medium.jpg"
          alt=""
          radius="xl"
        />
        <Modal
          opened={opened}
          onClose={close}
          title={<ModalHeader />}
          size="lg"
        >
          <Text mb={10} fz={14}>
            Hello My Gay boys!!!
          </Text>
          <Text size="sm">
            I’m a graphic and UI designer. I’m currently working on my personal
            portfolio — coming soon.
          </Text>
        </Modal>
        <Button
          variant="subtle"
          p={0}
          h="auto"
          onClick={open}
          color={'#fff'}
          unstyled
          style={{
            border: 'none',
            background: 'none',
            padding: 0,
            height: 'auto',
            cursor: 'pointer',
            color: '#fff',
          }}
        >
          {name}
        </Button>
      </Flex>
    </Group>
  )
}
