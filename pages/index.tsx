import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Divider, Space } from '@mantine/core'
import BgImg from 'components/BgImg'
import Header from 'components/Header'
import Hero from 'components/Hero'
import WrapperFull from 'containers/WrapperFull'
import Wrapper from 'containers/Wrapper'

// const SliderBigCard = dynamic(() => import('components/SliderBigCard'))
const InkChart = dynamic(() => import('components/InkChart'))
const PlaneWatch = dynamic(() => import('components/PlaneWatch'))
// const TheHand = dynamic(() => import('components/TheHand'))
const Filter = dynamic(() => import('components/Filter'))
const Stats = dynamic(() => import('components/Stats'))
const MyFooter = dynamic(() => import('components/MyFooter'))

const Home: NextPage = () => {
  return (
    <div>
      <WrapperFull>
        <Header />
        <BgImg />
        <Hero />
      </WrapperFull>

      {/* <SliderBigCard /> */}
      <InkChart />
      {/* <TheHand /> */}
      <PlaneWatch />
      <Divider />
      <Filter />
      <Wrapper>
        <Divider mt={110} />
      </Wrapper>
      <Stats />
      <MyFooter />
    </div>
  )
}

export default Home
