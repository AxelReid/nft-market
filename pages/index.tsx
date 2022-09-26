import type { NextPage } from 'next'
import { Button, Divider, Grid, Group, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import BgImg from 'components/BgImg'
import MyCard from 'components/MyCard'
import Header from 'components/Header'
import Hero from 'components/Hero'
import WrapperFull from 'containers/WrapperFull'
import MyCarousel, { MyCarouselSlide } from 'components/MyCarousel'
import InkChart from 'components/InkChart'
import PlaneWatch from 'components/PlaneWatch'
import TheHand from 'components/TheHand'
import Stats from 'components/Stats'
import Wrapper from 'containers/Wrapper'
import MyFooter from 'components/MyFooter'

const dummy = [
  {
    name: 'Vulputate felis purus viverra morbi facilisi eget',
    price: '1.22 ETH',
    time_left: '2:41',
    likes: 321,
    liked: true,
    image:
      'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    biddings: [{ name: 'Asilbek' }, { name: 'Muzaffar' }, { name: 'Nodirbek' }],
  },
  {
    name: 'Vulputate felis purus viverra morbi facilisi eget',
    price: '1.22 ETH',
    time_left: '2:41',
    likes: 321,
    liked: true,
    image:
      'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',

    biddings: [{ name: 'Asilbek' }, { name: 'Muzaffar' }, { name: 'Nodirbek' }],
  },
  {
    name: 'Vulputate felis purus viverra morbi facilisi eget',
    price: '1.22 ETH',
    time_left: '2:41',
    likes: 321,
    liked: true,
    image:
      'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',

    biddings: [{ name: 'Asilbek' }, { name: 'Muzaffar' }, { name: 'Nodirbek' }],
  },
  {
    name: 'Vulputate felis purus viverra morbi facilisi eget',
    price: '1.22 ETH',
    time_left: '2:41',
    likes: 321,
    liked: true,
    image:
      'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',

    biddings: [{ name: 'Asilbek' }, { name: 'Muzaffar' }, { name: 'Nodirbek' }],
  },
  {
    name: 'Vulputate felis purus viverra morbi facilisi eget',
    price: '1.22 ETH',
    time_left: '2:41',
    likes: 321,
    liked: true,
    image:
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',

    biddings: [{ name: 'Asilbek' }, { name: 'Muzaffar' }, { name: 'Nodirbek' }],
  },
  {
    name: 'Vulputate felis purus viverra morbi facilisi eget',
    price: '1.22 ETH',
    time_left: '2:41',
    likes: 321,
    liked: true,
    image:
      'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',

    biddings: [{ name: 'Asilbek' }, { name: 'Muzaffar' }, { name: 'Nodirbek' }],
  },
]

const Home: NextPage = () => {
  return (
    <div>
      <WrapperFull>
        <Header />
        <BgImg />
        <Hero />
      </WrapperFull>

      <WrapperFull noEdge>
        <Text align="center" size={36} weight={600} mb={96}>
          Latest live auctions
        </Text>
        <MyCarousel>
          {dummy.map((dum, i) => (
            <MyCarouselSlide key={i} size={400}>
              <MyCard {...dum} />
            </MyCarouselSlide>
          ))}
        </MyCarousel>
      </WrapperFull>

      <InkChart />

      <TheHand />

      <PlaneWatch />

      <Divider />
      <Wrapper mt={100}>
        <div>
          <Text
            color="dimmed"
            size={15}
            weight={500}
            align="center"
            style={{ letterSpacing: 3 }}
            mb={16}
          >
            OVERLINE
          </Text>
          <Text align="center" size={36} weight={600}>
            Most popular live auctions
          </Text>
          <Group position="center" mt={44}>
            <Button variant="filled">Architecture</Button>
            <Button variant="outline" color="gray">
              Photography
            </Button>
            <Button variant="outline" color="gray">
              Games
            </Button>
            <Button variant="outline" color="gray">
              Music
            </Button>
          </Group>
        </div>
        <Grid gutter={0} mt={80}>
          {dummy.map((dum, i) => (
            <Grid.Col span={6} sm={4} md={3} lg={2} key={i}>
              <MyCard {...dum} card_type="middle" truncate />
            </Grid.Col>
          ))}
        </Grid>
        <Group mt={80} position="center">
          <Button variant="outline" color="gray">
            Show me more
          </Button>
        </Group>
        <Divider mt={110} />
      </Wrapper>

      <Stats />
      <MyFooter />
    </div>
  )
}

export default Home
