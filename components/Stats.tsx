import {
  Box,
  Button,
  Group,
  Stack,
  Text,
  useMantineColorScheme,
} from '@mantine/core'
import Wrapper from 'containers/Wrapper'
import Image from 'next/image'
import React from 'react'
import IOSCard from './IOSCard'
import User from 'assets/Users.png'
import UserBlack from 'assets/Users-black.png'
import WrapperFull from 'containers/WrapperFull'
import { UserCircleIcon } from '@heroicons/react/24/outline'
import ArtworksIcon from 'assets/ArtworksIcon'
import ArtistsIcon from 'assets/ArtistsIcon'
import WalletIcon from 'assets/WalletIcon'
import MyCarousel, { MyCarouselSlide } from './MyCarousel'
import SmCard from './SmCard'
import Img from 'assets/cards/Image.png'

const stats = [
  { value: '300k', label: 'Users Active', icon: <UserCircleIcon width={40} /> },
  { value: '52,5k', label: 'Artworks', icon: <ArtworksIcon /> },
  { value: '17,5k', label: 'Artists', icon: <ArtistsIcon /> },
  { value: '35.58', label: 'ETH Spent', icon: <WalletIcon /> },
]
const Stats = () => {
  const { colorScheme } = useMantineColorScheme()
  const ioscolors = colorScheme === 'light' ? ['#F2F3F6', '#F2F3F6'] : undefined

  return (
    <>
      <Wrapper mt={100}>
        <Group position="center" align="center" spacing={13}>
          {stats.map((stat, i) => (
            <Stack
              spacing={4}
              key={i}
              align="center"
              style={{
                transform: i == 0 ? 'translateY(-3px)' : '',
                width: 223,
              }}
            >
              {stat.icon}
              <Text
                size={48}
                weight={600}
                mt={i === 0 ? 6 : 10}
                style={{ lineHeight: '55px' }}
              >
                {stat.value}
              </Text>
              <Text
                size={16}
                weight={400}
                color="dimmed"
                style={{ lineHeight: '24px' }}
              >
                {stat.label}
              </Text>
            </Stack>
          ))}
        </Group>
      </Wrapper>
      <Wrapper mt={196} mb={147}>
        <IOSCard
          colors={ioscolors}
          w={370}
          h={30}
          style={{ width: '100%', position: 'relative', isolation: 'isolate' }}
        >
          <Group mt={50} mb={39} ml={78}>
            <Box>
              <Text
                color="dimmed"
                size={15}
                weight={500}
                style={{ letterSpacing: 3 }}
                mb={16}
              >
                OVERLINE
              </Text>
              <Text weight={600} size={64} sx={{ lineHeight: 1 }}>
                Cursus vitae
                <br />
                sollicitudin donec
                <br />
                nascetur. Join now
              </Text>
              <Text weight={400} size={16} color="dimmed" mt={32}>
                Donec volutpat bibendum justo, odio aenean congue est
                <br />
                porttitor ut. Mauris vestibulum eros libero amet tincidunt.
              </Text>
              <Group mt={48}>
                <Button>Get started</Button>
                <Button variant="outline" color="gray">
                  Learn more
                </Button>
              </Group>
            </Box>
            <div style={{ zIndex: -1 }}>
              <Image
                layout="fill"
                objectFit="contain"
                objectPosition="right"
                src={colorScheme === 'dark' ? UserBlack : User}
                alt=""
              />
            </div>
          </Group>
        </IOSCard>
      </Wrapper>
      <WrapperFull noEdge>
        <MyCarousel slideSize={200} slideGap={24} align="start" loop pb={40}>
          {[...Array(20)].map((_, i) => (
            <MyCarouselSlide size={89} key={i}>
              <SmCard img={Img} value="2.55 ETH" fixed={false} />
            </MyCarouselSlide>
          ))}
        </MyCarousel>
      </WrapperFull>
    </>
  )
}

export default Stats
