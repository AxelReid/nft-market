import { Container, DefaultProps } from '@mantine/core'
import React from 'react'

interface Props extends DefaultProps {
  children: React.ReactNode
}

const Wrapper = (props: Props) => {
  return (
    <Container {...props} size="xl" px="lg" style={{ position: 'relative' }}>
      {props.children}
    </Container>
  )
}

export default Wrapper
