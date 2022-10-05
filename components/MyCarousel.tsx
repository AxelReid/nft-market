import React from 'react'
import { Carousel, CarouselProps } from '@mantine/carousel'
import { CarouselSlideProps } from '@mantine/carousel/lib/CarouselSlide/CarouselSlide'
import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme, _params, getRef) => ({
  root: {
    '&:hover': {
      [`& .${getRef('controls')}`]: {
        opacity: 1,
      },
    },
  },
  controls: {
    ref: getRef('controls'),
    transition: 'opacity 150ms ease',
    opacity: 0,
  },
  control: {
    background: theme.colorScheme === 'dark' ? theme.colors.darkish[1] : '',
    color: theme.colorScheme === 'dark' ? 'white' : 'black',
    border: 0,
  },
}))

const MyCarousel = (props: CarouselProps) => {
  const { classes } = useStyles()
  return (
    <Carousel
      classNames={classes}
      slideSize={400}
      slideGap={20}
      loop
      controlSize={60}
      {...props}
    >
      {props?.children}
    </Carousel>
  )
}
export const MyCarouselSlide = (props: CarouselSlideProps) => (
  <Carousel.Slide size={400} {...props}>
    {props?.children}
  </Carousel.Slide>
)
export default MyCarousel
