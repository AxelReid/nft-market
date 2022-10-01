import {
  AspectRatio,
  Avatar,
  Badge,
  Box,
  Card,
  Col,
  createStyles,
  Divider,
  Grid,
  Group,
  Text,
  useMantineColorScheme,
} from '@mantine/core'
import Image from 'next/image'
import React, { useState } from 'react'
import TimerIcon from './TimerIcon'
import { HeartIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconFilled } from '@heroicons/react/24/solid'
import Link from 'next/link'

const useStyles = createStyles((theme, _, getRef) => ({
  img: {
    transition: '.3s',
    cursor: 'pointer',
  },
  hoverImg: {
    transform: 'scale(1.1)',
    filter: 'brightness(1.1)',
  },
  hoverLink: {
    textDecoration: 'underline',
    textDecorationThickness: 1,
    color: theme.colors.indigo[theme.colorScheme === 'dark' ? 3 : 5],
  },
}))

interface Props {
  name: string
  price: string
  image: string
  time_left: string
  liked: boolean
  likes: number
  biddings: { name: string; avatar?: string }[]
  truncate?: boolean
  card_type?: 'big' | 'middle' | 'small'
}

const MyCard = ({
  liked,
  likes,
  name,
  image,
  price,
  time_left,
  biddings,
  truncate,
  card_type = 'big',
}: Props) => {
  const { colorScheme } = useMantineColorScheme()
  const { classes, cx } = useStyles()
  const [isHover, setIsHover] = useState(false)

  const Price = () => (
    <Badge
      variant="light"
      size="xl"
      radius={6}
      style={{ width: 'fit-content' }}
    >
      {price}
    </Badge>
  )

  return (
    <Card
      p={card_type === 'big' ? 'lg' : card_type === 'small' ? 0 : 'xs'}
      withBorder={colorScheme === 'dark' && card_type === 'big'}
      radius={20}
      style={{
        background: 'transparent',
        ...(card_type === 'small'
          ? { display: 'flex', alignItems: 'center' }
          : {}),
      }}
    >
      <AspectRatio
        ratio={
          card_type === 'big'
            ? 4 / 5.2
            : card_type === 'middle'
            ? 2.1 / 3.5
            : 1 / 1
        }
        sx={{
          width: card_type === 'small' ? 250 : '100%',
          borderRadius: 20,
        }}
      >
        <div style={{ borderRadius: 20 }}>
          <Image
            src={image}
            layout="fill"
            alt=""
            id="image"
            className={cx(classes.img, { [classes.hoverImg]: !!isHover })}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          />
        </div>
      </AspectRatio>
      <Box
        mt={card_type !== 'small' ? 'xl' : 0}
        ml={card_type === 'small' ? 'sm' : 0}
      >
        <Grid>
          <Col span="auto">
            <Link href="/" passHref>
              <Text
                id="titleLink"
                component="a"
                size={20}
                weight={600}
                style={{ lineHeight: '25px' }}
                className={cx({ [classes.hoverLink]: !!isHover })}
                lineClamp={truncate ? 2 : 0}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
              >
                {name}
              </Text>
            </Link>
          </Col>
          {card_type === 'big' && (
            <Col span="content">
              <Price />
            </Col>
          )}
        </Grid>
        <Group
          my={card_type === 'small' ? 5 : 24}
          spacing="sm"
          align="center"
          position="apart"
        >
          <Group spacing="sm">
            <TimerIcon width={18} />
            <Text weight={400} size={14} mt={5}>
              {time_left} {card_type !== 'small' && 'mins left'}
            </Text>
          </Group>
          {card_type !== 'big' && <Price />}
        </Group>
        {card_type !== 'small' && <Divider />}
        <Group pt={card_type === 'small' ? 5 : 'md'} position="apart">
          <Group align="center">
            {card_type === 'big' && (
              <Avatar.Group spacing="sm">
                {biddings?.map((bidding, i) => (
                  <Avatar
                    key={i}
                    src={bidding.avatar}
                    radius="xl"
                    alt={bidding.name}
                  >
                    {bidding?.name?.charAt(0)}
                  </Avatar>
                ))}
              </Avatar.Group>
            )}
            {biddings?.length > 0 && (
              <Text weight={400} size={14} color="dimmed">
                {biddings.length}{' '}
                {biddings.length > 1 ? 'people are' : 'person is'} bidding
              </Text>
            )}
          </Group>
          <Group align="center" spacing={8}>
            {liked ? (
              <HeartIconFilled width={19} color="red" />
            ) : (
              <HeartIcon width={19} />
            )}
            {card_type === 'big' && (
              <Text weight={400} size={14} mt={3} color="dimmed">
                {likes}
              </Text>
            )}
          </Group>
        </Group>
      </Box>
    </Card>
  )
}

export default MyCard
