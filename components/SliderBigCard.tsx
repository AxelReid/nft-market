import { Text } from '@mantine/core'
import WrapperFull from 'containers/WrapperFull'
import React from 'react'
import { Dummy } from 'types/data'
import MyCard from './MyCard'
import MyCarousel, { MyCarouselSlide } from './MyCarousel'

interface Props {
  dummy: Dummy
}

const SliderBigCard = ({ dummy }: Props) => {
  return (
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
  )
}

export default SliderBigCard
