import {
  ActionIcon,
  Anchor,
  Box,
  Button,
  Card,
  Grid,
  Group,
  Input,
  Paper,
  Stack,
  Text,
} from '@mantine/core'
import Wrapper from 'containers/Wrapper'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import useTxtStyles from 'styles/useTxtStyles'
import Logo from './Logo'
import SocialMediaIcons from 'assets/SocialMediaIcons.png'

const MyFooter = () => {
  const { classes: txtClss } = useTxtStyles()

  return (
    <Wrapper my={70}>
      <Card p={0} withBorder radius={20} sx={{ background: 'none' }}>
        <Grid grow align="stretch">
          <Grid.Col span={6} lg={4}>
            <Stack p={47} justify="space-between" sx={{ height: '100%' }}>
              <Logo />
              <Group position="apart">
                <Link href="/" passHref>
                  <Anchor className={txtClss.navLink} component="a">
                    Support
                  </Anchor>
                </Link>
                <Link href="/" passHref>
                  <Anchor className={txtClss.navLink} component="a">
                    Term of service
                  </Anchor>
                </Link>
                <Link href="/" passHref>
                  <Anchor className={txtClss.navLink} component="a">
                    License
                  </Anchor>
                </Link>
              </Group>
            </Stack>
          </Grid.Col>
          <Grid.Col span={6} lg={4}>
            <Stack p={47} justify="space-between" sx={{ height: '100%' }}>
              <Box>
                <Stack>
                  {['Auctions', 'Roadmap', 'Discover', 'Community'].map(
                    (item) => (
                      <Text weight={600} size={16} key={item}>
                        {item}
                      </Text>
                    )
                  )}
                </Stack>
                <Link href="/dashboard" passHref>
                  <Button component="a" mt={40} mb={69}>
                    My account
                  </Button>
                </Link>
              </Box>
              <Image
                src={SocialMediaIcons}
                objectFit="contain"
                objectPosition="left"
                width={200}
                height={20}
                alt=""
              />
            </Stack>
          </Grid.Col>
          <Grid.Col span={6} lg={4}>
            <Stack p={47} justify="space-between" sx={{ height: '100%' }}>
              <Text weight={400} size={16} color="dimmed">
                Nibh volutpat, aliquam id sagittis elementum. Pellentesque
                laoreet velit, sed egestas in. Id nam semper dolor tellus
                vulputate eget turpis.
              </Text>
              <Paper
                shadow="0px 25px 75px rgba(6, 7, 20, 0.1)"
                radius={16}
                py={7}
                px="xs"
                sx={{ background: 'white' }}
              >
                <Group noWrap sx={{ width: '100%' }} spacing={0}>
                  <Input
                    placeholder="Newsletter"
                    style={{ flex: 'auto' }}
                    styles={{ input: { border: 0, background: 'none' } }}
                  />
                  <ActionIcon
                    sx={{ minWidth: 80 }}
                    variant="transparent"
                    color="indigo.6"
                  >
                    Sign in
                  </ActionIcon>
                </Group>
              </Paper>
            </Stack>
          </Grid.Col>
        </Grid>
      </Card>
    </Wrapper>
  )
}

export default MyFooter
