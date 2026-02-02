import { Menu, Button, Text } from '@mantine/core'

export const SwitchLanguage = () => {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button
          unstyled
          style={{
            padding: 0,
            border: 'none',
            background: 'none',
            cursor: 'pointer',
          }}
        >
          <Text c={'#bbbbbb'} fw={500}>
            DE
          </Text>
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Text>EN</Text>
      </Menu.Dropdown>
    </Menu>
  )
}
