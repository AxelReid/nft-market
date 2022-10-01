import { Container, DefaultProps } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import React from 'react'

interface Props extends DefaultProps {
  children: React.ReactNode
  noEdge?: boolean
}

const WrapperFull = (props: Props) => {
  const isXxl = useMediaQuery('(min-width:1930px)')
  const px = !isXxl && props.noEdge ? 0 : 'lg'

  return (
    <Container size={1920} px={px} style={{ position: 'relative' }} {...props}>
      {props.children}
    </Container>
  )
}

export default WrapperFull
