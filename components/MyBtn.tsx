import { Button, ButtonProps, createStyles, DefaultProps } from '@mantine/core'
import React from 'react'

interface Props extends ButtonProps {}

const useStyles = createStyles((theme) => ({
  border: {
    borderWidth: 2,
    borderColor:
      theme.colorScheme === 'dark'
        ? theme.colors.gray[7]
        : theme.colors.darkish[2],
  },
}))

const MyBtn = (props: Props) => {
  const { classes, cx } = useStyles()
  const { variant } = props
  const borderly = variant === 'default' || variant === 'outline'

  return (
    <Button className={cx({ [classes.border]: borderly })} {...props}>
      {props.children}
    </Button>
  )
}

export default MyBtn
