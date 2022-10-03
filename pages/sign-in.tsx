import { upperFirst } from '@mantine/hooks'
import { useForm } from '@mantine/form'
import {
  TextInput,
  PasswordInput,
  Text,
  Group,
  Button,
  Checkbox,
  Anchor,
  Stack,
  Center,
  Card,
  FileButton,
  ActionIcon,
  Textarea,
  useMantineColorScheme,
} from '@mantine/core'
import { useState } from 'react'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import { showNotification } from '@mantine/notifications'
import requests from 'requests'
import Image from 'next/image'
import {
  ArrowUpTrayIcon,
  MoonIcon,
  SunIcon,
  TrashIcon,
} from '@heroicons/react/24/outline'
import Wrapper from 'containers/Wrapper'
import Logo from 'components/Logo'
import BgImg from 'components/BgImg'

interface Values {
  email: string
  username: string
  password: string
  password2: string
  biograph: string
}
type SubmitType = 'login' | 'register'

const SignIn = () => {
  const router = useRouter()
  const { query } = router
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const [file, setFile] = useState<{ file: File; preview: string } | null>(null)
  const [loading, setLoading] = useState(false)
  const isRegister = query.type === 'register'

  const switchPage = () => {
    if (query.type === 'register') delete query.type
    else query.type = 'register'
    router.push({ pathname: router.pathname, query })
  }

  const handleFile = (file: File) => {
    if (file) {
      const preview = URL.createObjectURL(file)
      setFile({ file: file, preview })
    }
  }

  const form = useForm({
    initialValues: {
      email: '',
      username: '',
      password: '',
      password2: '',
      biograph: '',
      terms: true,
    },

    validate: {
      username: (val) => (!val && isRegister ? 'Choose a username' : null),
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) =>
        val.length <= 6
          ? 'Password should include at least 6 characters'
          : null,
      password2: (val, values) =>
        isRegister && val !== values.password ? "Passwords don't match" : null,
      biograph: (val) => (!val && isRegister ? 'Enter a biograph' : null),
    },
  })

  const submit = async (values: Values, submitType?: SubmitType) => {
    setLoading(true)

    try {
      if (submitType === 'login' || !isRegister) {
        const res = await requests.auth.login({
          email: values.email,
          password: values.password,
        })
        const token = res.data?.access

        setCookie('token', token, {
          maxAge: 60 * 6 * 24,
          secure: true,
        })
        router.push('/dashboard')
      } else {
        const formData = new FormData()
        formData.set('email', values.email)
        formData.set('username', values.username)
        formData.set('password', values.email)
        formData.set('password2', values.password2)
        if (file?.file) formData.set('avatar', file.file || '')

        await requests.auth.signup(formData)

        showNotification({
          message:
            'You have created an account successfully! Now logging in...',
          color: 'green',
        })
        const data = values
        switchPage()
        return setTimeout(async () => {
          await submit(data, 'login')
        }, 1000)
      }
    } catch (error: any) {
      showNotification({
        message: error?.message,
        color: 'red',
      })
    }

    setLoading(false)
  }

  return (
    <div>
      <BgImg />
      <Wrapper>
        <Group py={30} position="apart" align="center">
          <Logo />
          <Button
            variant="light"
            py={0}
            px={12}
            onClick={() => toggleColorScheme()}
            color="indigo"
          >
            {colorScheme === 'dark' ? (
              <SunIcon width={27} />
            ) : (
              <MoonIcon width={25} />
            )}
          </Button>
        </Group>
      </Wrapper>
      <Center sx={{ height: isRegister ? 'auto' : '80vh' }} pb={50} p="md">
        <Card
          radius="md"
          p="xl"
          withBorder
          shadow="md"
          style={{
            width: 410,
          }}
        >
          <Text size="lg" weight={500} mb="xl">
            Welcome to NFT Marketplace
          </Text>

          <form onSubmit={form.onSubmit((vals) => submit(vals, undefined))}>
            <Stack>
              {isRegister && (
                <TextInput
                  label="Username"
                  placeholder="Enter username"
                  {...form.getInputProps('username')}
                />
              )}

              <TextInput
                label="Email"
                placeholder="example@email.com"
                value={form.values.email}
                {...form.getInputProps('email')}
              />

              <PasswordInput
                label="Password"
                placeholder="Your password"
                {...form.getInputProps('password')}
              />

              {isRegister && (
                <>
                  <PasswordInput
                    label="Confirm Password"
                    placeholder="Confirm password"
                    {...form.getInputProps('password2')}
                  />
                  <Textarea
                    label="Biograph"
                    placeholder="Enter a bit about yourself"
                    {...form.getInputProps('biograph')}
                  />
                  <Group>
                    <FileButton
                      onChange={handleFile}
                      accept="image/png,image/jpeg"
                    >
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
                          Select an avatar
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
                    <Center>
                      <Image
                        src={file.preview}
                        width={120}
                        height={120}
                        alt=""
                        objectFit="cover"
                        style={{ borderRadius: '50%' }}
                      />
                    </Center>
                  )}
                  <Checkbox
                    label="I accept terms and conditions"
                    checked={form.values.terms}
                    {...form.getInputProps('terms')}
                  />
                </>
              )}
            </Stack>

            <Group position="apart" mt="xl">
              <Anchor
                component="button"
                type="button"
                color="dimmed"
                onClick={() => switchPage()}
                size="xs"
              >
                {isRegister
                  ? 'Already have an account? Login'
                  : "Don't have an account? Register"}
              </Anchor>
              <Button type="submit" loading={loading}>
                {upperFirst(isRegister ? 'register' : 'login')}
              </Button>
            </Group>
          </form>
        </Card>
      </Center>
    </div>
  )
}

export default SignIn
