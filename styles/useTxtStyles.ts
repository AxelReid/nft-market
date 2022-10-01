import { createStyles } from '@mantine/core'

const useTxtStyles = createStyles((theme) => ({
  navLink: {
    fontSize: 16,
    fontWeight: 600,
    color: theme.colors.darkish[2],
    '&:hover': {
      color: theme.colors.gray[theme.colorScheme === 'dark' ? 5 : 9],
    },
  },
  title: {
    lineHeight: 1.1,
    fontSize: 'min(64px,10vw)',
    fontWeight: 600,
  },
  secondaryColor: {
    color: theme.colors.darkish[2],
  },
}))
export default useTxtStyles
