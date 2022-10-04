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
import { useTimer } from 'react-timer-hook'
import timeFormatter from 'utils/timeFormatter'
import useMyTimer from 'utils/timeFormatter'
import { Asset } from 'types/data'

const useStyles = createStyles((theme, _, getRef) => ({
  img: {
    transition: '.3s',
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

interface Props extends Asset {
  truncate?: boolean
  card_type?: 'big' | 'middle' | 'small'
}

const MyCard = ({
  slug,
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
  const { result, expired } = useMyTimer(time_left)

  const Price = () => (
    <Badge
      variant="light"
      size="xl"
      radius={6}
      style={{ width: 'fit-content' }}
    >
      {price} ETH
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
        sx={{ width: card_type === 'small' ? 250 : '100%' }}
      >
        <Card
          p={0}
          radius={20}
          sx={(theme) => ({
            background:
              theme.colorScheme === 'light' ? theme.colors.gray[1] : '',
          })}
        >
          <Link href={'/nft/' + slug}>
            <a>
              <Image
                src={image || ''}
                layout="fill"
                alt=""
                objectFit="cover"
                className={cx(classes.img, { [classes.hoverImg]: !!isHover })}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
              />
            </a>
          </Link>
        </Card>
      </AspectRatio>
      <Box
        mt={card_type !== 'small' ? 'xl' : 0}
        ml={card_type === 'small' ? 'sm' : 0}
      >
        <Grid>
          <Col span="auto">
            <Link href={'/nft/' + slug} passHref>
              <Text
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
          {card_type === 'big' && !expired && (
            <Col span="content">
              <Price />
            </Col>
          )}
        </Grid>
        {!expired && (
          <Group
            mt={card_type === 'small' ? 5 : 24}
            mb={card_type === 'small' ? 5 : 24}
            spacing="sm"
            align="center"
            position="apart"
          >
            <Group spacing="sm">
              <TimerIcon width={18} />
              <Text weight={400} size={14} mt={5}>
                {result}{' '}
                {card_type === 'big'
                  ? 'mins left'
                  : card_type === 'middle'
                  ? 'left'
                  : ''}
              </Text>
            </Group>
            {card_type !== 'big' && <Price />}
          </Group>
        )}
        {card_type !== 'small' && <Divider mt={10} />}
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
            <Text weight={400} size={14} color="dimmed">
              {biddings?.length > 0 ? (
                <>
                  {biddings.length}{' '}
                  {biddings.length > 1 ? 'people are' : 'person is'} bidding
                </>
              ) : (
                'No biddings yet'
              )}
            </Text>
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
