import { Group, Text } from '@mantine/core'
import Image from 'next/image'
import React from 'react'
import Sygnet from 'assets/Sygnet.svg'

const Logo = () => {
  return (
    <Group spacing="sm">
      <Image src={Sygnet} width={34} height={34} />
      <Text size={27} weight="bold">
        NFT Market
      </Text>
    </Group>
  )
}

export default Logo
