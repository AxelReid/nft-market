import { createStyles, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

const useStyles = createStyles((theme, { smSc }: { smSc: boolean }) => ({
  card: {
    section: {
      boxShadow: '0px 25px 45px rgba(6, 7, 20, 0.25)',
      width: smSc ? 70 : 89,
      height: smSc ? 70 : 89,
      borderRadius: smSc ? 10 : 20,
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

const SmCard = (props: Props) => {
  const { fixed = true, img, value, top, right, bottom, left } = props
  const smSc = useMediaQuery('(max-width: 800px)')
  const { classes } = useStyles({ smSc })

  return (
    <div
      className={classes.card}
      style={{
        ...(fixed
          ? {
              position: 'absolute',
              zIndex: -1,
              top,
              right,
              bottom,
              left,
              opacity: smSc ? 0.5 : 1,
            }
          : { display: 'flex', flexDirection: 'column', alignItems: 'center' }),
      }}
    >
      <section style={{ borderRadius: smSc ? 15 : 20, overflow: 'hidden' }}>
        <Image
          src={img}
          objectFit="cover"
          objectPosition="right"
          width={smSc ? 70 : 89}
          height={smSc ? 70 : 89}
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
