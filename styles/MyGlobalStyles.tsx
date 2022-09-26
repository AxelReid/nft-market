import { Global } from '@mantine/core'

const MyGlobalStyles = () => {
  return (
    <Global
      styles={(theme) => ({
        body: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.darkish[0]
              : theme.white,
        },
      })}
    />
  )
}
export default MyGlobalStyles
