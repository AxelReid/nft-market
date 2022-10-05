import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {
  ActionIcon,
  Box,
  Button,
  Card,
  Center,
  Col,
  Grid,
  Group,
  Select,
  Stack,
  Text,
  TextInput,
} from '@mantine/core'
import Header from 'components/Header'
import MyCard from 'components/MyCard'
import MyFooter from 'components/MyFooter'
import WrapperFull from 'containers/WrapperFull'
import { collections, sorts } from 'data/static'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import requests from 'requests'
import { Asset } from 'types/data'

interface Props {
  data: { count: number; data: Asset[] }
}

const Filter = ({ data }: Props) => {
  const router = useRouter()
  const { pathname, query } = router
  const [filter, setFilter] = useState<{
    collection?: any
    sort?: any
    search?: any
    page_size?: any
  }>({
    collection: query.collection || '',
    sort: query?.sort || '',
    search: query?.search || '',
    page_size: Number(query?.page_size) || 12,
  })

  const handleChange = (value: number | string | null, name: string) => {
    setFilter((prev) => {
      const update = { ...prev, [name]: value }
      const newQuery = Object.entries(update).reduce((prev, cur) => {
        if (cur[1]) return { ...prev, [cur[0]]: cur[1] }
        return prev
      }, {})

      if (name !== 'search') {
        router.push(
          { pathname, query: newQuery },
          { pathname, query: newQuery },
          { scroll: false }
        )
      }
      return update
    })
  }

  return (
    <div>
      <WrapperFull>
        <Header />
        <Box my={20}>
          <Grid>
            <Grid.Col span={0} sm={4} md={3} xl={2}>
              <Stack
                spacing="xl"
                sx={{ position: 'sticky', top: 20, zIndex: 2 }}
              >
                <Group align="end" noWrap>
                  <TextInput
                    value={filter.search}
                    onChange={(e) => handleChange(e.target.value, 'search')}
                    label="Search"
                    placeholder="Enter name"
                    rightSection={
                      <ActionIcon
                        onClick={() => {
                          setFilter((prev) => ({ ...prev, search: '' }))
                          router.push({
                            pathname,
                            query: { ...filter, search: '' },
                          })
                        }}
                      >
                        <XMarkIcon width={16} />
                      </ActionIcon>
                    }
                    sx={{ flex: 1 }}
                  />
                  <ActionIcon
                    size={36}
                    variant="default"
                    onClick={() => router.push({ pathname, query: filter })}
                  >
                    <MagnifyingGlassIcon width={16} />
                  </ActionIcon>
                </Group>
                <Select
                  value={filter.collection}
                  onChange={(value) => handleChange(value, 'collection')}
                  label="Collection"
                  placeholder="Choose collection"
                  data={collections}
                  allowDeselect
                  clearable
                />
                <Select
                  label="Sort"
                  onChange={(value) => handleChange(value, 'sort')}
                  placeholder="Sort"
                  data={sorts}
                  clearable
                />
              </Stack>
            </Grid.Col>
            <Grid.Col span={12} sm={8} md={9} xl={10}>
              {data?.data?.length ? (
                <Grid gutter={0}>
                  {data?.data?.map((dum) => (
                    <Grid.Col span={6} xs={4} md={3} lg={2} key={dum.id}>
                      <MyCard {...dum} card_type="middle" truncate />
                    </Grid.Col>
                  ))}
                </Grid>
              ) : (
                <Center sx={{ height: '60vh' }}>
                  <Text color="dimmed">No data to show :(</Text>
                </Center>
              )}
            </Grid.Col>
          </Grid>
          {data?.count > data?.data?.length && (
            <Center py={100}>
              <Button
                variant="outline"
                color="gray"
                onClick={() => handleChange(filter?.page_size + 6, 'page_size')}
              >
                Show me more
              </Button>
            </Center>
          )}
        </Box>
      </WrapperFull>
      <MyFooter />
    </div>
  )
}

export default Filter
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const assets = await requests.assets.getAll(
      Object.values(query).length ? query : { page_size: 12 }
    )

    return {
      props: {
        data: assets,
      },
    }
  } catch (error) {
    return {
      props: {
        data: {},
      },
    }
  }
}
