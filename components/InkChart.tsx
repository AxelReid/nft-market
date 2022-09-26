import React from 'react'
import Image from 'next/image'
import { Box, Button, Group, Text } from '@mantine/core'
import Wrapper from 'containers/Wrapper'

const InkChart = () => {
  return (
    <Wrapper my={120}>
      <Group grow position="apart" align="center">
        <Box>
          <Text
            color="dimmed"
            size={15}
            weight={500}
            style={{ letterSpacing: 3 }}
            mb={16}
          >
            OVERLINE
          </Text>
          <Text weight={600} size={64} sx={{ lineHeight: 1 }}>
            Sapien ipsum
            <br />
            scelerisque
            <br />
            convallis fusce
          </Text>
          <Text weight={400} size={16} color="dimmed" mt={32}>
            Ut amet vulputate faucibus vitae semper eget auctor. Diam
            <br />
            tempor pulvinar ultricies dolor feugiat aliquam commodo.
          </Text>
          <Group mt={48}>
            <Button>Get started</Button>
            <Button variant="default" color="gray">
              Learn more
            </Button>
          </Group>
        </Box>
        <Image
          src="/images/RightImage.png"
          width={684}
          height={616}
          layout="responsive"
          objectFit="contain"
          alt=""
        />
      </Group>
    </Wrapper>
  )
}

export default InkChart
