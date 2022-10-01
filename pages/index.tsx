import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Divider } from '@mantine/core'
import BgImg from 'components/BgImg'
import Header from 'components/Header'
import Hero from 'components/Hero'
import WrapperFull from 'containers/WrapperFull'

const SliderBigCard = dynamic(() => import('components/SliderBigCard'))
const InkChart = dynamic(() => import('components/InkChart'))
const PlaneWatch = dynamic(() => import('components/PlaneWatch'))
const TheHand = dynamic(() => import('components/TheHand'))
const Filter = dynamic(() => import('components/Filter'))
const Stats = dynamic(() => import('components/Stats'))
const MyFooter = dynamic(() => import('components/MyFooter'))

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

      <SliderBigCard dummy={dummy} />
      <InkChart />
      <TheHand />
      <PlaneWatch />
      <Divider />
      <Filter dummy={dummy} />
      <Stats />
      <MyFooter />
    </div>
  )
}

export default Home
