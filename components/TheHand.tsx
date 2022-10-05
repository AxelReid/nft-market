import React from 'react'
import Image from 'next/image'
import { Box, Button, Card, createStyles, Stack, Text } from '@mantine/core'
import Hand from 'assets/Hand.png'
import MyCarousel, { MyCarouselSlide } from './MyCarousel'
import WrapperFull from 'containers/WrapperFull'
import MyCard from './MyCard'
import IOSCard from './IOSCard'
import { useQuery } from '@tanstack/react-query'
import requests from 'requests'

// const data = [
//   {
//     name: 'Vulputate felis purus viverra morbi facilisi eget',
//     price: '1.22 ETH',
//     time_left: '2:41',
//     likes: 321,
//     liked: true,
//     image:
//       'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
//     biddings: [{ name: 'Asilbek' }, { name: 'Muzaffar' }, { name: 'Nodirbek' }],
//   },
//   {
//     name: 'Vulputate felis purus viverra morbi facilisi eget',
//     price: '1.22 ETH',
//     time_left: '2:41',
//     likes: 321,
//     liked: true,
//     image:
//       'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',

//     biddings: [{ name: 'Asilbek' }, { name: 'Muzaffar' }, { name: 'Nodirbek' }],
//   },
//   {
//     name: 'Vulputate felis purus viverra morbi facilisi eget',
//     price: '1.22 ETH',
//     time_left: '2:41',
//     likes: 321,
//     liked: true,
//     image:
//       'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',

//     biddings: [{ name: 'Asilbek' }, { name: 'Muzaffar' }, { name: 'Nodirbek' }],
//   },
//   {
//     name: 'Vulputate felis purus viverra morbi facilisi eget',
//     price: '1.22 ETH',
//     time_left: '2:41',
//     likes: 321,
//     liked: true,
//     image:
//       'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',

//     biddings: [{ name: 'Asilbek' }, { name: 'Muzaffar' }, { name: 'Nodirbek' }],
//   },
// ]

const useStyles = createStyles((theme) => ({
  absoluteHand: {
    width: '100%',
    aspectRatio: '4/6',
    div: {
      width: '100%',
      left: 0,
      top: -70,
      position: 'absolute',
    },
  },
  indicator: {
    width: 20,
    background: theme.colorScheme === 'dark' ? 'white' : 'black',
    opacity: 0.3,
    '&[data-active]': {
      width: 50,
    },
  },
}))

const TheHand = () => {
  const { classes } = useStyles()
  const { data: dataDesc } = useQuery(['slider_big'], () =>
    requests.assets.getAll({ sort: 'desc' })
  )
  const { data: dataPop } = useQuery(['slider_big'], () =>
    requests.assets.getAll({ sort: 'popular' })
  )

  return (
    <WrapperFull noEdge>
      <MyCarousel
        slideSize={440}
        slideGap={24}
        withControls={false}
        withIndicators
        align="center"
        initialSlide={1}
        pb={50}
        classNames={{ indicator: classes.indicator }}
      >
        <MyCarouselSlide size={440} pt={50}>
          <Slide title="Check out the hottest Sale offers">
            <MyCarousel
              align="start"
              slideSize={360}
              slideGap={0}
              loop
              draggable={false}
            >
              {dataPop?.data?.map((dt, i) => (
                <MyCarouselSlide key={i} size={175}>
                  <MyCard {...dt} card_type="middle" truncate />
                </MyCarouselSlide>
              ))}
            </MyCarousel>
          </Slide>
        </MyCarouselSlide>
        <MyCarouselSlide size={440} pt={50}>
          <IOSCard>
            <div className={classes.absoluteHand}>
              <div>
                <Image
                  src={Hand}
                  width={440}
                  height={640}
                  objectFit="contain"
                  alt=""
                />
              </div>
            </div>
            <Text
              size={24}
              weight={600}
              color="white"
              sx={{ lineHeight: '125%' }}
            >
              Get started creating
              <br />& selling your NFTs
            </Text>
            <Text weight={400} size={14} color="dimmed" mt={8}>
              Nunc gravida faucibus netus feugiat tellus, viverra massa feugiat.
              Mi est sit.
            </Text>
            <Button fullWidth mt={38}>
              Get Started
            </Button>
          </IOSCard>
        </MyCarouselSlide>
        <MyCarouselSlide size={440} pt={50}>
          <Slide title="Top NFT at a lower price">
            <Stack spacing={15} px={40} mb={45}>
              {dataDesc?.data?.map((dt, i) => (
                <MyCard key={i} {...dt} card_type="small" truncate />
              ))}
            </Stack>
          </Slide>
        </MyCarouselSlide>
      </MyCarousel>
    </WrapperFull>
  )
}
const Slide = ({
  children,
  title,
}: {
  children: React.ReactNode
  title: string
}) => {
  return (
    <Card
      withBorder
      p={0}
      radius={20}
      sx={{ width: 440, background: 'transparent' }}
    >
      <Box p={40} mb={0}>
        <Text weight={600} size={32} sx={{ lineHeight: '40px' }}>
          {title}
        </Text>
      </Box>
      <Box mb={20}>{children}</Box>
      <Box m={40} mt={0}>
        <Button fullWidth variant="outline" color="gray">
          Show me more
        </Button>
      </Box>
    </Card>
  )
}
export default TheHand
