import React from 'react'
import Header from 'components/Header'
import MyFooter from 'components/MyFooter'
import WrapperFull from 'containers/WrapperFull'
import Wrapper from 'containers/Wrapper'
import {
  Button,
  NumberInput,
  Select,
  Stack,
  Textarea,
  TextInput,
} from '@mantine/core'
import {
  ArchiveBoxIcon,
  HeartIcon,
  PlusIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import Profile from 'components/dashboard/Profile'
import MyAssets from 'components/dashboard/MyAssets'
import MyBiddings from 'components/dashboard/MyBiddings'
import MyWishlist from 'components/dashboard/MyWishlist'

const Dashboard = () => {
  return (
    <div>
      <WrapperFull>
        <Header />
      </WrapperFull>
      <Wrapper>
        <Profile />
        <Stack spacing={100} mt={100}>
          <MyWishlist />
          <MyBiddings />
          <MyAssets />
        </Stack>
      </Wrapper>
      <MyFooter />
    </div>
  )
}
export default Dashboard
