import { createStyles, Text } from '@mantine/core'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

const useStyles = createStyles((theme) => ({
  card: {
    section: {
      boxShadow: '0px 25px 45px rgba(6, 7, 20, 0.25)',
      width: 89,
      height: 89,
      borderRadius: 20,
    },
    '.text': {
      color: theme.colors.darkish[2],
    },
  },
}))

interface Props {
  img: StaticImageData | string
  fixed?: boolean
  value: string
  top?: number | string
  right?: number | string
  bottom?: number | string
  left?: number | string
}

const SmCard = ({
  fixed = true,
  img,
  value,
  top,
  right,
  bottom,
  left,
}: Props) => {
  const { classes } = useStyles()

  return (
    <div
      className={classes.card}
      style={{
        ...(fixed
          ? { position: 'absolute', zIndex: -1, top, right, bottom, left }
          : {}),
      }}
    >
      <section className="shadow-xxl">
        <Image
          src={img}
          objectFit="contain"
          objectPosition="right"
          width={89}
          height={89}
          alt=""
        />
      </section>
      <Text className="text" mt={8} size={14} weight={400} align="center">
        {value}
      </Text>
    </div>
  )
}

export default SmCard
