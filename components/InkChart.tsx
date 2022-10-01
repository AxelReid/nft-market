import React from 'react'
import Image from 'next/image'
import { Button, Grid, Group, MediaQuery, Text } from '@mantine/core'
import Wrapper from 'containers/Wrapper'

const InkChart = () => {
  return (
    <Wrapper my={120}>
      <Grid align="center">
        <Grid.Col span={11} sm={6} md={7}>
          <Text
            color="dimmed"
            size={15}
            weight={500}
            style={{ letterSpacing: 3 }}
            mb={16}
          >
            OVERLINE
          </Text>
          <Text weight={600} sx={{ lineHeight: 1, fontSize: 'min(64px,10vw)' }}>
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
        </Grid.Col>
        <Grid.Col span={1} sm={6} md={5}>
          <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            <div>
              <Image
                src="/images/RightImage.png"
                width={684}
                height={616}
                layout="responsive"
                objectFit="contain"
                alt=""
              />
            </div>
          </MediaQuery>
        </Grid.Col>
      </Grid>
    </Wrapper>
  )
}

export default InkChart
