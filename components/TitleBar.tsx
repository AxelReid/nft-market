import { Divider, Text } from '@mantine/core'
import React from 'react'

const TitleBar = ({ title, desc }: { title: string; desc?: string }) => {
  return (
    <div>
      <Text size="lg" weight={600}>
        {title}
      </Text>
      {desc && (
        <Text mb="xs" color="darkish.2" size="sm">
          {desc}
        </Text>
      )}
      <Divider mb="lg" />
    </div>
  )
}

export default TitleBar
