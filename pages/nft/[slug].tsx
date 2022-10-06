import { getCookie } from 'cookies-next'
import { GetServerSideProps } from 'next'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {
  ClipboardIcon,
  HeartIcon,
  LockClosedIcon,
  NoSymbolIcon,
  ShareIcon,
} from '@heroicons/react/24/outline'
import { HeartIcon as HeartFilledIcon } from '@heroicons/react/24/solid'
import {
  ActionIcon,
  AspectRatio,
  Avatar,
  Box,
  Button,
  Card,
  createStyles,
  Grid,
  Group,
  Space,
  Text,
  useMantineColorScheme,
} from '@mantine/core'
import Wrapper from 'containers/Wrapper'
import WrapperFull from 'containers/WrapperFull'
import Header from 'components/Header'
import MyFooter from 'components/MyFooter'
import useTxtStyles from 'styles/useTxtStyles'
import IOSCard from 'components/IOSCard'
import LineChartHistory from 'components/LineChartHistory'
import requests from 'requests'
import { useRouter } from 'next/router'
import { BASE_URL } from 'requests/constants'
import { showNotification } from '@mantine/notifications'
import { AssetDetails } from 'types/data'
import Countdown from 'components/Countdown'
const Filter = dynamic(() => import('components/Filter'))

const useStyles = createStyles((theme) => ({
  box: {
    paddingTop: 10,
    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      padding: theme.spacing.md,
    },
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      padding: 40,
    },
    [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
      paddingInline: 60,
    },
  },
}))

interface Props {
  data: AssetDetails
}

const NftDetails = ({ data }: Props) => {
  const router = useRouter()
  const { pathname, query } = router
  const token = !!getCookie('token')
  const { classes } = useTxtStyles()
  const { classes: cls } = useStyles()
  const { colorScheme } = useMantineColorScheme()
  const ioscolors = colorScheme === 'light' ? ['#F2F3F6', '#F2F3F6'] : undefined
  const [loading, setLoading] = useState(false)
  const [liked, setLiked] = useState(false)
  const [expired, setIsExpired] = useState(false)

  useEffect(() => {
    checkIsLiked()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const revalidate = async () => {
    router.push(
      {
        pathname,
        query,
      },
      {},
      { scroll: false }
    )
    // try {
    //   await requests.others.revalidate(router.asPath)
    // } catch (error: any) {
    //   console.error('page revalidation error: ', error?.response)
    // }
  }

  const bid = async () => {
    if (!token) {
      router.push('/sign-in')
      return
    } else if (expired) {
      showNotification({
        color: 'yellow',
        message: `${data.name} is expired, wait until ${data.creator.name} updates it.`,
      })
      return
    }

    setLoading(true)
    try {
      const res = await requests.assets.bid(data?.id!, data?.price!)
      showNotification({
        color: res?.success ? 'green' : 'red',
        message: res.msg,
      })
      revalidate()
    } catch (error: any) {
      console.log(error?.response)
    }
    setLoading(false)
  }

  const checkIsLiked = async () => {
    if (token) {
      const res = await requests.user.checkInWishlist(data?.id)
      setLiked(res.liked)
    }
  }

  const addToWish = async () => {
    const res = await requests.user.addToWish(data?.id!)
    return await res
  }
  const removeFromWish = async () => {
    const res = await requests.user.removeFromWish(data?.id!)
    return await res
  }

  const handleWish = async (liked: boolean) => {
    if (!token) {
      showNotification({
        color: 'red',
        message: 'You can like without authorization!',
      })
      return
    }
    const res = !liked ? await addToWish() : await removeFromWish()

    showNotification({
      color: !res.success ? 'red' : 'green',
      message: res?.msg,
    })
    checkIsLiked()
  }

  const copy = () => {
    navigator.clipboard.writeText(location.href)
    showNotification({ color: 'green', message: 'Copied to clipboard' })
  }

  return (
    <div>
      <WrapperFull>
        <Header />
      </WrapperFull>

      <Wrapper mt={100}>
        <Card
          radius={20}
          withBorder
          sx={{ background: 'none', overflow: 'visible' }}
          mr="xl"
        >
          <Box sx={{ position: 'absolute', top: 40, right: -28 }}>
            <Btn
              click={() => handleWish(liked!)}
              icon={
                liked ? (
                  <HeartFilledIcon width={22} color="red" />
                ) : (
                  <HeartIcon width={22} />
                )
              }
              cl={classes.secondaryColor}
            />
            <Space h={16} />
            <Btn
              click={copy}
              icon={<ClipboardIcon width={20} />}
              cl={classes.secondaryColor}
            />
            <Space h={16} />
            <Btn icon={<ShareIcon width={20} />} cl={classes.secondaryColor} />
          </Box>
          <Grid>
            <Grid.Col span={11} xs={7} sm={5}>
              <AspectRatio ratio={4 / 5.2}>
                <Card
                  radius={20}
                  p={0}
                  sx={(theme) => ({
                    background:
                      theme.colorScheme === 'light' ? theme.colors.gray[1] : '',
                  })}
                >
                  <Image
                    src={BASE_URL + '/' + data?.image}
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                </Card>
              </AspectRatio>
            </Grid.Col>
            <Grid.Col span={12} sm={7}>
              <Box className={cls.box}>
                <Text
                  weight={600}
                  sx={{ fontSize: 'min(40px,6vw)', lineHeight: 1.2 }}
                >
                  {data?.name}
                </Text>
                <Text
                  className={classes.secondaryColor}
                  mt={15}
                  mb={32}
                  weight={400}
                  size={16}
                >
                  {data?.description}
                </Text>
                <Group>
                  <Creator
                    cl={classes.secondaryColor}
                    src={BASE_URL + '/' + data?.creator.avatar}
                    title="creator"
                    name={data?.creator.name || ''}
                  />
                  <Creator
                    cl={classes.secondaryColor}
                    title="collection"
                    name={data?.collection.name || ''}
                  />
                </Group>
                <IOSCard
                  bodyW={'auto'}
                  colors={ioscolors}
                  topbar={false}
                  props={{ children: null, mt: 45, mb: 40, py: 32 }}
                >
                  <Group position="apart" align="start" mb={25}>
                    <div>
                      <Text weight={400} size={14} color="dimmed" mb={12}>
                        {expired ? 'Last' : 'Current'} price
                      </Text>
                      <Group noWrap align="baseline" spacing="sm">
                        <Text weight={600} size={55} sx={{ lineHeight: 1 }}>
                          {data?.price}
                        </Text>
                        <Text weight={600} size={24}>
                          ETH
                        </Text>
                      </Group>
                    </div>
                    <div>
                      <Text weight={400} size={14} color="dimmed" mb={10}>
                        Time left
                      </Text>
                      <Text weight={600} size={24}>
                        <Countdown
                          time_left={data?.time_left}
                          setIsExpired={setIsExpired}
                        />
                      </Text>
                      <Text weight={400} size={14} color="dimmed">
                        ({data?.time_left})
                      </Text>
                    </div>
                  </Group>
                  <Button
                    mt={25}
                    fullWidth
                    loading={loading}
                    onClick={() => bid()}
                    color={!token ? 'red' : expired ? 'darkish.1' : 'indigo'}
                    leftIcon={
                      !token ? (
                        <LockClosedIcon width={20} />
                      ) : expired ? (
                        <NoSymbolIcon width={22} />
                      ) : null
                    }
                  >
                    {!token
                      ? 'Login to bid'
                      : expired
                      ? 'Not available'
                      : 'Place a bid'}
                  </Button>
                </IOSCard>
                <Text weight={400} size={14} className={classes.secondaryColor}>
                  History of bids ({data?.history.total} people are bidding)
                </Text>
                {data?.history?.total! > 0 && (
                  <LineChartHistory history={data?.history?.data} />
                )}
              </Box>
            </Grid.Col>
          </Grid>
        </Card>
      </Wrapper>
      <Filter />
      <Space h={70} />
      <MyFooter />
    </div>
  )
}

const Creator = ({
  title,
  name = '',
  src,
  cl,
}: {
  title: string
  name: string
  src?: string
  cl: string
}) => {
  return (
    <Group noWrap align="center">
      <Avatar src={src} size={40} radius="xl">
        {name.charAt(0).toUpperCase()}
      </Avatar>
      <div>
        <Text
          weight={400}
          size={14}
          transform="capitalize"
          sx={{ lineHeight: 1.2 }}
          className={cl}
        >
          {title}
        </Text>
        <Text weight={600} size={13} sx={{ lineHeight: 1.2 }}>
          @{name}
        </Text>
      </div>
    </Group>
  )
}

const Btn = ({
  click,
  icon,
  cl,
}: {
  click?: () => void
  icon: React.ReactNode
  cl: string
}) => {
  return (
    <Card
      withBorder
      radius="xl"
      p={0}
      sx={(theme) => ({
        width: 'min-content',
        height: 'min-content',
        background:
          theme.colorScheme === 'dark' ? theme.colors.darkish[0] : theme.white,
      })}
    >
      <ActionIcon
        className={cl}
        variant="subtle"
        size={56}
        radius="xl"
        onClick={click}
      >
        {icon}
      </ActionIcon>
    </Card>
  )
}
export default NftDetails

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = (await requests.assets.slugs()).map((slug) => ({
//     params: slug,
//   }))
//   return {
//     paths,
//     fallback: 'blocking',
//   }
// }
// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const carSlug = params?.slug
//   try {
//     const asset = await requests.assets.getOne(carSlug)

//     if (!asset?.date) {
//       throw new Error(`Failed to fetch an asset`)
//     }
//     return {
//       props: {
//         data: asset.date,
//       },
//     }
//   } catch (error) {
//     throw new Error(`Failed to fetch an asset`)
//   }
// }
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const carSlug = params?.slug

  try {
    const asset = await requests.assets.getOne(carSlug)

    return {
      props: {
        data: asset?.date,
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
