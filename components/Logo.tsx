import { Group, Text } from '@mantine/core'
import Image from 'next/image'
import React from 'react'
import Sygnet from 'assets/Sygnet.svg'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/" passHref>
      <a>
        <Group spacing="sm">
          <Image src={Sygnet} width={34} height={34} alt="" />
          <Text size={27} weight="bold">
            NFT Market
          </Text>
        </Group>
      </a>
    </Link>
  )
}

export default Logo
