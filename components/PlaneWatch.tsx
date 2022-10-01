import React from 'react'
import Image from 'next/image'
import { Box, Button, Grid, Group, MediaQuery, Text } from '@mantine/core'
import Wrapper from 'containers/Wrapper'
import Sol from 'assets/Sol'
import Pul from 'assets/Pul'
import useTxtStyles from 'styles/useTxtStyles'

const PlaneWatch = () => {
  const { classes } = useTxtStyles()

  return (
    <Wrapper mb={120} mt={168}>
      <Grid align="center" gutter={40}>
        <Grid.Col span={1} sm={5} md={6}>
          <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            <div style={{ maxWidth: 684 }}>
              <Image
                src="/images/LeftImage.png"
                width={684}
                height={616}
                layout="responsive"
                objectFit="contain"
                alt=""
              />
            </div>
          </MediaQuery>
        </Grid.Col>
        <Grid.Col span={11} sm={7} md={6}>
          <Text
            color="dimmed"
            size={15}
            weight={500}
            style={{ letterSpacing: 3 }}
            mb={16}
          >
            OVERLINE
          </Text>
          <Text className={classes.title}>
            Habitant tristique
            <br />
            aliquam in vel
            <br />
            scelerisque
          </Text>
          <Text weight={400} size={16} color="dimmed" mt={32}>
            Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
            pulvinar
            <br />
            ultricies dolor feugiat aliquam commodo.
          </Text>
          <Group my={55} spacing={50}>
            <Box>
              <Sol />
              <Text weight={600} size={20} mt={10}>
                Sollicitudin sapien
              </Text>
              <Text weight={400} size={16} color="dimmed">
                Cursus fermentum
              </Text>
            </Box>
            <Box>
              <Pul />
              <Text weight={600} size={20} mt={10}>
                Pulvinar metus
              </Text>
              <Text weight={400} size={16} color="dimmed">
                Nunc sed
              </Text>
            </Box>
          </Group>
          <Group>
            <Button>Get started</Button>
            <Button variant="outline" color="gray">
              Learn more
            </Button>
          </Group>
        </Grid.Col>
      </Grid>
    </Wrapper>
  )
}

export default PlaneWatch
