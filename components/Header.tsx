import { Anchor, Button, Group, useMantineColorScheme } from '@mantine/core'
import Link from 'next/link'
import React from 'react'
import useTxtStyles from 'styles/useTxtStyles'
import Logo from './Logo'

const Header = () => {
  const { classes } = useTxtStyles()
  const { toggleColorScheme } = useMantineColorScheme()

  return (
    <Group py={30} position="apart" align="center">
      <Logo />
      <Group spacing={60} position="apart">
        <Link href="/" passHref>
          <Anchor className={classes.navLink} component="a">
            Auctions
          </Anchor>
        </Link>
        <Link href="/" passHref>
          <Anchor className={classes.navLink} component="a">
            Roadmap
          </Anchor>
        </Link>
        <Link href="/" passHref>
          <Anchor className={classes.navLink} component="a">
            Discover
          </Anchor>
        </Link>
        <Link href="/" passHref>
          <Anchor className={classes.navLink} component="a">
            Community
          </Anchor>
        </Link>
      </Group>
      <Group>
        <Button
          variant="outline"
          color="gray"
          onClick={() => toggleColorScheme()}
        >
          Contact
        </Button>
        <Button>My account</Button>
      </Group>
    </Group>
  )
}

export default Header
