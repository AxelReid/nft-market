import { Card, CardProps, createStyles } from '@mantine/core'
import React from 'react'

const useStyles = createStyles(
  (theme, { h, w, cl }: { h: number; w: number; cl: string }) => ({
    card: {
      position: 'relative',
      width: 440,
      overflow: 'visible',
      borderTopLeftRadius: 0,
      '.topbar': {
        position: 'absolute',
        top: -h,
        left: -1,
        width: w,
        height: h,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 20,
        borderBottom: 0,
        background: cl,
        display: 'flex',
        alignItems: 'flex-end',
        boxSizing: 'border-box',
        overflow: 'visible',
        '.dot': {
          width: 9,
          height: 9,
          marginRight: 8,
          borderRadius: '50%',
          background: theme.colors.gray[7],
        },
        '.curve': {
          position: 'absolute',
          top: -1,
          right: -5,
          width: h,
          height: h,
          background: cl,
          transform: 'skewX(45deg)',
          borderTopRightRadius: 7,
          borderLeft: 0,
          borderBottom: 0,
        },
      },
    },
  })
)

interface Props {
  children: React.ReactNode
  w?: number
  h?: number
  colors?: string[]
}

const IOSCard = (props: CardProps & Props) => {
  const { w = 170, h = 21, colors = ['#1c1d29', '#060714'], children } = props

  const { classes } = useStyles({ h, w, cl: colors[0] })

  return (
    <Card
      withBorder
      radius={20}
      p={40}
      className={classes.card}
      sx={(theme) => ({
        background: theme.fn.linearGradient(180, ...colors),
      })}
      {...props}
    >
      <Card withBorder radius={0} p={0} pl="md" className="topbar">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <Card className="curve" p={0} withBorder radius={0}>
          {''}
        </Card>
      </Card>
      {children}
    </Card>
  )
}

export default IOSCard
