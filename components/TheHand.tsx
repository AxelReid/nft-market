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
import Link from 'next/link'

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
  const { data: dataDesc } = useQuery(['sliderbig1'], () =>
    requests.assets.getAll({ sort: 'desc', page: 1, page_size: 4 })
  )
  const { data: dataPop } = useQuery(['sliderbig2'], () =>
    requests.assets.getAll({ sort: 'popular', page: 1, page_size: 4 })
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
          <Slide
            title="Check out the hottest Sale offers"
            link="/filter?sort=popular"
          >
            {dataPop?.data?.length! > 0 && (
              <MyCarousel
                align="start"
                slideSize={360}
                slideGap={0}
                loop
                draggable={false}
              >
                {dataPop?.data.map((dt, i) => (
                  <MyCarouselSlide key={i} size={175}>
                    <MyCard {...dt} card_type="middle" truncate />
                  </MyCarouselSlide>
                ))}
              </MyCarousel>
            )}
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
            <Link href="/sign-in" passHref>
              <Button component="a" fullWidth mt={38}>
                Get Started
              </Button>
            </Link>
          </IOSCard>
        </MyCarouselSlide>
        <MyCarouselSlide size={440} pt={50}>
          <Slide title="Top NFT at a lower price" link="/filter?sort=desc">
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
  link,
}: {
  children: React.ReactNode
  title: string
  link: string
}) => {
  return (
    <Card
      withBorder
      p={0}
      radius={20}
      sx={{
        width: 440,
        height: 820,
        display: 'flex',
        flexDirection: 'column',
        background: 'transparent',
      }}
    >
      <Box p={40} mb={0}>
        <Text weight={600} size={32} sx={{ lineHeight: '40px' }}>
          {title}
        </Text>
      </Box>
      <Box mb={20} sx={{ flex: 1 }}>
        {children}
      </Box>
      <Box m={40} mt={0}>
        <Link href={link} passHref>
          <Button component="a" fullWidth variant="outline" color="gray">
            Show me more
          </Button>
        </Link>
      </Box>
    </Card>
  )
}
export default TheHand
