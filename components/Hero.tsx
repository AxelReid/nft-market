import React from 'react'
import Image from 'next/image'
import {
  ActionIcon,
  createStyles,
  Divider,
  Group,
  Input,
  Paper,
  Select,
  Stack,
  Text,
} from '@mantine/core'
import Vector from 'assets/Vector.svg'
import Frame from 'assets/Frame.svg'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Logos from './Logos'
import SmCard from './SmCard'

import Img from 'assets/cards/Image.png'
import Img1 from 'assets/cards/Image(1).png'
import Img2 from 'assets/cards/Image(2).png'
import Img3 from 'assets/cards/Image(3).png'
import Img4 from 'assets/cards/Image(4).png'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { useMediaQuery } from '@mantine/hooks'
import { useForm } from '@mantine/form'
import { collections } from 'data/static'
import { useRouter } from 'next/router'

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 'clamp(45px,12.3vw,120px)',
    lineHeight: '80%',
  },
  removeStyle: {
    border: 0,
    background: 'transparent',
  },
  select: {
    color: theme.colors.darkish[1],
  },
}))

const Hero = ({ scroll }: { scroll: () => void }) => {
  const router = useRouter()
  const { pathname, query } = router
  const { classes, cx } = useStyles()
  const mdSc = useMediaQuery('(max-width: 800px)')

  const form = useForm({
    initialValues: {
      search: '',
      collection: '',
    },
  })

  const submit = (values: { search: string; collection: string }) => {
    router.push({
      pathname: '/filter',
      query: values,
    })
  }

  return (
    <Stack align="center" mt={180} mb={200}>
      <SmCard img={Img} value="2.55 ETH" top="30%" right="9%" />
      <SmCard img={Img1} value="2.55 ETH" top="60%" right="4%" />
      <SmCard img={Img2} value="2.55 ETH" top="80%" right="19%" />
      <SmCard img={Img3} value="2.55 ETH" top="37%" left="7%" />
      <SmCard img={Img4} value="2.55 ETH" top="70%" left="18%" />
      <SmCard img={Img1} value="2.55 ETH" top="80%" left={-45} />

      <Text
        color="dimmed"
        size={15}
        weight={500}
        mb={30}
        style={{ letterSpacing: 3 }}
      >
        NON FUNGIBLE TOKENS
      </Text>
      <Group noWrap align="center" mr={'8%'}>
        <Text weight={600} className={classes.title}>
          A new NFT
        </Text>
        <Image
          src={Vector}
          width={mdSc ? 22 : 36}
          height={mdSc ? 50 : 86}
          objectFit="contain"
          alt=""
        />
      </Group>
      <Group noWrap ml={'8%'}>
        <Image src={Frame} width={62} height={62} objectFit="contain" alt="" />
        <Text weight={600} className={classes.title}>
          Experience
        </Text>
      </Group>
      <Text color="dimmed" weight={400} size={24} mt={32}>
        Discover, collect and sell
      </Text>
      <Paper
        className="shadow-xxl"
        p={mdSc ? 'sm' : 'lg'}
        mt={35}
        mx="md"
        radius={mdSc ? 'lg' : 'lg'}
        style={{ width: '100%', maxWidth: 643, background: 'white' }}
      >
        <form onSubmit={form.onSubmit(submit)}>
          <Group noWrap spacing={0} align="center">
            <Input
              placeholder="Items, collections and creators"
              style={{ flex: 'auto' }}
              classNames={{ input: cx(classes.removeStyle, classes.select) }}
              {...form.getInputProps('search')}
            />
            <Divider
              orientation="vertical"
              my={5}
              mx={mdSc ? 0 : 'sm'}
              color="#ccc"
            />
            <Select
              placeholder="Category"
              mr="lg"
              data={collections}
              classNames={{
                input: cx(classes.removeStyle, classes.select),
                rightSection: classes.select,
              }}
              style={{ width: 200 }}
              rightSection={<ChevronDownIcon width={15} />}
              {...form.getInputProps('collection')}
            />
            <ActionIcon type="submit" size="xl" radius="xl" color="indigo.6">
              <MagnifyingGlassIcon width={24} />
            </ActionIcon>
          </Group>
        </form>
      </Paper>
      <Logos mt={150} sx={{ width: '100%', maxWidth: 'fit-content' }} />
    </Stack>
  )
}

export default Hero
