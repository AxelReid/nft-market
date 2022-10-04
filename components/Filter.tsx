import { Button, Grid, Group, Text } from '@mantine/core'
import Wrapper from '../containers/Wrapper'
import React, { useEffect } from 'react'
import MyCard from './MyCard'
import { useQuery } from '@tanstack/react-query'
import requests from 'requests'

const Filter = () => {
  const { isLoading, error, data } = useQuery(['filter'], () =>
    requests.assets.getAll()
  )

  return (
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
        {data?.data.map((dum) => (
          <Grid.Col span={6} sm={4} md={3} lg={2} key={dum.id}>
            <MyCard {...dum} card_type="middle" truncate />
          </Grid.Col>
        ))}
      </Grid>
      <Group mt={80} position="center">
        <Button variant="outline" color="gray">
          Show me more
        </Button>
      </Group>
    </Wrapper>
  )
}

export default Filter
