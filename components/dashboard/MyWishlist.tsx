import React from 'react'
import TitleBar from 'components/TitleBar'
import { Grid } from '@mantine/core'
import MyCard from 'components/MyCard'
import { useQuery } from '@tanstack/react-query'
import requests from 'requests'
import { Asset } from 'types/data'

const MyWishlist = () => {
  const { data } = useQuery(['get_wishlist'], () => requests.user.myWishlist())

  return (
    <div>
      <TitleBar title="Wishlist" desc="The assets that I have liked" />
      <Grid gutter={0}>
        {data?.map((dum: Asset) => (
          <Grid.Col span={6} sm={4} md={3} lg={2} key={dum.id}>
            <MyCard {...dum} card_type="middle" truncate />
          </Grid.Col>
        ))}
      </Grid>
    </div>
  )
}

export default MyWishlist
