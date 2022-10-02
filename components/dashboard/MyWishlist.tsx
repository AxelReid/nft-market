import React from 'react'
import TitleBar from 'components/TitleBar'
import { Grid } from '@mantine/core'
import dummy from 'data/dummy'
import MyCard from 'components/MyCard'

const MyWishlist = () => {
  return (
    <div>
      <TitleBar title="Wishlist" desc="The assets that I have liked" />
      <Grid gutter={0}>
        {dummy.slice(0, 4).map((dum, i) => (
          <Grid.Col span={6} sm={4} md={3} lg={2} key={i}>
            <MyCard {...dum} card_type="middle" truncate />
          </Grid.Col>
        ))}
      </Grid>
    </div>
  )
}

export default MyWishlist
