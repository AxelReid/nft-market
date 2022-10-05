import React, { useEffect, useState } from 'react'
import {
  AspectRatio,
  Button,
  Center,
  Grid,
  Group,
  NumberInput,
  Select,
  Stack,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { ArrowUpTrayIcon, TrashIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import requests from 'requests'
import { showNotification } from '@mantine/notifications'
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone'
import { DatePicker, TimeInput } from '@mantine/dates'
import { time_left } from 'utils/timeFormatter'

const CreateNew = ({
  close,
  refetch,
}: {
  close: () => void
  refetch: () => void
}) => {
  const [file, setFile] = useState<{ file: File; preview: string } | null>(null)
  const [collections, setCollections] = useState([])
  const [loading, setLoading] = useState(false)

  const getCollections = async () => {
    try {
      const res = await requests.collections.getAll()
      setCollections(
        res?.data?.results?.map((col: { name: string; id: number }) => ({
          label: col.name,
          value: col.id,
        }))
      )
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getCollections()
  }, [])

  const handleFile = (file: File) => {
    if (file) {
      const preview = URL.createObjectURL(file)
      setFile({ file: file, preview })
    }
  }

  const submit = async (values: {
    name: string
    description: string
    price: string
    collection: string
    date: Date | null
    time: Date | null
  }) => {
    const willExpire = time_left(values.date!, values.time!)

    const formData = new FormData()
    formData.set('name', values.name)
    formData.set('description', values.description)
    formData.set('price', values.price)
    formData.set('collection', values.collection)
    formData.set('time_left', willExpire)
    if (!file?.file) {
      showNotification({
        color: 'yellow',
        message: 'Please choose an image',
      })
      return
    }
    formData.set('image', file?.file)
    setLoading(true)
    const res = await requests.assets.create(formData)
    if (res?.msg === 201) {
      showNotification({
        color: 'green',
        message: 'New asset is successfully created!',
      })
      close()
      refetch()
    }
    setLoading(false)
  }

  const form = useForm({
    initialValues: {
      name: '',
      description: '',
      price: '',
      collection: '',
      date: null,
      time: null,
    },
    validate: {
      name: (val) => (!val ? 'Enter a name' : null),
      description: (val) => (!val ? 'Enter a description' : null),
      collection: (val) => (!val ? 'Select a collection' : null),
      price: (val) => (!val ? 'Enter a price' : null),
      date: (val) => (!val ? 'Choose a date' : null),
      time: (val) => (!val ? 'Pick time' : null),
    },
  })

  return (
    <form onSubmit={form.onSubmit(submit)}>
      <Stack spacing={15}>
        <TextInput label="Name" {...form.getInputProps('name')} />
        <Textarea label="Description" {...form.getInputProps('description')} />
        <NumberInput
          label="Price"
          precision={2}
          step={0.5}
          {...form.getInputProps('price')}
        />
        <Select
          label="Collection"
          data={collections}
          {...form.getInputProps('collection')}
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
        <div>
          <Text
            weight={500}
            size={14}
            mb={3}
            sx={(theme) => ({
              color: theme.colorScheme === 'dark' ? '#c1c2c5' : '#212529',
            })}
          >
            Image
          </Text>
          {file?.file ? (
            <Button
              fullWidth
              variant="light"
              color="red"
              onClick={() => setFile(null)}
              leftIcon={<TrashIcon width={18} />}
            >
              Remove image
            </Button>
          ) : (
            <Dropzone
              onDrop={(files) => handleFile(files[0])}
              onReject={(files) => console.log('rejected files', files)}
              accept={IMAGE_MIME_TYPE}
            >
              <Center>
                <Group py="xl">
                  <ArrowUpTrayIcon width={18} />
                  <Text color="dimmed" size={14}>
                    Select or Drop an image
                  </Text>
                </Group>
              </Center>
            </Dropzone>
          )}
        </div>
        {file?.preview && (
          <AspectRatio
            ratio={4 / 5.2}
            sx={{ borderRadius: 20, overflow: 'hidden' }}
          >
            <Image src={file.preview} layout="fill" alt="" objectFit="cover" />
          </AspectRatio>
        )}

        <Button type="submit" loading={loading}>
          Create
        </Button>
      </Stack>
    </form>
  )
}

export default CreateNew
