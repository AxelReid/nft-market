import { Card, CardProps, createStyles } from '@mantine/core'
import React from 'react'

const useStyles = createStyles(
  (
    theme,
    {
      bodyW,
      h,
      w,
      cl,
      topbar,
    }: {
      bodyW: number | string
      h: number
      w: number | string
      cl: string
      topbar: boolean
    }
  ) => ({
    card: {
      position: 'relative',
      width: bodyW,
      overflow: 'visible',
      borderTopLeftRadius: topbar ? 0 : '',
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
  children?: React.ReactNode
  bodyW?: number | string
  w?: number | string
  h?: number
  colors?: string[]
  topbar?: boolean
  props?: CardProps
}

const IOSCard = (props: Props) => {
  const { topbar = true, bodyW = 440 } = props
  const { w = 170, h = 21, colors = ['#1c1d29', '#060714'], children } = props

  const { classes } = useStyles({ bodyW, w, h, cl: colors[0], topbar })

  return (
    <Card
      withBorder
      radius={20}
      p={40}
      className={classes.card}
      sx={(theme) => ({
        background: theme.fn.linearGradient(180, ...colors),
      })}
      {...props?.props}
    >
      {topbar && (
        <Card withBorder radius={0} p={0} pl="md" className="topbar">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <Card className="curve" p={0} withBorder radius={0}>
            {''}
          </Card>
        </Card>
      )}
      {children}
    </Card>
  )
}

export default IOSCard
