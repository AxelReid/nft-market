import { Button, Grid, Group, Text } from '@mantine/core'
import Wrapper from '../containers/Wrapper'
import React from 'react'
import MyCard from './MyCard'
import dummy from 'data/dummy'

const Filter = () => {
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
        {dummy.map((dum, i) => (
          <Grid.Col span={6} sm={4} md={3} lg={2} key={i}>
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
