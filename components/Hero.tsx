import React from 'react'
import Image from 'next/image'
import {
  ActionIcon,
  createStyles,
  Divider,
  Group,
  Input,
  Paper,
  Select,
  Stack,
  Text,
} from '@mantine/core'
import Vector from 'assets/Vector.svg'
import Frame from 'assets/Frame.svg'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Logos from './Logos'
import SmCard from './SmCard'

import Img from 'assets/cards/Image.png'
import Img1 from 'assets/cards/Image(1).png'
import Img2 from 'assets/cards/Image(2).png'
import Img3 from 'assets/cards/Image(3).png'
import Img4 from 'assets/cards/Image(4).png'

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 'clamp(45px,10vw,120px)',
    lineHeight: 0.8,
  },
  removeStyle: {
    border: 0,
    background: 'transparent',
  },
}))

const Hero = () => {
  const { classes } = useStyles()

  return (
    <Stack align="center" mt={180} mb={200}>
      <SmCard img={Img} value="2.55 ETH" top={310} right={170} />
      <SmCard img={Img1} value="2.55 ETH" top={600} right={75} />
      <SmCard img={Img2} value="2.55 ETH" top={800} right={350} />
      <SmCard img={Img3} value="2.55 ETH" top={370} left={150} />
      <SmCard img={Img4} value="2.55 ETH" top={700} left={360} />
      <SmCard img={Img1} value="2.55 ETH" top={800} left={-45} />

      <Text
        color="dimmed"
        size={15}
        weight={500}
        mb={30}
        style={{ letterSpacing: 3 }}
      >
        NON FUNGIBLE TOKENS
      </Text>
      <Group noWrap mr={100}>
        <Text weight={600} className={classes.title}>
          A new NFT
        </Text>
        <Image src={Vector} width={36} height={85} objectFit="contain" alt="" />
      </Group>
      <Group noWrap ml={100}>
        <Image src={Frame} width={62} height={62} objectFit="contain" alt="" />
        <Text weight={600} className={classes.title}>
          Experience
        </Text>
      </Group>
      <Text color="dimmed" weight={400} size={24} mt={32}>
        Discover, collect and sell
      </Text>
      <Paper
        className="shadow-xxl"
        p="lg"
        mt={35}
        mx="md"
        radius="lg"
        style={{ width: '100%', maxWidth: 643 }}
      >
        <Group noWrap spacing={0} align="center">
          <Input
            placeholder="Items, collections and creators"
            style={{ flex: 'auto' }}
            classNames={{ input: classes.removeStyle }}
          />
          <Divider orientation="vertical" mx="sm" />
          <Select
            placeholder="Category"
            mr="lg"
            data={[
              { label: 'Architecture', value: 'architecture' },
              { label: 'Photography', value: 'photography' },
              { label: 'Games', value: 'games' },
              { label: 'Music', value: 'music' },
            ]}
            classNames={{ input: classes.removeStyle }}
            style={{ width: 200 }}
          />
          <ActionIcon size="xl" radius="xl" color="indigo">
            <MagnifyingGlassIcon width={24} />
          </ActionIcon>
        </Group>
      </Paper>
      <Logos mt={150} sx={{ width: '100%', maxWidth: 'fit-content' }} />
    </Stack>
  )
}

export default Hero
