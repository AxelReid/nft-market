import React, { useState } from 'react'
import { PlusIcon } from '@heroicons/react/24/outline'
import { Box, Button, Grid, Modal } from '@mantine/core'
import MyCard from 'components/MyCard'
import TitleBar from 'components/TitleBar'
import CreateNew from './CreateNew'
import { useQuery } from '@tanstack/react-query'
import requests from 'requests'
import UpdateAsset from './UpdateAsset'

const MyAssets = () => {
  const [opened, setOpened] = useState(false)
  const [opened2, setOpened2] = useState<number | null>(null)

  const { data, remove, refetch } = useQuery(['my_assets'], () =>
    requests.user.myAssets()
  )

  return (
    <>
      <Modal
        opened={!!opened2}
        onClose={() => setOpened2(null)}
        title="Update an asset"
      >
        <UpdateAsset
          id={opened2}
          close={() => setOpened2(null)}
          refetch={() => {
            remove()
            refetch()
          }}
        />
      </Modal>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Create a new asset"
      >
        <CreateNew close={() => setOpened(false)} refetch={refetch} />
      </Modal>
      <div>
        <TitleBar title="My Assets" desc="My assets that I have created" />
        <Button
          variant="light"
          mb="sm"
          leftIcon={<PlusIcon width={22} />}
          onClick={() => setOpened(true)}
        >
          Create a new asset
        </Button>
        <Grid gutter={0}>
          {data?.map((dt) => (
            <Grid.Col span={6} sm={4} md={3} lg={2} key={dt.id}>
              <MyCard
                {...dt}
                card_type="middle"
                truncate
                bottomSection={
                  <Box mt="xs">
                    <Button
                      mt="xs"
                      variant="light"
                      fullWidth
                      onClick={() => setOpened2(dt.id)}
                    >
                      New Auction
                    </Button>
                  </Box>
                }
              />
            </Grid.Col>
          ))}
        </Grid>
      </div>
    </>
  )
}

export default MyAssets
