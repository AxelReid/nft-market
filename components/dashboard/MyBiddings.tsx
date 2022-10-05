import React from 'react'
import { Grid } from '@mantine/core'
import TitleBar from 'components/TitleBar'
import MyCard from 'components/MyCard'
import { useQuery } from '@tanstack/react-query'
import requests from 'requests'

const MyBiddings = () => {
  const { data } = useQuery(['my_biddings'], () => requests.user.myBiddings())

  return (
    <div>
      <TitleBar title="My Biddings" desc="The assets I have bidded" />
      <Grid gutter={0}>
        {data?.map(({ project }) => (
          <Grid.Col span={6} sm={4} md={3} lg={2} key={project.id}>
            <>
              <MyCard {...project} card_type="middle" truncate />
            </>
          </Grid.Col>
        ))}
      </Grid>
    </div>
  )
}

export default MyBiddings
