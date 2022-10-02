import {
  Bars3CenterLeftIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/24/outline'
import {
  Anchor,
  Button,
  Group,
  MediaQuery,
  Menu,
  useMantineColorScheme,
} from '@mantine/core'
import { NextLink } from '@mantine/next'
import Link from 'next/link'
import React from 'react'
import useTxtStyles from 'styles/useTxtStyles'
import Logo from './Logo'

const links = [
  {
    title: 'Auctions',
    href: '/',
  },
  {
    title: 'Roadmap',
    href: '/',
  },
  {
    title: 'Discover',
    href: '/',
  },
  {
    title: 'Community',
    href: '/',
  },
]

const Header = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  return (
    <Group py={30} position="apart" align="center">
      <Group align="center" spacing="xl">
        <MediaQuery largerThan="lg" styles={{ display: 'none' }}>
          <Menu
            width={170}
            shadow="lg"
            trigger="hover"
            openDelay={100}
            closeDelay={400}
            withArrow
            position="bottom-start"
            offset={10}
          >
            <Menu.Target>
              <Bars3CenterLeftIcon width={35} />
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Label>Menu</Menu.Label>
              <Links type="menu" />
            </Menu.Dropdown>
          </Menu>
        </MediaQuery>
        <Logo />
      </Group>
      <MediaQuery smallerThan="lg" styles={{ display: 'none' }}>
        <Group spacing={60} position="apart">
          <Links />
        </Group>
      </MediaQuery>
      <Group>
        <Button
          variant="light"
          py={0}
          px={12}
          onClick={() => toggleColorScheme()}
          color="indigo"
        >
          {colorScheme === 'dark' ? (
            <SunIcon width={27} />
          ) : (
            <MoonIcon width={25} />
          )}
        </Button>
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Button variant="outline" color="gray">
            Contact
          </Button>
        </MediaQuery>
        <MediaQuery smallerThan={565} styles={{ display: 'none' }}>
          <div>
            <Link href="/dashboard" passHref>
              <Button component="a">My account</Button>
            </Link>
          </div>
        </MediaQuery>
      </Group>
    </Group>
  )
}

const Links = ({ type = 'nav' }: { type?: 'nav' | 'menu' }) => {
  const { classes } = useTxtStyles()

  return (
    <>
      {links.map((link, i) =>
        type === 'nav' ? (
          <Link key={i} href={link.href} passHref>
            <Anchor className={classes.navLink} component="a">
              {link.title}
            </Anchor>
          </Link>
        ) : (
          <Menu.Item
            key={i}
            component={NextLink}
            href={link.href}
            className={classes.navLink}
          >
            {link.title}
          </Menu.Item>
        )
      )}
      {type === 'menu' && (
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Menu.Item
            key="contact"
            component={NextLink}
            href="/"
            className={classes.navLink}
          >
            Contact
          </Menu.Item>
        </MediaQuery>
      )}
      {type === 'menu' && (
        <MediaQuery largerThan={565} styles={{ display: 'none' }}>
          <Menu.Item
            key="my-account"
            component={NextLink}
            href="/dashboard"
            className={classes.navLink}
          >
            My account
          </Menu.Item>
        </MediaQuery>
      )}
    </>
  )
}
export default Header
