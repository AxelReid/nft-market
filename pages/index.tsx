import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Divider, Space } from '@mantine/core'
import BgImg from 'components/BgImg'
import Header from 'components/Header'
import Hero from 'components/Hero'
import WrapperFull from 'containers/WrapperFull'
import Wrapper from 'containers/Wrapper'
import { useState } from 'react'
import { useScrollIntoView } from '@mantine/hooks'

const SliderBigCard = dynamic(() => import('components/SliderBigCard'))
const InkChart = dynamic(() => import('components/InkChart'))
const PlaneWatch = dynamic(() => import('components/PlaneWatch'))
const TheHand = dynamic(() => import('components/TheHand'))
const Filter = dynamic(() => import('components/Filter'))
const Stats = dynamic(() => import('components/Stats'))
const MyFooter = dynamic(() => import('components/MyFooter'))

const Home: NextPage = () => {
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 30,
  })

  return (
    <div>
      <WrapperFull>
        <Header />
        <BgImg />
        <Hero scroll={() => scrollIntoView({ alignment: 'start' })} />
      </WrapperFull>

      <SliderBigCard />
      <InkChart />
      <TheHand />
      <PlaneWatch />
      <Divider />
      <div ref={targetRef}>
        <Filter />
      </div>
      <Wrapper>
        <Divider mt={110} />
      </Wrapper>
      <Stats />
      <MyFooter />
    </div>
  )
}

export default Home
