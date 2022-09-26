import 'styles/globals.css'
import type { AppProps } from 'next/app'
import {
  ButtonStylesParams,
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  MantineThemeOverride,
} from '@mantine/core'
import { GetServerSidePropsContext } from 'next'
import { getCookie, setCookie } from 'cookies-next'
import { useState } from 'react'
import MyGlobalStyles from 'styles/MyGlobalStyles'

function MyApp(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme)

  const toggleColorScheme = (value: ColorScheme) => {
    const nextColorSchem = value || (colorScheme === 'dark' ? 'light' : 'dark')
    setColorScheme(nextColorSchem)
    setCookie('mantine-color-scheme', nextColorSchem, {
      maxAge: 60 * 60 * 24 * 30,
    })
  }

  const theme: MantineThemeOverride = {
    colorScheme,
    fontFamily: 'Sora, sans-serif',
    primaryColor: 'indigo',
    primaryShade: 9,
    breakpoints: {
      xs: 500,
      sm: 800,
      md: 1000,
      lg: 1200,
      xl: 1400,
    },
    colors: {
      body: ['#f5f5f5'],
      darkish: [
        '#060714',
        '#262840',
        '#7780A1',
        '#DDE0E8',
        '#F1F1F6',
        '#F2F3F6',
      ],
      bluish: ['#514CFF', '#2A27C9', '#514CFF'],
      reddish: ['#76DECC', '#EA6CBC', '#FB4539'],
    },

    defaultRadius: 'md',
    components: {
      Text: {
        defaultProps: {
          color: colorScheme === 'dark' ? 'white' : '#060714',
        },
      },
      Button: {
        defaultProps: {
          size: 'md',
          radius: '12px',
          py: 16,
          px: 24,
        },
        styles: (theme, { variant }: ButtonStylesParams) => ({
          root: {
            height: 52,
            fontSize: '16px',
            fontWeight: 600,
            ...((variant === 'default' || variant === 'outline') && {
              borderWidth: 2,
              borderColor:
                theme.colorScheme === 'dark'
                  ? theme.colors.gray[7]
                  : theme.colors.darkish[2],
            }),
          },
        }),
      },
    },
  }

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={theme}
        withCSSVariables
        withGlobalStyles
        withNormalizeCSS
      >
        <MyGlobalStyles />
        <Component {...pageProps} />
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
MyApp.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
})
export default MyApp
