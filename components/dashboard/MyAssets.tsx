import React, { useState } from 'react'
import { PlusIcon } from '@heroicons/react/24/outline'
import { Button, Grid, Modal } from '@mantine/core'
import MyCard from 'components/MyCard'
import TitleBar from 'components/TitleBar'
import CreateNew from './CreateNew'
import { useQuery } from '@tanstack/react-query'
import requests from 'requests'

const MyAssets = () => {
  const [opened, setOpened] = useState(false)
  const { data, refetch } = useQuery(['my_assets'], () =>
    requests.user.myAssets()
  )

  return (
    <>
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
          {data?.map((dum) => (
            <Grid.Col span={6} sm={4} md={3} lg={2} key={dum.id}>
              <MyCard {...dum} card_type="middle" truncate />
            </Grid.Col>
          ))}
        </Grid>
      </div>
    </>
  )
}

export default MyAssets
