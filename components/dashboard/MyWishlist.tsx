import React, { useState } from 'react'
import TitleBar from 'components/TitleBar'
import { Box, Button, Grid } from '@mantine/core'
import MyCard from 'components/MyCard'
import { useQuery } from '@tanstack/react-query'
import requests from 'requests'
import { Asset } from 'types/data'
import { showNotification } from '@mantine/notifications'

const MyWishlist = () => {
  const { data, refetch } = useQuery(['get_wishlist'], () =>
    requests.user.myWishlist()
  )
  const [loading, setLoading] = useState<number | null>(null)

  const unlike = async (id: number) => {
    setLoading(id)
    const res = await requests.user.removeFromWish(id)
    showNotification({ message: res?.msg })
    refetch()
    setLoading(null)
  }

  return (
    <div>
      <TitleBar title="Wishlist" desc="The assets that I have liked" />
      <Grid gutter={0}>
        {data?.map((dt: Asset) => (
          <Grid.Col span={6} sm={4} md={3} lg={2} key={dt.id}>
            <MyCard {...dt} card_type="middle" truncate />
            <Box px="xs">
              <Button
                fullWidth
                color="red"
                variant="light"
                loading={loading === dt.id}
                onClick={() => unlike(dt.id)}
              >
                Remove
              </Button>
            </Box>
          </Grid.Col>
        ))}
      </Grid>
    </div>
  )
}

export default MyWishlist
