import { Text } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import WrapperFull from 'containers/WrapperFull'
import React from 'react'
import requests from 'requests'
import MyCard from './MyCard'
import MyCarousel, { MyCarouselSlide } from './MyCarousel'

const SliderBigCard = () => {
  const { data } = useQuery(['slider_big'], () =>
    requests.assets.getAll('?sort=new')
  )

  return (
    <WrapperFull noEdge>
      <Text align="center" size={36} weight={600} mb={96}>
        Latest live auctions
      </Text>
      <MyCarousel>
        {data?.data?.map((dum, i) => (
          <MyCarouselSlide key={i} size={400}>
            <MyCard {...dum} />
          </MyCarouselSlide>
        ))}
      </MyCarousel>
    </WrapperFull>
  )
}

export default SliderBigCard
