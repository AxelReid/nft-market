import React, { useEffect, useState } from 'react'
import {
  ActionIcon,
  AspectRatio,
  Button,
  FileButton,
  Group,
  NumberInput,
  Select,
  Stack,
  Textarea,
  TextInput,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { ArrowUpTrayIcon, TrashIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import requests from 'requests'

const CreateNew = () => {
  const [file, setFile] = useState<{ file: File; preview: string } | null>(null)

  const getCollections = async () => {
    try {
      const res = await requests.collections.getAll()
      console.log(res)
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

  const submit = (values: {
    name: string
    description: string
    price: string
    collection: string
  }) => {
    console.log({ ...values, image: file?.file })
  }

  const form = useForm({
    initialValues: {
      name: '',
      description: '',
      price: '',
      collection: '',
    },
    validate: {
      name: (val) => (!val ? 'Enter a name' : null),
      description: (val) => (!val ? 'Enter a description' : null),
      collection: (val) => (!val ? 'Select a collection' : null),
      price: (val) => (!val ? 'Enter a price' : null),
    },
  })

  return (
    <form onSubmit={form.onSubmit(submit)}>
      <Stack spacing={15}>
        <TextInput label="Name" {...form.getInputProps('name')} />
        <Textarea label="Description" {...form.getInputProps('description')} />
        <NumberInput label="Price" {...form.getInputProps('price')} />
        <Select
          label="Collection"
          data={[{ label: 'Photography', value: '1' }]}
          {...form.getInputProps('collection')}
        />
        <Group>
          <FileButton onChange={handleFile} accept="image/png,image/jpeg">
            {(props) => (
              <Button
                {...props}
                sx={{ width: 'min-content' }}
                radius="md"
                variant="light"
                color="gray"
                leftIcon={<ArrowUpTrayIcon width={18} />}
                style={{ fontWeight: 500, fontSize: 13 }}
              >
                Select an image
              </Button>
            )}
          </FileButton>
          {file?.file && (
            <ActionIcon
              variant="light"
              size={52}
              color="red"
              onClick={() => setFile(null)}
            >
              <TrashIcon width={18} />
            </ActionIcon>
          )}
        </Group>
        {file?.preview && (
          <AspectRatio
            ratio={4 / 5.2}
            sx={{ borderRadius: 20, overflow: 'hidden' }}
          >
            <Image src={file.preview} layout="fill" alt="" objectFit="cover" />
          </AspectRatio>
        )}

        <Button type="submit" size="xs" p="sm">
          Create
        </Button>
      </Stack>
    </form>
  )
}

export default CreateNew
