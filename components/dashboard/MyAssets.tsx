import React, { useState } from 'react'
import { PlusIcon } from '@heroicons/react/24/outline'
import { Button, Grid, Modal } from '@mantine/core'
import MyCard from 'components/MyCard'
import TitleBar from 'components/TitleBar'
import dummy from 'data/dummy'
import CreateNew from './CreateNew'

const MyAssets = () => {
  const [opened, setOpened] = useState(false)

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Create a new asset"
      >
        <CreateNew />
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
          {dummy.slice(0, 4).map((dum, i) => (
            <Grid.Col span={6} sm={4} md={3} lg={2} key={i}>
              <MyCard {...dum} card_type="middle" truncate />
            </Grid.Col>
          ))}
        </Grid>
      </div>
    </>
  )
}

export default MyAssets
