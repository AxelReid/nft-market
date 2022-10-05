import { Button, Grid, Group, Text } from '@mantine/core'
import Wrapper from '../containers/Wrapper'
import React, { useCallback, useEffect, useState } from 'react'
import MyCard from './MyCard'
import requests from 'requests'
import { GetAllParams } from 'types/requests'
import { Asset } from 'types/data'

const collection_tabs = ['Architecture', 'Photography', 'Games', 'Music']

const Filter = () => {
  const [data, setData] = useState<Asset[]>([])
  const [count, setCount] = useState(0)

  const [filter, setFilter] = useState<GetAllParams>({
    page_size: 12,
    sort: 'new',
    collection: '',
  })

  const get = useCallback(async () => {
    const res = await requests.assets.getAll(filter)
    setCount(res?.count)
    setData(res?.data)
  }, [filter])

  useEffect(() => {
    get()
  }, [filter])

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
          {collection_tabs?.map((tab) => (
            <Button
              onClick={() => {
                setFilter((prev) => ({
                  ...prev,
                  collection: prev.collection === tab ? '' : tab,
                  page_size: 12,
                }))
              }}
              key={tab}
              variant={tab === filter.collection ? 'filled' : 'outline'}
              color={tab === filter.collection ? '' : 'gray'}
            >
              {tab}
            </Button>
          ))}
        </Group>
      </div>
      <Grid gutter={0} mt={80}>
        {data?.map((dum) => (
          <Grid.Col span={6} sm={4} md={3} lg={2} key={dum.id}>
            <MyCard {...dum} card_type="middle" truncate />
          </Grid.Col>
        ))}
      </Grid>
      {count > data?.length && (
        <Group mt={80} position="center">
          <Button
            variant="outline"
            color="gray"
            onClick={() => {
              setFilter((prev) => ({ ...prev, page_size: prev.page_size! + 6 }))
            }}
          >
            Show me more
          </Button>
        </Group>
      )}
    </Wrapper>
  )
}

export default Filter
