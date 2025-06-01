import React from 'react'
import { Avatar, Button, Center, Group, Stack, Text } from '@mantine/core'
import {
  HeartIcon,
  ArchiveBoxIcon,
  BanknotesIcon,
  ShoppingCartIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/outline'
import { removeCookies } from 'cookies-next'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'
import requests from 'requests'

const Profile = () => {
  const router = useRouter()
  const { data } = useQuery(['me'], () => requests.auth.me())

  return (
    <div>
      <Center mb={10} mt={70}>
        <Avatar src={data?.avatar} variant="light" size={150} radius={100}>
          A
        </Avatar>
      </Center>
      <Text weight={600} size={50} align="center">
        {data?.name}
      </Text>
      <Text color="dimmed" align="center" size="sm">
        {data?.biograph}
      </Text>
      <Center>
        <Button
          leftIcon={<ArrowLeftOnRectangleIcon width={20} />}
          onClick={() => {
            removeCookies('token')
            router.push('/sign-in')
          }}
          color="red"
          variant="light"
          mt={20}
        >
          Logout
        </Button>
      </Center>
      <Group mt={30} position="center" align="center" spacing={100}>
        <Item
          icon={<HeartIcon width={30} />}
          name="Wishlists"
          value={data?.wishlist_count || 0}
        />
        <Item
          icon={<ShoppingCartIcon width={30} />}
          name="Biddings"
          value={data?.biddings_count || 0}
        />
        <Item
          icon={<ArchiveBoxIcon width={30} />}
          name="Assets"
          value={data?.assets_count || 0}
        />
        <Item
          icon={<BanknotesIcon width={30} />}
          name="Total spent"
          value={Number(data?.total_spent || 0).toFixed(2) + ' ETH'}
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
