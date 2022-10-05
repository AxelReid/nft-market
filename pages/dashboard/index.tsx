import dynamic from 'next/dynamic'
import React from 'react'
import Header from 'components/Header'
import MyFooter from 'components/MyFooter'
import WrapperFull from 'containers/WrapperFull'
import Wrapper from 'containers/Wrapper'
import { Stack } from '@mantine/core'
import Profile from 'components/dashboard/Profile'

const MyAssets = dynamic(() => import('components/dashboard/MyAssets'))
const MyBiddings = dynamic(() => import('components/dashboard/MyBiddings'))
const MyWishlist = dynamic(() => import('components/dashboard/MyWishlist'))

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
