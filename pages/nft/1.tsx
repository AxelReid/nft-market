import React from 'react'
import Image from 'next/image'
import {
  HeartIcon,
  ClipboardIcon,
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
import Filter from 'components/Filter'
import Header from 'components/Header'
import MyFooter from 'components/MyFooter'
import useTxtStyles from 'styles/useTxtStyles'
import IOSCard from 'components/IOSCard'
import LineChartHistory from 'components/LineChartHistory'

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

const NftDetails = () => {
  const { classes } = useTxtStyles()
  const { classes: cls } = useStyles()
  const { colorScheme } = useMantineColorScheme()
  const ioscolors = colorScheme === 'light' ? ['#F2F3F6', '#F2F3F6'] : undefined

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
              icon={<HeartFilledIcon width={22} color="red" />}
              cl={classes.secondaryColor}
            />
            <Space h={16} />
            <Btn
              icon={<ClipboardIcon width={20} />}
              cl={classes.secondaryColor}
            />
            <Space h={16} />
            <Btn icon={<ShareIcon width={20} />} cl={classes.secondaryColor} />
          </Box>
          <Grid>
            <Grid.Col span={11} xs={7} sm={5}>
              <AspectRatio
                ratio={4 / 5.2}
                sx={{ borderRadius: 20, overflow: 'hidden' }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
                  layout="fill"
                  alt=""
                />
              </AspectRatio>
            </Grid.Col>
            <Grid.Col span={12} sm={7}>
              <Box className={cls.box}>
                <Text
                  weight={600}
                  sx={{ fontSize: 'min(40px,6vw)', lineHeight: 1.2 }}
                >
                  Dui accumsan leo vestibulum ornare
                </Text>
                <Text
                  className={classes.secondaryColor}
                  mt={15}
                  mb={32}
                  weight={400}
                  size={16}
                >
                  Ut amet vulputate faucibus vitae semper eget auctor. Diam
                  tempor pulvinar ultricies dolor feugiat aliquam commodo.
                </Text>
                <Group>
                  <Creator
                    cl={classes.secondaryColor}
                    title="creator"
                    name="asilbek"
                  />
                  <Creator
                    cl={classes.secondaryColor}
                    title="collection"
                    name="nothing"
                  />
                </Group>
                <IOSCard
                  bodyW={'auto'}
                  mt={45}
                  mb={40}
                  py={32}
                  colors={ioscolors}
                  topbar={false}
                >
                  <Group position="apart" align="start" mb={25}>
                    <div>
                      <Text weight={400} size={14} color="dimmed" mb={12}>
                        Current price
                      </Text>
                      <Group noWrap align="baseline" spacing="sm">
                        <Text weight={600} size={55} sx={{ lineHeight: 1 }}>
                          5.25
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
                        22:59 min
                      </Text>
                      <Text weight={400} size={14} color="dimmed">
                        (01.01.2022 - 01:40:47)
                      </Text>
                    </div>
                  </Group>
                  <Button mt={25} fullWidth>
                    Place a bid
                  </Button>
                </IOSCard>
                <Box mt={40}></Box>
                <Text weight={400} size={14} className={classes.secondaryColor}>
                  History of bids (12 people are bidding)
                </Text>
                <LineChartHistory />
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
