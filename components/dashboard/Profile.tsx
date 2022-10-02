import React from 'react'
import { Avatar, Center, Divider, Group, Stack, Text } from '@mantine/core'
import {
  HeartIcon,
  ArchiveBoxIcon,
  BanknotesIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline'

const Profile = () => {
  return (
    <div>
      <Center mb={10} mt={70}>
        <Avatar variant="light" size={150} radius={100}>
          A
        </Avatar>
      </Center>
      <Text weight={600} size={50} align="center">
        Asilbek
      </Text>
      <Group mt={30} position="center" align="center" spacing={100}>
        <Item icon={<HeartIcon width={30} />} name="Wishlists" value={4} />
        <Item
          icon={<ShoppingCartIcon width={30} />}
          name="Biddings"
          value={15}
        />
        <Item icon={<ArchiveBoxIcon width={30} />} name="Assets" value={8} />
        <Item
          icon={<BanknotesIcon width={30} />}
          name="Total spent"
          value={'12.3K'}
        />
      </Group>
    </div>
  )
}

const Item = ({
  name,
  value,
  icon,
}: {
  name: string
  value: number | string
  icon: React.ReactNode
}) => {
  return (
    <Stack spacing={4} align="center">
      {icon}
      <Text size={35} weight={600} mt={10} mb={3} style={{ lineHeight: 1 }}>
        {value}
      </Text>
      <Text size={14} weight={400} color="dimmed" style={{ lineHeight: 1 }}>
        {name}
      </Text>
    </Stack>
  )
}
export default Profile
