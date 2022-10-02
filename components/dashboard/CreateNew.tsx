import React, { useState } from 'react'
import {
  Button,
  FileButton,
  NumberInput,
  Select,
  Stack,
  Textarea,
  TextInput,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const CreateNew = () => {
  const [file, setFile] = useState<{ file: File; preview: string } | null>(null)

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
        {file?.preview && (
          <Image
            src={file.preview}
            width={100}
            height={100}
            alt=""
            objectFit="contain"
          />
        )}
        <NumberInput label="Price" {...form.getInputProps('price')} />
        <Select
          label="Collection"
          data={[{ label: 'Photography', value: '1' }]}
          {...form.getInputProps('collection')}
        />
        <Button type="submit" size="xs" p="sm">
          Create
        </Button>
      </Stack>
    </form>
  )
}

export default CreateNew
