import { Button, Grid, NumberInput, Stack } from '@mantine/core'
import { DatePicker, TimeInput } from '@mantine/dates'
import { useForm } from '@mantine/form'
import { showNotification } from '@mantine/notifications'
import React, { useState } from 'react'
import requests from 'requests'
import { time_left } from 'utils/timeFormatter'

const UpdateAsset = ({
  id,
  close,
  refetch,
}: {
  id: number | null
  close: () => void
  refetch: () => void
}) => {
  const [loading, setLoading] = useState(false)

  const form = useForm({
    initialValues: {
      price: '',
      date: null,
      time: null,
    },
    validate: {
      price: (val) => (!val ? 'Enter a price' : null),
      date: (val) => (!val ? 'Choose a date' : null),
      time: (val) => (!val ? 'Pick time' : null),
    },
  })

  const submit = async (values: {
    price: string
    date: Date | null
    time: Date | null
  }) => {
    const timeleft = time_left(values.date!, values.time!)
    setLoading(true)
    const body = { id: id!, price: values.price, time_left: timeleft }
    const res = await requests.assets.update(body)

    if (res?.success) {
      showNotification({
        color: 'green',
        message: 'The asset is successfully updated!',
      })
      refetch()
      close()
    }
    setLoading(false)
  }

  return (
    <form onSubmit={form.onSubmit(submit)}>
      <Stack spacing={15}>
        <NumberInput
          label="New price"
          precision={2}
          step={0.5}
          {...form.getInputProps('price')}
        />
        <Grid>
          <Grid.Col span={8}>
            <DatePicker
              placeholder="Pick date"
              label="Expire date"
              {...form.getInputProps('date')}
              excludeDate={(date) => date.getTime() < new Date().getTime()}
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <TimeInput
              label="Pick time"
              placeholder="Expire time"
              {...form.getInputProps('time')}
            />
          </Grid.Col>
        </Grid>
        <Button type="submit" mt="md" loading={loading}>
          Update an asset
        </Button>
      </Stack>
    </form>
  )
}

export default UpdateAsset
